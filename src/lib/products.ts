export type Gender = "men" | "women" | "unisex";
export type Category = "tops" | "bottoms" | "outerwear" | "dresses" | "shoes" | "accessories";

export interface Product {
  id: number | string;
  name: string;
  price: number;
  imageUrl: string;
  colorName: string;
  colorHex: string;
  category: Category;
  styleTags: string[];
  undertones: ("Warm" | "Cool" | "Neutral")[];
  gender: Gender;
  brand?: string;
  description?: string;
}

let cachedProducts: Product[] | null = null;

/**
 * Fetch products from the Myntra catalog (12,491 real products)
 * Caches results for performance
 */
export async function fetchProducts(): Promise<Product[]> {
  if (cachedProducts) {
    return cachedProducts;
  }

  try {
    const response = await fetch("/myntra_products.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data: Product[] = await response.json();
    cachedProducts = data;
    console.log(`✅ Loaded ${data.length} products from Myntra catalog`);
    return data;
  } catch (error) {
    console.error("Error loading products:", error);
    // Return empty array if fetch fails
    return [];
  }
}

/**
 * Get all products (with caching)
 */
export async function getAllProducts(): Promise<Product[]> {
  return fetchProducts();
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: Category): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.category === category);
}

/**
 * Get products by gender
 */
export async function getProductsByGender(gender: Gender): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.gender === gender);
}

/**
 * Get products by undertone
 */
export async function getProductsByUndertone(
  undertone: "Warm" | "Cool" | "Neutral"
): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.undertones.includes(undertone));
}

/**
 * Search products by name or brand
 */
export async function searchProducts(query: string): Promise<Product[]> {
  const products = await fetchProducts();
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q))
  );
}

/**
 * Filter products by price range
 */
export async function filterByPrice(
  minPrice: number,
  maxPrice: number
): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
}

/**
 * Get random products (useful for recommendations)
 */
export async function getRandomProducts(count: number = 10): Promise<Product[]> {
  const products = await fetchProducts();
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
