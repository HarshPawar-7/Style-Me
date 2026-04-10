import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ImageUploader from "./ImageUploader";
import ColorSwatch from "./ColorSwatch";
import ProductCard from "./ProductCard";
import { extractDominantColors } from "@/lib/colorUtils";
import { recommend } from "@/lib/matching";
import { fetchProducts, type Product, type Gender } from "@/lib/products";
import { useQuery } from "@tanstack/react-query";

interface FindStyleProps {
  palette: string[];
  undertone?: "Warm" | "Cool" | "Neutral";
}

const FindStyle = ({ palette, undertone }: FindStyleProps) => {
  const [query, setQuery] = useState("");
  const [genderPref, setGenderPref] = useState<Gender | "all">("all");
  const [inspoPreview, setInspoPreview] = useState<string | null>(null);
  const [inspoData, setInspoData] = useState<ImageData | null>(null);
  const [inspoPalette, setInspoPalette] = useState<string[]>([]);
  const [results, setResults] = useState<Product[]>([]);

  const { data: allProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleSearch = () => {
    let combined = [...palette];
    if (inspoData) {
      const extracted = extractDominantColors(inspoData, 5);
      setInspoPalette(extracted);
      combined = [...combined, ...extracted];
    }
    
    // Predicate pool by gender
    let pool = allProducts;
    if (genderPref !== "all") {
      pool = pool.filter(p => p.gender === genderPref || p.gender === "unisex");
    }

    const recs = recommend(pool, combined, query, undertone, 6);
    setResults(recs);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Find My Style</h2>
        <p className="text-muted-foreground">
          Describe the occasion or style and get color-matched recommendations.
          {palette.length === 0 && (
            <span className="block text-xs text-accent mt-1">
              Tip: Analyze your colors first for personalized results!
            </span>
          )}
          {undertone && (
            <span className="block text-xs text-primary mt-1">
              🎯 Showing results optimized for your{" "}
              <strong>{undertone}</strong> undertone
            </span>
          )}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Style / Occasion
            </label>
            <Input
              placeholder="e.g. Summer wedding guest, Casual brunch, Office chic"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <div className="w-full sm:w-48">
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Fit Preference
            </label>
            <select
              value={genderPref}
              onChange={(e) => setGenderPref(e.target.value as any)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="all">Any Fit</option>
              <option value="women">Women's Fit</option>
              <option value="men">Men's Fit</option>
            </select>
          </div>
        </div>

        <ImageUploader
          label="Inspiration Image (optional)"
          preview={inspoPreview}
          onImageLoad={(data, prev) => {
            setInspoData(data);
            setInspoPreview(prev);
          }}
        />

        <Button onClick={handleSearch} size="lg" className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Find Recommendations
        </Button>
      </div>

      {inspoPalette.length > 0 && (
        <ColorSwatch colors={inspoPalette} label="Inspiration Palette" />
      )}

      {results.length > 0 && (
        <div className="space-y-3 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-foreground">
            Recommended For You
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {results.map((p, i) => (
              <ProductCard
                key={i}
                product={p}
                paletteColors={palette.length > 0 ? palette : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FindStyle;
