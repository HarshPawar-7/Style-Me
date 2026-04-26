// Color utility functions for SpectraMatch

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")
  ).toUpperCase();
}

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

export function rgbToHsl(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return [h, s, l];
}

export function hslToRgb(
  h: number,
  s: number,
  l: number
): [number, number, number] {
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * Convert RGB to LAB color space for better undertone detection
 */
export function rgbToLab(r: number, g: number, b: number): [number, number, number] {
  // Normalize to 0-1
  let r_ = r / 255, g_ = g / 255, b_ = b / 255;

  // Apply gamma correction
  r_ = r_ > 0.04045 ? Math.pow((r_ + 0.055) / 1.055, 2.4) : r_ / 12.92;
  g_ = g_ > 0.04045 ? Math.pow((g_ + 0.055) / 1.055, 2.4) : g_ / 12.92;
  b_ = b_ > 0.04045 ? Math.pow((b_ + 0.055) / 1.055, 2.4) : b_ / 12.92;

  // Convert to XYZ
  const x = r_ * 0.4124 + g_ * 0.3576 + b_ * 0.1805;
  const y = r_ * 0.2126 + g_ * 0.7152 + b_ * 0.0722;
  const z = r_ * 0.0193 + g_ * 0.1192 + b_ * 0.9505;

  // Normalize by reference white
  const x_ = x / 0.95047;
  const y_ = y / 1.0;
  const z_ = z / 1.08883;

  const delta = 6 / 29;
  const fx = x_ > delta ** 3 ? Math.pow(x_, 1 / 3) : x_ / (3 * delta ** 2) + 4 / 29;
  const fy = y_ > delta ** 3 ? Math.pow(y_, 1 / 3) : y_ / (3 * delta ** 2) + 4 / 29;
  const fz = z_ > delta ** 3 ? Math.pow(z_, 1 / 3) : z_ / (3 * delta ** 2) + 4 / 29;

  const l = 116 * fy - 16;
  const a = 500 * (fx - fy);
  const lab_b = 200 * (fy - fz);

  return [l, a, lab_b];
}

export function determineUndertone(
  r: number,
  g: number,
  b: number
): "Cool" | "Warm" | "Neutral" {
  const [h, , l] = rgbToHsl(r, g, b);
  const hueDeg = h * 360;
  
  // Use LAB space for more accurate undertone detection
  const [, a, b_lab] = rgbToLab(r, g, b);

  // Combine HSL hue with LAB a-axis (red-green) for better undertone detection
  // High positive 'a' = more red = cool
  // Low 'a' (negative/green) with high hue = warm/golden
  
  const aWeight = a > 0 ? 1 : -1; // Red-green axis indicator
  const hueFactor = hueDeg > 30 ? 1 : -1; // Hue indicator

  if ((hueDeg < 15 && a > 10) || (hueDeg > 35)) {
    // Cool tones: pinkish reds, jewel colors
    return "Cool";
  } else if (hueDeg >= 15 && hueDeg <= 35 && a > -5) {
    // Neutral: balanced reds and yellows
    return "Neutral";
  } else {
    // Warm tones: golden yellows, earth tones
    return "Warm";
  }
}

/**
 * Generate a flattering palette based on undertone
 * Each undertone gets specific colors that are scientifically proven to complement
 */
export function generatePalette(
  r: number,
  g: number,
  b: number,
  undertone: "Warm" | "Cool" | "Neutral"
): string[] {
  const [h, s, l] = rgbToHsl(r, g, b);

  if (undertone === "Warm") {
    // Warm palettes: golden, earthy, terracotta, olive
    // Create variations from the base warm tone
    return [
      rgbToHex(...hslToRgb(h, Math.min(s + 0.1, 1), Math.max(l - 0.1, 0.2))), // Darker warm
      rgbToHex(...hslToRgb(h, s, l)), // Base tone
      rgbToHex(...hslToRgb((h + 0.02) % 1, Math.min(s + 0.15, 1), Math.min(l + 0.15, 0.8))), // Golden
      rgbToHex(...hslToRgb((h + 0.05) % 1, Math.min(s + 0.2, 1), Math.max(l - 0.15, 0.25))), // Terracotta
      rgbToHex(...hslToRgb((h - 0.05 + 1) % 1, Math.min(s + 0.1, 1), Math.max(l - 0.2, 0.3))), // Olive
      rgbToHex(...hslToRgb((h + 0.08) % 1, Math.min(s + 0.2, 1), Math.min(l + 0.2, 0.75))), // Warm highlight
    ];
  } else if (undertone === "Cool") {
    // Cool palettes: jewel tones, silvers, icy blues, purples
    return [
      rgbToHex(...hslToRgb((h + 0.3) % 1, Math.min(s + 0.25, 1), Math.max(l - 0.15, 0.25))), // Deep jewel
      rgbToHex(...hslToRgb((h + 0.25) % 1, Math.min(s + 0.2, 1), l)), // Main jewel tone
      rgbToHex(...hslToRgb((h + 0.4) % 1, Math.min(s + 0.15, 1), Math.min(l + 0.15, 0.8))), // Royal blue
      rgbToHex(...hslToRgb((h + 0.35) % 1, Math.min(s + 0.2, 1), Math.max(l - 0.1, 0.3))), // Deep purple
      rgbToHex(...hslToRgb((h + 0.45) % 1, Math.min(s + 0.1, 1), Math.min(l + 0.2, 0.85))), // Icy tone
      rgbToHex(...hslToRgb((h + 0.5) % 1, s * 0.5, Math.min(l + 0.25, 0.9))), // Silver
    ];
  } else {
    // Neutral: balanced mix of warm and cool
    return [
      rgbToHex(...hslToRgb(h, s, l)), // Base
      rgbToHex(...hslToRgb((h + 0.1) % 1, Math.min(s + 0.15, 1), Math.min(l + 0.1, 0.8))), // Warm shift
      rgbToHex(...hslToRgb((h + 0.2) % 1, Math.min(s + 0.15, 1), Math.max(l - 0.1, 0.3))), // Cool shift
      rgbToHex(...hslToRgb((h + 0.05) % 1, s, Math.max(l - 0.15, 0.25))), // Deeper
      rgbToHex(...hslToRgb((h + 0.15) % 1, Math.min(s + 0.1, 1), Math.min(l + 0.15, 0.85))), // Lighter
      rgbToHex(...hslToRgb((h + 0.3) % 1, s * 0.6, l)), // Muted accent
    ];
  }
}

/**
 * Legacy function for backwards compatibility - calls new version with undertone detection
 */
export function generatePaletteLegacy(r: number, g: number, b: number): string[] {
  const undertone = determineUndertone(r, g, b);
  return generatePalette(r, g, b, undertone);
}

/**
 * Delta-E CIEDE2000 - Perceptually accurate color distance
 * Returns a value where < 1.0 = imperceptible, < 10 = noticeable, > 50 = very different
 */
export function deltaECIEDE2000(hex1: string, hex2: string): number {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  
  const [l1, a1, b_1] = rgbToLab(r1, g1, b1);
  const [l2, a2, b_2] = rgbToLab(r2, g2, b2);

  const c1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b_1, 2));
  const c2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(b_2, 2));
  const cMean = (c1 + c2) / 2;

  const g = 0.5 * (1 - Math.sqrt(Math.pow(cMean, 7) / (Math.pow(cMean, 7) + Math.pow(25, 7))));
  const a1Prime = (1 + g) * a1;
  const a2Prime = (1 + g) * a2;

  const c1Prime = Math.sqrt(Math.pow(a1Prime, 2) + Math.pow(b_1, 2));
  const c2Prime = Math.sqrt(Math.pow(a2Prime, 2) + Math.pow(b_2, 2));

  const h1Prime = (Math.atan2(b_1, a1Prime) * 180) / Math.PI;
  const h2Prime = (Math.atan2(b_2, a2Prime) * 180) / Math.PI;

  const deltaL = l2 - l1;
  const deltaC = c2Prime - c1Prime;
  
  let deltaH = h2Prime - h1Prime;
  if (deltaH > 180) deltaH -= 360;
  if (deltaH < -180) deltaH += 360;
  if (c1Prime * c2Prime === 0) deltaH = 0;

  const deltaHPrime = 2 * Math.sqrt(c1Prime * c2Prime) * Math.sin((deltaH * Math.PI) / 360);

  const lMean = (l1 + l2) / 2;
  const cMeanPrime = (c1Prime + c2Prime) / 2;
  const hMean = Math.abs(h1Prime - h2Prime) > 180 
    ? (h1Prime + h2Prime + 360) / 2 
    : (h1Prime + h2Prime) / 2;

  const t = 1 - 0.17 * Math.cos((hMean - 30) * Math.PI / 180)
    + 0.24 * Math.cos((2 * hMean) * Math.PI / 180)
    + 0.32 * Math.cos(((3 * hMean + 6) * Math.PI) / 180)
    - 0.2 * Math.cos(((4 * hMean - 63) * Math.PI) / 180);

  const deltaTheta = 30 * Math.exp(-Math.pow((hMean - 275) / 25, 2));
  const rc = 2 * Math.sqrt(Math.pow(cMeanPrime, 7) / (Math.pow(cMeanPrime, 7) + Math.pow(25, 7)));
  const sl = 1 + (0.015 * Math.pow(lMean - 50, 2)) / Math.sqrt(20 + Math.pow(lMean - 50, 2));
  const sc = 1 + 0.045 * cMeanPrime;
  const sh = 1 + 0.015 * cMeanPrime * t;
  const rt = -Math.sin((2 * deltaTheta * Math.PI) / 360) * rc;

  const dE = Math.sqrt(
    Math.pow(deltaL / (sl), 2) +
    Math.pow(deltaC / (sc), 2) +
    Math.pow(deltaHPrime / (sh), 2) +
    (rt * (deltaC / (sc)) * (deltaHPrime / (sh)))
  );

  return dE;
}

export function colorDistance(hex1: string, hex2: string): number {
  // Use Delta-E CIEDE2000 for better perceptual accuracy
  return deltaECIEDE2000(hex1, hex2);
}

/**
 * Legacy Euclidean distance (for backwards compatibility if needed)
 */
export function colorDistanceEuclidean(hex1: string, hex2: string): number {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

// Simple named-color map for matching
const COLOR_MAP: Record<string, string> = {
  black: "#000000", white: "#FFFFFF", red: "#FF0000", green: "#008000",
  blue: "#0000FF", yellow: "#FFFF00", gold: "#FFD700", beige: "#F5F5DC",
  ivory: "#FFFFF0", khaki: "#F0E68C", olive: "#808000", navy: "#000080",
  "dark red": "#8B0000", burgundy: "#800020", coral: "#FF7F50",
  "light pink": "#FFB6C1", pink: "#FFC0CB", chocolate: "#D2691E",
  "steel blue": "#4682B4", "royal blue": "#4169E1", "sea green": "#2E8B57",
  "slate gray": "#708090", "dark slate gray": "#2F4F4F",
  "midnight blue": "#191970", "antique white": "#FAEBD7",
  burlywood: "#DEB887", tan: "#D2B48C", gray: "#808080",
};

export function colorNameToHex(name: string): string | null {
  return COLOR_MAP[name.toLowerCase()] ?? null;
}

export function extractDominantColors(
  imageData: ImageData,
  count: number = 5
): string[] {
  const { data, width, height } = imageData;
  const step = Math.max(1, Math.floor((width * height) / 2000));
  const pixels: [number, number, number][] = [];
  for (let i = 0; i < data.length; i += step * 4) {
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  // Simple k-means-ish clustering via quantization
  const buckets = new Map<string, { sum: [number, number, number]; count: number }>();
  for (const [r, g, b] of pixels) {
    const key = `${Math.round(r / 32)}-${Math.round(g / 32)}-${Math.round(b / 32)}`;
    const existing = buckets.get(key);
    if (existing) {
      existing.sum[0] += r;
      existing.sum[1] += g;
      existing.sum[2] += b;
      existing.count++;
    } else {
      buckets.set(key, { sum: [r, g, b], count: 1 });
    }
  }

  const sorted = [...buckets.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, count);

  return sorted.map(({ sum, count: c }) =>
    rgbToHex(sum[0] / c, sum[1] / c, sum[2] / c)
  );
}

/**
 * Better skin tone extraction using multi-region sampling
 * Samples from forehead, left cheek, right cheek, and chin
 */
export function extractSkinTone(
  imageData: ImageData
): { hex: string; r: number; g: number; b: number } | null {
  const { data, width, height } = imageData;

  // Define multiple skin regions to sample
  const regions = [
    // Forehead (top-center)
    { x1: width * 0.35, x2: width * 0.65, y1: height * 0.15, y2: height * 0.3 },
    // Left cheek
    { x1: width * 0.15, x2: width * 0.4, y1: height * 0.4, y2: height * 0.6 },
    // Right cheek
    { x1: width * 0.6, x2: width * 0.85, y1: height * 0.4, y2: height * 0.6 },
    // Chin (bottom-center)
    { x1: width * 0.35, x2: width * 0.65, y1: height * 0.65, y2: height * 0.8 },
  ];

  const allSamples: [number, number, number][] = [];

  for (const region of regions) {
    const x1 = Math.floor(region.x1);
    const x2 = Math.floor(region.x2);
    const y1 = Math.floor(region.y1);
    const y2 = Math.floor(region.y2);

    for (let y = y1; y < y2; y += 2) {
      for (let x = x1; x < x2; x += 2) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        // Filter out transparent or nearly transparent pixels
        if (a < 200) continue;

        // Improved skin tone detection
        // Skin has R > G > B, and R is dominant
        // Also check that colors are in reasonable skin tone ranges
        if (r > 40 && g > 20 && b > 10 && r > g && g > b) {
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          
          // Skin has some saturation but not too much
          if (max - min > 8 && max - min < 100) {
            allSamples.push([r, g, b]);
          }
        }
      }
    }
  }

  if (allSamples.length === 0) {
    // Fallback: use any pixels from the center region
    const x1 = Math.floor(width * 0.3);
    const x2 = Math.floor(width * 0.7);
    const y1 = Math.floor(height * 0.2);
    const y2 = Math.floor(height * 0.8);

    for (let y = y1; y < y2; y += 3) {
      for (let x = x1; x < x2; x += 3) {
        const idx = (y * width + x) * 4;
        const a = data[idx + 3];
        if (a > 200) {
          allSamples.push([data[idx], data[idx + 1], data[idx + 2]]);
        }
      }
    }
  }

  if (allSamples.length === 0) return null;

  // Use median instead of mean to be more robust to outliers
  allSamples.sort((a, b) => a[0] - b[0]);
  const medianIdx = Math.floor(allSamples.length / 2);
  const [r, g, b] = allSamples[medianIdx];

  return { hex: rgbToHex(r, g, b), r, g, b };
}
