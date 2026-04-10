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
  styleTags: string;
  undertones: ("Warm" | "Cool" | "Neutral")[];
  gender: Gender;
}


const ALL_PRODUCTS: Product[] = [
  {
    "id": 1,
    "name": "Relaxed Beige Sunglasses",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "accessories",
    "styleTags": "unisex accessories relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 2,
    "name": "Relaxed Black Heels",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "women shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 3,
    "name": "Classic Royal blue Sundress",
    "price": 59.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "men dresses classic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 4,
    "name": "Vintage Mustard Blazer",
    "price": 26.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 5,
    "name": "Classic Royal blue Sunglasses",
    "price": 107.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "accessories",
    "styleTags": "men accessories classic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 6,
    "name": "Essential Emerald Sweater",
    "price": 100.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "tops",
    "styleTags": "women tops essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 7,
    "name": "Premium Emerald Sweater",
    "price": 67.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "tops",
    "styleTags": "unisex tops premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 8,
    "name": "Classic Slate gray Joggers",
    "price": 26.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "men bottoms classic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 9,
    "name": "Vintage Black Oxfords",
    "price": 125.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "unisex shoes vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 10,
    "name": "Casual Emerald Blazer",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "women outerwear casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 11,
    "name": "Vintage Mustard Coat",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "unisex outerwear vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 12,
    "name": "Slim Fit Black Midi Dress",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "unisex dresses slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 13,
    "name": "Relaxed White Boots",
    "price": 91.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "shoes",
    "styleTags": "men shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 14,
    "name": "Premium Tan Trench Coat",
    "price": 26.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "unisex outerwear premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 15,
    "name": "Essential Blush pink Wrap Dress",
    "price": 86.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 16,
    "name": "Slim Fit White Watch",
    "price": 127.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "accessories",
    "styleTags": "women accessories slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 17,
    "name": "Modern Slate gray Trench Coat",
    "price": 67.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "women outerwear modern trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 18,
    "name": "Premium Emerald Skirt",
    "price": 67.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "women bottoms premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 19,
    "name": "Relaxed Beige Oxfords",
    "price": 114.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "unisex shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 20,
    "name": "Tailored Tan Hoodie",
    "price": 19.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "unisex tops tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 21,
    "name": "Tailored Tan Sunglasses",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "women accessories tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 22,
    "name": "Distressed Blush pink Coat",
    "price": 91.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "women outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 23,
    "name": "Casual Mustard Wrap Dress",
    "price": 97.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "men dresses casual trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 24,
    "name": "Essential Burgundy Sunglasses",
    "price": 125.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "men accessories essential trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 25,
    "name": "Slim Fit Navy Jeans",
    "price": 81.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "bottoms",
    "styleTags": "men bottoms slim fit trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 26,
    "name": "Slim Fit Mustard Sundress",
    "price": 45.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "women dresses slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 27,
    "name": "Classic Beige Trench Coat",
    "price": 21.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "women outerwear classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 28,
    "name": "Vintage Blush pink Tote Bag",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "accessories",
    "styleTags": "women accessories vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 29,
    "name": "Vintage Navy Beanie",
    "price": 142.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "accessories",
    "styleTags": "men accessories vintage trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 30,
    "name": "Casual Olive Sunglasses",
    "price": 38.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "women accessories casual trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 31,
    "name": "Chic Tan Beanie",
    "price": 31.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "unisex accessories chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 32,
    "name": "Essential Olive Blazer",
    "price": 96.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "outerwear",
    "styleTags": "women outerwear essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 33,
    "name": "Distressed Beige Tank Top",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "unisex tops distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 34,
    "name": "Chic Beige Coat",
    "price": 59.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "men outerwear chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 35,
    "name": "Vintage Slate gray Scarf",
    "price": 37.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "accessories",
    "styleTags": "unisex accessories vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 36,
    "name": "Tailored White Slip Dress",
    "price": 20.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "unisex dresses tailored trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 37,
    "name": "Vintage Beige Midi Dress",
    "price": 40.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "men dresses vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 38,
    "name": "Premium Blush pink Slip Dress",
    "price": 115.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "dresses",
    "styleTags": "women dresses premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 39,
    "name": "Premium Blush pink Windbreaker",
    "price": 74.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "unisex outerwear premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 40,
    "name": "Essential Tan Trousers",
    "price": 149.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "men bottoms essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 41,
    "name": "Vintage Emerald Sandals",
    "price": 29.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "shoes",
    "styleTags": "women shoes vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 42,
    "name": "Classic Burgundy Button-Down",
    "price": 38.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "unisex tops classic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 43,
    "name": "Oversized Beige Sandals",
    "price": 106.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "women shoes oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 44,
    "name": "Slim Fit White Sandals",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "shoes",
    "styleTags": "unisex shoes slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 45,
    "name": "Oversized Mustard Midi Dress",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "unisex dresses oversized trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 46,
    "name": "Chic Olive Tote Bag",
    "price": 111.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "unisex accessories chic trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 47,
    "name": "Essential Navy Wrap Dress",
    "price": 38.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "unisex dresses essential trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 48,
    "name": "Relaxed Tan Chinos",
    "price": 88.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "unisex bottoms relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 49,
    "name": "Relaxed Beige Sneakers",
    "price": 128.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "men shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 50,
    "name": "Casual Royal blue Blouse",
    "price": 80.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "men tops casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 51,
    "name": "Vintage Emerald Sundress",
    "price": 25.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "men dresses vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 52,
    "name": "Distressed Emerald Joggers",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "unisex bottoms distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 53,
    "name": "Essential Slate gray Scarf",
    "price": 48.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "accessories",
    "styleTags": "men accessories essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 54,
    "name": "Distressed Slate gray Skirt",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "men bottoms distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 55,
    "name": "Modern Mustard Jacket",
    "price": 52.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "women outerwear modern trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 56,
    "name": "Casual Slate gray Button-Down",
    "price": 116.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "tops",
    "styleTags": "unisex tops casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 57,
    "name": "Vintage Slate gray Boots",
    "price": 50.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "unisex shoes vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 58,
    "name": "Modern White Slip Dress",
    "price": 21.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "women dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 59,
    "name": "Essential Navy Trench Coat",
    "price": 21.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "unisex outerwear essential trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 60,
    "name": "Chic Royal blue T-Shirt",
    "price": 58.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "unisex tops chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 61,
    "name": "Essential Beige Maxi Dress",
    "price": 41.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "unisex dresses essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 62,
    "name": "Chic Tan Midi Dress",
    "price": 147.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "men dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 63,
    "name": "Distressed Navy Hoodie",
    "price": 20.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "women tops distressed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 64,
    "name": "Tailored Mustard Wrap Dress",
    "price": 138.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "women dresses tailored trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 65,
    "name": "Vintage Tan Jeans",
    "price": 81.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "women bottoms vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 66,
    "name": "Chic Beige Hoodie",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "men tops chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 67,
    "name": "Vintage Burgundy Trench Coat",
    "price": 37.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 68,
    "name": "Casual White Sneakers",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "shoes",
    "styleTags": "women shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 69,
    "name": "Casual Tan Hoodie",
    "price": 88.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "unisex tops casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 70,
    "name": "Modern Royal blue Belt",
    "price": 40.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "accessories",
    "styleTags": "women accessories modern trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 71,
    "name": "Chic Navy Joggers",
    "price": 92.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "bottoms",
    "styleTags": "men bottoms chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 72,
    "name": "Relaxed Navy Oxfords",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "women shoes relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 73,
    "name": "Tailored Slate gray Puffer",
    "price": 141.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "unisex outerwear tailored trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 74,
    "name": "Tailored Navy Sandals",
    "price": 139.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "men shoes tailored trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 75,
    "name": "Vintage Tan Puffer",
    "price": 46.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 76,
    "name": "Distressed Beige Trench Coat",
    "price": 29.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "unisex outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 77,
    "name": "Distressed Black Sandals",
    "price": 103.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "men shoes distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 78,
    "name": "Distressed Beige Hoodie",
    "price": 25.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "women tops distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 79,
    "name": "Premium Navy Sandals",
    "price": 83.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "women shoes premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 80,
    "name": "Distressed Blush pink Skirt",
    "price": 28.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "bottoms",
    "styleTags": "unisex bottoms distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 81,
    "name": "Modern Beige Tank Top",
    "price": 77.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "unisex tops modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 82,
    "name": "Vintage Emerald T-Shirt",
    "price": 25.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "tops",
    "styleTags": "unisex tops vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 83,
    "name": "Relaxed Beige Puffer",
    "price": 22.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "unisex outerwear relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 84,
    "name": "Essential Burgundy Chinos",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "bottoms",
    "styleTags": "women bottoms essential trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 85,
    "name": "Relaxed Tan Skirt",
    "price": 73.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "men bottoms relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 86,
    "name": "Classic Olive Oxfords",
    "price": 28.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "unisex shoes classic trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 87,
    "name": "Vintage White Blouse",
    "price": 27.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "women tops vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 88,
    "name": "Vintage White Scarf",
    "price": 73.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "accessories",
    "styleTags": "women accessories vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 89,
    "name": "Classic White Beanie",
    "price": 64.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "accessories",
    "styleTags": "women accessories classic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 90,
    "name": "Vintage Olive Sandals",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "unisex shoes vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 91,
    "name": "Modern Tan Jeans",
    "price": 51.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "unisex bottoms modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 92,
    "name": "Relaxed Royal blue Belt",
    "price": 27.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "accessories",
    "styleTags": "women accessories relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 93,
    "name": "Oversized Black Chinos",
    "price": 119.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "bottoms",
    "styleTags": "unisex bottoms oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 94,
    "name": "Chic Emerald Slip Dress",
    "price": 75.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 95,
    "name": "Relaxed Black Midi Dress",
    "price": 30.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "unisex dresses relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 96,
    "name": "Essential Emerald Slip Dress",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 97,
    "name": "Premium Slate gray Shorts",
    "price": 28.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "women bottoms premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 98,
    "name": "Distressed Burgundy Loafers",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "unisex shoes distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 99,
    "name": "Slim Fit Emerald Loafers",
    "price": 37.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "shoes",
    "styleTags": "unisex shoes slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 100,
    "name": "Modern White Midi Dress",
    "price": 65.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 101,
    "name": "Essential Royal blue Sweater",
    "price": 31.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "men tops essential trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 102,
    "name": "Classic Navy Maxi Dress",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "men dresses classic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 103,
    "name": "Relaxed Navy Puffer",
    "price": 115.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "women outerwear relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 104,
    "name": "Essential Mustard Sundress",
    "price": 84.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "men dresses essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 105,
    "name": "Chic Slate gray Joggers",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "unisex bottoms chic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 106,
    "name": "Casual Olive Button-Down",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "tops",
    "styleTags": "women tops casual trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 107,
    "name": "Relaxed Royal blue Blouse",
    "price": 42.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "unisex tops relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 108,
    "name": "Oversized Navy Oxfords",
    "price": 22.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "men shoes oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 109,
    "name": "Relaxed Royal blue Button-Down",
    "price": 30.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "women tops relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 110,
    "name": "Relaxed Navy Loafers",
    "price": 52.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "men shoes relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 111,
    "name": "Modern Burgundy Midi Dress",
    "price": 134.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "dresses",
    "styleTags": "women dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 112,
    "name": "Vintage Mustard Heels",
    "price": 108.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "shoes",
    "styleTags": "men shoes vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 113,
    "name": "Distressed Tan Trousers",
    "price": 29.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "unisex bottoms distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 114,
    "name": "Chic Blush pink Maxi Dress",
    "price": 75.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 115,
    "name": "Oversized Blush pink Scarf",
    "price": 33.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "accessories",
    "styleTags": "men accessories oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 116,
    "name": "Tailored Olive Heels",
    "price": 93.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "unisex shoes tailored trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 117,
    "name": "Slim Fit Blush pink Sneakers",
    "price": 100.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "women shoes slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 118,
    "name": "Slim Fit Olive Watch",
    "price": 141.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "men accessories slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 119,
    "name": "Premium Slate gray T-Shirt",
    "price": 97.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "tops",
    "styleTags": "unisex tops premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 120,
    "name": "Premium Emerald Shorts",
    "price": 131.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "women bottoms premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 121,
    "name": "Distressed Blush pink Watch",
    "price": 117.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "accessories",
    "styleTags": "women accessories distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 122,
    "name": "Distressed Burgundy Sundress",
    "price": 125.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "dresses",
    "styleTags": "men dresses distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 123,
    "name": "Modern Burgundy Sweater",
    "price": 65.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "women tops modern trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 124,
    "name": "Classic Emerald Wrap Dress",
    "price": 27.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "men dresses classic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 125,
    "name": "Oversized Tan Joggers",
    "price": 77.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "men bottoms oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 126,
    "name": "Vintage Mustard T-Shirt",
    "price": 22.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "men tops vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 127,
    "name": "Tailored Blush pink Oxfords",
    "price": 82.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "men shoes tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 128,
    "name": "Modern White Chinos",
    "price": 52.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "men bottoms modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 129,
    "name": "Tailored Beige Blazer",
    "price": 59.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "unisex outerwear tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 130,
    "name": "Relaxed Blush pink Sweater",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "tops",
    "styleTags": "women tops relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 131,
    "name": "Casual Emerald Blazer",
    "price": 22.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "unisex outerwear casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 132,
    "name": "Oversized Blush pink Sweater",
    "price": 39.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "tops",
    "styleTags": "unisex tops oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 133,
    "name": "Tailored Emerald Sundress",
    "price": 93.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "women dresses tailored trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 134,
    "name": "Essential Navy Tank Top",
    "price": 48.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "unisex tops essential trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 135,
    "name": "Modern Royal blue Jeans",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "bottoms",
    "styleTags": "unisex bottoms modern trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 136,
    "name": "Oversized Olive Blouse",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "tops",
    "styleTags": "women tops oversized trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 137,
    "name": "Slim Fit Tan Trench Coat",
    "price": 128.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "unisex outerwear slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 138,
    "name": "Slim Fit Burgundy Trench Coat",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "women outerwear slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 139,
    "name": "Distressed White Puffer",
    "price": 39.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "women outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 140,
    "name": "Slim Fit Emerald Midi Dress",
    "price": 140.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "unisex dresses slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 141,
    "name": "Tailored White Jacket",
    "price": 125.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "men outerwear tailored trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 142,
    "name": "Oversized White Trench Coat",
    "price": 54.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "women outerwear oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 143,
    "name": "Chic Burgundy Blouse",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "women tops chic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 144,
    "name": "Essential Olive Coat",
    "price": 140.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "outerwear",
    "styleTags": "men outerwear essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 145,
    "name": "Casual Slate gray Blazer",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "unisex outerwear casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 146,
    "name": "Relaxed Tan Shorts",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "men bottoms relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 147,
    "name": "Premium Beige T-Shirt",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "men tops premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 148,
    "name": "Distressed Slate gray Hoodie",
    "price": 103.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "tops",
    "styleTags": "women tops distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 149,
    "name": "Distressed Slate gray Blazer",
    "price": 107.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "men outerwear distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 150,
    "name": "Essential Burgundy Heels",
    "price": 83.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "men shoes essential trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 151,
    "name": "Relaxed Blush pink Windbreaker",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "women outerwear relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 152,
    "name": "Slim Fit Olive Wrap Dress",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "dresses",
    "styleTags": "unisex dresses slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 153,
    "name": "Slim Fit Royal blue Midi Dress",
    "price": 131.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "women dresses slim fit trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 154,
    "name": "Relaxed Tan Oxfords",
    "price": 125.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "shoes",
    "styleTags": "unisex shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 155,
    "name": "Slim Fit Burgundy Belt",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "unisex accessories slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 156,
    "name": "Vintage Mustard T-Shirt",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "women tops vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 157,
    "name": "Essential Navy Sundress",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 158,
    "name": "Relaxed White Trench Coat",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "unisex outerwear relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 159,
    "name": "Modern Blush pink Midi Dress",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 160,
    "name": "Oversized Mustard Puffer",
    "price": 40.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "men outerwear oversized trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 161,
    "name": "Slim Fit Slate gray Sunglasses",
    "price": 22.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "accessories",
    "styleTags": "women accessories slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 162,
    "name": "Modern Black Sweater",
    "price": 146.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "tops",
    "styleTags": "men tops modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 163,
    "name": "Relaxed Slate gray Tote Bag",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "accessories",
    "styleTags": "unisex accessories relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 164,
    "name": "Essential Emerald Loafers",
    "price": 100.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "shoes",
    "styleTags": "men shoes essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 165,
    "name": "Distressed White Blazer",
    "price": 73.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "unisex outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 166,
    "name": "Oversized Burgundy Button-Down",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "men tops oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 167,
    "name": "Oversized Blush pink Shorts",
    "price": 119.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "bottoms",
    "styleTags": "men bottoms oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 168,
    "name": "Casual Black Chinos",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "bottoms",
    "styleTags": "women bottoms casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 169,
    "name": "Oversized Navy Scarf",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "accessories",
    "styleTags": "men accessories oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 170,
    "name": "Distressed Slate gray Heels",
    "price": 21.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "men shoes distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 171,
    "name": "Relaxed Black Blouse",
    "price": 31.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "tops",
    "styleTags": "men tops relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 172,
    "name": "Modern Navy Coat",
    "price": 117.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "women outerwear modern trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 173,
    "name": "Vintage Slate gray Heels",
    "price": 28.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "men shoes vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 174,
    "name": "Classic Slate gray Jeans",
    "price": 32.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "unisex bottoms classic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 175,
    "name": "Relaxed Navy Hoodie",
    "price": 31.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "unisex tops relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 176,
    "name": "Casual White Loafers",
    "price": 131.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "shoes",
    "styleTags": "unisex shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 177,
    "name": "Classic Emerald Sundress",
    "price": 59.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "men dresses classic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 178,
    "name": "Modern White Skirt",
    "price": 83.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "unisex bottoms modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 179,
    "name": "Chic Navy Loafers",
    "price": 73.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "unisex shoes chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 180,
    "name": "Tailored Tan T-Shirt",
    "price": 33.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "women tops tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 181,
    "name": "Vintage Emerald Trench Coat",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 182,
    "name": "Oversized Emerald Trousers",
    "price": 143.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "unisex bottoms oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 183,
    "name": "Premium Beige Beanie",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "accessories",
    "styleTags": "men accessories premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 184,
    "name": "Distressed Black Loafers",
    "price": 38.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "men shoes distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 185,
    "name": "Tailored Burgundy Hoodie",
    "price": 106.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "men tops tailored trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 186,
    "name": "Premium Emerald Scarf",
    "price": 77.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "accessories",
    "styleTags": "women accessories premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 187,
    "name": "Slim Fit Olive Belt",
    "price": 97.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "unisex accessories slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 188,
    "name": "Slim Fit Beige Joggers",
    "price": 113.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "bottoms",
    "styleTags": "men bottoms slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 189,
    "name": "Chic Burgundy Wrap Dress",
    "price": 96.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 190,
    "name": "Chic Royal blue Boots",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "shoes",
    "styleTags": "men shoes chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 191,
    "name": "Modern Mustard Tank Top",
    "price": 54.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "women tops modern trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 192,
    "name": "Modern Burgundy Beanie",
    "price": 138.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "women accessories modern trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 193,
    "name": "Tailored Royal blue Scarf",
    "price": 69.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "accessories",
    "styleTags": "unisex accessories tailored trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 194,
    "name": "Chic Tan Midi Dress",
    "price": 147.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "women dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 195,
    "name": "Chic Beige Blazer",
    "price": 34.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "women outerwear chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 196,
    "name": "Chic Beige Joggers",
    "price": 57.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "bottoms",
    "styleTags": "men bottoms chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 197,
    "name": "Premium Beige Blouse",
    "price": 142.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "women tops premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 198,
    "name": "Premium Royal blue Slip Dress",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "women dresses premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 199,
    "name": "Premium Emerald Midi Dress",
    "price": 34.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "men dresses premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 200,
    "name": "Premium Burgundy Scarf",
    "price": 149.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "women accessories premium trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 201,
    "name": "Modern Olive Scarf",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "women accessories modern trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 202,
    "name": "Slim Fit Black Boots",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "unisex shoes slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 203,
    "name": "Distressed Emerald Wrap Dress",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "women dresses distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 204,
    "name": "Classic Blush pink Heels",
    "price": 96.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "women shoes classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 205,
    "name": "Slim Fit Black Sweater",
    "price": 37.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "tops",
    "styleTags": "unisex tops slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 206,
    "name": "Vintage White Belt",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "accessories",
    "styleTags": "unisex accessories vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 207,
    "name": "Vintage Tan Chinos",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "women bottoms vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 208,
    "name": "Classic White Trousers",
    "price": 39.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "women bottoms classic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 209,
    "name": "Chic White T-Shirt",
    "price": 47.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "women tops chic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 210,
    "name": "Tailored Beige Oxfords",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "unisex shoes tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 211,
    "name": "Casual Navy Heels",
    "price": 32.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "women shoes casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 212,
    "name": "Slim Fit Black Coat",
    "price": 80.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "men outerwear slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 213,
    "name": "Distressed Navy Skirt",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "bottoms",
    "styleTags": "women bottoms distressed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 214,
    "name": "Classic Blush pink Chinos",
    "price": 25.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "bottoms",
    "styleTags": "unisex bottoms classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 215,
    "name": "Tailored Tan Maxi Dress",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "women dresses tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 216,
    "name": "Essential Mustard Boots",
    "price": 20.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "shoes",
    "styleTags": "women shoes essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 217,
    "name": "Slim Fit Tan Wrap Dress",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "men dresses slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 218,
    "name": "Vintage Blush pink Loafers",
    "price": 146.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "women shoes vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 219,
    "name": "Modern Burgundy Scarf",
    "price": 100.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "men accessories modern trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 220,
    "name": "Casual Black Oxfords",
    "price": 120.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "unisex shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 221,
    "name": "Slim Fit Navy Blazer",
    "price": 64.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "women outerwear slim fit trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 222,
    "name": "Premium Blush pink Trench Coat",
    "price": 26.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "women outerwear premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 223,
    "name": "Distressed Navy Slip Dress",
    "price": 69.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "men dresses distressed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 224,
    "name": "Slim Fit White Hoodie",
    "price": 115.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "women tops slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 225,
    "name": "Classic White Wrap Dress",
    "price": 79.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "unisex dresses classic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 226,
    "name": "Premium Mustard Blouse",
    "price": 72.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "unisex tops premium trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 227,
    "name": "Modern Emerald Jacket",
    "price": 128.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "unisex outerwear modern trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 228,
    "name": "Distressed Slate gray Joggers",
    "price": 111.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "men bottoms distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 229,
    "name": "Vintage White Jeans",
    "price": 122.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "unisex bottoms vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 230,
    "name": "Modern Beige Watch",
    "price": 81.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "accessories",
    "styleTags": "unisex accessories modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 231,
    "name": "Classic Black Wrap Dress",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "women dresses classic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 232,
    "name": "Essential Burgundy Coat",
    "price": 39.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "unisex outerwear essential trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 233,
    "name": "Casual Navy Trench Coat",
    "price": 123.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "women outerwear casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 234,
    "name": "Chic Royal blue Chinos",
    "price": 140.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "bottoms",
    "styleTags": "women bottoms chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 235,
    "name": "Slim Fit Slate gray Slip Dress",
    "price": 124.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "men dresses slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 236,
    "name": "Slim Fit Mustard T-Shirt",
    "price": 133.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "unisex tops slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 237,
    "name": "Essential Mustard Hoodie",
    "price": 147.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "unisex tops essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 238,
    "name": "Oversized Burgundy T-Shirt",
    "price": 47.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "men tops oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 239,
    "name": "Tailored Black Trench Coat",
    "price": 55.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "women outerwear tailored trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 240,
    "name": "Relaxed Slate gray Sneakers",
    "price": 130.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "unisex shoes relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 241,
    "name": "Classic Tan Loafers",
    "price": 142.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "shoes",
    "styleTags": "men shoes classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 242,
    "name": "Chic Beige Slip Dress",
    "price": 72.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 243,
    "name": "Vintage White Trousers",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "women bottoms vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 244,
    "name": "Casual Tan Tank Top",
    "price": 82.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "men tops casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 245,
    "name": "Classic Beige Windbreaker",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "unisex outerwear classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 246,
    "name": "Distressed Mustard Tank Top",
    "price": 40.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "unisex tops distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 247,
    "name": "Classic White Sneakers",
    "price": 110.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "shoes",
    "styleTags": "men shoes classic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 248,
    "name": "Oversized Slate gray T-Shirt",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "tops",
    "styleTags": "men tops oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 249,
    "name": "Slim Fit Mustard Skirt",
    "price": 127.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "bottoms",
    "styleTags": "women bottoms slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 250,
    "name": "Modern Royal blue Midi Dress",
    "price": 43.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "men dresses modern trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 251,
    "name": "Classic Slate gray Sandals",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "women shoes classic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 252,
    "name": "Essential Emerald Midi Dress",
    "price": 129.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "unisex dresses essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 253,
    "name": "Relaxed Emerald Trousers",
    "price": 139.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "men bottoms relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 254,
    "name": "Tailored Slate gray Scarf",
    "price": 55.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "accessories",
    "styleTags": "unisex accessories tailored trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 255,
    "name": "Slim Fit Burgundy Wrap Dress",
    "price": 74.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "dresses",
    "styleTags": "men dresses slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 256,
    "name": "Modern Olive Joggers",
    "price": 19.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "bottoms",
    "styleTags": "women bottoms modern trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 257,
    "name": "Casual Burgundy Sandals",
    "price": 110.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "women shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 258,
    "name": "Oversized Olive Jacket",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "outerwear",
    "styleTags": "men outerwear oversized trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 259,
    "name": "Modern White Hoodie",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "women tops modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 260,
    "name": "Casual Royal blue Sundress",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "women dresses casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 261,
    "name": "Relaxed Royal blue Loafers",
    "price": 62.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "shoes",
    "styleTags": "unisex shoes relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 262,
    "name": "Premium Burgundy Watch",
    "price": 99.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "men accessories premium trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 263,
    "name": "Relaxed Tan Blouse",
    "price": 22.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "women tops relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 264,
    "name": "Casual Royal blue Shorts",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "bottoms",
    "styleTags": "women bottoms casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 265,
    "name": "Slim Fit Royal blue Wrap Dress",
    "price": 139.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "women dresses slim fit trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 266,
    "name": "Essential Tan Midi Dress",
    "price": 73.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 267,
    "name": "Essential Emerald Joggers",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "men bottoms essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 268,
    "name": "Oversized Emerald Jacket",
    "price": 79.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "unisex outerwear oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 269,
    "name": "Relaxed Mustard Beanie",
    "price": 44.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "accessories",
    "styleTags": "unisex accessories relaxed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 270,
    "name": "Distressed White Windbreaker",
    "price": 51.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "unisex outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 271,
    "name": "Oversized Emerald Jacket",
    "price": 122.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "women outerwear oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 272,
    "name": "Essential Olive Sunglasses",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "unisex accessories essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 273,
    "name": "Relaxed Mustard Sweater",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "men tops relaxed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 274,
    "name": "Essential Olive Chinos",
    "price": 77.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "bottoms",
    "styleTags": "men bottoms essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 275,
    "name": "Vintage Olive Jacket",
    "price": 64.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 276,
    "name": "Classic Beige Coat",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "women outerwear classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 277,
    "name": "Oversized Slate gray Coat",
    "price": 67.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "women outerwear oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 278,
    "name": "Distressed Slate gray Shorts",
    "price": 149.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "women bottoms distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 279,
    "name": "Casual Tan Sneakers",
    "price": 44.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "shoes",
    "styleTags": "women shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 280,
    "name": "Modern Tan Midi Dress",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 281,
    "name": "Slim Fit Mustard Blouse",
    "price": 44.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "women tops slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 282,
    "name": "Distressed Olive Scarf",
    "price": 30.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "women accessories distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 283,
    "name": "Casual Olive Belt",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "men accessories casual trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 284,
    "name": "Chic Mustard Trench Coat",
    "price": 50.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "men outerwear chic trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 285,
    "name": "Chic Navy T-Shirt",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "men tops chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 286,
    "name": "Oversized Tan Hoodie",
    "price": 31.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "men tops oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 287,
    "name": "Oversized Black Wrap Dress",
    "price": 132.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "unisex dresses oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 288,
    "name": "Oversized Royal blue Slip Dress",
    "price": 124.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "men dresses oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 289,
    "name": "Relaxed Blush pink Oxfords",
    "price": 88.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "unisex shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 290,
    "name": "Chic Royal blue Sneakers",
    "price": 123.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "shoes",
    "styleTags": "men shoes chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 291,
    "name": "Slim Fit Olive Oxfords",
    "price": 111.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "women shoes slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 292,
    "name": "Classic Navy Heels",
    "price": 89.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "unisex shoes classic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 293,
    "name": "Vintage Slate gray Maxi Dress",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "women dresses vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 294,
    "name": "Casual White Maxi Dress",
    "price": 111.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "men dresses casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 295,
    "name": "Modern Black Sneakers",
    "price": 143.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "men shoes modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 296,
    "name": "Distressed White Jeans",
    "price": 48.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "men bottoms distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 297,
    "name": "Chic Blush pink Blazer",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "men outerwear chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 298,
    "name": "Modern White Trench Coat",
    "price": 58.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "outerwear",
    "styleTags": "men outerwear modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 299,
    "name": "Distressed Royal blue Blazer",
    "price": 134.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "outerwear",
    "styleTags": "women outerwear distressed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 300,
    "name": "Oversized Beige Sundress",
    "price": 61.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "men dresses oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 301,
    "name": "Oversized Tan Jacket",
    "price": 27.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "unisex outerwear oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 302,
    "name": "Chic Black Wrap Dress",
    "price": 61.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 303,
    "name": "Vintage Black Maxi Dress",
    "price": 114.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "men dresses vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 304,
    "name": "Essential Mustard Blouse",
    "price": 116.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "women tops essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 305,
    "name": "Chic White Chinos",
    "price": 132.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "women bottoms chic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 306,
    "name": "Modern Beige Maxi Dress",
    "price": 118.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 307,
    "name": "Essential Mustard Blouse",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "unisex tops essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 308,
    "name": "Premium Emerald Trench Coat",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "men outerwear premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 309,
    "name": "Distressed Black Tote Bag",
    "price": 126.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "accessories",
    "styleTags": "women accessories distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 310,
    "name": "Premium Emerald Loafers",
    "price": 147.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "shoes",
    "styleTags": "women shoes premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 311,
    "name": "Essential Black Sundress",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 312,
    "name": "Premium Mustard Slip Dress",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "men dresses premium trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 313,
    "name": "Tailored Emerald Skirt",
    "price": 109.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "bottoms",
    "styleTags": "unisex bottoms tailored trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 314,
    "name": "Distressed Olive Midi Dress",
    "price": 123.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "dresses",
    "styleTags": "unisex dresses distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 315,
    "name": "Relaxed Tan Beanie",
    "price": 65.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "unisex accessories relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 316,
    "name": "Casual Slate gray Chinos",
    "price": 97.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "women bottoms casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 317,
    "name": "Distressed Emerald T-Shirt",
    "price": 48.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "tops",
    "styleTags": "unisex tops distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 318,
    "name": "Classic Tan Watch",
    "price": 57.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "men accessories classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 319,
    "name": "Oversized Black Heels",
    "price": 76.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "unisex shoes oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 320,
    "name": "Slim Fit Beige Tank Top",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "unisex tops slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 321,
    "name": "Distressed Blush pink Puffer",
    "price": 91.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "women outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 322,
    "name": "Oversized Mustard Scarf",
    "price": 19.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "accessories",
    "styleTags": "unisex accessories oversized trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 323,
    "name": "Tailored Mustard Belt",
    "price": 66.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "accessories",
    "styleTags": "women accessories tailored trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 324,
    "name": "Premium Blush pink Midi Dress",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "dresses",
    "styleTags": "unisex dresses premium trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 325,
    "name": "Modern Mustard Heels",
    "price": 63.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "shoes",
    "styleTags": "unisex shoes modern trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 326,
    "name": "Classic Burgundy Blazer",
    "price": 61.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "unisex outerwear classic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 327,
    "name": "Relaxed Slate gray Hoodie",
    "price": 122.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "tops",
    "styleTags": "men tops relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 328,
    "name": "Essential Tan Loafers",
    "price": 110.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "shoes",
    "styleTags": "women shoes essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 329,
    "name": "Slim Fit Black Watch",
    "price": 125.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "accessories",
    "styleTags": "men accessories slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 330,
    "name": "Essential White Trousers",
    "price": 30.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "men bottoms essential trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 331,
    "name": "Distressed Burgundy Boots",
    "price": 116.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "women shoes distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 332,
    "name": "Vintage Olive Jeans",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "bottoms",
    "styleTags": "women bottoms vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 333,
    "name": "Premium Royal blue Sundress",
    "price": 29.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "unisex dresses premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 334,
    "name": "Oversized Royal blue Joggers",
    "price": 120.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "bottoms",
    "styleTags": "men bottoms oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 335,
    "name": "Casual Emerald Scarf",
    "price": 136.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "accessories",
    "styleTags": "unisex accessories casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 336,
    "name": "Distressed Beige Sundress",
    "price": 119.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "unisex dresses distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 337,
    "name": "Distressed Burgundy Trench Coat",
    "price": 97.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "women outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 338,
    "name": "Modern Beige Heels",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "men shoes modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 339,
    "name": "Chic Navy Wrap Dress",
    "price": 147.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "women dresses chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 340,
    "name": "Casual Blush pink Oxfords",
    "price": 118.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "men shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 341,
    "name": "Classic Navy Jacket",
    "price": 109.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "women outerwear classic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 342,
    "name": "Slim Fit Black Oxfords",
    "price": 99.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "shoes",
    "styleTags": "men shoes slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 343,
    "name": "Relaxed Emerald Scarf",
    "price": 142.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "accessories",
    "styleTags": "men accessories relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 344,
    "name": "Relaxed Royal blue Trench Coat",
    "price": 44.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "outerwear",
    "styleTags": "women outerwear relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 345,
    "name": "Tailored Olive Jacket",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "outerwear",
    "styleTags": "unisex outerwear tailored trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 346,
    "name": "Relaxed Blush pink Blazer",
    "price": 96.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "women outerwear relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 347,
    "name": "Essential Mustard Sundress",
    "price": 111.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 348,
    "name": "Slim Fit White T-Shirt",
    "price": 37.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "women tops slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 349,
    "name": "Modern Mustard Windbreaker",
    "price": 57.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "unisex outerwear modern trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 350,
    "name": "Relaxed Emerald Belt",
    "price": 80.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "accessories",
    "styleTags": "women accessories relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 351,
    "name": "Chic Burgundy Blouse",
    "price": 34.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "tops",
    "styleTags": "women tops chic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 352,
    "name": "Distressed Olive Coat",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "outerwear",
    "styleTags": "women outerwear distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 353,
    "name": "Relaxed Emerald Jacket",
    "price": 51.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "unisex outerwear relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 354,
    "name": "Vintage Slate gray Wrap Dress",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "unisex dresses vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 355,
    "name": "Oversized Beige Hoodie",
    "price": 21.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "unisex tops oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 356,
    "name": "Slim Fit White Sneakers",
    "price": 82.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "shoes",
    "styleTags": "unisex shoes slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 357,
    "name": "Modern Black Jeans",
    "price": 61.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "bottoms",
    "styleTags": "men bottoms modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 358,
    "name": "Distressed Slate gray Trousers",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "unisex bottoms distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 359,
    "name": "Distressed Slate gray Jacket",
    "price": 114.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "men outerwear distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 360,
    "name": "Premium Royal blue Jacket",
    "price": 133.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "outerwear",
    "styleTags": "unisex outerwear premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 361,
    "name": "Modern Tan Trench Coat",
    "price": 123.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "men outerwear modern trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 362,
    "name": "Chic Royal blue Slip Dress",
    "price": 35.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "women dresses chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 363,
    "name": "Oversized Black Watch",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "accessories",
    "styleTags": "men accessories oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 364,
    "name": "Vintage Slate gray Boots",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "women shoes vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 365,
    "name": "Essential Slate gray Wrap Dress",
    "price": 59.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "unisex dresses essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 366,
    "name": "Chic Black Slip Dress",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 367,
    "name": "Premium Emerald Wrap Dress",
    "price": 110.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "women dresses premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 368,
    "name": "Chic White Sweater",
    "price": 82.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "unisex tops chic trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 369,
    "name": "Oversized Emerald Sneakers",
    "price": 122.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "shoes",
    "styleTags": "men shoes oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 370,
    "name": "Classic Mustard Sunglasses",
    "price": 129.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "accessories",
    "styleTags": "women accessories classic trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 371,
    "name": "Oversized Burgundy Windbreaker",
    "price": 48.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "women outerwear oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 372,
    "name": "Casual White Wrap Dress",
    "price": 20.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "women dresses casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 373,
    "name": "Premium Navy Jeans",
    "price": 32.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "bottoms",
    "styleTags": "unisex bottoms premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 374,
    "name": "Vintage Navy Wrap Dress",
    "price": 93.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "unisex dresses vintage trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 375,
    "name": "Modern Navy Slip Dress",
    "price": 136.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 376,
    "name": "Relaxed Tan Slip Dress",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "unisex dresses relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 377,
    "name": "Premium Black Tank Top",
    "price": 103.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "tops",
    "styleTags": "women tops premium trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 378,
    "name": "Distressed Beige Sandals",
    "price": 129.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "men shoes distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 379,
    "name": "Tailored Royal blue Joggers",
    "price": 55.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "bottoms",
    "styleTags": "unisex bottoms tailored trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 380,
    "name": "Oversized White Midi Dress",
    "price": 82.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "dresses",
    "styleTags": "men dresses oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 381,
    "name": "Distressed Olive Hoodie",
    "price": 87.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "tops",
    "styleTags": "women tops distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 382,
    "name": "Oversized Burgundy Sunglasses",
    "price": 118.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "unisex accessories oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 383,
    "name": "Oversized Tan Wrap Dress",
    "price": 92.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "unisex dresses oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 384,
    "name": "Slim Fit Slate gray Chinos",
    "price": 42.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "unisex bottoms slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 385,
    "name": "Distressed Royal blue Slip Dress",
    "price": 114.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "men dresses distressed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 386,
    "name": "Casual Olive Sneakers",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "unisex shoes casual trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 387,
    "name": "Classic Blush pink Beanie",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "accessories",
    "styleTags": "unisex accessories classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 388,
    "name": "Oversized Emerald Sundress",
    "price": 118.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "women dresses oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 389,
    "name": "Oversized Emerald Beanie",
    "price": 46.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "accessories",
    "styleTags": "women accessories oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 390,
    "name": "Tailored Slate gray Wrap Dress",
    "price": 51.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "men dresses tailored trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 391,
    "name": "Tailored Blush pink Loafers",
    "price": 68.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "unisex shoes tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 392,
    "name": "Vintage Blush pink Watch",
    "price": 63.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "accessories",
    "styleTags": "women accessories vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 393,
    "name": "Premium White Trousers",
    "price": 110.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "unisex bottoms premium trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 394,
    "name": "Distressed Olive Sandals",
    "price": 92.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "women shoes distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 395,
    "name": "Relaxed Slate gray Puffer",
    "price": 107.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "men outerwear relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 396,
    "name": "Casual Royal blue Slip Dress",
    "price": 75.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "unisex dresses casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 397,
    "name": "Chic Slate gray Loafers",
    "price": 35.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "unisex shoes chic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 398,
    "name": "Chic Olive Sunglasses",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "accessories",
    "styleTags": "unisex accessories chic trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 399,
    "name": "Casual Navy Boots",
    "price": 69.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "unisex shoes casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 400,
    "name": "Relaxed Emerald Jacket",
    "price": 105.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "unisex outerwear relaxed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 401,
    "name": "Slim Fit Royal blue Sundress",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "unisex dresses slim fit trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 402,
    "name": "Oversized Slate gray Chinos",
    "price": 58.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "men bottoms oversized trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 403,
    "name": "Chic Burgundy Beanie",
    "price": 21.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "women accessories chic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 404,
    "name": "Premium Navy Hoodie",
    "price": 141.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "unisex tops premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 405,
    "name": "Essential Olive Wrap Dress",
    "price": 148.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "dresses",
    "styleTags": "unisex dresses essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 406,
    "name": "Relaxed Royal blue Maxi Dress",
    "price": 61.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "dresses",
    "styleTags": "men dresses relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 407,
    "name": "Relaxed Mustard Coat",
    "price": 67.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "men outerwear relaxed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 408,
    "name": "Oversized Black Coat",
    "price": 143.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "unisex outerwear oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 409,
    "name": "Oversized Navy Jacket",
    "price": 83.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "unisex outerwear oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 410,
    "name": "Vintage Slate gray Trench Coat",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 411,
    "name": "Essential Tan Shorts",
    "price": 72.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "bottoms",
    "styleTags": "unisex bottoms essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 412,
    "name": "Relaxed Navy Trench Coat",
    "price": 47.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "outerwear",
    "styleTags": "men outerwear relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 413,
    "name": "Distressed Emerald Coat",
    "price": 127.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "men outerwear distressed trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 414,
    "name": "Essential Slate gray Maxi Dress",
    "price": 131.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "unisex dresses essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 415,
    "name": "Essential Mustard Skirt",
    "price": 28.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "bottoms",
    "styleTags": "women bottoms essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 416,
    "name": "Slim Fit Emerald Trench Coat",
    "price": 104.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "men outerwear slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 417,
    "name": "Vintage Black Watch",
    "price": 56.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "accessories",
    "styleTags": "men accessories vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 418,
    "name": "Chic Royal blue T-Shirt",
    "price": 134.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "women tops chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 419,
    "name": "Oversized Navy Hoodie",
    "price": 102.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "men tops oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 420,
    "name": "Modern Black Maxi Dress",
    "price": 45.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 421,
    "name": "Slim Fit Slate gray Windbreaker",
    "price": 73.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "outerwear",
    "styleTags": "unisex outerwear slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 422,
    "name": "Premium Royal blue Trousers",
    "price": 74.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "bottoms",
    "styleTags": "unisex bottoms premium trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 423,
    "name": "Tailored Black Sundress",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "women dresses tailored trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 424,
    "name": "Relaxed Beige Scarf",
    "price": 48.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "accessories",
    "styleTags": "men accessories relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 425,
    "name": "Relaxed White Skirt",
    "price": 34.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "bottoms",
    "styleTags": "women bottoms relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 426,
    "name": "Chic Slate gray Midi Dress",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "unisex dresses chic trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 427,
    "name": "Distressed Tan Blouse",
    "price": 92.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "men tops distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 428,
    "name": "Relaxed Olive Joggers",
    "price": 78.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "bottoms",
    "styleTags": "men bottoms relaxed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 429,
    "name": "Essential Mustard Puffer",
    "price": 41.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "women outerwear essential trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 430,
    "name": "Relaxed Beige Scarf",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "accessories",
    "styleTags": "unisex accessories relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 431,
    "name": "Vintage Slate gray Shorts",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "unisex bottoms vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 432,
    "name": "Premium Mustard Skirt",
    "price": 77.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "bottoms",
    "styleTags": "women bottoms premium trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "women"
  },
  {
    "id": 433,
    "name": "Classic Navy Maxi Dress",
    "price": 114.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "men dresses classic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 434,
    "name": "Casual Black Blazer",
    "price": 79.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "unisex outerwear casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 435,
    "name": "Modern White Button-Down",
    "price": 54.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "tops",
    "styleTags": "men tops modern trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 436,
    "name": "Tailored Navy Scarf",
    "price": 82.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "accessories",
    "styleTags": "women accessories tailored trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 437,
    "name": "Distressed Black Blazer",
    "price": 75.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "men outerwear distressed trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 438,
    "name": "Slim Fit Black Tote Bag",
    "price": 143.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "accessories",
    "styleTags": "unisex accessories slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 439,
    "name": "Vintage Slate gray Boots",
    "price": 35.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "men shoes vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 440,
    "name": "Vintage Black Blouse",
    "price": 117.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "tops",
    "styleTags": "unisex tops vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 441,
    "name": "Distressed Tan T-Shirt",
    "price": 53.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "tops",
    "styleTags": "men tops distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 442,
    "name": "Distressed Beige Boots",
    "price": 39.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "women shoes distressed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 443,
    "name": "Oversized Beige Heels",
    "price": 100.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "men shoes oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 444,
    "name": "Classic Tan Sunglasses",
    "price": 122.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "men accessories classic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 445,
    "name": "Chic Blush pink Blouse",
    "price": 120.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "tops",
    "styleTags": "unisex tops chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 446,
    "name": "Slim Fit Emerald Button-Down",
    "price": 119.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "tops",
    "styleTags": "men tops slim fit trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 447,
    "name": "Casual Blush pink Sweater",
    "price": 130.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "tops",
    "styleTags": "men tops casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 448,
    "name": "Relaxed Blush pink Sandals",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "unisex shoes relaxed trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 449,
    "name": "Tailored Blush pink Hoodie",
    "price": 128.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "tops",
    "styleTags": "men tops tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 450,
    "name": "Relaxed Burgundy Beanie",
    "price": 96.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "accessories",
    "styleTags": "unisex accessories relaxed trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 451,
    "name": "Vintage Beige Tank Top",
    "price": 40.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "women tops vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 452,
    "name": "Relaxed Navy Sandals",
    "price": 142.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "men shoes relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 453,
    "name": "Oversized Tan Loafers",
    "price": 86.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "shoes",
    "styleTags": "men shoes oversized trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 454,
    "name": "Casual Navy Oxfords",
    "price": 84.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "men shoes casual trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 455,
    "name": "Classic Burgundy Blazer",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "unisex outerwear classic trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 456,
    "name": "Modern Emerald Wrap Dress",
    "price": 92.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "unisex dresses modern trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 457,
    "name": "Vintage Mustard Sweater",
    "price": 67.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "tops",
    "styleTags": "men tops vintage trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 458,
    "name": "Premium Burgundy Joggers",
    "price": 115.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "bottoms",
    "styleTags": "men bottoms premium trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 459,
    "name": "Casual Emerald Maxi Dress",
    "price": 97.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "dresses",
    "styleTags": "men dresses casual trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 460,
    "name": "Casual Burgundy Sneakers",
    "price": 84.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "unisex shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 461,
    "name": "Tailored Tan Scarf",
    "price": 76.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "unisex accessories tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 462,
    "name": "Vintage Beige Puffer",
    "price": 142.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "outerwear",
    "styleTags": "men outerwear vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 463,
    "name": "Chic Tan Scarf",
    "price": 111.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "accessories",
    "styleTags": "men accessories chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 464,
    "name": "Modern Navy Sweater",
    "price": 136.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "tops",
    "styleTags": "women tops modern trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 465,
    "name": "Casual Tan Coat",
    "price": 146.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "men outerwear casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 466,
    "name": "Relaxed Royal blue Scarf",
    "price": 147.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "accessories",
    "styleTags": "women accessories relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 467,
    "name": "Chic Royal blue Hoodie",
    "price": 69.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "tops",
    "styleTags": "unisex tops chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 468,
    "name": "Tailored Olive Boots",
    "price": 101.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "olive",
    "colorHex": "#556B2F",
    "category": "shoes",
    "styleTags": "men shoes tailored trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 469,
    "name": "Oversized Royal blue Sandals",
    "price": 71.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "royal blue",
    "colorHex": "#4169E1",
    "category": "shoes",
    "styleTags": "unisex shoes oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 470,
    "name": "Tailored Navy Midi Dress",
    "price": 110.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "dresses",
    "styleTags": "unisex dresses tailored trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 471,
    "name": "Casual Black Coat",
    "price": 49.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "women outerwear casual trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 472,
    "name": "Oversized Navy Watch",
    "price": 65.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "accessories",
    "styleTags": "men accessories oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 473,
    "name": "Relaxed Navy Shorts",
    "price": 130.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "bottoms",
    "styleTags": "men bottoms relaxed trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 474,
    "name": "Oversized Burgundy Windbreaker",
    "price": 74.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "outerwear",
    "styleTags": "men outerwear oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 475,
    "name": "Casual Mustard Joggers",
    "price": 42.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "bottoms",
    "styleTags": "men bottoms casual trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 476,
    "name": "Oversized Burgundy Boots",
    "price": 149.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "women shoes oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "women"
  },
  {
    "id": 477,
    "name": "Oversized Navy Shorts",
    "price": 145.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "bottoms",
    "styleTags": "men bottoms oversized trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "men"
  },
  {
    "id": 478,
    "name": "Essential Slate gray Joggers",
    "price": 83.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "bottoms",
    "styleTags": "women bottoms essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 479,
    "name": "Slim Fit Blush pink Blazer",
    "price": 123.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "outerwear",
    "styleTags": "unisex outerwear slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 480,
    "name": "Essential Emerald Blazer",
    "price": 144.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "outerwear",
    "styleTags": "women outerwear essential trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 481,
    "name": "Tailored Slate gray Sandals",
    "price": 89.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "shoes",
    "styleTags": "men shoes tailored trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 482,
    "name": "Chic Navy Boots",
    "price": 37.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "navy",
    "colorHex": "#000080",
    "category": "shoes",
    "styleTags": "unisex shoes chic trendy basic",
    "undertones": [
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 483,
    "name": "Casual Tan Boots",
    "price": 135.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "shoes",
    "styleTags": "women shoes casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 484,
    "name": "Oversized Black Sundress",
    "price": 83.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "dresses",
    "styleTags": "men dresses oversized trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 485,
    "name": "Slim Fit Black Blazer",
    "price": 23.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "black",
    "colorHex": "#000000",
    "category": "outerwear",
    "styleTags": "men outerwear slim fit trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 486,
    "name": "Essential Tan Windbreaker",
    "price": 108.99,
    "imageUrl": "https://images.unsplash.com/photo-1624378441864-1dd13d288921?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "outerwear",
    "styleTags": "women outerwear essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 487,
    "name": "Casual Tan Slip Dress",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "men dresses casual trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 488,
    "name": "Vintage Burgundy Heels",
    "price": 59.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "unisex shoes vintage trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 489,
    "name": "Tailored Burgundy Sandals",
    "price": 149.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "burgundy",
    "colorHex": "#800020",
    "category": "shoes",
    "styleTags": "unisex shoes tailored trendy basic",
    "undertones": [
      "Warm",
      "Cool"
    ],
    "gender": "unisex"
  },
  {
    "id": 490,
    "name": "Vintage Beige Loafers",
    "price": 137.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "shoes",
    "styleTags": "men shoes vintage trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 491,
    "name": "Premium Slate gray Wrap Dress",
    "price": 112.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "slate gray",
    "colorHex": "#708090",
    "category": "dresses",
    "styleTags": "women dresses premium trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 492,
    "name": "Vintage Emerald Scarf",
    "price": 31.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "emerald",
    "colorHex": "#50C878",
    "category": "accessories",
    "styleTags": "unisex accessories vintage trendy basic",
    "undertones": [
      "Cool",
      "Neutral"
    ],
    "gender": "unisex"
  },
  {
    "id": 493,
    "name": "Tailored Blush pink Heels",
    "price": 81.99,
    "imageUrl": "https://images.unsplash.com/photo-1582213709663-dbb7754b2af0?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "men shoes tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 494,
    "name": "Premium White Tote Bag",
    "price": 93.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "white",
    "colorHex": "#FFFFFF",
    "category": "accessories",
    "styleTags": "women accessories premium trendy basic",
    "undertones": [
      "Warm",
      "Cool",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 495,
    "name": "Distressed Mustard Blazer",
    "price": 106.99,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "outerwear",
    "styleTags": "unisex outerwear distressed trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "unisex"
  },
  {
    "id": 496,
    "name": "Chic Beige Blouse",
    "price": 85.99,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "tops",
    "styleTags": "women tops chic trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 497,
    "name": "Tailored Tan Sundress",
    "price": 54.99,
    "imageUrl": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=512&q=80",
    "colorName": "tan",
    "colorHex": "#D2B48C",
    "category": "dresses",
    "styleTags": "women dresses tailored trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  },
  {
    "id": 498,
    "name": "Slim Fit Blush pink Heels",
    "price": 117.99,
    "imageUrl": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=512&q=80",
    "colorName": "blush pink",
    "colorHex": "#FFB6C1",
    "category": "shoes",
    "styleTags": "men shoes slim fit trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "men"
  },
  {
    "id": 499,
    "name": "Slim Fit Mustard Slip Dress",
    "price": 98.99,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-82a89b4f6531?auto=format&fit=crop&w=512&q=80",
    "colorName": "mustard",
    "colorHex": "#FFDB58",
    "category": "dresses",
    "styleTags": "men dresses slim fit trendy basic",
    "undertones": [
      "Warm"
    ],
    "gender": "men"
  },
  {
    "id": 500,
    "name": "Essential Beige Midi Dress",
    "price": 30.99,
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=512&q=80",
    "colorName": "beige",
    "colorHex": "#F5F5DC",
    "category": "dresses",
    "styleTags": "women dresses essential trendy basic",
    "undertones": [
      "Warm",
      "Neutral"
    ],
    "gender": "women"
  }
];

const ASSET_IMAGES_WOMEN = [
  redSlipDress, pinkMaxiDress, goldSequinTop, brownMidiSkirt, grayPleatedDress, midnightBlazerDress
];

const ASSET_IMAGES_MEN = [
  beigeBlazer, blueSweater, khakiShorts
];

const ASSET_IMAGES_UNISEX = [
  navyCoat, oliveHoodie, whiteTrousers, burgundyScarf, ivoryShirt, 
  blueDenimJacket, blackBoots, greenPufferVest, tanCanvasTote
];

export async function fetchProducts(): Promise<Product[]> {
  // Return the massive offline dataset but make it uniquely diversified dynamically
  return ALL_PRODUCTS.map((p, index) => {
    // Generate a diverse pseudo-random variation based on the product ID
    const uniqueHash = Number(p.id) * 31;
    
    // Choose correct image pool based on strictly enforced genders
    let pool;
    if (p.gender === 'women') {
      pool = [...ASSET_IMAGES_WOMEN, ...ASSET_IMAGES_UNISEX];
    } else if (p.gender === 'men') {
      pool = [...ASSET_IMAGES_MEN, ...ASSET_IMAGES_UNISEX];
    } else {
      pool = ASSET_IMAGES_UNISEX;
    }
    
    const assignedImage = pool[uniqueHash % pool.length];
    
    return {
      ...p,
      imageUrl: assignedImage,
      price: Number((p.price + (uniqueHash % 15)).toFixed(2))
    };
  });
}
