import { colorDistance } from "@/lib/colorUtils";
import type { Product } from "@/lib/products";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  paletteColors?: string[];
}

const ProductCard = ({ product, paletteColors }: ProductCardProps) => {
  // Find closest palette color match
  let matchPercent = 0;
  let closestColor = "";
  if (paletteColors && paletteColors.length > 0) {
    const distances = paletteColors.map((c) => ({
      color: c,
      dist: colorDistance(c, product.colorHex),
    }));
    const closest = distances.sort((a, b) => a.dist - b.dist)[0];
    closestColor = closest.color;
    matchPercent = Math.max(0, Math.round(100 - (closest.dist / 4.41)));
  }

  // Fake star rating for Amazon look
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5 to 5.0
  const reviewCount = Math.floor(Math.random() * 5000) + 100;
  const priceParts = product.price.toFixed(2).split(".");

  return (
    <div className="group overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md h-full flex flex-col cursor-pointer">
      <div className="relative aspect-square w-full p-4 flex items-center justify-center bg-white">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/512x512/f3f4f6/a1a1aa.png?text=No+Image";
            (e.target as HTMLImageElement).className = "h-full w-full object-contain opacity-50";
          }}
        />
        {/* Color match indicator */}
        {matchPercent > 0 && (
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-bold text-neutral-800 shadow backdrop-blur-sm border border-neutral-200">
            <div
              className="h-2 w-2 rounded-full border border-neutral-300"
              style={{ backgroundColor: closestColor }}
            />
            {matchPercent}% Match
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-3 border-t border-neutral-100 bg-white text-left">
        <h4 className="text-[14px] font-medium text-neutral-800 leading-snug line-clamp-2 hover:text-[#c45500] hover:underline">
          {product.name}
        </h4>
        
        <div className="flex items-center gap-1 mt-1 mb-1">
          <div className="flex items-center text-[#ffa41c]">
             {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(parseFloat(rating)) ? "fill-current" : "fill-neutral-200 text-neutral-200" }`} />
             ))}
          </div>
          <span className="text-xs text-[#007185] hover:text-[#c45500] hover:underline">{reviewCount}</span>
        </div>

        <div className="flex items-start gap-[1px] mt-auto">
          <span className="text-[11px] font-semibold text-neutral-900 mt-[2px]">$</span>
          <span className="text-[26px] font-medium text-neutral-900 leading-none">{priceParts[0]}</span>
          <span className="text-[11px] font-semibold text-neutral-900 mt-[2px]">{priceParts[1]}</span>
        </div>
        
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs font-bold text-[#00a8e1] tracking-wide italic pr-1">prime</span>
          <span className="text-xs text-neutral-500">FREE Delivery</span>
        </div>
        
        <div className="flex items-center gap-1 mt-2 pb-1">
            <div
              className="h-3 w-3 rounded-full border border-neutral-300"
              style={{ backgroundColor: product.colorHex }}
            />
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold truncate max-w-full">
              {product.colorName} • {product.category}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
