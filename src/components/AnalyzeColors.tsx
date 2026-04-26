import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Sparkles, ShoppingBag, Loader2, Users } from "lucide-react";
import ImageUploader from "./ImageUploader";
import ColorSwatch from "./ColorSwatch";
import ProductCard from "./ProductCard";
import RecommendationDetails from "./RecommendationDetails";
import {
  extractSkinTone,
  determineUndertone,
  generatePalette,
} from "@/lib/colorUtils";
import { getSmartColorRecommendations } from "@/lib/matching";
import { fetchProducts } from "@/lib/products";
import { findRecommendation, StylingRecommendation } from "@/lib/recommendationEngine";
import { useQuery } from "@tanstack/react-query";
import * as faceapi from "@vladmandic/face-api";

interface AnalyzeColorsProps {
  onPaletteGenerated: (palette: string[], undertone: "Warm" | "Cool" | "Neutral") => void;
}

const AnalyzeColors = ({ onPaletteGenerated }: AnalyzeColorsProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedGender, setDetectedGender] = useState<"men" | "women" | null>(null);
  const [selectedGenderFilter, setSelectedGenderFilter] = useState<"all" | "men" | "women">("all");
  
  const [result, setResult] = useState<{
    hex: string;
    undertone: "Warm" | "Cool" | "Neutral";
    palette: string[];
  } | null>(null);
  
  const [stylingRecommendation, setStylingRecommendation] = useState<StylingRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load face-api models once
  useEffect(() => {
    const loadModels = async () => {
      try {
        const modelUrl = 'https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights';
        await faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl);
        await faceapi.nets.ageGenderNet.loadFromUri(modelUrl);
      } catch (err) {
        console.error("Failed to load face-api models:", err);
      }
    };
    loadModels();
  }, []);

  const { data: allProducts = [], isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleAnalyze = async () => {
    if (!imageData || !preview) return;
    setError(null);
    setIsDetecting(true);

    try {
      // 1. Detect Skin Tone
      const skin = extractSkinTone(imageData);
      if (!skin) {
        setError("Could not detect skin tones. Please try a well-lit selfie with your face centered.");
        setIsDetecting(false);
        return;
      }

      // 2. Detect Gender using face-api
      const imgEl = document.createElement("img");
      imgEl.src = preview;
      
      // Wait for image to load to apply faceapi
      await new Promise((resolve) => { imgEl.onload = resolve; });
      
      const detection = await faceapi.detectSingleFace(imgEl, new faceapi.TinyFaceDetectorOptions()).withAgeAndGender();
      
      let genderPref: "men" | "women" | null = null;
      if (detection) {
        genderPref = detection.gender === "male" ? "men" : "women";
        setDetectedGender(genderPref);
      }

      // 3. Set Colors with undertone-based palette
      const undertone = determineUndertone(skin.r, skin.g, skin.b);
      const palette = generatePalette(skin.r, skin.g, skin.b, undertone);
      setResult({ hex: skin.hex, undertone, palette });
      onPaletteGenerated(palette, undertone);

      // 4. Auto-apply gender filter based on detection
      if (genderPref) {
        setSelectedGenderFilter(genderPref);
      }

      // 5. Load Styling Recommendations
      const recommendation = await findRecommendation(
        undefined, // hairColor (not detected)
        undefined, // eyeColor (not detected)
        "Very Fair", // Default skin tone - in real scenario, map RGB to skin tone
        undertone,
        undefined, // torsoLength (not detected)
        undefined  // bodyProportion (not detected)
      );
      
      if (recommendation) {
        setStylingRecommendation(recommendation);
        console.log("✅ Styling recommendation loaded:", recommendation);
      }

    } catch (err) {
      console.error(err);
      setError("An error occurred during analysis.");
    } finally {
      setIsDetecting(false);
    }
  };

  // Derive recommendations on the fly - using smart color matching
  let recommendations = [];
  if (result && allProducts.length > 0 && detectedGender) {
    // Use detected gender or selected filter (with fallback to detected)
    const genderForFiltering = 
      selectedGenderFilter !== "all" 
        ? (selectedGenderFilter as "men" | "women") 
        : detectedGender;
    
    recommendations = getSmartColorRecommendations(
      allProducts,
      result.undertone,
      genderForFiltering,
      result.palette,
      18
    );
  }

  const undertoneDescriptions = {
    Warm: "Earthy, golden, and warm hues flatter your skin beautifully.",
    Cool: "Jewel tones, icy shades, and blue-based colors complement your complexion.",
    Neutral: "You're versatile! Both warm and cool tones work nicely.",
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">
          Analyze My Colors & Style
        </h2>
        <p className="text-muted-foreground">
          Upload a selfie. We'll use AI to identify your skin undertone and gender to fetch real matching apparel from our partner APIs.
        </p>
      </div>

      <ImageUploader
        label="Your Selfie"
        preview={preview}
        onImageLoad={(data, prev) => {
          setImageData(data);
          setPreview(prev);
          setResult(null);
          setStylingRecommendation(null);
          setDetectedGender(null);
          setSelectedGenderFilter("all");
          setError(null);
        }}
      />

      <Button
        onClick={handleAnalyze}
        disabled={!imageData || isDetecting || isLoadingProducts}
        className="w-full"
        size="lg"
      >
        {isDetecting || isLoadingProducts ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}
        {isLoadingProducts ? "Loading Catalog..." : isDetecting ? "Running AI Models..." : "Analyze My Photo"}
      </Button>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
           {error}
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
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-0.5 text-sm font-semibold text-primary">
                    {result.undertone === "Warm" && "🌅"}
                    {result.undertone === "Cool" && "❄️"}
                    {result.undertone === "Neutral" && "⚖️"}
                    {result.undertone}
                  </span>
                  {detectedGender && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-0.5 text-sm font-semibold text-secondary-foreground">
                       {detectedGender === "men" ? "Men's Fit" : "Women's Fit"}
                    </span>
                  )}
                </div>
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

          {/* Styling Recommendations */}
          {stylingRecommendation && (
            <RecommendationDetails recommendation={stylingRecommendation} />
          )}

          {/* Recommended Clothes */}
          {recommendations.length > 0 && (
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    Shop Your Match
                  </h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <ToggleGroup 
                    type="single" 
                    value={selectedGenderFilter}
                    onValueChange={(value) => {
                      if (value) setSelectedGenderFilter(value as "all" | "men" | "women");
                    }}
                    className="border border-border rounded-lg p-1 bg-muted/50"
                  >
                    <ToggleGroupItem value="all" aria-label="All" className="text-xs">
                      All
                    </ToggleGroupItem>
                    <ToggleGroupItem value="women" aria-label="Women" className="text-xs">
                      👩 Women
                    </ToggleGroupItem>
                    <ToggleGroupItem value="men" aria-label="Men" className="text-xs">
                      👨 Men
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Showing real products from our catalog <span className="text-xs text-muted-foreground/70">(filtered by {selectedGenderFilter === "all" ? "all categories" : selectedGenderFilter})</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {recommendations.map((p, i) => (
                  <ProductCard key={p.id} product={p} paletteColors={result.palette} />
                ))}
              </div>
            </div>
          )}
          
          {recommendations.length === 0 && (
             <p className="text-sm text-muted-foreground italic mt-4">
                 Sorry, we couldn't find any real products matching your criteria currently in stock.
             </p>
          )}
        </>
      )}
    </div>
  );
};

export default AnalyzeColors;
