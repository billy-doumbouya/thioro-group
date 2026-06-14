// components/dashboard/ConfirmModal.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Modal de confirmation réutilisable.
 *
 * Props :
 * - open: bool
 * - onClose: () => void
 * - onConfirm: () => void | Promise<void>
 * - title: string
 * - description: string | ReactNode
 * - confirmLabel: string (défaut "Confirmer")
 * - cancelLabel: string (défaut "Annuler")
 * - variant: "danger" | "warning" | "info" (défaut "danger")
 * - loading: bool (état de chargement externe, optionnel)
 */
export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  variant = "danger",
  loading = false,
}) {
  const variants = {
    danger: {
      icon: AlertTriangle,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      confirmBg: "bg-red-500 hover:bg-red-600",
    },
    warning: {
      icon: AlertTriangle,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      confirmBg: "bg-orange-500 hover:bg-orange-600",
    },
    info: {
      icon: Info,
      iconBg: "bg-[#0054A6]/10",
      iconColor: "text-[#0054A6]",
      confirmBg: "bg-[#0054A6] hover:bg-[#003d7a]",
    },
  };

  const {
    icon: Icon,
    iconBg,
    iconColor,
    confirmBg,
  } = variants[variant] || variants.danger;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && !loading && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center",
                  iconBg,
                )}
              >
                <Icon size={20} className={iconColor} />
              </div>
              <button
                onClick={onClose}
                disabled={loading}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>

            <h2 className="font-[Montserrat] font-bold text-lg text-gray-900 mb-1.5">
              {title}
            </h2>
            {description && (
              <p className="text-sm font-[Open_Sans] text-gray-500 mb-6">
                {description}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-500 font-[Open_Sans] font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                disabled={loading}
                className={cn(
                  "flex-1 py-3 rounded-xl text-white font-[Open_Sans] font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed",
                  confirmBg,
                )}
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> En cours...
                  </>
                ) : (
                  confirmLabel
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
