"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import AnimatedNumber from "@/components/shared/AnimatedNumber";
import { equipe, chiffresClés, valeurs } from "@/data/equipe";
import { MapPin, Award, Shield, Lightbulb } from "lucide-react";

const iconeMap = { MapPin, Award, Shield, Lightbulb };

export default function AProposPage() {
  return (
    <>
      {/* ─── EN-TÊTE HERO PREMIUM AVEC CLIP-PATH & HALOS CINÉTIQUES ─── */}
      <div
        className="relative overflow-hidden bg-[#001c38] pt-32 pb-24 text-white text-center dark:bg-black transition-colors duration-300"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
      >
        {/* Cercles de lumière fluides en arrière-plan gérés par le GPU */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Halo Bleu Eau */}
          <motion.div
            animate={{
              scale: [1, 1.15, 0.9, 1],
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full opacity-30 blur-[110px] bg-[#00aeef]"
          />

          {/* Halo Bleu Électrique */}
          <motion.div
            animate={{
              scale: [1, 0.85, 1.2, 1],
              x: [0, -40, 40, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[20%] -right-[10%] h-[550px] w-[550px] rounded-full opacity-25 blur-[130px] bg-[#0054a6]"
          />

          {/* Grille fine de texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        {/* Contenu textuel de l'en-tête */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest mb-4 inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#00aeef] font-sans shadow-inner"
          >
            Notre entreprise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-extrabold text-4xl sm:text-6xl tracking-tight mb-6 text-white font-montserrat"
          >
            À propos de{" "}
            <span className="bg-gradient-to-r from-[#0054a6] to-[#00aeef] bg-clip-text text-transparent">
              Thioro Group
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed text-zinc-300 max-w-2xl mx-auto font-sans font-light"
          >
            Depuis 2015, nous construisons une entreprise guinéenne de référence
            dans l&apos;énergie et l&apos;accès à l&apos;eau potable.
          </motion.p>
        </div>
      </div>

      {/* ─── SECTION HISTOIRE & CHIFFRES CLÉS ─── */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Descriptif Histoire */}
            <div className="lg:col-span-7 space-y-6">
              <p className="font-bold text-xs uppercase tracking-widest text-[#0054a6] dark:text-[#00aeef] font-sans">
                Notre histoire
              </p>
              <h2 className="font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight font-montserrat">
                Nés en Guinée, au service de la Guinée
              </h2>
              <div className="space-y-5 font-sans font-light leading-relaxed text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                <p>
                  Fondée en 2015 à Conakry,{" "}
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Thioro Group Sarlu
                  </span>{" "}
                  est née de la volonté de répondre à deux besoins fondamentaux
                  de la Guinée : l&apos;accès à des équipements électriques de
                  qualité et à une eau minérale locale fiable.
                </p>
                <p>
                  Au fil des années, nous avons développé des partenariats
                  solides avec des fabricants européens et asiatiques de
                  référence, tout en investissant dans notre usine de production
                  moderne d&apos;eau minérale à Kouriah (Coyah).
                </p>
                <p>
                  Aujourd&apos;hui, Thioro Group est un acteur reconnu, fier
                  d&apos;accompagner plus de 150 clients actifs à travers ses
                  trois sites opérationnels.
                </p>
              </div>
            </div>

            {/* Grille de Chiffres Premium */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 w-full">
              {chiffresClés.map((c, idx) => (
                <div
                  key={c.label}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-gradient-to-b from-[#e6f4fd]/30 to-white p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-900 dark:from-zinc-900/40 dark:to-zinc-900"
                >
                  {/* Bordure haute interactive au survol */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0054a6] to-[#00aeef] transition-all duration-500 group-hover:w-full" />

                  <div className="font-extrabold text-3xl sm:text-4xl mb-2 tracking-tight text-[#0054a6] dark:text-[#00aeef] font-montserrat">
                    <AnimatedNumber value={c.valeur} suffix={c.suffixe} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-sans">
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── SECTION VALEURS D'ENTREPRISE LUXE ─── */}
      <SectionWrapper className="bg-zinc-50 dark:bg-[#000d1a]/20 border-y border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00aeef] font-sans px-3 py-1 rounded-full bg-[#00aeef]/5 border border-[#00aeef]/10">
              Piliers
            </span>
            <h2 className="mt-3 font-extrabold text-3xl text-zinc-900 dark:text-white tracking-tight font-montserrat">
              Nos valeurs fondamentales
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => {
              const Icon = iconeMap[v.icone];
              return (
                <div
                  key={v.titre}
                  className="group rounded-2xl bg-white p-6 border border-zinc-100 shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-zinc-900 dark:border-zinc-800/60"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 bg-[#e6f4fd] dark:bg-[#002851]/40 border border-transparent dark:border-[#0054a6]/20">
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-[#0054a6] dark:text-[#00aeef]"
                      />
                    )}
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white mb-2 font-montserrat">
                    {v.titre}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── SECTION ÉQUIPE DIRIGEANTE ─── */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl text-zinc-900 dark:text-white tracking-tight font-montserrat">
              Notre équipe dirigeante
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto font-sans font-light">
              Des professionnels engagés pour accompagner la croissance
              industrielle et sociale de notre pays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((m) => (
              <div
                key={m.id}
                className="group flex flex-col items-center text-center rounded-2xl p-6 border border-transparent transition-all duration-300 hover:border-zinc-100 hover:bg-zinc-50/40 dark:hover:border-zinc-900 dark:hover:bg-zinc-900/20"
              >
                {/* Conteneur d'initiales à effet premium */}
                <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 bg-[#e6f4fd] dark:bg-[#001c38] border border-transparent dark:border-[#0054a6]/20 overflow-hidden">
                  {/* Subtle hover gradient slide */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0054a6]/5 to-[#00aeef]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="font-extrabold text-3xl text-[#0054a6] dark:text-[#00aeef] font-montserrat relative z-10">
                    {m.nom.charAt(0)}
                  </span>
                </div>

                <h3 className="font-bold text-base text-zinc-900 dark:text-white mb-1 font-montserrat">
                  {m.nom}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-3 text-[#00aeef] font-sans">
                  {m.poste}
                </p>
                <p className="text-xs sm:text-sm font-sans font-light leading-relaxed text-zinc-400 dark:text-zinc-500 max-w-[220px]">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
