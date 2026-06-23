"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section
      id="decouverte"
      className="relative bg-[#001226] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Halo discret pour rester cohérent avec le Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#0054a6] opacity-[0.12] blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00aeef]/30 bg-[#00aeef]/5 backdrop-blur-sm text-[#00aeef] text-xs tracking-wider uppercase font-semibold w-max mx-auto mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
            Découvrez Thioro Group
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-[Montserrat] leading-tight tracking-tight max-w-2xl mx-auto">
            Cinq secteurs, une même ambition pour la Guinée
          </h2>
          <p className="text-white/50 font-light text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Plongez dans l&apos;univers de Thioro Group Sarlu : commerce
            général, BTP, agriculture, pêche et industrie réunis autour d&apos;une
            même exigence de qualité.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-1.5 sm:p-2 shadow-2xl"
        >
          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/video/thiro-video.mp4" type="video/mp4" />
            </video>
            {/* Léger voile pour garder la cohérence avec le ton sombre du site */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001226]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
