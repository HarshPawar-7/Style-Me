import { colorDistance } from "@/lib/colorUtils";
import type { Product } from "@/lib/products";

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

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width={512}
          height={640}
        />
        {/* Color match indicator */}
        {matchPercent > 0 && (
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
            <div
              className="h-3 w-3 rounded-full border border-border"
              style={{ backgroundColor: closestColor }}
            />
            {matchPercent}%
          </div>
        )}
      </div>
      <div className="space-y-1.5 p-3">
        <h4 className="text-sm font-semibold text-card-foreground leading-tight">
          {product.name}
        </h4>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-1">
            <div
              className="h-3.5 w-3.5 rounded-full border border-border"
              style={{ backgroundColor: product.colorHex }}
            />
            <span className="text-xs text-muted-foreground capitalize">
              {product.colorName}
            </span>
          </div>
        </div>
        <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          ✓ Suits your tone
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
