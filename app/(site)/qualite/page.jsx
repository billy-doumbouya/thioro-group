"use client";

import { motion } from "framer-motion";
import { Shield, FileCheck, CheckCircle2, Award, Download } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const normes = [
  {
    code: "IEC 60898",
    desc: "Disjoncteurs pour installations domestiques et analogues",
    pole: "Électricité",
    couleur: "#00aeef",
    bg: "rgba(0,174,239,0.08)",
  },
  {
    code: "IEC 60439",
    desc: "Tableaux de distribution basse tension",
    pole: "Électricité",
    couleur: "#0054a6",
    bg: "rgba(0,84,166,0.08)",
  },
  {
    code: "NF C 32-100",
    desc: "Conducteurs et câbles isolés",
    pole: "Électricité",
    couleur: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    code: "ISO 22000",
    desc: "Sécurité des denrées alimentaires (Eau Kouria)",
    pole: "Agro-industrie",
    couleur: "#10b981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    code: "ONAB",
    desc: "Office National des Aliments et Boissons — Certification Guinée",
    pole: "Régulation",
    couleur: "#84cc16",
    bg: "rgba(132,204,22,0.08)",
  },
  {
    code: "RCCM Guinée",
    desc: "Registre du Commerce et du Crédit Mobilier — Conformité légale",
    pole: "Légal",
    couleur: "#64748b",
    bg: "rgba(100,116,139,0.08)",
  },
];

export default function QualitePage() {
  return (
    <>
      {/* ─── HERO SCIENTIFIQUE HIGH-TECH ─── */}
      <section
        className="relative overflow-hidden bg-[#001c38] py-28 px-4 sm:px-6 lg:px-8 text-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
      >
        {/* Halos cinétiques gérés par le GPU */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#0054a6] opacity-35 blur-[110px]"
          />
          <motion.div
            animate={{
              scale: [1, 0.85, 1.15, 1],
              x: [0, -50, 40, 0],
              y: [0, 60, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute -right-24 top-0 w-[550px] h-[550px] rounded-full bg-[#00aeef] opacity-15 blur-[130px]"
          />
          {/* Trame de fond technique millimétrée */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        {/* Accents géométriques vectoriels */}
        <svg
          className="absolute top-8 right-12 opacity-[0.06] pointer-events-none hidden sm:block"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="100"
            fill="none"
            stroke="#00aeef"
            strokeWidth="1.5"
            transform="rotate(15 60 60)"
          />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Icône de Tête Vitrée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,84,166,0.4), rgba(0,174,239,0.2))",
              border: "1px solid rgba(0,174,239,0.25)",
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(0,174,239,0.15), transparent 70%)",
              }}
            />
            <Shield
              size={30}
              className="text-[#00aeef] relative z-10"
              strokeWidth={1.8}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              Garantie & Exigence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-[3.4rem] tracking-tight leading-[1.1] mb-6"
          >
            Qualité &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0054a6] to-[#00aeef]">
              Conformité
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white/60 font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Chaque équipement électrique et chaque lot industriel distribué par
            Thioro Group répond rigoureusement aux certifications réglementaires
            internationales et guinéennes.
          </motion.p>

          {/* Tableaux de bord vitrés - Statistiques réglementaires */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center gap-6 sm:gap-10 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            {[
              { val: "IEC / ISO", label: "Normes maîtresses" },
              { val: "100%", label: "Traçabilité" },
              { val: "Labo Agréé", label: "Contrôles Kouria" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-montserrat font-black text-xs sm:text-sm md:text-base text-[#00aeef]">
                  {s.val}
                </div>
                <div className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CADRE TECHNIQUE & MATRICE DES NORMES ─── */}
      <section
        className="relative bg-[#f4f8fd] dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ marginTop: "-2px" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Colonne Gauche : Engagement textuel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0054a6] dark:text-[#00aeef] font-sans">
                <Award size={14} /> Notre charte qualité
              </span>
              <h2 className="font-montserrat font-black text-3xl text-zinc-900 dark:text-white tracking-tight leading-tight">
                Zéro compromis sur la sécurité de nos réseaux et de nos
                produits.
              </h2>
              <div className="space-y-4 text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Thioro Group s&apos;engage à ne distribuer que des références
                  certifiées d&apos;origine, importées en flux direct auprès de
                  fabricants industriels mondiaux de premier plan. Notre
                  protocole exclut tout intermédiaire non agréé.
                </p>
                <p>
                  Pour notre pôle agro-industriel (Eau Minérale Kouria), des
                  audits physicochimiques et microbiologiques permanents sont
                  menés en laboratoire indépendant afin de préserver
                  l&apos;équilibre natif de la source.
                </p>
              </div>

              {/* Liste à puces stylisée avec CheckCircle2 */}
              <div className="border-t border-zinc-200 dark:border-zinc-800/80 pt-6 space-y-3.5">
                {[
                  "Matériaux certifiés CE, NF et standards IEC",
                  "Fiches techniques constructeurs disponibles",
                  "Garantie usine intégrale sur le matériel lourd",
                  "Support technique et SAV réactif basé à Conakry",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />
                    <span className="text-zinc-700 dark:text-zinc-300 font-sans font-normal text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Droite : Grille des Normes / Références Réglementaires */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {normes.map((n, i) => {
                return (
                  <motion.div
                    key={n.code}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Trait néon supérieur */}
                    <div
                      className="absolute top-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: n.couleur }}
                    />

                    <div>
                      {/* En-tête de carte avec puce de pôle */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundColor: n.bg, color: n.couleur }}
                        >
                          <FileCheck size={18} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold font-sans text-zinc-400 bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded-md">
                          {n.pole}
                        </span>
                      </div>

                      <h3 className="font-montserrat font-black text-zinc-900 dark:text-white text-base mb-1 tracking-tight">
                        {n.code}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs font-sans font-light leading-relaxed">
                        {n.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION SUPPORT TECHNIQUE INFRASTRUCTURE VITRÉE ─── */}
      <section
        className="relative bg-[#001c38] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#0054a6] blur-[120px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              Documentation Technique
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Besoin d&apos;une fiche de conformité ?
            </h2>
            <p className="text-white/50 font-sans font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
              Pour vos bureaux d&apos;études ou vos audits de chantiers, nos
              ingénieurs mettent à votre disposition l&apos;intégralité des
              rapports d&apos;essais de nos équipements sur simple demande.
            </p>

            {/* Panneau Vitré d'action direct */}
            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00aeef] text-white px-6 py-3.5 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-[#0054a6] transition-all shadow-lg shadow-[#00aeef]/10"
              >
                <Download size={14} /> Demander un certificat
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-6 py-3.5 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition-all"
              >
                Contacter le pôle QHSE
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
