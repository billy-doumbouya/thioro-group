"use client";

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#003d7a] text-white/90 border-t border-white/10 dark:bg-black">
      {/* ─── EFFET DIFFÉRENCIANT : Nappe de couleur animée en arrière-plan ─── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Halo Bleu Eau en bas à gauche */}
        <div
          className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-40 blur-[80px] mix-blend-screen animate-pulse"
          style={{
            backgroundColor: "var(--color-bleu-eau)",
            animationDuration: "7s",
          }}
        />
        {/* Halo Bleu Électrique en bas à droite */}
        <div
          className="absolute -bottom-10 -right-10 h-80 w-80 rounded-full opacity-30 blur-[90px] mix-blend-screen animate-pulse"
          style={{
            backgroundColor: "var(--color-bleu-electrique)",
            animationDuration: "10s",
          }}
        />
      </div>

      {/* Conteneur Principal avec Glassmorphism léger */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8 backdrop-blur-[2px]">
        {/* ─── BLOC TOP ─── */}
        <div className="grid grid-cols-1 gap-12 pb-12 border-b border-white/10 sm:grid-cols-2 md:grid-cols-4">
          {/* Colonne Marque */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center gap-3 text-lg font-bold tracking-wider text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {/* Icône SVG d'origine sublimée */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 shadow-inner backdrop-blur-md">
              <Image src="/logo.jpg" alt="Logo Thioro Group" width={40} height={40} />
              </div>
              THIORO GROUP SARLU
            </div>

            <p
              className="text-sm leading-relaxed text-zinc-300 font-light"
              style={{ fontFamily: "var(--font-opensans)" }}
            >
              Groupe multisectoriel guinéen actif dans le commerce général, le
              BTP, l&apos;agriculture, la pêche et l&apos;industrie.
            </p>

            {/* Réseaux Sociaux — décoratifs, sans lien actif pour le moment */}
            <div className="flex gap-3 mt-2">
              {["📘", "📸", "🎵", "▶️", "💬"].map((emoji, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-base opacity-60"
                  aria-hidden="true"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Entreprise */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-widest text-white/60"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Entreprise
            </h3>
            <div
              className="flex flex-col gap-3 text-sm"
              style={{ fontFamily: "var(--font-opensans)" }}
            >
              {[
                { label: "Notre histoire", href: "/a-propos" },
                { label: "Qualité & Conformité", href: "/qualite" },
                { label: "Actualités", href: "/actualites" },
                { label: "Mentions légales", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-zinc-300 transition-colors duration-200 hover:text-[var(--color-bleu-eau)] hover:translate-x-1 inline-block transform"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne Nos Activités */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-widest text-white/60"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Nos Activités
            </h3>
            <div
              className="flex flex-col gap-3 text-sm"
              style={{ fontFamily: "var(--font-opensans)" }}
            >
              {[
                { label: "Commerce Général", href: "/electricite" },
                { label: "BTP", href: "/eau-kouria" },
                { label: "Agriculture", href: "/agriculture" },
                { label: "Pêche", href: "/peche" },
                { label: "Industrie", href: "/industrie" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-zinc-300 transition-colors duration-200 hover:text-[var(--color-bleu-eau)] hover:translate-x-1 inline-block transform"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne Contact */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-widest text-white/60"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contact
            </h3>
            <div
              className="flex flex-col gap-3.5 text-sm font-light text-zinc-300"
              style={{ fontFamily: "var(--font-opensans)" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="opacity-80">📍</span> Hamdallaye, Conakry
              </div>
              <div className="flex items-center gap-2.5">
                <span className="opacity-80">📞</span>
                <a href="tel:+224621121283" className="hover:text-white transition-colors">
                  +224 621 12 12 83
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="opacity-80">✉️</span>
                <a href="mailto:contact@thiorogroup.com" className="hover:text-white transition-colors">
                  contact@thiorogroup.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="opacity-80">🕒</span> Lun–Ven : 8h–18h
              </div>
            </div>
          </div>
        </div>

        {/* ─── BLOC BOTTOM ─── */}
        <div
          className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-light text-zinc-400 sm:flex-row"
          style={{ fontFamily: "var(--font-opensans)" }}
        >
          <div>
            © 2026{" "}
            <span className="font-medium text-white/80">
              Thioro Group Sarlu
            </span>
            . Tous droits réservés.
          </div>

          <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-6">
            <span>RCCM GN.KAL.2018.B.082817</span>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-white">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}