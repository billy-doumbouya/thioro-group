"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Droplets, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-gradient-to-br from-bleu-electrique via-bleu-fonce to-gray-900 flex items-center overflow-hidden">
      {/* Fond décoratif animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-bleu-eau"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-bleu-eau"
        />
        {/* Grille de points décoratifs */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-opensans px-4 py-2 rounded-full backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-bleu-eau rounded-full animate-pulse" />
              Conakry, Guinée — Votre partenaire local de confiance
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            L&apos;énergie et l&apos;eau,{" "}
            <span className="text-bleu-eau">au cœur de</span>{" "}
            la Guinée
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-opensans text-lg text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            Thioro Group Sarlu importe et distribue des équipements électriques de qualité
            et produit l&apos;Eau Minérale Kouria depuis la source naturelle de Kouriah.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-bleu-electrique px-7 py-4 rounded-xl font-montserrat font-bold text-sm hover:bg-bleu-clair transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Demander un devis
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/electricite"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-7 py-4 rounded-xl font-opensans font-semibold text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Voir nos produits
            </Link>
          </motion.div>

          {/* Activités pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {[
              { icon: Zap, label: "Équipements électriques", color: "text-yellow-300" },
              { icon: Droplets, label: "Eau Minérale Kouria", color: "text-bleu-eau" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 px-4 py-2 rounded-full text-xs font-opensans backdrop-blur-sm"
              >
                <Icon size={13} className={color} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-white/50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
