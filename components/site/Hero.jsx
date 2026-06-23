"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Store,
  HardHat,
  Wheat,
  Fish,
  Factory,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#001226]/90 pt-28 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ─── ARRIÈRE-PLAN ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <Image
          src="/bg.png"
          alt="Thioro Group Infrastructure"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105 select-none"
          priority
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#001226]/85 via-[#001c38]/65 to-[#001226]" />
        <div className="absolute inset-0 z-[1] bg-[#001226]/40" />
      </div>

      {/* ─── HALOS ─── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 0.9, 1], x: [-30, 20, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-40 w-[600px] h-[600px] rounded-full bg-[#00e5ff] opacity-[0.12] blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.85, 1.15, 1],
            x: [0, -40, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -right-40 top-1/4 w-[700px] h-[700px] rounded-full bg-[#0054a6] opacity-25 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* ─── CONTENU ─── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-between h-full space-y-16">
        {/* TOP ROW : 5 domaines d'activité */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
          {[
            {
              icon: Store,
              label: "Commerce Général",
              desc: "Import & Distribution",
            },
            {
              icon: HardHat,
              label: "BTP",
              desc: "Bâtiment & Travaux Publics",
            },
            {
              icon: Wheat,
              label: "Agriculture",
              desc: "Production & Filières",
            },
            {
              icon: Fish,
              label: "Pêche",
              desc: "Ressources Halieutiques",
            },
            {
              icon: Factory,
              label: "Industrie",
              desc: "Transformation & Production",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/5 bg-white/[0.02] backdrop-blur-md p-4 rounded-xl flex items-center gap-3 group hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-[#00aeef]/10 text-[#00aeef] group-hover:scale-110 transition-transform shrink-0">
                <item.icon size={18} />
              </div>
              <div>
                <span className="block text-white/40 text-[10px] uppercase font-bold tracking-wider">
                  {item.desc}
                </span>
                <span className="block text-white font-medium text-xs sm:text-sm tracking-tight">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CENTER ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-4">
          {/* Gauche : Accroche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00aeef]/30 bg-[#00aeef]/5 backdrop-blur-sm text-[#00aeef] text-xs tracking-wider uppercase font-semibold w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              Groupe Multisectoriel · Guinée
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white font-[Montserrat] leading-[1.1] tracking-tight">
              Thioro Group Sarlu
              <br />
              <span
                className="bg-gradient-to-r from-[#00aeef] via-white to-[#0054a6] bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200%",
                  animation: "gradientShift 5s ease-in-out infinite",
                }}
              >
                au cœur de la Guinée
              </span>
            </h1>

            <p className="text-white/60 font-light text-base sm:text-lg max-w-xl leading-relaxed">
              Du commerce général au BTP, en passant par l&apos;agriculture, la
              pêche et l&apos;industrie : Thioro Group Sarlu accompagne le
              développement économique guinéen sur cinq secteurs stratégiques,
              avec la même exigence de rigueur et de fiabilité.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#produits"
                whileHover={{
                  y: -2,
                  boxShadow: "0 12px 30px rgba(0,174,239,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-[Montserrat] font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-[#0054a6] to-[#00aeef] shadow-lg"
              >
                Demander un devis
                <ArrowUpRight size={14} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3.5 rounded-xl font-[Montserrat] font-bold text-xs uppercase tracking-widest text-white/80 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300"
              >
                Nous contacter
              </motion.a>
            </div>
          </motion.div>

          {/* Droite : Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[380px] aspect-square">
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-white/10 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_15s_linear_infinite]" />
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#003d7a] via-[#0054a6] to-[#00aeef] p-[1px] shadow-xl mb-4">
                  <div className="w-full h-full bg-[#001226]/90 rounded-[15px] flex items-center justify-center flex-col gap-1">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00aeef] to-white font-[Montserrat]">
                      TG
                    </span>
                    <div className="w-8 h-[2px] bg-[#00aeef] rounded" />
                  </div>
                </div>
                <h3 className="text-white font-[Montserrat] font-bold text-base tracking-wide uppercase">
                  THIORO GROUP
                </h3>
                <span className="text-[#00aeef] text-[11px] font-medium tracking-widest uppercase mt-0.5">
                  Conakry · Sarlu
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW : Secteurs (sans métriques inventées) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full pt-4">
          {[
            {
              label: "Commerce & Import",
              sub: "Distribution d'équipements",
              desc: "Câbles électriques, régulateurs de tension et équipements techniques importés.",
            },
            {
              label: "BTP & Construction",
              sub: "Travaux & infrastructures",
              desc: "Accompagnement de projets de bâtiment et travaux publics en Guinée.",
            },
            {
              label: "Filières Productives",
              sub: "Agriculture · Pêche · Industrie",
              desc: "Développement de filières locales au service de l'économie guinéenne.",
            },
          ].map((bento, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
              className="p-5 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-md hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="block text-lg font-black font-[Montserrat] text-white group-hover:text-[#00aeef] transition-colors">
                  {bento.label}
                </span>
                <span className="block text-white/80 font-semibold text-xs mt-1 tracking-wide uppercase">
                  {bento.sub}
                </span>
              </div>
              <p className="text-white/45 text-xs font-light leading-relaxed mt-3">
                {bento.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `,
        }}
      />
    </section>
  );
}