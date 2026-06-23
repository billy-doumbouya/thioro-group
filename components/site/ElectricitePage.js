"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Wheat,
  Fish,
  Factory,
  CheckCircle2,
  SlidersHorizontal,
  X,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/site/ContactForm";

// Données locales typées et structurées selon votre charte
const secteursActivite = [
  {
    id: "agriculture",
    label: "Agriculture",
    icon: Wheat,
    couleurAccent: "#84cc16", // Lime
    bgAccent: "rgba(132,204,22,0.1)",
    desc: "Thioro Group accompagne le développement de filières agricoles guinéennes, de la production à la mise en marché. Notre ambition est de contribuer à une agriculture plus structurée, plus rentable et mieux connectée aux besoins du marché local.",
    points: [
      "Soutien aux filières de production locales",
      "Mise en relation entre producteurs et marchés",
      "Approche orientée qualité et régularité de l'offre",
    ],
  },
  {
    id: "peche",
    label: "Pêche & Halieutique",
    icon: Fish,
    couleurAccent: "#10b981", // Emerald
    bgAccent: "rgba(16,185,129,0.1)",
    desc: "Thioro Group est un maillon actif de la filière halieutique guinéenne. Nous structurons des circuits d'approvisionnement optimisés pour garantir la disponibilité de produits de la mer d'une fraîcheur absolue sur les marchés locaux et régionaux.",
    points: [
      "Approvisionnement local et distribution régionale",
      "Garantie stricte sur les produits frais et transformés",
      "Partenariats durables avec les pêcheurs artisanaux",
    ],
  },
  {
    id: "industrie",
    label: "Industrie",
    icon: Factory,
    couleurAccent: "#f97316", // Orange
    bgAccent: "rgba(249,115,22,0.1)",
    desc: "Notre division industrielle accompagne les entreprises et institutions guinéennes dans leurs projets de production et de transformation, avec une approche pragmatique adaptée aux réalités du terrain local.",
    points: [
      "Accompagnement de projets industriels et de production",
      "Conseil opérationnel adapté au contexte guinéen",
      "Solutions sur mesure pour partenaires B2B",
    ],
  },
];

export default function AutresActivitesPage() {
  const [activeTab, setActiveTab] = useState(null);

  const filteredSecteurs = activeTab
    ? secteursActivite.filter((s) => s.id === activeTab)
    : secteursActivite;

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
          {/* Trame de fond millimétrée */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        {/* Accents géométriques vectoriels isolés */}
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
        <svg
          className="absolute bottom-16 left-10 opacity-[0.06] pointer-events-none hidden sm:block"
          width="90"
          height="90"
          viewBox="0 0 90 90"
        >
          <polygon
            points="45,5 85,75 5,75"
            fill="none"
            stroke="#00aeef"
            strokeWidth="1.5"
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
            <Layers
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
              Diversification stratégique
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
            Autres{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0054a6] to-[#00aeef]">
              activités
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
            Au-delà du commerce général et du BTP, Thioro Group met son
            agilité opérationnelle au service du développement guinéen via
            ses divisions Agriculture, Pêche et Industrie.
          </motion.p>

          {/* Tableaux de bord vitrés - Statistiques d'activités */}
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
              { val: "03", label: "Pôles d'excellence" },
              { val: "100%", label: "Ancrage National" },
              { val: "B2B / B2C", label: "Secteurs d'impact" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-montserrat font-black text-xl text-[#00aeef]">
                  {s.val}
                </div>
                <div className="font-sans text-[11px] text-white/40 uppercase tracking-widest mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FILTRES ET CONTENU DES DIVISION SÉPARÉES ─── */}
      <section
        className="relative bg-[#f4f8fd] dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ marginTop: "-2px" }}
      >
        {/* Ligne néon décorative */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6] to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Barre de Filtrage Interactive */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 flex-wrap justify-center mb-12"
          >
            <div className="flex items-center gap-1.5 text-zinc-400 mr-2">
              <SlidersHorizontal size={14} strokeWidth={1.8} />
              <span className="font-sans text-xs uppercase tracking-widest font-semibold">
                Filtrer les pôles
              </span>
            </div>

            <button
              onClick={() => setActiveTab(null)}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === null
                  ? "bg-[#0054a6] text-white shadow-lg shadow-[#0054a6]/25"
                  : "bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#0054a6] shadow-sm"
              }`}
            >
              Toutes les divisions
            </button>

            {secteursActivite.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(activeTab === s.id ? null : s.id)}
                className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === s.id
                    ? "bg-[#0054a6] text-white shadow-lg shadow-[#0054a6]/25"
                    : "bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-[#0054a6] shadow-sm"
                }`}
              >
                {s.label}
              </button>
            ))}

            <AnimatePresence>
              {activeTab && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setActiveTab(null)}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl font-sans text-xs font-semibold text-zinc-400 hover:text-[#0054a6] transition-colors"
                >
                  <X size={12} />
                  Réinitialiser
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Affichage des Cartes Sectorielles à Effet Premium */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab ?? "all"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            >
              {filteredSecteurs.map((secteur, idx) => {
                const Icon = secteur.icon;
                return (
                  <motion.div
                    key={secteur.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Ligne néon supérieure réactive au survol spécifique au secteur */}
                    <div
                      className="absolute top-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: secteur.couleurAccent }}
                    />

                    {/* Conteneur d'icône premium */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: secteur.bgAccent,
                        color: secteur.couleurAccent,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <h2 className="font-montserrat font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight mb-4">
                      {secteur.label}
                    </h2>

                    <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm leading-relaxed mb-6 flex-grow">
                      {secteur.desc}
                    </p>

                    {/* Liste de points clés avec icône Check stylisée */}
                    <div className="border-t border-zinc-50 dark:border-zinc-800/60 pt-5 mt-auto">
                      <ul className="space-y-3">
                        {secteur.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-300"
                          >
                            <CheckCircle2
                              size={16}
                              className="shrink-0 mt-0.5"
                              style={{ color: secteur.couleurAccent }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── EN-PIED DE PAGE : FORMULAIRE DE CONTACT VITRÉ ─── */}
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
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              Étude de besoin
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Un projet ou une demande d&apos;offre ?
            </h2>
            <p className="text-white/50 font-sans font-light text-sm sm:text-base leading-relaxed">
              Nos responsables de pôles étudient vos exigences pour vous
              proposer une cotation personnalisée sous 24h.
            </p>
          </motion.div>

          {/* Formulaire flouté à effet Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0054a6] to-[#00aeef]" />
            <div className="p-8 sm:p-10">
              <ContactForm type="devis" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}