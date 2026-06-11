"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "@/components/shared/AnimatedNumber";
import { cn } from "@/lib/utils";

export default function StatCard({ titre, valeur, suffixe = "", icone: Icon, couleur = "bleu", tendance }) {
  const couleurs = {
    bleu: "bg-bleu-electrique/10 text-bleu-electrique",
    vert: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    violet: "bg-violet-50 text-violet-600",
    rouge: "bg-red-50 text-red-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", couleurs[couleur])}>
          {Icon && <Icon size={20} />}
        </div>
        {tendance !== undefined && (
          <span className={cn(
            "text-xs font-opensans font-semibold px-2 py-1 rounded-full",
            tendance >= 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
          )}>
            {tendance >= 0 ? "+" : ""}{tendance}%
          </span>
        )}
      </div>

      <div className="font-montserrat font-extrabold text-3xl text-gray-900 mb-1">
        <AnimatedNumber value={valeur} suffix={suffixe} duration={1500} />
      </div>
      <p className="text-gris-moyen text-sm font-opensans">{titre}</p>
    </motion.div>
  );
}
