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

export function determineUndertone(
  r: number,
  g: number,
  b: number
): "Cool" | "Warm" | "Neutral" {
  const [h] = rgbToHsl(r, g, b);
  const hueDeg = h * 360;

  // Skin tones mostly fall between 0° and 45°
  // Lower degrees (more red/pink) mean cool tones
  // Higher degrees (more yellow/golden) mean warm tones
  if (hueDeg < 18 || hueDeg > 340) {
    return "Cool";
  } else if (hueDeg >= 18 && hueDeg < 26) {
    return "Neutral";
  } else {
    return "Warm";
  }
}

export function generatePalette(r: number, g: number, b: number): string[] {
  const [h, , l] = rgbToHsl(r, g, b);
  const s = 0.6;
  const offsets = [0.0, 0.5, 0.083, -0.083, 0.167, -0.167];
  return offsets.map((offset, i) => {
    const nh = ((h + offset) % 1 + 1) % 1;
    const nl = Math.max(0.25, Math.min(0.75, l + (i % 2 === 0 ? 0.1 : -0.1)));
    const [cr, cg, cb] = hslToRgb(nh, s, nl);
    return rgbToHex(cr, cg, cb);
  });
}

export function colorDistance(hex1: string, hex2: string): number {
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

export function extractSkinTone(
  imageData: ImageData
): { hex: string; r: number; g: number; b: number } | null {
  const { data, width, height } = imageData;
  // Sample from the center-upper region (forehead area if face centered)
  const x1 = Math.floor(width * 0.35);
  const x2 = Math.floor(width * 0.65);
  const y1 = Math.floor(height * 0.15);
  const y2 = Math.floor(height * 0.4);

  let rSum = 0, gSum = 0, bSum = 0, count = 0;

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      // Skin color filter in HSV-like heuristic
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      if (r > 60 && g > 40 && b > 20 && max - min > 15 && r > g && r > b) {
        rSum += r;
        gSum += g;
        bSum += b;
        count++;
      }
    }
  }

  if (count < 50) {
    // Fallback: just average the center region
    count = 0;
    rSum = gSum = bSum = 0;
    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        const idx = (y * width + x) * 4;
        rSum += data[idx];
        gSum += data[idx + 1];
        bSum += data[idx + 2];
        count++;
      }
    }
  }

  if (count === 0) return null;

  const r = Math.round(rSum / count);
  const g = Math.round(gSum / count);
  const b = Math.round(bSum / count);
  return { hex: rgbToHex(r, g, b), r, g, b };
}
