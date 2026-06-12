"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate, truncate } from "@/lib/utils";

export default function ActualiteCard({ actualite, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full"
    >
      {/* Ligne néon supérieure s'activant au survol */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0054a6] to-[#00aeef] transition-all duration-300 group-hover:w-full z-20" />

      {/* Zone Média / Image */}
      <div className="relative h-48 bg-zinc-50 dark:bg-zinc-950 overflow-hidden shrink-0">
        {/* Catégorie flottante */}
        <span className="absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold font-montserrat uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/10">
          {actualite.categorie || "Corporate"}
        </span>

        {actualite.image ? (
          <Image
            src={actualite.image}
            alt={actualite.titre}
            fill
            sizes="(max-w-7xl) 33vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          /* Placeholder Signature Thioro Group */
          <div className="absolute inset-0 bg-gradient-to-br from-[#0054a6]/5 to-[#00aeef]/5 flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#0054a6]/10 flex items-center justify-center border border-[#0054a6]/10">
              <span className="text-[#0054a6] dark:text-[#00aeef] font-montserrat font-black text-lg tracking-tighter">
                TG
              </span>
            </div>
            {/* Grille technique en filigrane */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Zone Contenu */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Métadonnées */}
          <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 font-sans text-xs mb-3">
            <Calendar size={12} className="text-zinc-300 dark:text-zinc-700" />
            {formatDate(actualite.createdAt)}
          </div>

          {/* Titre */}
          <h3 className="font-montserrat font-black text-zinc-900 dark:text-white text-base mb-2 line-clamp-2 tracking-tight group-hover:text-[#00aeef] transition-colors duration-200">
            {actualite.titre}
          </h3>

          {/* Extrait descriptif */}
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed line-clamp-3 mb-5">
            {actualite.extrait || truncate(actualite.contenu)}
          </p>
        </div>

        {/* Action Call */}
        <Link
          href={`/actualites/${actualite.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold font-sans uppercase tracking-wider text-[#0054a6] dark:text-[#00aeef] hover:text-[#00aeef] dark:hover:text-white transition-colors pt-2 w-max"
        >
          Lire l'article
          <ArrowRight
            size={13}
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}
