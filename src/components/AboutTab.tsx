const AboutTab = () => (
  <div className="mx-auto max-w-2xl animate-fade-in-up prose prose-sm text-foreground">
    <h2 className="text-2xl font-bold">About SpectraMatch AI Stylist</h2>
    <p className="text-muted-foreground">
      <strong>SpectraMatch</strong> uses computer vision and smart color theory
      to recommend fashion items that flatter <em>your</em> unique skin tone and
      match your style preferences — all running right in the browser.
    </p>

    <h3 className="text-lg font-semibold mt-6">How It Works</h3>
    <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
      <li>
        <strong>Skin Tone Analysis</strong> — Your selfie is analyzed
        client-side. The app samples your skin color, determines your undertone,
        and generates a personal palette using color harmony rules.
      </li>
      <li>
        <strong>Style Matching</strong> — Your style query is keyword-matched
        against product descriptions to surface the most relevant items.
      </li>
      <li>
        <strong>Color Filtering</strong> — Products are filtered so only
        color-compatible items appear, using perceptual color distance.
      </li>
    </ol>

    <h3 className="text-lg font-semibold mt-6">Future Enhancements</h3>
    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
      <li>Body shape analysis &amp; silhouette recommendations</li>
      <li>Live e-commerce API integration (Zara, ASOS)</li>
      <li>LLM-powered style rationale</li>
      <li>Virtual try-on with diffusion models</li>
      <li>Voice-based style queries via Whisper</li>
    </ul>

    <p className="mt-6 text-xs text-muted-foreground italic">
      Built with ❤️ for the love of color science and fashion.
    </p>
  </div>
);

export default AboutTab;
