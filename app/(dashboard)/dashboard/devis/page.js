"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import {
  Loader2,
  FileText,
  Check,
  Archive,
  Mail,
  Phone,
  Building2,
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

// ── Config statuts ──────────────────────────────────────
const STATUTS = {
  nouveau: {
    label: "Nouveau",
    bg: "bg-blue-50",
    text: "text-blue-600",
    dot: "bg-blue-500",
  },
  traite: {
    label: "Traité",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  archive: {
    label: "Archivé",
    bg: "bg-gray-100",
    text: "text-gray-500",
    dot: "bg-gray-400",
  },
};

const FILTRES = [
  { id: "tous", label: "Tous" },
  { id: "nouveau", label: "Nouveaux" },
  { id: "traite", label: "Traités" },
  { id: "archive", label: "Archivés" },
];

// ── Composant Badge statut ──────────────────────────────
function StatutBadge({ statut, size = "sm" }) {
  const s = STATUTS[statut] || STATUTS.nouveau;
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-[Open_Sans] font-semibold rounded-full
      ${size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-3 py-1.5"}
      ${s.bg} ${s.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

// ── Page principale ─────────────────────────────────────
export default function DevisPage() {
  const [devis, setDevis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null); // devis ouvert dans le panneau droit
  const [filtre, setFiltre] = useState("tous"); // filtre actif

  // 1. Chargement initial depuis l'API
  useEffect(() => {
    fetch("/api/devis")
      .then((r) => r.json())
      .then((data) => {
        setDevis(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 2. Mise à jour du statut d'un devis (PATCH /api/devis/:id)
  const updateStatut = async (id, statut) => {
    try {
      const res = await fetch(`/api/devis/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statut }),
      });
      if (!res.ok) throw new Error();

      // Mettre à jour localement sans re-fetch
      setDevis((prev) => prev.map((d) => (d.id === id ? { ...d, statut } : d)));

      // Si le devis sélectionné est celui modifié, on met à jour le panneau aussi
      if (selected?.id === id) setSelected((s) => ({ ...s, statut }));

      toast.success(`Statut mis à jour : ${STATUTS[statut].label}`);
    } catch {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  // 3. Filtrage côté client (pas de re-fetch)
  const devisFiltres =
    filtre === "tous" ? devis : devis.filter((d) => d.statut === filtre);

  // Compte par statut pour les badges sur les filtres
  const counts = devis.reduce((acc, d) => {
    acc[d.statut] = (acc[d.statut] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <TopNav titre="Devis reçus" />

      <div className="flex-1 flex overflow-hidden">
        {/* ══════════════════════════════════════
            PANNEAU GAUCHE — Liste des devis
            Largeur fixe sur desktop, plein sur mobile
        ════════════════════════════════════════ */}
        <div className="w-full lg:w-96 border-r border-gray-100 flex flex-col bg-white shrink-0">
          {/* Filtres */}
          <div className="p-3 border-b border-gray-100 flex gap-1.5 flex-wrap">
            {FILTRES.map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltre(f.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-[Open_Sans] font-medium transition-all
                  ${
                    filtre === f.id
                      ? "bg-[#0054A6] text-white shadow-sm"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
              >
                {f.label}
                {/* Compteur sur les filtres non-"tous" */}
                {f.id !== "tous" && counts[f.id] > 0 && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                    ${filtre === f.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    {counts[f.id]}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Liste */}
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              // Skeleton loading
              <div className="p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : devisFiltres.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-300">
                <FileText size={40} className="mb-3" />
                <p className="text-sm font-[Open_Sans] text-gray-400">
                  Aucun devis
                </p>
              </div>
            ) : (
              devisFiltres.map((d) => {
                const isSelected = selected?.id === d.id;
                return (
                  <motion.div
                    key={d.id}
                    onClick={() => setSelected(d)}
                    whileHover={{
                      backgroundColor: isSelected ? "#eff6ff" : "#f9fafb",
                    }}
                    animate={{
                      backgroundColor: isSelected ? "#eff6ff" : "#ffffff",
                    }}
                    className="p-4 border-b border-gray-50 cursor-pointer relative"
                  >
                    {/* Indicateur sélection */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0054A6] rounded-r" />
                    )}

                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="font-[Open_Sans] font-semibold text-sm text-gray-900 truncate">
                        {d.prenom} {d.nom}
                      </p>
                      <StatutBadge statut={d.statut} size="sm" />
                    </div>

                    <p className="text-xs text-gray-400 font-[Open_Sans] flex items-center gap-1.5 mb-1">
                      <Building2 size={10} className="shrink-0" />
                      {d.societe || "Particulier"}
                      <span className="text-gray-200">·</span>
                      <Tag size={10} className="shrink-0" />
                      {d.activite}
                    </p>

                    <p className="text-[11px] text-gray-300 font-[Open_Sans] flex items-center gap-1">
                      <Calendar size={10} />
                      {formatDate(d.createdAt)}
                    </p>

                    {/* Flèche indiquant qu'on peut cliquer */}
                    <ChevronRight
                      size={14}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors
                        ${isSelected ? "text-[#0054A6]" : "text-gray-200"}`}
                    />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>

        {/* ══════════════════════════════════════
            PANNEAU DROIT — Détail du devis sélectionné
            Caché sur mobile, visible desktop
        ════════════════════════════════════════ */}
        <div className="hidden lg:flex flex-1 flex-col bg-gray-50 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="p-8 max-w-2xl mx-auto w-full"
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100 flex items-start justify-between">
                    <div>
                      <h2 className="font-[Montserrat] font-bold text-xl text-gray-900 mb-1">
                        {selected.prenom} {selected.nom}
                      </h2>
                      <p className="text-sm text-gray-400 font-[Open_Sans]">
                        {selected.societe || "Particulier"}
                      </p>
                    </div>
                    <StatutBadge statut={selected.statut} size="lg" />
                  </div>

                  {/* Infos contact */}
                  <div className="p-6 grid grid-cols-2 gap-4 border-b border-gray-100 bg-gray-50/50">
                    {[
                      { icon: Mail, label: "Email", val: selected.email },
                      {
                        icon: Phone,
                        label: "Téléphone",
                        val: selected.telephone,
                      },
                      { icon: Tag, label: "Domaine", val: selected.activite },
                      {
                        icon: Calendar,
                        label: "Reçu le",
                        val: formatDate(selected.createdAt),
                      },
                    ].map(({ icon: Icon, label, val }) => (
                      <div key={label} className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#e6f4fd] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={13} className="text-[#0054A6]" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-[Open_Sans] uppercase tracking-wider mb-0.5">
                            {label}
                          </p>
                          <p className="text-sm text-gray-900 font-[Open_Sans] font-medium">
                            {val}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="p-6 border-b border-gray-100">
                    <p className="text-[10px] text-gray-400 font-[Open_Sans] uppercase tracking-wider mb-3">
                      Message du client
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-sm text-gray-700 font-[Open_Sans] leading-relaxed whitespace-pre-wrap">
                        {selected.message}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 flex gap-2.5 flex-wrap">
                    {selected.statut !== "traite" && (
                      <button
                        onClick={() => updateStatut(selected.id, "traite")}
                        className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-[Open_Sans] font-semibold hover:bg-emerald-100 transition-colors border border-emerald-100"
                      >
                        <Check size={14} /> Marquer traité
                      </button>
                    )}
                    {selected.statut !== "archive" && (
                      <button
                        onClick={() => updateStatut(selected.id, "archive")}
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-[Open_Sans] font-semibold hover:bg-gray-200 transition-colors"
                      >
                        <Archive size={14} /> Archiver
                      </button>
                    )}
                    <a
                      href={`mailto:${selected.email}?subject=Réponse à votre demande de devis — Thioro Group`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#0054A6] text-white rounded-xl text-sm font-[Open_Sans] font-semibold hover:bg-[#003d7a] transition-colors ml-auto"
                    >
                      <Mail size={14} /> Répondre par email
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* État vide — aucun devis sélectionné */
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-gray-300 py-20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                  <FileText size={28} className="text-gray-300" />
                </div>
                <p className="text-sm font-[Open_Sans] text-gray-400">
                  Sélectionnez un devis
                </p>
                <p className="text-xs font-[Open_Sans] text-gray-300 mt-1">
                  pour voir les détails
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
