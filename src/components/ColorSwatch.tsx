interface ColorSwatchProps {
  colors: string[];
  label?: string;
}

const ColorSwatch = ({ colors, label }: ColorSwatchProps) => (
  <div className="space-y-2">
    {label && (
      <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
    )}
    <div className="flex flex-wrap gap-2">
      {colors.map((color, i) => (
        <div key={i} className="group relative">
          <div
            className="h-14 w-14 rounded-lg border border-border shadow-sm transition-transform group-hover:scale-110"
            style={{ backgroundColor: color }}
          />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
            {color}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ColorSwatch;
