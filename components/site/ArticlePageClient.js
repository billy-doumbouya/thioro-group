"use client";

import React from "react";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Image from "next/image";

export default function ArticlePageClient({ actu, autres = [] }) {
  return (
    <>
      {/* ─── HERO ÉDITORIAL HIGH-TECH ─── */}
      <section
        className="relative overflow-hidden bg-[#001c38] py-20 text-white px-4 sm:px-6 lg:px-8"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-20 w-[450px] h-[450px] rounded-full bg-[#0054a6] opacity-30 blur-[100px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/actus"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-[#00aeef] text-xs font-semibold uppercase tracking-wider font-sans mb-8 transition-colors"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Retour aux actualités
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold font-montserrat uppercase tracking-wider bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              {actu.categorie || "Corporate"}
            </span>
            <div className="flex items-center gap-1.5 text-white/40 font-sans text-xs">
              <Calendar size={13} className="text-white/30" />
              {formatDate(actu.createdAt)}
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat font-black text-3xl sm:text-4xl lg:text-[2.8rem] tracking-tight leading-[1.15]"
          >
            {actu.titre}
          </motion.h1>
        </div>
      </section>

      {/* ─── CORPS DE L'ARTICLE ─── */}
      <section
        className="relative bg-white dark:bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ marginTop: "-2px" }}
      >
        <div className="max-w-4xl mx-auto">
          {actu.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 sm:h-[420px] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 shadow-md mb-12 group"
            >
              <Image
                src={actu.image}
                alt={actu.titre}
                fill
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="hidden lg:block lg:col-span-1 sticky top-28 space-y-4 text-zinc-400">
              <div className="w-9 h-9 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center hover:text-[#00aeef] hover:border-[#00aeef]/30 transition-all cursor-pointer">
                <Share2 size={14} />
              </div>
            </div>

            <div className="lg:col-span-11">
              <article className="prose prose-zinc prose-lg dark:prose-invert max-w-none font-sans font-light text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap selection:bg-[#00aeef]/20">
                {actu.contenu}
              </article>

              <div className="border-t border-zinc-100 dark:border-zinc-900 mt-12 pt-6 flex items-center justify-between text-xs text-zinc-400">
                <p>Thioro Group © {new Date().getFullYear()}</p>
                <span className="flex items-center gap-1">
                  <Tag size={12} /> Rédaction interne
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES RECOMMANDÉS ─── */}
      {autres.length > 0 && (
        <section className="relative bg-[#f4f8fd] dark:bg-zinc-900/40 py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 dark:border-zinc-900/60 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0054a6] dark:text-[#00aeef] font-sans block mb-1">
                  À découvrir aussi
                </span>
                <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
                  Lectures recommandées
                </h2>
              </div>
              <Link
                href="/actus"
                className="text-xs font-bold text-[#0054a6] dark:text-[#00aeef] hover:underline font-sans shrink-0"
              >
                Voir toute l'actualité →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {autres.map((a, i) => (
                <div key={a.id}>
                  <ArticlePageClient actu={a} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
