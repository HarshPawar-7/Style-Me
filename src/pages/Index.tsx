import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, ShoppingBag, Info, Layers } from "lucide-react";
import AnalyzeColors from "@/components/AnalyzeColors";
import FindStyle from "@/components/FindStyle";
import OutfitBuilder from "@/components/OutfitBuilder";
import AboutTab from "@/components/AboutTab";

const Index = () => {
  const [palette, setPalette] = useState<string[]>([]);
  const [undertone, setUndertone] = useState<"Warm" | "Cool" | "Neutral" | undefined>();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center gap-3 py-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Palette className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">
              <span className="gradient-text">SpectraMatch</span>{" "}
              <span className="text-foreground">AI Stylist</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Smart Color Theory Fashion Recommender
            </p>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="analyze" className="space-y-6">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4">
            <TabsTrigger value="analyze" className="gap-1.5">
              <Palette className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Analyze</span>
            </TabsTrigger>
            <TabsTrigger value="style" className="gap-1.5">
              <ShoppingBag className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Find Style</span>
            </TabsTrigger>
            <TabsTrigger value="builder" className="gap-1.5">
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Build Look</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="gap-1.5">
              <Info className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analyze">
            <AnalyzeColors
              onPaletteGenerated={(p, u) => {
                setPalette(p);
                setUndertone(u);
              }}
            />
          </TabsContent>
          <TabsContent value="style">
            <FindStyle palette={palette} undertone={undertone} />
          </TabsContent>
          <TabsContent value="builder">
            <OutfitBuilder palette={palette} undertone={undertone} />
          </TabsContent>
          <TabsContent value="about">
            <AboutTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
