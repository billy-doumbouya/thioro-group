// components/dashboard/TopNav.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, MessageSquare, FileText, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useNotifications } from "@/hooks/useNotifications";
import { useRouter } from "next/navigation";

export default function TopNav({ titre }) {
  const { data: session } = useSession();
  const { total, details, refetch } = useNotifications(30000);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const router = useRouter();

  const getInitials = (name) => {
    if (!name) return "A";
    const parts = name.trim().split(" ");
    return parts.length > 1
      ? `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase()
      : parts[0].charAt(0).toUpperCase();
  };

  // Fermer le panel si clic en dehors
  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const notifications = [
    details.messages > 0 && {
      icon: MessageSquare,
      color: "text-[#0054A6] bg-blue-50",
      label: `${details.messages} message${details.messages > 1 ? "s" : ""} non lu${details.messages > 1 ? "s" : ""}`,
      sub: "Aller aux messages",
      href: "/dashboard/messages",
    },
    details.devis > 0 && {
      icon: FileText,
      color: "text-orange-500 bg-orange-50",
      label: `${details.devis} devis en attente`,
      sub: "Aller aux devis",
      href: "/dashboard/devis",
    },
  ].filter(Boolean);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30"
    >
      {/* Titre */}
      <h1 className="font-[Montserrat] font-bold text-gray-900 text-base sm:text-lg truncate max-w-[180px] sm:max-w-none">
        {titre}
      </h1>

      <div className="flex items-center gap-3">
        {/* Recherche */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 focus-within:border-[#00AEEF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#00AEEF]/10 rounded-xl px-3 py-2 w-52 transition-all duration-200">
          <Search size={14} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent text-sm font-[Open_Sans] outline-none text-gray-600 placeholder:text-gray-400 w-full"
          />
        </div>

        {/* ── Bell avec panel ── */}
        <div className="relative" ref={panelRef}>
          <button
            onClick={() => {
              setPanelOpen(!panelOpen);
              refetch();
            }}
            className="relative w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 active:scale-95 group"
          >
            <Bell
              size={16}
              className="text-gray-600 group-hover:text-gray-900 transition-colors"
            />

            {/* Badge — visible uniquement si total > 0 */}
            <AnimatePresence>
              {total > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 ring-2 ring-white font-[Montserrat]"
                >
                  {total > 99 ? "99+" : total}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Panel dropdown */}
          <AnimatePresence>
            {panelOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 top-11 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
              >
                {/* Header panel */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <span className="font-[Montserrat] font-bold text-sm text-gray-900">
                    Notifications
                  </span>
                  <button
                    onClick={() => setPanelOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Liste */}
                {notifications.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <Bell size={24} className="mx-auto text-gray-200 mb-2" />
                    <p className="text-xs text-gray-400 font-[Open_Sans]">
                      Aucune notification
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-50">
                    {notifications.map((n, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setPanelOpen(false);
                          router.push(n.href);
                        }}
                        className="w-full flex items-start gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${n.color}`}
                        >
                          <n.icon size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-[Open_Sans] font-semibold text-gray-900">
                            {n.label}
                          </p>
                          <p className="text-xs text-gray-400 font-[Open_Sans] mt-0.5">
                            {n.sub}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Footer */}
                {notifications.length > 0 && (
                  <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50">
                    <p className="text-[10px] text-gray-400 font-[Open_Sans] text-center">
                      Actualisation automatique toutes les 30 secondes
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Séparateur */}
        <div className="h-6 w-px bg-gray-200 hidden sm:block" />

        {/* Avatar */}
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-9 h-9 rounded-xl bg-[#0054A6] flex items-center justify-center shadow-sm shrink-0">
            <span className="text-white font-[Montserrat] font-bold text-xs tracking-wider">
              {getInitials(session?.user?.name)}
            </span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-[Open_Sans] font-semibold text-gray-900 leading-tight truncate max-w-[120px]">
              {session?.user?.name || "Administrateur"}
            </p>
            <p className="text-xs font-[Open_Sans] text-gray-400 mt-0.5">
              Admin
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
