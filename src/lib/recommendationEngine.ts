export interface StylingRecommendation {
  hairColor: string;
  eyeColor: string;
  skinTone: string;
  underTone: string;
  torsoLength: string;
  bodyProportion: string;
  recommendedClothingColors: string[];
  avoidClothingColors: string[];
  recommendedFittingStyle: string;
  recommendedMaterials: string[];
  recommendedPatterns: string[];
  recommendedJewelryMetal: string;
  recommendedShoes: string;
  recommendedColorWheelRegion: string;
  avoidColorWheelRegion: string;
  fabricNature: string;
  dontExaggerate: string;
  doExaggerate: string;
}

let cachedRecommendations: StylingRecommendation[] | null = null;

/**
 * Parse CSV line, handling quoted fields
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

/**
 * Load and parse recommendations CSV
 */
export async function loadRecommendations(): Promise<StylingRecommendation[]> {
  if (cachedRecommendations) {
    return cachedRecommendations;
  }

  try {
    const response = await fetch("/recommendations.csv");
    if (!response.ok) {
      throw new Error(`Failed to fetch recommendations: ${response.statusText}`);
    }
    
    const text = await response.text();
    const lines = text.split("\n").filter(line => line.trim());
    
    if (lines.length < 2) {
      console.error("CSV is empty or malformed");
      return [];
    }

    // Skip header line
    const dataLines = lines.slice(1);
    const recommendations: StylingRecommendation[] = [];

    for (const line of dataLines) {
      const fields = parseCSVLine(line);
      
      if (fields.length < 18) continue; // Skip incomplete rows

      const rec: StylingRecommendation = {
        hairColor: fields[0],
        eyeColor: fields[1],
        skinTone: fields[2],
        underTone: fields[3],
        torsoLength: fields[4],
        bodyProportion: fields[5],
        recommendedClothingColors: fields[6]
          .split(",")
          .map(c => c.trim())
          .filter(c => c),
        avoidClothingColors: fields[7]
          .split(",")
          .map(c => c.trim())
          .filter(c => c),
        recommendedFittingStyle: fields[8],
        recommendedMaterials: fields[9]
          .split(",")
          .map(m => m.trim())
          .filter(m => m),
        recommendedPatterns: fields[10]
          .split(",")
          .map(p => p.trim())
          .filter(p => p),
        recommendedJewelryMetal: fields[11],
        recommendedShoes: fields[12],
        recommendedColorWheelRegion: fields[13],
        avoidColorWheelRegion: fields[14],
        fabricNature: fields[15],
        dontExaggerate: fields[16],
        doExaggerate: fields[17],
      };

      recommendations.push(rec);
    }

    cachedRecommendations = recommendations;
    console.log(`✅ Loaded ${recommendations.length} styling recommendations`);
    return recommendations;
  } catch (error) {
    console.error("Error loading recommendations:", error);
    return [];
  }
}

/**
 * Find recommendation by attributes
 * Returns best match or null if not found
 */
export async function findRecommendation(
  hairColor?: string,
  eyeColor?: string,
  skinTone?: string,
  underTone?: string,
  torsoLength?: string,
  bodyProportion?: string
): Promise<StylingRecommendation | null> {
  const recommendations = await loadRecommendations();
  
  if (recommendations.length === 0) return null;

  // Find exact match first
  for (const rec of recommendations) {
    if (
      (!hairColor || rec.hairColor.toLowerCase() === hairColor.toLowerCase()) &&
      (!eyeColor || rec.eyeColor.toLowerCase() === eyeColor.toLowerCase()) &&
      (!skinTone || rec.skinTone.toLowerCase() === skinTone.toLowerCase()) &&
      (!underTone || rec.underTone.toLowerCase() === underTone.toLowerCase()) &&
      (!torsoLength || rec.torsoLength.toLowerCase() === torsoLength.toLowerCase()) &&
      (!bodyProportion || rec.bodyProportion.toLowerCase() === bodyProportion.toLowerCase())
    ) {
      return rec;
    }
  }

  // If no exact match, find partial match (by undertone and skin tone at minimum)
  if (skinTone && underTone) {
    for (const rec of recommendations) {
      if (
        rec.skinTone.toLowerCase() === skinTone.toLowerCase() &&
        rec.underTone.toLowerCase() === underTone.toLowerCase()
      ) {
        return rec;
      }
    }
  }

  return null;
}
