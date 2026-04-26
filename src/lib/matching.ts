import { Product } from "./products";
import { colorDistance, deltaECIEDE2000 } from "./colorUtils";

/**
 * Filter products whose color is close to any palette color.
 * Uses Delta-E CIEDE2000 with perceptually accurate threshold
 */
export function filterByColor(
  products: Product[],
  palette: string[],
  threshold = 15 // Delta-E threshold: <10 = very similar, <15 = similar, <25 = noticeable
): Product[] {
  if (palette.length === 0) return products;

  const matched = products.filter((p) => {
    // Check if product color is close to ANY palette color
    return palette.some((ph) => deltaECIEDE2000(ph, p.colorHex) < threshold);
  });

  // If no matches, relax threshold slightly
  if (matched.length === 0) {
    return products.filter((p) => {
      return palette.some((ph) => deltaECIEDE2000(ph, p.colorHex) < threshold + 10);
    });
  }

  return matched;
}

/**
 * Filter products by undertone compatibility.
 */
export function filterByUndertone(
  products: Product[],
  undertone: "Warm" | "Cool" | "Neutral"
): Product[] {
  return products.filter((p) => p.undertones.includes(undertone));
}

/**
 * Filter products by gender.
 */
export function filterByGender(
  products: Product[],
  gender: "men" | "women"
): Product[] {
  return products.filter((p) => p.gender === gender || p.gender === "unisex");
}

/**
 * Simple keyword-based search on product name + style tags.
 */
export function searchProducts(
  products: Product[],
  query: string,
  topK = 5
): Product[] {
  if (!query.trim()) return products.slice(0, topK);

  const keywords = query.toLowerCase().split(/\s+/);

  const scored = products.map((p) => {
    const text = `${p.name} ${p.styleTags} ${p.category}`.toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      if (text.includes(kw)) score++;
    }
    return { product: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((s) => s.product);
}

/**
 * Find which palette color a product is closest to
 * Returns index of best-matching palette color and distance
 */
function findClosestPaletteColor(
  productHex: string,
  palette: string[]
): { colorIndex: number; distance: number } {
  let minDistance = Infinity;
  let closestIndex = 0;

  for (let i = 0; i < palette.length; i++) {
    const distance = deltaECIEDE2000(productHex, palette[i]);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = i;
    }
  }

  return { colorIndex: closestIndex, distance: minDistance };
}

/**
 * PERMANENT FIX: Get 18 products organized by palette colors
 * 
 * Strategy:
 * 1. Filter by gender + undertone (mandatory)
 * 2. Organize products by palette colors (which palette color they match)
 * 3. Get ~3 products per palette color (6 colors × 3 = 18)
 * 4. Use Delta-E < 15 threshold, gradually expand if needed
 * 
 * This ensures:
 * - No random products (all match gender + undertone + palette)
 * - Variety across all 6 palette colors
 * - Accurate color matching
 */
export function getSmartColorRecommendations(
  products: Product[],
  undertone: "Warm" | "Cool" | "Neutral",
  gender: "men" | "women",
  palette: string[],
  targetCount = 18
): Product[] {
  if (palette.length === 0 || products.length === 0) {
    return [];
  }

  // Step 1: Mandatory filters - gender + undertone
  let baseProducts = filterByGender(products, gender);
  baseProducts = filterByUndertone(baseProducts, undertone);

  if (baseProducts.length === 0) {
    console.warn(
      `⚠️ No products found for gender=${gender}, undertone=${undertone}`
    );
    return [];
  }

  // Step 2: Organize products by palette color
  const productsByPaletteColor: { colorIndex: number; products: Product[] }[] =
    palette.map((_, i) => ({
      colorIndex: i,
      products: [],
    }));

  // Step 3: Categorize each product by closest palette color
  const thresholds = [15, 20, 25, 35]; // Progressive thresholds
  let currentThreshold = 0;

  for (const threshold of thresholds) {
    // Reset for this threshold
    for (const group of productsByPaletteColor) {
      group.products = [];
    }

    // Categorize products
    for (const product of baseProducts) {
      const { colorIndex, distance } = findClosestPaletteColor(
        product.colorHex,
        palette
      );

      // Only add if within threshold
      if (distance < threshold) {
        productsByPaletteColor[colorIndex].products.push({
          ...product,
          _colorDistance: distance, // Store for sorting
        });
      }
    }

    // Check if we have enough products
    const totalMatched = productsByPaletteColor.reduce(
      (sum, group) => sum + group.products.length,
      0
    );

    if (totalMatched >= targetCount) {
      currentThreshold = threshold;
      break;
    }
  }

  // Step 4: Sort products within each color group by distance
  for (const group of productsByPaletteColor) {
    group.products.sort((a, b) => {
      const distA = (a as any)._colorDistance || 0;
      const distB = (b as any)._colorDistance || 0;
      return distA - distB;
    });
  }

  // Step 5: Collect results - ~3 per palette color for variety
  const results: Product[] = [];
  const productsPerColor = Math.ceil(targetCount / palette.length);

  // First pass: take top N products from each color
  for (const group of productsByPaletteColor) {
    const taken = group.products.slice(0, productsPerColor);
    // Remove the temporary _colorDistance field
    for (const p of taken) {
      delete (p as any)._colorDistance;
    }
    results.push(...taken);
  }

  // If we don't have enough, take extras from colors with more products
  if (results.length < targetCount) {
    for (const group of productsByPaletteColor) {
      if (results.length >= targetCount) break;

      const extras = group.products.slice(productsPerColor);
      for (const p of extras) {
        if (results.length >= targetCount) break;
        delete (p as any)._colorDistance;
        results.push(p);
      }
    }
  }

  // If still not enough, log warning but return what we have
  if (results.length < targetCount) {
    console.warn(
      `⚠️ Only found ${results.length}/${targetCount} matching products`
    );
  }

  return results.slice(0, targetCount);
}

/**
 * Get clothes that match a specific undertone and optionally a color palette.
 * Products are scored by:
 * 1. Undertone match (must have matching undertone)
 * 2. Color palette proximity (if palette provided)
 * 3. Random tie-breaker (for diversity)
 * 
 * @deprecated Use getSmartColorRecommendations instead
 */
export function getUndertoneRecommendations(
  products: Product[],
  undertone: "Warm" | "Cool" | "Neutral",
  palette: string[] = [],
  topK = 6
): Product[] {
  let filteredProducts = filterByUndertone(products, undertone);

  if (palette.length > 0) {
    // Score by color proximity to palette
    const scored = filteredProducts.map((p) => {
      // Get minimum Delta-E distance to any palette color
      const minDist = Math.min(
        ...palette.map((ph) => deltaECIEDE2000(ph, p.colorHex))
      );

      // Add small random factor for diversity (±2 to avoid ties)
      const randomFactor = (Math.random() - 0.5) * 2;

      return { product: p, distance: minDist + randomFactor };
    });

    scored.sort((a, b) => a.distance - b.distance);
    filteredProducts = scored.map((s) => s.product);
  } else {
    // No palette: randomize for diversity
    filteredProducts = filteredProducts.sort(() => Math.random() - 0.5);
  }

  return filteredProducts.slice(0, topK);
}

/**
 * Combined: filter by color palette then rank by query.
 */
export function recommend(
  products: Product[],
  palette: string[],
  query: string,
  undertone?: "Warm" | "Cool" | "Neutral",
  topK = 5
): Product[] {
  let pool = products;

  if (undertone) {
    pool = filterByUndertone(pool, undertone);
  }

  if (palette.length > 0) {
    const colorFiltered = pool.filter((p) =>
      palette.some((ph) => colorDistance(ph, p.colorHex) < 150)
    );
    if (colorFiltered.length > 0) pool = colorFiltered;
  }

  return searchProducts(pool, query, topK);
}
