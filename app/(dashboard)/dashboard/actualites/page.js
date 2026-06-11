"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { Plus, Edit2, Trash2, X, Loader2, Newspaper, Eye, EyeOff } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const schema = yup.object({
  titre: yup.string().required("Titre requis"),
  extrait: yup.string().required("Extrait requis").max(200, "Max 200 caractères"),
  contenu: yup.string().required("Contenu requis").min(50, "Min 50 caractères"),
  publie: yup.boolean(),
});

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-opensans outline-none focus:border-bleu-electrique focus:ring-2 focus:ring-bleu-electrique/20 transition-all";

export default function ActualitesAdminPage() {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [image, setImage] = useState([]);
  const [saving, setSaving] = useState(false);

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { publie: false },
  });

  const fetchActus = async () => {
    try {
      const res = await fetch("/api/actualites?all=true");
      setActualites(await res.json());
    } catch {}
    setLoading(false);
  };

  useEffect(() => { fetchActus(); }, []);

  const openModal = (actu = null) => {
    setEditing(actu);
    if (actu) {
      setValue("titre", actu.titre);
      setValue("extrait", actu.extrait || "");
      setValue("contenu", actu.contenu);
      setValue("publie", actu.publie);
      setImage(actu.image ? [actu.image] : []);
    } else {
      reset({ publie: false });
      setImage([]);
    }
    setModalOpen(true);
  };

  const onSubmit = async (data) => {
    setSaving(true);
    try {
      const payload = { ...data, image: image[0] || null };
      const url = editing ? `/api/actualites/${editing.id}` : "/api/actualites";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error();
      toast.success(editing ? "Article mis à jour !" : "Article créé !");
      setModalOpen(false);
      fetchActus();
    } catch { toast.error("Erreur lors de la sauvegarde"); }
    setSaving(false);
  };

  const deleteActu = async (id) => {
    if (!confirm("Supprimer cet article ?")) return;
    await fetch(`/api/actualites/${id}`, { method: "DELETE" });
    toast.success("Article supprimé");
    setActualites(a => a.filter(x => x.id !== id));
  };

  const togglePublier = async (actu) => {
    const res = await fetch(`/api/actualites/${actu.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...actu, publie: !actu.publie }),
    });
    const updated = await res.json();
    setActualites(a => a.map(x => x.id === actu.id ? updated : x));
    toast.success(updated.publie ? "Article publié" : "Article dépublié");
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <TopNav titre="Gestion des actualités" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gris-moyen font-opensans text-sm">{actualites.length} article(s) au total</p>
          <button onClick={() => openModal()}
            className="flex items-center gap-2 bg-bleu-electrique text-white px-5 py-2.5 rounded-xl font-opensans font-semibold text-sm hover:bg-bleu-fonce transition-colors shadow-md">
            <Plus size={16} /> Nouvel article
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 size={32} className="animate-spin text-bleu-electrique" /></div>
        ) : actualites.length === 0 ? (
          <div className="text-center py-20 text-gris-moyen font-opensans">
            <Newspaper size={48} className="mx-auto mb-4 opacity-20" />
            <p>Aucun article. Créez le premier !</p>
          </div>
        ) : (
          <div className="space-y-4">
            {actualites.map((a, i) => (
              <motion.div key={a.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-xl bg-bleu-clair flex items-center justify-center shrink-0 overflow-hidden">
                  {a.image ? <img src={a.image} alt={a.titre} className="w-full h-full object-cover" /> : <Newspaper size={20} className="text-bleu-electrique/40" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-montserrat font-bold text-gray-900 text-sm truncate">{a.titre}</h3>
                    <span className={cn("shrink-0 text-xs font-opensans font-semibold px-2 py-0.5 rounded-full",
                      a.publie ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500")}>
                      {a.publie ? "Publié" : "Brouillon"}
                    </span>
                  </div>
                  <p className="text-gris-moyen text-xs font-opensans">{formatDate(a.createdAt)}</p>
                  <p className="text-gris-anthracite text-xs font-opensans mt-1 line-clamp-1">{a.extrait}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => togglePublier(a)}
                    className={cn("w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                      a.publie ? "bg-orange-50 text-orange-500 hover:bg-orange-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100")}>
                    {a.publie ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <button onClick={() => openModal(a)} className="w-8 h-8 rounded-lg bg-bleu-clair text-bleu-electrique flex items-center justify-center hover:bg-bleu-electrique hover:text-white transition-colors">
                    <Edit2 size={14} />
                  </button>
                  <button onClick={() => deleteActu(a.id)} className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <h2 className="font-montserrat font-bold text-lg text-gray-900">
                  {editing ? "Modifier l'article" : "Nouvel article"}
                </h2>
                <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                  <X size={16} />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Titre *</label>
                  <input {...register("titre")} className={inputClass} placeholder="Titre de l'article" />
                  {errors.titre && <p className="text-red-500 text-xs mt-1">{errors.titre.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Extrait * <span className="text-gris-moyen">(max 200 caractères)</span></label>
                  <textarea {...register("extrait")} rows={2} className={cn(inputClass, "resize-none")} placeholder="Bref résumé de l'article..." />
                  {errors.extrait && <p className="text-red-500 text-xs mt-1">{errors.extrait.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Contenu *</label>
                  <textarea {...register("contenu")} rows={8} className={cn(inputClass, "resize-none")} placeholder="Corps de l'article..." />
                  {errors.contenu && <p className="text-red-500 text-xs mt-1">{errors.contenu.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Image de couverture</label>
                  <ImageUploader value={image} onChange={setImage} multiple={false} maxFiles={1} />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" {...register("publie")} className="w-4 h-4 rounded accent-bleu-electrique" />
                  <span className="text-sm font-opensans text-gray-700">Publier immédiatement</span>
                </label>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setModalOpen(false)} className="flex-1 py-3 rounded-xl border border-gray-200 text-gris-anthracite font-opensans font-medium text-sm hover:bg-gray-50">Annuler</button>
                  <button type="submit" disabled={saving} className="flex-1 py-3 rounded-xl bg-bleu-electrique text-white font-opensans font-semibold text-sm hover:bg-bleu-fonce disabled:opacity-70 flex items-center justify-center gap-2">
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
