import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, ShoppingBag, Info, Layers, Sparkles, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import AnalyzeColors from "@/components/AnalyzeColors";
import FindStyle from "@/components/FindStyle";
import OutfitBuilder from "@/components/OutfitBuilder";
import VirtualStylist from "@/components/VirtualStylist";
import AboutTab from "@/components/AboutTab";

const Index = () => {
  const [palette, setPalette] = useState<string[]>([]);
  const [undertone, setUndertone] = useState<"Warm" | "Cool" | "Neutral" | undefined>();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Sparkles className="h-6 w-6 text-primary-foreground fill-current animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">
                <span className="gradient-text">StyleME</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                Smart Color Theory Fashion Recommender
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="analyze" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5">
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
            <TabsTrigger value="tryon" className="gap-1.5">
              <div className="flex h-3 w-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm" />
              <span className="hidden sm:inline">AI Stylist</span>
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
          <TabsContent value="tryon">
            <VirtualStylist />
          </TabsContent>
          <TabsContent value="about">
            <AboutTab />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-auto border-t border-border bg-card/30 backdrop-blur-sm py-6 text-center animate-fade-in-up">
        <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-1.5">
          made with love <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> Harsh and Manav
        </p>
      </footer>
    </div>
  );
};

export default Index;
