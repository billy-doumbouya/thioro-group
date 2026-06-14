"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { Trash2, Loader2, Images, Plus, X } from "lucide-react";

const CATEGORIES = [
  "general",
  "electricite",
  "eau",
  "peche",
  "equipe",
  "evenements",
];

export default function GaleriePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [newImages, setNewImages] = useState([]);
  const [saving, setSaving] = useState(false);
  const [categorie, setCategorie] = useState("tous");
  const [uploadCat, setUploadCat] = useState("general");

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/galerie");
      if (res.ok) setImages(await res.json());
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const saveImages = async () => {
    if (!newImages.length) {
      toast.error("Aucune image sélectionnée");
      return;
    }
    setSaving(true);
    try {
      await Promise.all(
        newImages.map((url) =>
          fetch("/api/galerie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              url,
              publicId: url.split("/").pop(),
              categorie: uploadCat,
            }),
          }),
        ),
      );
      toast.success(`${newImages.length} image(s) ajoutée(s)`);
      setUploaderOpen(false);
      setNewImages([]);
      fetchImages();
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    }
    setSaving(false);
  };

  const deleteImage = async (id) => {
    if (!confirm("Supprimer cette image ?")) return;
    await fetch(`/api/galerie/${id}`, { method: "DELETE" });
    toast.success("Image supprimée");
    setImages((i) => i.filter((x) => x.id !== id));
  };

  const imagesFiltrees =
    categorie === "tous"
      ? images
      : images.filter((img) => img.categorie === categorie);

  return (
    <div className="flex-1 overflow-y-auto">
      <TopNav titre="Galerie photos" />

      <div className="p-6">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400 font-[Open_Sans] text-sm">
            {images.length} photo(s)
          </p>
          <button
            onClick={() => setUploaderOpen(true)}
            className="flex items-center gap-2 bg-[#0054A6] text-white px-5 py-2.5 rounded-xl font-[Open_Sans] font-semibold text-sm hover:bg-[#003d7a] transition-colors shadow-md"
          >
            <Plus size={16} /> Ajouter des photos
          </button>
        </div>

        {/* ── Filtres catégories ── */}
        <div className="flex gap-2 flex-wrap mb-6">
          {["tous", ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCategorie(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-[Open_Sans] font-medium capitalize transition-all
                ${
                  categorie === c
                    ? "bg-[#0054A6] text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-500 hover:border-[#0054A6] hover:text-[#0054A6]"
                }`}
            >
              {c === "tous" ? "Toutes" : c}
            </button>
          ))}
        </div>

        {/* ── Contenu ── */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 size={32} className="animate-spin text-[#0054A6]" />
          </div>
        ) : imagesFiltrees.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-300">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <Images size={28} className="text-gray-300" />
            </div>
            <p className="text-sm font-[Open_Sans] text-gray-400">
              Aucune photo dans cette catégorie
            </p>
            <p className="text-xs font-[Open_Sans] text-gray-300 mt-1">
              Cliquez sur "Ajouter des photos" pour commencer
            </p>
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {imagesFiltrees.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="group relative rounded-xl overflow-hidden break-inside-avoid"
              >
                <img
                  src={img.url}
                  alt={img.titre || "Photo"}
                  className="w-full object-cover"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  {img.categorie && (
                    <span className="text-[10px] font-[Open_Sans] font-bold text-white/70 uppercase tracking-wider">
                      {img.categorie}
                    </span>
                  )}
                  <button
                    onClick={() => deleteImage(img.id)}
                    className="w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ── Modal upload ── */}
      <AnimatePresence>
        {uploaderOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={(e) =>
              e.target === e.currentTarget && setUploaderOpen(false)
            }
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl"
            >
              {/* Header modal */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-[Montserrat] font-bold text-lg text-gray-900">
                  Ajouter des photos
                </h2>
                <button
                  onClick={() => setUploaderOpen(false)}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              </div>

              {/* Sélection catégorie */}
              <div className="mb-4">
                <label className="block text-sm font-[Open_Sans] font-medium text-gray-700 mb-1.5">
                  Catégorie
                </label>
                <select
                  value={uploadCat}
                  onChange={(e) => setUploadCat(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-[Open_Sans] outline-none focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/10 transition-all bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c} className="capitalize">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Uploader */}
              <ImageUploader
                value={newImages}
                onChange={setNewImages}
                multiple
                maxFiles={10}
              />

              {/* Actions modal */}
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => {
                    setUploaderOpen(false);
                    setNewImages([]);
                  }}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-500 font-[Open_Sans] font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={saveImages}
                  disabled={saving || !newImages.length}
                  className="flex-1 py-3 rounded-xl bg-[#0054A6] text-white font-[Open_Sans] font-semibold text-sm hover:bg-[#003d7a] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                >
                  {saving ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />{" "}
                      Sauvegarde...
                    </>
                  ) : (
                    `Ajouter${newImages.length > 0 ? ` (${newImages.length})` : ""}`
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
