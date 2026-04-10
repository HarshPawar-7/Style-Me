import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, Bot, Info } from "lucide-react";
import ImageUploader from "./ImageUploader";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, type Product } from "@/lib/products";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { client } from "@gradio/client";

const VirtualStylist = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: allProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleConsult = async () => {
    if (!preview || !selectedProduct) return;
    setError(null);
    setIsAnalyzing(true);
    setAdvice(null);
    setGeneratedImage(null);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    // Local free "model" alternative fallback generator
    const generateLocalFallback = () => {
      const undertones = selectedProduct.undertones.length > 0 ? selectedProduct.undertones.join(" or ") : "all";
      let localAdvice = `**This is your free Local AI Stylist!**\n\nThe ${selectedProduct.name} in ${selectedProduct.colorName} is a fantastic choice. As a ${selectedProduct.category} item with a ${selectedProduct.styleTags.split(" ")[0] || "trendy"} vibe, it is particularly flattering for individuals with **${undertones}** undertones.\n\n`;
      localAdvice += `**Fit & Color:** Since you are considering this, the ${selectedProduct.colorName} hue will bring a beautiful contrast or harmony to your features. The cut of this ${selectedProduct.category} generally supports a balanced silhouette.\n\n`;
      if (selectedProduct.category === "tops" || selectedProduct.category === "outerwear") {
          localAdvice += `**Pairing Suggestion 1:** I recommend pairing this with some high-waisted tailored trousers or your favorite pair of structured jeans for a balanced look.\n`;
          localAdvice += `**Pairing Suggestion 2:** Add a minimalistic pendant necklace or a clean watch to elevate the overall outfit without overpowering it.\n`;
      } else if (selectedProduct.category === "bottoms") {
          localAdvice += `**Pairing Suggestion 1:** A crisp, fitted top or a casually tucked-in blouse will complement the proportions nicely.\n`;
          localAdvice += `**Pairing Suggestion 2:** Finish the look with some classic sneakers or comfortable loafers, depending on the occasion.\n`;
      } else {
          localAdvice += `**Pairing Suggestion 1:** This piece shines when paired with neutral, complementary base layers to let it stand out.\n`;
          localAdvice += `**Pairing Suggestion 2:** Consider coordinating your accessories to match subtle details or hardware for a cohesive finish.\n`;
      }
      return localAdvice;
    };

    if (!apiKey || apiKey === "your-gemini-api-key-here" || apiKey.includes("AIzaSy-dummy")) {
      // Use free local fallback
      setTimeout(() => {
        setAdvice(generateLocalFallback());
        setIsAnalyzing(false);
      }, 1500); // simulate delay
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Faster and robust

      // Extract base64 image data
      const mimeType = preview.split(";")[0].split(":")[1];
      const base64Data = preview.split(",")[1];

      const prompt = `You are an elite virtual fashion consultant. The user has provided an image of themselves. They are thinking about wearing the following item:

Name: ${selectedProduct.name}
Color: ${selectedProduct.colorName}
Category: ${selectedProduct.category}
Price: $${selectedProduct.price}
Style: ${selectedProduct.styleTags}
Flattering Undertones: ${selectedProduct.undertones.join(", ")}

Task: Provide a highly detailed, encouraging fashion critique. 
1. Explain how this specific item's color and fit might look on their body type and skin tone based on the photo.
2. Suggest 2 other specific types of accessories or garments they could pair with it for a complete outfit.
Keep the response structured, enthusiastic, and visually descriptive.`;

      const result = await model.generateContent([
        prompt,
        {
          inlineData: {
            data: base64Data,
            mimeType,
          },
        },
      ]);
      const responseText = result.response.text();
      setAdvice(responseText);
    } catch (err: any) {
      console.error(err);
      console.log("Gemini API failed, falling back to local model.");
      // Fallback
      setAdvice(generateLocalFallback());
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleVisualTryOn = async () => {
    if (!preview || !selectedProduct) return;
    setError(null);
    setIsAnalyzing(true);
    setAdvice(null);
    setGeneratedImage(null);

    try {
      // Convert images to Blob
      const userRes = await fetch(preview);
      const userBlob = await userRes.blob();

      const prodRes = await fetch(selectedProduct.imageUrl);
      const prodBlob = await prodRes.blob();

      // Connect to IDM-VTON space on HF
      const app = await client("yisol/IDM-VTON");
      const result = await app.predict("/tryon", [
        {
          background: userBlob,
          layers: [],
          composite: null
        }, 
        prodBlob, 
        selectedProduct.name, // Garment Description
        true, // is_checked (Use auto-generated mask)
        true, // is_checked_crop (Crop, mask, save to restore)
        30, // Denoising Steps
        42, // Seed
      ]) as any;

      if (result && result.data && result.data[0]) {
         const outImgUrl = typeof result.data[0] === 'string' ? result.data[0] : result.data[0].url;
         setGeneratedImage(outImgUrl);
      } else {
         throw new Error("Invalid response format from Virtual Try-On API");
      }
    } catch (err: any) {
      console.error(err);
      setError(`VTON API Error: ${err?.message || "HuggingFace Space might be overloaded. Please try again later."}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Safe markdown text formatter
  const formatText = (text: string) => {
    return text.split('\n').map((str, index) => {
      // Bold text handling
      const parts = str.split(/\*\*(.*?)\*\*/g);
      if (parts.length > 1) {
        return (
          <p key={index} className="mb-2">
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </p>
        );
      }
      return <p key={index} className="mb-2">{str}</p>;
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground">AI Virtual Stylist</h2>
        <p className="text-muted-foreground">
          Upload a full-body photo and pick a clothing item. Our Gemini Vision AI will analyze your look and give you a detailed fashion critique.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 text-left">
          <ImageUploader
            label="Your Full Body Photo"
            preview={preview}
            onImageLoad={(_, prev) => {
              setPreview(prev);
              setAdvice(null);
              setGeneratedImage(null);
              setError(null);
            }}
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-foreground">Select an Item to Try On</label>
          <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto rounded-xl border border-border p-2 bg-muted/20">
             {allProducts.map((p) => (
               <button
                 key={p.id}
                 onClick={() => setSelectedProduct(p)}
                 className={`flex items-center gap-2 rounded-lg border-2 p-1 text-left transition-colors ${
                   selectedProduct?.id === p.id ? "border-primary bg-primary/10" : "border-transparent hover:bg-muted"
                 }`}
               >
                 <img src={p.imageUrl} className="h-12 w-12 rounded object-cover" alt={p.name} />
                 <div className="overflow-hidden">
                   <p className="truncate text-xs font-semibold">{p.name}</p>
                   <p className="text-[10px] text-muted-foreground capitalize">{p.colorName}</p>
                 </div>
               </button>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={handleConsult}
          disabled={!preview || !selectedProduct || isAnalyzing}
          className="w-full"
          size="lg"
          variant="outline"
        >
          {isAnalyzing ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Bot className="mr-2 h-4 w-4" />
          )}
          Style Output (Text)
        </Button>

        <Button
          onClick={handleVisualTryOn}
          disabled={!preview || !selectedProduct || isAnalyzing}
          className="w-full relative overflow-hidden group border-0"
          size="lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-90 transition-opacity group-hover:opacity-100" />
          <span className="relative flex items-center z-10 text-white font-medium">
            {isAnalyzing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Visual Try-On (Image)
          </span>
        </Button>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive flex items-center gap-2">
           <Info className="h-4 w-4 shrink-0" />
           {error}
        </div>
      )}

      {advice && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm animate-fade-in-up">
           <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Style Profile Generated</h3>
           </div>
           <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
              {formatText(advice)}
           </div>
        </div>
      )}

      {generatedImage && (
        <div className="rounded-xl border border-primary/20 bg-card p-6 shadow-sm animate-fade-in-up">
           <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Your Virtual Try-On</h3>
           </div>
           <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-md border border-border bg-muted flex items-center justify-center">
              <img src={generatedImage} alt="Generated Try-On" className="object-cover w-full h-full" />
           </div>
           <p className="text-center text-xs text-muted-foreground mt-4 italic">
              Powered by IDM-VTON. AI generated images may have artifacts or distortions.
           </p>
        </div>
      )}
    </div>
  );
};

export default VirtualStylist;
