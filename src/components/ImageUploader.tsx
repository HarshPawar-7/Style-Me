import { useRef, useCallback } from "react";
import { Upload } from "lucide-react";

interface ImageUploaderProps {
  label: string;
  onImageLoad: (imageData: ImageData, preview: string) => void;
  preview?: string | null;
}

const ImageUploader = ({ label, onImageLoad, preview }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current!;
          const maxW = 600;
          const scale = Math.min(1, maxW / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext("2d")!;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          onImageLoad(imageData, e.target!.result as string);
        };
        img.src = e.target!.result as string;
      };
      reader.readAsDataURL(file);
    },
    [onImageLoad]
  );

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
        className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/40 p-8 transition-colors hover:border-primary/50 hover:bg-muted/70"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-h-64 rounded-lg object-contain"
          />
        ) : (
          <>
            <Upload className="mb-2 h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm text-muted-foreground">
              Click or drag to upload
            </span>
          </>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageUploader;
