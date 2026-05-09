# 👗 Style‑Me — SpectraMatch AI Stylist

**Style‑Me** is a privacy‑first, browser‑based fashion assistant that uses
computer vision and color theory to recommend clothing that flatters **your**
skin tone. Just upload a selfie, describe the occasion, and SpectraMatch builds
a personalized palette, suggests matching products from a 12k‑item catalog, and
even lets you assemble complete outfits — all running client‑side.

[![TypeScript](https://img.shields.io/badge/TypeScript-97.9%25-blue)](https://github.com/HarshPawar-7/Style-Me)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

<p align="center">
  <img src="public/og-image.png" alt="Style-Me Demo" width="600"/>
</p>

## ✨ Features

- **🎨 Skin Tone Analysis** – Detects your skin color from a selfie using
  face‑api.js, classifies your undertone (Warm / Cool / Neutral), and generates
  a 6‑color harmony palette.
- **🔍 Style Search** – Type a style or occasion (“casual brunch”, “office
  wear”) and get keyword‑matched product suggestions.
- **🌈 Color Filtering** – Products are filtered using perceptually accurate
  Delta‑E CIEDE2000 color distance so only compatible items appear.
- **👕 Outfit Builder** – Drag pieces into slots (top, bottom, shoes, etc.) and
  see the total price. All items respect your personal palette.
- **📸 Inspiration Upload** – Upload a photo of a celebrity outfit or Pinterest
  mood board; SpectraMatch extracts the dominant colors and mixes them with your
  palette for hybrid recommendations.
- **📦 Real Product Catalog** – Comes with a static dataset of 12,491 products
  from Myntra (Indian fashion retailer), each with color hex, style tags,
  undertone compatibility, gender, price, and image URL.
- **🔒 100% Client‑Side** – No server required. Your selfie never leaves your
  browser. Palettes, matching, and recommendation logic all run in the frontend.
- **📱 Responsive** – Built with Tailwind CSS and shadcn/ui components. Works
  on desktop, tablet, and mobile.

## 🧠 How It Works

1. **Upload a selfie** → Face‑api.js detects your gender and the app samples
   your skin color.
2. **Analyze Colors** → The app determines your undertone (Warm/Cool/Neutral)
   using LAB color space, then generates a 6‑color palette based on
   complementary, analogous, or triadic harmony rules.
3. **Describe your style** → Type an occasion or style keyword. Optionally
   upload an inspiration photo.
4. **Get Recommendations** → The matching engine filters products by gender,
   undertone, and color distance, then selects the top 18 most harmonious items
   (3 per palette color).
5. **Build an Outfit** → Use the Outfit Builder to mix and match pieces. The
   app calculates total price and shows color harmony for the complete look.
6. **Detailed Styling Advice** → Based on your hair color, eye color, and body
   proportions (optional), the app pulls specific recommendations from a
   comprehensive CSV database — including suggested fabrics, patterns, jewelry
   metals, and even what to exaggerate or avoid.

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/HarshPawar-7/Style-Me.git
cd Style-Me

# Install dependencies
npm install

# Start the development server
npm run dev
