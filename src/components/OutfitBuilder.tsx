import { useState, useMemo } from "react";
import { Plus, X, Shirt, Sparkles, RotateCcw, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, type Product } from "@/lib/products";
import { filterByUndertone } from "@/lib/matching";
import { colorDistance } from "@/lib/colorUtils";
import ColorSwatch from "./ColorSwatch";

type SlotKey = "tops" | "bottoms" | "outerwear" | "dresses" | "shoes" | "accessories";

interface Outfit {
  [key: string]: Product | null;
}

const SLOT_CONFIG: { key: SlotKey; label: string; icon: string }[] = [
  { key: "tops", label: "Top", icon: "👕" },
  { key: "bottoms", label: "Bottom", icon: "👖" },
  { key: "outerwear", label: "Layer", icon: "🧥" },
  { key: "dresses", label: "Dress", icon: "👗" },
  { key: "shoes", label: "Shoes", icon: "👟" },
  { key: "accessories", label: "Accessory", icon: "👜" },
];

interface OutfitBuilderProps {
  palette: string[];
  undertone?: "Warm" | "Cool" | "Neutral";
}

const OutfitBuilder = ({ palette, undertone }: OutfitBuilderProps) => {
  const [outfit, setOutfit] = useState<Outfit>({});
  const [activeSlot, setActiveSlot] = useState<SlotKey | null>(null);
  const [savedOutfits, setSavedOutfits] = useState<Outfit[]>([]);

  const availableProducts = useMemo(() => {
    if (undertone) {
      const filtered = filterByUndertone(undertone);
      if (palette.length > 0) {
        return filtered.sort((a, b) => {
          const aDist = Math.min(...palette.map((c) => colorDistance(c, a.colorHex)));
          const bDist = Math.min(...palette.map((c) => colorDistance(c, b.colorHex)));
          return aDist - bDist;
        });
      }
      return filtered;
    }
    return PRODUCTS;
  }, [undertone, palette]);

  const getProductsForSlot = (slot: SlotKey) =>
    availableProducts.filter((p) => p.category === slot);

  const addToOutfit = (slot: SlotKey, product: Product) => {
    setOutfit((prev) => ({ ...prev, [slot]: product }));
    setActiveSlot(null);
  };

  const removeFromOutfit = (slot: SlotKey) => {
    setOutfit((prev) => {
      const next = { ...prev };
      delete next[slot];
      return next;
    });
  };

  const clearOutfit = () => setOutfit({});

  const saveOutfit = () => {
    if (Object.keys(outfit).length > 0) {
      setSavedOutfits((prev) => [...prev, { ...outfit }]);
    }
  };

  const selectedItems = Object.values(outfit).filter(Boolean) as Product[];
  const totalPrice = selectedItems.reduce((sum, p) => sum + p.price, 0);

  // Compute outfit color harmony
  const outfitColors = selectedItems.map((p) => p.colorHex);

  const hasItems = selectedItems.length > 0;

  return (
    <div className="mx-auto max-w-4xl space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Outfit Builder</h2>
        <p className="text-muted-foreground">
          Combine pieces into complete looks that match your color palette.
          {!undertone && (
            <span className="block text-xs text-accent mt-1">
              Tip: Analyze your colors first to see personalized suggestions!
            </span>
          )}
          {undertone && (
            <span className="block text-xs text-primary mt-1">
              🎯 Showing pieces optimized for your <strong>{undertone}</strong> undertone
            </span>
          )}
        </p>
      </div>

      {/* Outfit slots */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {SLOT_CONFIG.map(({ key, label, icon }) => {
          const item = outfit[key];
          const isActive = activeSlot === key;
          const hasProductsInCategory = getProductsForSlot(key).length > 0;

          if (!hasProductsInCategory) return null;

          return (
            <div key={key} className="space-y-1.5">
              <span className="text-xs font-medium text-muted-foreground">
                {icon} {label}
              </span>
              {item ? (
                <div className="group relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-primary/30 bg-card shadow-sm">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => removeFromOutfit(key)}
                    className="absolute top-1 right-1 rounded-full bg-card/90 p-1 opacity-0 transition-opacity group-hover:opacity-100 shadow-sm"
                  >
                    <X className="h-3.5 w-3.5 text-destructive" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-card/90 backdrop-blur-sm px-2 py-1">
                    <p className="text-[10px] font-medium text-card-foreground truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setActiveSlot(isActive ? null : key)}
                  className={`flex aspect-[3/4] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
                    isActive
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40 hover:bg-muted/50"
                  }`}
                >
                  <Plus className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`mt-1 text-[10px] ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    Add
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Product picker */}
      {activeSlot && (
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm animate-fade-in-up">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-card-foreground">
              Choose a {SLOT_CONFIG.find((s) => s.key === activeSlot)?.label}
            </h3>
            <button
              onClick={() => setActiveSlot(null)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {getProductsForSlot(activeSlot).map((product, i) => {
              const isSelected = outfit[activeSlot]?.name === product.name;
              return (
                <button
                  key={i}
                  onClick={() => addToOutfit(activeSlot, product)}
                  className={`group overflow-hidden rounded-lg border-2 transition-all hover:shadow-md ${
                    isSelected ? "border-primary ring-2 ring-primary/20" : "border-border"
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-1.5">
                    <p className="text-[10px] font-medium text-card-foreground truncate">
                      {product.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Outfit summary */}
      {hasItems && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-card-foreground">
              <Shirt className="mr-1.5 inline h-4 w-4 text-primary" />
              Your Look
            </h3>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                <DollarSign className="h-3.5 w-3.5" />
                {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Color harmony of the outfit */}
          {outfitColors.length > 1 && (
            <ColorSwatch colors={outfitColors} label="Outfit Color Palette" />
          )}

          {/* Items list */}
          <div className="space-y-2">
            {selectedItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2"
              >
                <div
                  className="h-4 w-4 rounded-full border border-border"
                  style={{ backgroundColor: item.colorHex }}
                />
                <span className="flex-1 text-sm text-foreground">{item.name}</span>
                <span className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button onClick={saveOutfit} size="sm" className="flex-1">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Save Look
            </Button>
            <Button onClick={clearOutfit} variant="outline" size="sm">
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Clear
            </Button>
          </div>
        </div>
      )}

      {/* Saved outfits */}
      {savedOutfits.length > 0 && (
        <div className="space-y-3 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-foreground">
            Saved Looks ({savedOutfits.length})
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {savedOutfits.map((saved, oi) => {
              const items = Object.values(saved).filter(Boolean) as Product[];
              const total = items.reduce((s, p) => s + p.price, 0);
              return (
                <div
                  key={oi}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-card-foreground">
                      Look #{oi + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {items.map((item, ii) => (
                      <div
                        key={ii}
                        className="h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border border-border"
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {items.map((item, ii) => (
                      <div
                        key={ii}
                        className="h-3 w-3 rounded-full border border-border"
                        style={{ backgroundColor: item.colorHex }}
                        title={item.colorName}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OutfitBuilder;
