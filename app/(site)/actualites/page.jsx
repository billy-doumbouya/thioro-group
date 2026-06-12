"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ActualiteCard from "@/components/site/ActualiteCard";
import { actualites } from "@/data/actualites";

export default function ActualitesPage() {
  // Optionnel : Filtrer uniquement les articles publiés
  const articlesPublies = actualites.filter((a) => a.publie !== false);

  return (
    <>
      {/* ─── HERO CINÉTIQUE DU BLOG / ACTUALITÉS ─── */}
      <section
        className="relative overflow-hidden bg-[#001c38] py-24 px-4 sm:px-6 lg:px-8 text-white text-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
      >
        {/* Halos hydro-lumineux gérés par le GPU */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#0054a6] opacity-35 blur-[110px]"
          />
          <motion.div
            animate={{
              scale: [1, 0.9, 1.1, 1],
              x: [0, -30, 20, 0],
              y: [0, 40, -20, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full bg-[#00aeef] opacity-20 blur-[120px]"
          />
          {/* Trame technique signature */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Icône Vitrée */}
          <div
            className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,84,166,0.4), rgba(0,174,239,0.2))",
              border: "1px solid rgba(0,174,239,0.25)",
            }}
          >
            <Newspaper size={24} className="text-[#00aeef]" />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              Communiqués & Analyses
            </span>
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-5xl tracking-tight leading-tight mb-4">
            Espace{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0054a6] to-[#00aeef]">
              Actualités
            </span>
          </h1>

          <p className="text-white/60 font-sans font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Suivez l&apos;évolution de nos infrastructures industrielles, nos
            innovations énergétiques et la vie de Thioro Group en Guinée.
          </p>
        </div>
      </section>

      {/* ─── GRILLE DES ARTICLES ─── */}
      <section
        className="relative bg-[#f4f8fd] dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ marginTop: "-2px" }}
      >
        {/* Ligne de coupure lumineuse supérieure */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesPublies.map((article, index) => (
              <ActualiteCard
                key={article.id}
                actualite={article}
                index={index}
              />
            ))}
          </div>

          {/* État vide si aucun article n'est trouvé */}
          {articlesPublies.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <p className="text-zinc-400 font-sans text-sm">
                Aucun article disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
