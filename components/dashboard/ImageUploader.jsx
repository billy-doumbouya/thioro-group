"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { uploadToCloudinary } from "@/lib/cloudinary";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ImageUploader({
  value = [],
  onChange,
  multiple = false,
  maxFiles = 5,
}) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previews, setPreviews] = useState(value);

  const handleUpload = async (files) => {
    const fileArray = Array.from(files);
    if (!multiple && fileArray.length > 1) {
      toast.error("Une seule image autorisée");
      return;
    }
    if (previews.length + fileArray.length > maxFiles) {
      toast.error(`Maximum ${maxFiles} images autorisées`);
      return;
    }

    setUploading(true);
    try {
      const uploaded = await Promise.all(
        fileArray.map(async (file) => {
          // Prévisualisation locale immédiate
          const localUrl = URL.createObjectURL(file);
          const result = await uploadToCloudinary(file);
          return {
            url: result.secure_url,
            publicId: result.public_id,
            localUrl,
          };
        }),
      );

      const newPreviews = [...previews, ...uploaded.map((u) => u.url)];
      setPreviews(newPreviews);
      onChange?.(newPreviews);
      toast.success(`${uploaded.length} image(s) uploadée(s) avec succès`);
    } catch {
      toast.error("Échec de l'upload. Vérifiez votre connexion.");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index) => {
    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);
    onChange?.(newPreviews);
  };

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      handleUpload(e.dataTransfer.files);
    },
    [previews],
  );

  return (
    <div className="space-y-3">
      {/* Zone de drop */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => document.getElementById("file-input").click()}
        className={cn(
          "border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all",
          dragging
            ? "border-bleu-electrique bg-bleu-clair scale-[1.02]"
            : "border-gray-200 hover:border-bleu-electrique hover:bg-bleu-clair/50",
        )}
      >
        <input
          id="file-input"
          type="file"
          accept="image/*"
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleUpload(e.target.files)}
        />
        {uploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 size={28} className="text-bleu-electrique animate-spin" />
            <p className="text-sm font-opensans text-bleu-electrique font-medium">
              Upload en cours...
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-bleu-clair flex items-center justify-center">
              <Upload size={20} className="text-bleu-electrique" />
            </div>
            <p className="text-sm font-opensans font-semibold text-gray-700">
              Glisser-déposer ou cliquer pour choisir
            </p>
            <p className="text-xs font-opensans text-gris-moyen">
              PNG, JPG, WEBP — Max 5 MB par image
            </p>
          </div>
        )}
      </div>

      {/* Prévisualisations */}
      <AnimatePresence>
        {previews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-3"
          >
            {previews.map((url, index) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={url}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                    className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
