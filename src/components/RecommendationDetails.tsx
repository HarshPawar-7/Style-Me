import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StylingRecommendation } from "@/lib/recommendationEngine";
import { CheckCircle2, XCircle } from "lucide-react";

interface RecommendationDetailsProps {
  recommendation: StylingRecommendation;
}

export default function RecommendationDetails({ recommendation }: RecommendationDetailsProps) {
  return (
    <div className="space-y-4 animate-fade-in-up">
      {/* Color Recommendations */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">👗 Color Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Recommended Colors
            </p>
            <div className="flex flex-wrap gap-2">
              {recommendation.recommendedClothingColors.map((color) => (
                <Badge key={color} variant="outline" className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                  {color}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Avoid Colors
            </p>
            <div className="flex flex-wrap gap-2">
              {recommendation.avoidClothingColors.map((color) => (
                <Badge key={color} variant="outline" className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                  {color}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">Color Wheel Region</p>
            <p className="text-sm text-foreground">{recommendation.recommendedColorWheelRegion}</p>
          </div>
        </CardContent>
      </Card>

      {/* Styling Details */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">✨ Styling Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Fitting Style</p>
            <p className="text-sm font-medium text-foreground">{recommendation.recommendedFittingStyle}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Fabric Nature</p>
            <p className="text-sm font-medium text-foreground">{recommendation.fabricNature}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Jewelry Metal</p>
            <p className="text-sm font-medium text-foreground">{recommendation.recommendedJewelryMetal}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Shoes</p>
            <p className="text-sm font-medium text-foreground">{recommendation.recommendedShoes}</p>
          </div>

          <div className="col-span-full">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Materials</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {recommendation.recommendedMaterials.map((material) => (
                <Badge key={material} variant="secondary">
                  {material}
                </Badge>
              ))}
            </div>
          </div>

          <div className="col-span-full">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Patterns</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {recommendation.recommendedPatterns.map((pattern) => (
                <Badge key={pattern} variant="secondary">
                  {pattern}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dos and Don'ts */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">💡 Fashion Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-1">Don't Exaggerate</p>
            <p className="text-sm text-foreground">{recommendation.dontExaggerate}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Do Exaggerate</p>
            <p className="text-sm text-foreground">{recommendation.doExaggerate}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
