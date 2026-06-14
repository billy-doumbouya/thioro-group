"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import {
  Mail,
  MailOpen,
  Trash2,
  Loader2,
  Phone,
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

const FILTRES = [
  { id: "tous", label: "Tous" },
  { id: "non-lus", label: "Non lus" },
  { id: "lus", label: "Lus" },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [filtre, setFiltre] = useState("tous");

  // 1. Chargement
  useEffect(() => {
    fetch("/api/messages")
      .then((r) => r.json())
      .then((d) => {
        setMessages(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 2. Marquer lu (PATCH)
  const markAsRead = async (id) => {
    await fetch(`/api/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lu: true }),
    });
    setMessages((m) => m.map((x) => (x.id === id ? { ...x, lu: true } : x)));
  };

  // 3. Supprimer (DELETE)
  const deleteMsg = async (id) => {
    if (!confirm("Supprimer ce message ?")) return;
    await fetch(`/api/messages/${id}`, { method: "DELETE" });
    toast.success("Message supprimé");
    setMessages((m) => m.filter((x) => x.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  // 4. Ouvrir + auto-marquer lu
  const openMessage = (msg) => {
    setSelected(msg);
    if (!msg.lu) markAsRead(msg.id);
  };

  // Filtrage + compteur non lus
  const nonLus = messages.filter((m) => !m.lu).length;
  const msgFiltres = messages.filter((m) => {
    if (filtre === "non-lus") return !m.lu;
    if (filtre === "lus") return m.lu;
    return true;
  });

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <TopNav titre="Messages reçus" />

      <div className="flex-1 flex overflow-hidden">
        {/* ── PANNEAU GAUCHE — Liste ── */}
        <div className="w-full lg:w-96 border-r border-gray-100 flex flex-col bg-white shrink-0">
          {/* Filtres */}
          <div className="p-3 border-b border-gray-100 flex gap-1.5">
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
                {/* Badge non lus */}
                {f.id === "non-lus" && nonLus > 0 && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                    ${filtre === f.id ? "bg-white/20 text-white" : "bg-red-100 text-red-600"}`}
                  >
                    {nonLus}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Liste messages */}
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-100 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : msgFiltres.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-300">
                <MailOpen size={40} className="mb-3" />
                <p className="text-sm font-[Open_Sans] text-gray-400">
                  Aucun message
                </p>
              </div>
            ) : (
              msgFiltres.map((m) => {
                const isSelected = selected?.id === m.id;
                return (
                  <motion.div
                    key={m.id}
                    onClick={() => openMessage(m)}
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

                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 min-w-0">
                        {/* Point non lu */}
                        {!m.lu && (
                          <div className="w-2 h-2 bg-[#0054A6] rounded-full shrink-0" />
                        )}
                        <p
                          className={`font-[Open_Sans] text-sm truncate
                          ${!m.lu ? "font-semibold text-gray-900" : "text-gray-500"}`}
                        >
                          {m.nom}
                        </p>
                      </div>
                      <p className="text-[11px] text-gray-300 font-[Open_Sans] shrink-0">
                        {formatDate(m.createdAt)}
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 font-[Open_Sans] truncate mb-1 ml-4">
                      {m.sujet || "Sans sujet"}
                    </p>
                    <p className="text-xs text-gray-300 font-[Open_Sans] line-clamp-1 ml-4">
                      {m.message}
                    </p>

                    <ChevronRight
                      size={14}
                      className={`absolute right-3 top-1/2 -translate-y-1/2
                        ${isSelected ? "text-[#0054A6]" : "text-gray-200"}`}
                    />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>

        {/* ── PANNEAU DROIT — Détail ── */}
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
                        {selected.nom}
                      </h2>
                      <div className="flex items-center gap-3 text-sm text-gray-400 font-[Open_Sans]">
                        <span className="flex items-center gap-1.5">
                          <Mail size={12} />
                          {selected.email}
                        </span>
                        {selected.telephone && (
                          <>
                            <span className="text-gray-200">·</span>
                            <span className="flex items-center gap-1.5">
                              <Phone size={12} />
                              {selected.telephone}
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-gray-300 font-[Open_Sans] mt-1.5 flex items-center gap-1">
                        <Calendar size={11} />
                        {formatDate(selected.createdAt)}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteMsg(selected.id)}
                      className="w-9 h-9 rounded-xl bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Sujet */}
                  {selected.sujet && (
                    <div className="px-6 py-3 border-b border-gray-100 bg-gray-50/50">
                      <span className="inline-flex items-center gap-1.5 text-xs font-[Open_Sans] font-semibold text-[#0054A6] bg-[#e6f4fd] px-3 py-1 rounded-full">
                        <Tag size={10} />
                        {selected.sujet}
                      </span>
                    </div>
                  )}

                  {/* Corps du message */}
                  <div className="p-6 border-b border-gray-100">
                    <p className="text-[10px] text-gray-400 font-[Open_Sans] uppercase tracking-wider mb-3">
                      Message
                    </p>
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <p className="text-sm text-gray-700 font-[Open_Sans] leading-relaxed whitespace-pre-wrap">
                        {selected.message}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 flex gap-3">
                    <a
                      href={`mailto:${selected.email}?subject=Re: ${selected.sujet || "Votre message — Thioro Group"}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0054A6] text-white rounded-xl text-sm font-[Open_Sans] font-semibold hover:bg-[#003d7a] transition-colors"
                    >
                      <Mail size={14} /> Répondre par email
                    </a>
                    {selected.telephone && (
                      <a
                        href={`https://wa.me/${selected.telephone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-[Open_Sans] font-semibold hover:bg-emerald-600 transition-colors"
                      >
                        <Phone size={14} /> WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center py-20 text-gray-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                  <MailOpen size={28} className="text-gray-300" />
                </div>
                <p className="text-sm font-[Open_Sans] text-gray-400">
                  Sélectionnez un message
                </p>
                <p className="text-xs font-[Open_Sans] text-gray-300 mt-1">
                  pour voir le contenu
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
