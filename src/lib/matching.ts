import { Product, PRODUCTS } from "./products";
import { colorDistance } from "./colorUtils";

/**
 * Filter products whose color is close to any palette color.
 */
export function filterByColor(
  palette: string[],
  threshold = 150
): Product[] {
  if (palette.length === 0) return PRODUCTS;

  const matched = PRODUCTS.filter((p) => {
    return palette.some((ph) => colorDistance(ph, p.colorHex) < threshold);
  });

  return matched.length > 0 ? matched : PRODUCTS;
}

/**
 * Filter products by undertone compatibility.
 */
export function filterByUndertone(
  undertone: "Warm" | "Cool" | "Neutral"
): Product[] {
  return PRODUCTS.filter((p) => p.undertones.includes(undertone));
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
 * Get clothes that match a specific undertone and optionally a color palette.
 */
export function getUndertoneRecommendations(
  undertone: "Warm" | "Cool" | "Neutral",
  palette: string[] = [],
  topK = 6
): Product[] {
  let products = filterByUndertone(undertone);

  if (palette.length > 0) {
    // Boost items closer to palette colors
    const scored = products.map((p) => {
      const minDist = Math.min(
        ...palette.map((ph) => colorDistance(ph, p.colorHex))
      );
      return { product: p, distance: minDist };
    });
    scored.sort((a, b) => a.distance - b.distance);
    products = scored.map((s) => s.product);
  }

  return products.slice(0, topK);
}

/**
 * Combined: filter by color palette then rank by query.
 */
export function recommend(
  palette: string[],
  query: string,
  undertone?: "Warm" | "Cool" | "Neutral",
  topK = 5
): Product[] {
  let pool = PRODUCTS;

  if (undertone) {
    pool = filterByUndertone(undertone);
  }

  if (palette.length > 0) {
    const colorFiltered = pool.filter((p) =>
      palette.some((ph) => colorDistance(ph, p.colorHex) < 150)
    );
    if (colorFiltered.length > 0) pool = colorFiltered;
  }

  return searchProducts(pool, query, topK);
}
