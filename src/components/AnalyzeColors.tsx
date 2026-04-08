import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingBag } from "lucide-react";
import ImageUploader from "./ImageUploader";
import ColorSwatch from "./ColorSwatch";
import ProductCard from "./ProductCard";
import {
  extractSkinTone,
  determineUndertone,
  generatePalette,
} from "@/lib/colorUtils";
import { getUndertoneRecommendations } from "@/lib/matching";
import type { Product } from "@/lib/products";

interface AnalyzeColorsProps {
  onPaletteGenerated: (palette: string[], undertone: "Warm" | "Cool" | "Neutral") => void;
}

const AnalyzeColors = ({ onPaletteGenerated }: AnalyzeColorsProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [result, setResult] = useState<{
    hex: string;
    undertone: "Warm" | "Cool" | "Neutral";
    palette: string[];
  } | null>(null);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = () => {
    if (!imageData) return;
    setError(null);

    const skin = extractSkinTone(imageData);
    if (!skin) {
      setError(
        "Could not detect skin tones. Please try a well-lit selfie with your face centered."
      );
      return;
    }

    const undertone = determineUndertone(skin.r, skin.g, skin.b);
    const palette = generatePalette(skin.r, skin.g, skin.b);
    setResult({ hex: skin.hex, undertone, palette });
    onPaletteGenerated(palette, undertone);

    // Get recommended clothes for this undertone
    const recs = getUndertoneRecommendations(undertone, palette, 6);
    setRecommendations(recs);
  };

  const undertoneDescriptions = {
    Warm: "Earthy, golden, and warm hues like terracotta, olive, gold, beige, and coral flatter your skin beautifully.",
    Cool: "Jewel tones, icy shades, and blue-based colors like navy, emerald, slate, and berry complement your complexion.",
    Neutral: "You're versatile! Both warm and cool tones work — from soft pinks to muted blues, earth tones to pastels.",
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">
          Analyze My Colors
        </h2>
        <p className="text-muted-foreground">
          Upload a clear, well-lit selfie with your face centered to discover
          your undertone and personal color palette.
        </p>
      </div>

      <ImageUploader
        label="Your Selfie"
        preview={preview}
        onImageLoad={(data, prev) => {
          setImageData(data);
          setPreview(prev);
          setResult(null);
          setRecommendations([]);
          setError(null);
        }}
      />

      <Button
        onClick={handleAnalyze}
        disabled={!imageData}
        className="w-full"
        size="lg"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Analyze My Skin Tone
      </Button>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          ⚠️ {error}
        </div>
      )}

      {result && (
        <>
          {/* Skin Tone Result */}
          <div className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm animate-fade-in-up">
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-16 rounded-full border-2 border-border shadow-sm"
                style={{ backgroundColor: result.hex }}
              />
              <div>
                <p className="text-lg font-semibold text-card-foreground">
                  Detected Skin Tone:{" "}
                  <span style={{ color: result.hex }}>{result.hex}</span>
                </p>
                <p className="text-muted-foreground">
                  Undertone:{" "}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5 text-sm font-semibold text-primary">
                    {result.undertone === "Warm" && "🌅"}
                    {result.undertone === "Cool" && "❄️"}
                    {result.undertone === "Neutral" && "⚖️"}
                    {result.undertone}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              {undertoneDescriptions[result.undertone]}
            </p>

            <ColorSwatch
              colors={result.palette}
              label="Your Flattering Color Palette"
            />
          </div>

          {/* Recommended Clothes */}
          {recommendations.length > 0 && (
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Clothes That Suit Your{" "}
                  <span className="gradient-text">{result.undertone}</span>{" "}
                  Tone
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on your skin tone analysis, these modern pieces will
                complement your natural coloring perfectly.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {recommendations.map((p, i) => (
                  <ProductCard key={i} product={p} paletteColors={result.palette} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AnalyzeColors;
