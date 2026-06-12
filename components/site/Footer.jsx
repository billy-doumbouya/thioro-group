"use client";

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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_0_4px_rgba(0,174,239,0.5)]"
                >
                  <path d="M11 2L6 10H10L8 16L14 7H10L11 2Z" fill="#fff" />
                  <path
                    d="M3 11C3 8.5 5 6.5 5 6.5C5 6.5 7 8.5 7 11C7 12.1 6.1 13 5 13C3.9 13 3 12.1 3 11Z"
                    fill="var(--color-bleu-eau)"
                    opacity="0.85"
                  />
                </svg>
              </div>
              THIORO GROUP SARLU
            </div>

            <p
              className="text-sm leading-relaxed text-zinc-300 font-light"
              style={{ fontFamily: "var(--font-opensans)" }}
            >
              Votre partenaire de confiance pour les équipements électriques et
              l'eau minérale naturelle en Guinée depuis 2015.
            </p>

            {/* Réseaux Sociaux Premium */}
            <div className="flex gap-3 mt-2">
              {["📘", "📸", "🎵", "▶️", "💬"].map((emoji, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-white/5 border border-white/10 text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-white/30"
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
                "Notre histoire",
                "Qualité & Conformité",
                "Actualités",
                "Mentions légales",
              ].map((text, i) => (
                <a
                  key={i}
                  href={text === "Actualités" ? "#actualites" : "#"}
                  className="text-zinc-300 transition-colors duration-200 hover:text-[var(--color-color-bleu-eau)] hover:translate-x-1 inline-block transform"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne Produits */}
          <div>
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-widest text-white/60"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Produits
            </h3>
            <div
              className="flex flex-col gap-3 text-sm"
              style={{ fontFamily: "var(--font-opensans)" }}
            >
              {[
                { label: "Équipements électriques", href: "#produits" },
                { label: "Eau Minérale Kouria", href: "#eau" },
                { label: "Pêche & Services", href: "#" },
                { label: "Demander un devis", href: "#contact" },
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
                <span className="opacity-80">📞</span> +224 000 000 000
              </div>
              <div className="flex items-center gap-2.5">
                <span className="opacity-80">✉️</span> contact@thiorogroup.com
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

          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "RCCM Guinée"].map(
              (text, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-colors duration-200 hover:text-white"
                >
                  {text}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
