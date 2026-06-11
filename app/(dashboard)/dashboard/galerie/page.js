"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { Trash2, Loader2, Images, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GaleriePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [newImages, setNewImages] = useState([]);
  const [saving, setSaving] = useState(false);
  const [categorie, setCategorie] = useState("general");

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/galerie");
      if (res.ok) setImages(await res.json());
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchImages(); }, []);

  const saveImages = async () => {
    if (!newImages.length) { toast.error("Aucune image sélectionnée"); return; }
    setSaving(true);
    try {
      await Promise.all(
        newImages.map(url =>
          fetch("/api/galerie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url, publicId: url.split("/").pop(), categorie }),
          })
        )
      );
      toast.success(`${newImages.length} image(s) ajoutée(s)`);
      setUploaderOpen(false);
      setNewImages([]);
      fetchImages();
    } catch { toast.error("Erreur lors de la sauvegarde"); }
    setSaving(false);
  };

  const deleteImage = async (id) => {
    if (!confirm("Supprimer cette image ?")) return;
    await fetch(`/api/galerie/${id}`, { method: "DELETE" });
    toast.success("Image supprimée");
    setImages(i => i.filter(x => x.id !== id));
  };

  const categories = ["general", "electricite", "eau", "peche", "equipe", "evenements"];

  return (
    <div className="flex-1 overflow-y-auto">
      <TopNav titre="Galerie photos" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gris-moyen font-opensans text-sm">{images.length} photo(s)</p>
          <button onClick={() => setUploaderOpen(true)}
            className="flex items-center gap-2 bg-bleu-electrique text-white px-5 py-2.5 rounded-xl font-opensans font-semibold text-sm hover:bg-bleu-fonce transition-colors shadow-md">
            <Plus size={16} /> Ajouter des photos
          </button>
        </div>

        {/* Filtres catégories */}
        <div className="flex gap-2 flex-wrap mb-6">
          {["tous", ...categories].map(c => (
            <button key={c} onClick={() => setCategorie(c)}
              className={cn("px-3 py-1.5 rounded-lg text-xs font-opensans font-medium capitalize transition-all",
                categorie === c ? "bg-bleu-electrique text-white" : "bg-white border border-gray-200 text-gris-moyen hover:border-bleu-electrique"
              )}>
              {c === "tous" ? "Toutes" : c}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 size={32} className="animate-spin text-bleu-electrique" /></div>
        ) : images.length === 0 ? (
          <div className="text-center py-20 text-gris-moyen font-opensans">
            <Images size={48} className="mx-auto mb-4 opacity-20" />
            <p>Aucune photo. Commencez à enrichir la galerie !</p>
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {images
              .filter(img => categorie === "tous" || img.categorie === categorie)
              .map((img, i) => (
                <motion.div key={img.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }} className="group relative rounded-xl overflow-hidden break-inside-avoid">
                  <img src={img.url} alt={img.titre || "Photo"} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={() => deleteImage(img.id)} className="w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>

      {/* Modal upload */}
      <AnimatePresence>
        {uploaderOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setUploaderOpen(false)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white rounded-2xl w-full max-w-lg p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-montserrat font-bold text-lg text-gray-900">Ajouter des photos</h2>
                <button onClick={() => setUploaderOpen(false)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <X size={16} />
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Catégorie</label>
                <select value={categorie} onChange={e => setCategorie(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-opensans outline-none focus:border-bleu-electrique">
                  {categories.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
                </select>
              </div>
              <ImageUploader value={newImages} onChange={setNewImages} multiple maxFiles={10} />
              <div className="flex gap-3 mt-5">
                <button onClick={() => setUploaderOpen(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gris-anthracite font-opensans font-medium text-sm">Annuler</button>
                <button onClick={saveImages} disabled={saving}
                  className="flex-1 py-3 rounded-xl bg-bleu-electrique text-white font-opensans font-semibold text-sm hover:bg-bleu-fonce disabled:opacity-70 flex items-center justify-center gap-2">
                  {saving ? <><Loader2 size={15} className="animate-spin" /> Sauvegarde...</> : "Ajouter à la galerie"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
