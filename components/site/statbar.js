"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "2015", label: "Année de création", accent: true },
  { value: "150+", label: "Clients actifs", accent: false },
  { value: "3", label: "Sites opérationnels", accent: false },
  { value: "98%", label: "Satisfaction client", accent: false },
];

export function StatsBar() {
  return (
    <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,28,56,0.95), rgba(0,40,81,0.95))",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,174,239,0.08) inset",
        }}
      >
        {/* Barre gradient top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #0054a6, #00aeef, #0054a6, transparent)",
          }}
        />

        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + idx * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/[0.03] ${
              idx < stats.length - 1 ? "border-r border-white/[0.06]" : ""
            } ${idx >= 2 ? "border-t border-white/[0.06] md:border-t-0" : ""}`}
          >
            {/* Halo hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,174,239,0.05) 0%, transparent 70%)",
              }}
            />

            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + idx * 0.1,
                type: "spring",
              }}
              className={`text-3xl sm:text-4xl font-black font-montserrat tracking-tight relative z-10 ${
                stat.accent
                  ? "bg-gradient-to-r from-[#0054a6] to-[#00aeef] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {stat.value}
            </motion.span>
            <span className="mt-2 text-xs sm:text-sm text-white/50 font-opensans tracking-wide relative z-10">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
