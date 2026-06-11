"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { Plus, Edit2, Trash2, X, Loader2, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = yup.object({
  nom: yup.string().required("Nom requis"),
  description: yup.string().required("Description requise"),
  categorie: yup.string().required("Catégorie requise"),
  sousCategorie: yup.string(),
  marque: yup.string(),
  origine: yup.string(),
});

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-opensans outline-none focus:border-bleu-electrique focus:ring-2 focus:ring-bleu-electrique/20 transition-all";

export default function ProduitsPage() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [images, setImages] = useState([]);
  const [saving, setSaving] = useState(false);
  const [filtre, setFiltre] = useState("tous");

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const fetchProduits = async () => {
    try {
      const res = await fetch("/api/produits");
      const data = await res.json();
      setProduits(data);
    } catch { toast.error("Erreur lors du chargement"); }
    setLoading(false);
  };

  useEffect(() => { fetchProduits(); }, []);

  const openModal = (produit = null) => {
    setEditing(produit);
    if (produit) {
      Object.entries(produit).forEach(([k, v]) => setValue(k, v));
      setImages(produit.images || []);
    } else {
      reset();
      setImages([]);
    }
    setModalOpen(true);
  };

  const onSubmit = async (data) => {
    setSaving(true);
    try {
      const payload = { ...data, images };
      const url = editing ? `/api/produits/${editing.id}` : "/api/produits";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      toast.success(editing ? "Produit mis à jour !" : "Produit ajouté !");
      setModalOpen(false);
      fetchProduits();
    } catch { toast.error("Erreur lors de la sauvegarde"); }
    setSaving(false);
  };

  const deleteProduit = async (id) => {
    if (!confirm("Supprimer ce produit ?")) return;
    try {
      await fetch(`/api/produits/${id}`, { method: "DELETE" });
      toast.success("Produit supprimé");
      setProduits(p => p.filter(x => x.id !== id));
    } catch { toast.error("Erreur lors de la suppression"); }
  };

  const filtres = [
    { id: "tous", label: "Tous" },
    { id: "electricite", label: "Électricité" },
    { id: "eau", label: "Eau" },
    { id: "peche", label: "Pêche" },
  ];

  const produitsFiltres = filtre === "tous" ? produits : produits.filter(p => p.categorie === filtre);

  return (
    <div className="flex-1 overflow-y-auto">
      <TopNav titre="Gestion des produits" />
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex gap-2 flex-wrap">
            {filtres.map(f => (
              <button
                key={f.id}
                onClick={() => setFiltre(f.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-opensans font-medium transition-all",
                  filtre === f.id
                    ? "bg-bleu-electrique text-white shadow-md"
                    : "bg-white border border-gray-200 text-gris-anthracite hover:border-bleu-electrique"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-bleu-electrique text-white px-5 py-2.5 rounded-xl font-opensans font-semibold text-sm hover:bg-bleu-fonce transition-colors shadow-md"
          >
            <Plus size={16} /> Ajouter un produit
          </button>
        </div>

        {/* Grille produits */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 size={32} className="animate-spin text-bleu-electrique" />
          </div>
        ) : produitsFiltres.length === 0 ? (
          <div className="text-center py-20 text-gris-moyen font-opensans">
            <Package size={48} className="mx-auto mb-4 opacity-30" />
            <p>Aucun produit trouvé.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {produitsFiltres.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group"
              >
                <div className="h-36 bg-bleu-clair flex items-center justify-center relative">
                  {p.images?.[0] ? (
                    <img src={p.images[0]} alt={p.nom} className="w-full h-full object-cover" />
                  ) : (
                    <Package size={32} className="text-bleu-electrique/30" />
                  )}
                  <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => openModal(p)} className="w-7 h-7 rounded-lg bg-white shadow text-bleu-electrique flex items-center justify-center hover:bg-bleu-clair">
                      <Edit2 size={13} />
                    </button>
                    <button onClick={() => deleteProduit(p.id)} className="w-7 h-7 rounded-lg bg-white shadow text-red-500 flex items-center justify-center hover:bg-red-50">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-opensans text-bleu-electrique font-semibold mb-1">{p.sousCategorie || p.categorie}</p>
                  <h3 className="font-montserrat font-bold text-gray-900 text-sm line-clamp-1">{p.nom}</h3>
                  <p className="text-gris-moyen text-xs font-opensans mt-1 line-clamp-2">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <h2 className="font-montserrat font-bold text-lg text-gray-900">
                  {editing ? "Modifier le produit" : "Nouveau produit"}
                </h2>
                <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Nom *</label>
                    <input {...register("nom")} className={inputClass} placeholder="Nom du produit" />
                    {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Catégorie *</label>
                    <select {...register("categorie")} className={inputClass}>
                      <option value="">Choisir...</option>
                      <option value="electricite">Électricité</option>
                      <option value="eau">Eau</option>
                      <option value="peche">Pêche</option>
                      <option value="service">Services</option>
                    </select>
                    {errors.categorie && <p className="text-red-500 text-xs mt-1">{errors.categorie.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Sous-catégorie</label>
                    <input {...register("sousCategorie")} className={inputClass} placeholder="Ex: Câbles" />
                  </div>
                  <div>
                    <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Marque</label>
                    <input {...register("marque")} className={inputClass} placeholder="Ex: Schneider" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Description *</label>
                  <textarea {...register("description")} rows={3} className={cn(inputClass, "resize-none")} placeholder="Description du produit..." />
                  {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Images</label>
                  <ImageUploader value={images} onChange={setImages} multiple maxFiles={5} />
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gris-anthracite font-opensans font-medium text-sm hover:bg-gray-50 transition-colors">
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-3 rounded-xl bg-bleu-electrique text-white font-opensans font-semibold text-sm hover:bg-bleu-fonce transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {saving ? <><Loader2 size={15} className="animate-spin" /> Sauvegarde...</> : "Sauvegarder"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
