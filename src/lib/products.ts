import beigeBlazer from "@/assets/products/beige-blazer.jpg";
import redSlipDress from "@/assets/products/red-slip-dress.jpg";
import navyCoat from "@/assets/products/navy-coat.jpg";
import pinkMaxiDress from "@/assets/products/pink-maxi-dress.jpg";
import oliveHoodie from "@/assets/products/olive-hoodie.jpg";
import blueSweater from "@/assets/products/blue-sweater.jpg";
import goldSequinTop from "@/assets/products/gold-sequin-top.jpg";
import whiteTrousers from "@/assets/products/white-trousers.jpg";
import burgundyScarf from "@/assets/products/burgundy-scarf.jpg";
import brownMidiSkirt from "@/assets/products/brown-midi-skirt.jpg";
import ivoryShirt from "@/assets/products/ivory-shirt.jpg";
import blueDenimJacket from "@/assets/products/blue-denim-jacket.jpg";
import blackBoots from "@/assets/products/black-boots.jpg";
import grayPleatedDress from "@/assets/products/gray-pleated-dress.jpg";
import midnightBlazerDress from "@/assets/products/midnight-blazer-dress.jpg";
import khakiShorts from "@/assets/products/khaki-shorts.jpg";
import greenPufferVest from "@/assets/products/green-puffer-vest.jpg";
import tanCanvasTote from "@/assets/products/tan-canvas-tote.jpg";

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  colorName: string;
  colorHex: string;
  category: string;
  styleTags: string;
  undertones: ("Warm" | "Cool" | "Neutral")[];
}

export const PRODUCTS: Product[] = [
  // --- WARM UNDERTONE FAVORITES ---
  { name: "Zara Linen Blazer", price: 89.9, imageUrl: beigeBlazer, colorName: "beige", colorHex: "#E8D5B7", category: "outerwear", styleTags: "summer wedding formal elegant", undertones: ["Warm", "Neutral"] },
  { name: "Mango Floral Maxi Dress", price: 59.99, imageUrl: pinkMaxiDress, colorName: "light pink", colorHex: "#FFB6C1", category: "dresses", styleTags: "summer wedding garden party romantic", undertones: ["Warm", "Neutral"] },
  { name: "COS Knit Midi Skirt", price: 69.0, imageUrl: brownMidiSkirt, colorName: "chocolate", colorHex: "#D2691E", category: "bottoms", styleTags: "autumn office elegant warm", undertones: ["Warm"] },
  { name: "Zara Sequin Top", price: 45.9, imageUrl: goldSequinTop, colorName: "gold", colorHex: "#FFD700", category: "tops", styleTags: "party evening cocktail festive", undertones: ["Warm"] },
  { name: "H&M Oversized Hoodie", price: 29.99, imageUrl: oliveHoodie, colorName: "olive", colorHex: "#556B2F", category: "tops", styleTags: "casual streetwear weekend sporty", undertones: ["Warm", "Neutral"] },
  { name: "Massimo Dutti Silk Scarf", price: 45.0, imageUrl: burgundyScarf, colorName: "burgundy", colorHex: "#800020", category: "accessories", styleTags: "autumn elegant gift romantic", undertones: ["Warm"] },
  { name: "Mango Tailored Shorts", price: 35.99, imageUrl: khakiShorts, colorName: "khaki", colorHex: "#C3B091", category: "bottoms", styleTags: "summer casual vacation brunch", undertones: ["Warm", "Neutral"] },
  { name: "Arket Canvas Tote", price: 35.0, imageUrl: tanCanvasTote, colorName: "tan", colorHex: "#D2B48C", category: "accessories", styleTags: "casual everyday minimal sustainable", undertones: ["Warm", "Neutral"] },

  // --- COOL UNDERTONE FAVORITES ---
  { name: "H&M Satin Slip Dress", price: 34.99, imageUrl: redSlipDress, colorName: "dark red", colorHex: "#8B0000", category: "dresses", styleTags: "evening party cocktail romantic", undertones: ["Cool", "Neutral"] },
  { name: "Arket Merino Sweater", price: 79.0, imageUrl: blueSweater, colorName: "steel blue", colorHex: "#4682B4", category: "tops", styleTags: "winter casual cozy smart", undertones: ["Cool"] },
  { name: "Massimo Dutti Wool Coat", price: 199.0, imageUrl: navyCoat, colorName: "navy", colorHex: "#000080", category: "outerwear", styleTags: "winter formal office elegant", undertones: ["Cool", "Neutral"] },
  { name: "H&M Denim Jacket", price: 39.99, imageUrl: blueDenimJacket, colorName: "royal blue", colorHex: "#4169E1", category: "outerwear", styleTags: "casual spring festival weekend", undertones: ["Cool"] },
  { name: "COS Pleated Midi Dress", price: 99.0, imageUrl: grayPleatedDress, colorName: "slate gray", colorHex: "#708090", category: "dresses", styleTags: "office elegant smart autumn", undertones: ["Cool", "Neutral"] },
  { name: "Zara Wrap Blazer Dress", price: 79.9, imageUrl: midnightBlazerDress, colorName: "midnight blue", colorHex: "#191970", category: "dresses", styleTags: "office formal power elegant evening", undertones: ["Cool"] },
  { name: "H&M Puffer Vest", price: 24.99, imageUrl: greenPufferVest, colorName: "sea green", colorHex: "#2E8B57", category: "outerwear", styleTags: "autumn casual sporty outdoor", undertones: ["Cool", "Neutral"] },

  // --- NEUTRAL / UNIVERSAL ---
  { name: "Zara Wide Leg Trousers", price: 49.9, imageUrl: whiteTrousers, colorName: "white", colorHex: "#F5F5F5", category: "bottoms", styleTags: "summer casual chic brunch", undertones: ["Warm", "Cool", "Neutral"] },
  { name: "COS Draped Shirt", price: 89.0, imageUrl: ivoryShirt, colorName: "ivory", colorHex: "#FFFFF0", category: "tops", styleTags: "office minimal elegant smart", undertones: ["Warm", "Cool", "Neutral"] },
  { name: "Zara Leather Ankle Boots", price: 119.0, imageUrl: blackBoots, colorName: "black", colorHex: "#000000", category: "shoes", styleTags: "autumn winter edgy streetwear", undertones: ["Cool", "Neutral"] },
];
