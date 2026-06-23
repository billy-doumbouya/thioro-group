"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  MapPin,
  Shield,
  Leaf,
  Store,
  ChevronRight,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/site/ProductCard";
import ContactForm from "@/components/site/ContactForm";
import { produitsEau } from "@/data/produits";

export default function EauKouriaPage() {
  const atouts = [
    {
      icon: MapPin,
      titre: "Source naturelle",
      desc: "Captée à Kouriah, Coyah — eau pure à la source",
      couleur: "#00aeef",
      bg: "rgba(0,174,239,0.08)",
    },
    {
      icon: Shield,
      titre: "Certifiée",
      desc: "Contrôlée par l'autorité sanitaire guinéenne",
      couleur: "#10b981",
      bg: "rgba(16,185,129,0.08)",
    },
    {
      icon: Leaf,
      titre: "Locale & Responsable",
      desc: "Produit guinéen, emploi local, chaîne courte",
      couleur: "#84cc16",
      bg: "rgba(132,204,22,0.08)",
    },
    {
      icon: Droplets,
      titre: "Minéraux essentiels",
      desc: "Riche en oligo-éléments bénéfiques au corps",
      couleur: "#2563eb",
      bg: "rgba(37,99,235,0.08)",
    },
  ];

  return (
    <>
      {/* ─── HERO LIQUIDE ET GÉOMÉTRIQUE ─── */}
      <section
        className="relative overflow-hidden bg-[#001c38] py-28 px-4 sm:px-6 lg:px-8 text-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
      >
        {/* Halos hydro-lumineux */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-[#0054a6] opacity-30 blur-[110px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 0.9, 1],
              x: [0, 40, -20, 0],
              y: [0, -40, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -left-24 bottom-0 w-[550px] h-[550px] rounded-full bg-[#00aeef] opacity-20 blur-[130px]"
          />
          {/* Trame technique signature */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        {/* Accents vectoriels */}
        <svg
          className="absolute top-12 left-12 opacity-[0.05] pointer-events-none hidden sm:block"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#00aeef"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Conteneur d'icône cristalline */}
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
                  "radial-gradient(circle at 30% 30%, rgba(0,174,239,0.2), transparent 70%)",
              }}
            />
            <Droplets
              size={32}
              className="text-[#00aeef] relative z-10 animate-pulse"
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
              Pôle Agro-Industriel
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
            Eau Minérale{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0054a6] to-[#00aeef]">
              Kouria
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
            L&apos;eau naturelle issue des nappes préservées de Kouriah (Coyah).
            Filtrée et conditionnée selon les standards technologiques les plus
            stricts pour vous offrir une pureté intacte.
          </motion.p>

          {/* Analyse rapide / Spécifications de la source */}
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
              { val: "pH 7.2", label: "Équilibre parfait" },
              { val: "0% OGM", label: "Traitement Naturel" },
              { val: "Kouriah", label: "Source unique" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-montserrat font-black text-sm sm:text-base text-[#00aeef]">
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

      {/* ─── ATOUTS & CATALOGUE DES FORMATS ─── */}
      <section
        className="relative bg-[#f4f8fd] dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ marginTop: "-2px" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Grille des Atouts Hydro-Certifiés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {atouts.map((atout, i) => {
              const Icon = atout.icon;
              return (
                <motion.div
                  key={atout.titre}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 h-full w-[3px] transition-all duration-300 group-hover:h-full"
                    style={{ backgroundColor: atout.couleur }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: atout.bg, color: atout.couleur }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="font-montserrat font-bold text-zinc-900 dark:text-white text-base mb-1.5 tracking-tight">
                    {atout.titre}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                    {atout.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Section Formats */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl text-zinc-900 dark:text-white tracking-tight mb-3">
              Gamme & Formats disponibles
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light max-w-lg mx-auto text-sm sm:text-base">
              Des contenants ergonomiques et adaptés à toutes les situations du
              quotidien (particuliers, bureaux, CHR).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produitsEau.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProductCard produit={p} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA DISTRIBUTION - EFFET GLASSMORPHISM ─── */}
      <section
        className="relative bg-[#001c38] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.22, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-32 left-10 w-[500px] h-[500px] rounded-full bg-[#0054a6] blur-[120px]"
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
              <Store size={12} className="animate-pulse" />
              Réseau de distribution
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Devenir point de vente ou distributeur
            </h2>
            <p className="text-white/50 font-sans font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Vous êtes gérant de supermarché, grossiste, ou responsable dans
              l&apos;hôtellerie-restauration ? Intégrez l&apos;Eau Minérale
              Kouria à votre catalogue d&apos;offres.
            </p>
          </motion.div>

          {/* Formulaire Vitré Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#0054a6] to-[#00aeef]" />
            <div className="p-8 sm:p-10">
              <ContactForm type="distribution" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}