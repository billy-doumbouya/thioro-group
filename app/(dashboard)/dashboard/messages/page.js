"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import { Mail, MailOpen, Trash2, Loader2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [filtre, setFiltre] = useState("tous");

  useEffect(() => {
    fetch("/api/messages").then(r => r.json()).then(d => { setMessages(d); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const markAsRead = async (id) => {
    await fetch(`/api/messages/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lu: true }) });
    setMessages(m => m.map(x => x.id === id ? { ...x, lu: true } : x));
  };

  const deleteMsg = async (id) => {
    if (!confirm("Supprimer ce message ?")) return;
    await fetch(`/api/messages/${id}`, { method: "DELETE" });
    toast.success("Message supprimé");
    setMessages(m => m.filter(x => x.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const openMessage = (msg) => {
    setSelected(msg);
    if (!msg.lu) markAsRead(msg.id);
  };

  const filtres = [
    { id: "tous", label: "Tous" },
    { id: "non-lus", label: `Non lus (${messages.filter(m => !m.lu).length})` },
    { id: "lus", label: "Lus" },
  ];

  const msgFiltres = messages.filter(m => {
    if (filtre === "non-lus") return !m.lu;
    if (filtre === "lus") return m.lu;
    return true;
  });

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <TopNav titre="Messages reçus" />
      <div className="flex-1 flex overflow-hidden">
        {/* Liste */}
        <div className="w-full lg:w-96 border-r border-gray-100 flex flex-col bg-white overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex gap-2">
              {filtres.map(f => (
                <button key={f.id} onClick={() => setFiltre(f.id)}
                  className={cn("px-3 py-1.5 rounded-lg text-xs font-opensans font-medium transition-all",
                    filtre === f.id ? "bg-bleu-electrique text-white" : "text-gris-moyen hover:bg-gray-100"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex justify-center py-10"><Loader2 size={24} className="animate-spin text-bleu-electrique" /></div>
            ) : msgFiltres.length === 0 ? (
              <div className="text-center py-10 text-gris-moyen font-opensans text-sm">Aucun message.</div>
            ) : (
              msgFiltres.map(m => (
                <motion.div key={m.id} onClick={() => openMessage(m)} whileHover={{ backgroundColor: "#f9fafb" }}
                  className={cn("p-4 border-b border-gray-50 cursor-pointer transition-colors", selected?.id === m.id && "bg-bleu-clair")}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      {!m.lu && <div className="w-2 h-2 bg-bleu-electrique rounded-full shrink-0" />}
                      <div className="min-w-0">
                        <p className={cn("font-opensans text-sm truncate", !m.lu ? "font-semibold text-gray-900" : "text-gris-anthracite")}>{m.nom}</p>
                        <p className="text-xs text-gris-moyen font-opensans truncate">{m.sujet || "Sans sujet"}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gris-moyen font-opensans shrink-0">{formatDate(m.createdAt)}</p>
                  </div>
                  <p className="text-xs text-gris-moyen font-opensans mt-1.5 line-clamp-1 ml-4">{m.message}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Détail */}
        <div className="hidden lg:flex flex-1 flex-col bg-gray-50 overflow-y-auto">
          {selected ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 max-w-2xl mx-auto w-full">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-montserrat font-bold text-xl text-gray-900">{selected.nom}</h2>
                    <p className="text-gris-moyen text-sm font-opensans mt-1">{selected.email} • {selected.telephone || "—"}</p>
                    <p className="text-xs text-gris-moyen font-opensans mt-1">{formatDate(selected.createdAt)}</p>
                  </div>
                  <button onClick={() => deleteMsg(selected.id)} className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors">
                    <Trash2 size={15} />
                  </button>
                </div>
                {selected.sujet && (
                  <div className="mb-4">
                    <span className="text-xs font-opensans font-semibold text-bleu-electrique bg-bleu-clair px-3 py-1 rounded-full">{selected.sujet}</span>
                  </div>
                )}
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-gray-700 font-opensans leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>
                <div className="mt-5 flex gap-3">
                  <a href={`mailto:${selected.email}`} className="flex-1 text-center py-2.5 bg-bleu-electrique text-white rounded-xl text-sm font-opensans font-semibold hover:bg-bleu-fonce transition-colors">
                    Répondre par email
                  </a>
                  {selected.telephone && (
                    <a href={`https://wa.me/${selected.telephone.replace(/\s/g, "")}`} className="flex-1 text-center py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-opensans font-semibold hover:bg-emerald-600 transition-colors">
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gris-moyen font-opensans">
              <div className="text-center">
                <MailOpen size={48} className="mx-auto mb-3 opacity-20" />
                <p>Sélectionnez un message</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
