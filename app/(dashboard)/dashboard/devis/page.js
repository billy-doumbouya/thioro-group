"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import { Loader2, FileText, Eye, Check, Archive } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const statutConfig = {
  nouveau: { label: "Nouveau", className: "bg-blue-50 text-blue-600" },
  traite: { label: "Traité", className: "bg-emerald-50 text-emerald-600" },
  archive: { label: "Archivé", className: "bg-gray-100 text-gray-500" },
};

export default function DevisPage() {
  const [devis, setDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [filtre, setFiltre] = useState("tous");

  useEffect(() => {
    fetch("/api/devis").then(r => r.json()).then(d => { setDevis(d); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const updateStatut = async (id, statut) => {
    await fetch(`/api/devis/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ statut }) });
    setDevis(d => d.map(x => x.id === id ? { ...x, statut } : x));
    if (selected?.id === id) setSelected(s => ({ ...s, statut }));
    toast.success("Statut mis à jour");
  };

  const filtres = ["tous", "nouveau", "traite", "archive"];
  const devisFiltres = filtre === "tous" ? devis : devis.filter(d => d.statut === filtre);

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <TopNav titre="Devis reçus" />
      <div className="flex-1 flex overflow-hidden">
        {/* Liste */}
        <div className="w-full lg:w-96 border-r border-gray-100 flex flex-col bg-white">
          <div className="p-4 border-b border-gray-100 flex gap-2 flex-wrap">
            {filtres.map(f => (
              <button key={f} onClick={() => setFiltre(f)}
                className={cn("px-3 py-1.5 rounded-lg text-xs font-opensans font-medium capitalize transition-all",
                  filtre === f ? "bg-bleu-electrique text-white" : "text-gris-moyen hover:bg-gray-100"
                )}
              >
                {f === "tous" ? "Tous" : statutConfig[f]?.label}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex justify-center py-10"><Loader2 size={24} className="animate-spin text-bleu-electrique" /></div>
            ) : devisFiltres.length === 0 ? (
              <div className="text-center py-10 text-gris-moyen font-opensans text-sm">
                <FileText size={36} className="mx-auto mb-3 opacity-20" />
                Aucun devis.
              </div>
            ) : (
              devisFiltres.map(d => (
                <motion.div key={d.id} onClick={() => setSelected(d)} whileHover={{ backgroundColor: "#f9fafb" }}
                  className={cn("p-4 border-b border-gray-50 cursor-pointer", selected?.id === d.id && "bg-bleu-clair")}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-opensans font-semibold text-sm text-gray-900">{d.prenom} {d.nom}</p>
                    <span className={cn("text-xs font-opensans font-semibold px-2 py-0.5 rounded-full shrink-0", statutConfig[d.statut]?.className)}>
                      {statutConfig[d.statut]?.label}
                    </span>
                  </div>
                  <p className="text-xs text-gris-moyen font-opensans">{d.societe || "Particulier"} · {d.activite}</p>
                  <p className="text-xs text-gris-moyen font-opensans mt-1">{formatDate(d.createdAt)}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Détail */}
        <div className="hidden lg:flex flex-1 flex-col bg-gray-50 overflow-y-auto">
          {selected ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 max-w-2xl mx-auto w-full">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-montserrat font-bold text-xl text-gray-900">{selected.prenom} {selected.nom}</h2>
                    <p className="text-gris-moyen text-sm font-opensans">{selected.societe || "Particulier"}</p>
                  </div>
                  <span className={cn("text-xs font-opensans font-semibold px-3 py-1.5 rounded-full", statutConfig[selected.statut]?.className)}>
                    {statutConfig[selected.statut]?.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl text-sm font-opensans">
                  {[
                    ["Email", selected.email], ["Téléphone", selected.telephone],
                    ["Domaine", selected.activite], ["Date", formatDate(selected.createdAt)],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-gris-moyen text-xs mb-0.5">{k}</p>
                      <p className="font-medium text-gray-900">{v}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-opensans font-semibold text-gris-moyen uppercase tracking-wider mb-2">Message</p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 font-opensans text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {selected.statut !== "traite" && (
                    <button onClick={() => updateStatut(selected.id, "traite")}
                      className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-opensans font-semibold hover:bg-emerald-100 transition-colors">
                      <Check size={14} /> Marquer traité
                    </button>
                  )}
                  {selected.statut !== "archive" && (
                    <button onClick={() => updateStatut(selected.id, "archive")}
                      className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm font-opensans font-semibold hover:bg-gray-200 transition-colors">
                      <Archive size={14} /> Archiver
                    </button>
                  )}
                  <a href={`mailto:${selected.email}`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-bleu-electrique text-white rounded-xl text-sm font-opensans font-semibold hover:bg-bleu-fonce transition-colors">
                    Répondre par email
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gris-moyen font-opensans">
              <div className="text-center">
                <FileText size={48} className="mx-auto mb-3 opacity-20" />
                <p>Sélectionnez un devis</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
