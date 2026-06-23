"use client";

import { motion } from "framer-motion";
import { Factory, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";

const pointsCles = [
  "Accompagnement de projets industriels et de production",
  "Conseil opérationnel adapté au contexte guinéen",
  "Solutions sur mesure pour partenaires B2B",
];

export default function IndustriePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden bg-[#001c38] py-28 px-4 sm:px-6 lg:px-8 text-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#f97316] opacity-20 blur-[110px]"
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.35), rgba(0,174,239,0.15))",
              border: "1px solid rgba(249,115,22,0.3)",
            }}
          >
            <Factory size={30} className="text-[#f97316] relative z-10" strokeWidth={1.8} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              Production &amp; transformation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-[3.4rem] tracking-tight leading-[1.1] mb-6"
          >
            Industrie
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 font-sans font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Notre division industrielle accompagne les entreprises et
            institutions guinéennes dans leurs projets de production et de
            transformation, avec une approche pragmatique adaptée aux
            réalités du terrain local.
          </motion.p>
        </div>
      </section>

      {/* ─── POINTS CLÉS ─── */}
      <section className="relative bg-[#f4f8fd] dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6] to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 p-8 sm:p-10 shadow-sm"
          >
            <h2 className="font-montserrat font-extrabold text-2xl text-zinc-900 dark:text-white tracking-tight mb-6">
              Notre engagement dans le secteur industriel
            </h2>
            <ul className="space-y-4">
              {pointsCles.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm sm:text-base font-sans text-zinc-600 dark:text-zinc-300"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 mt-0.5 text-[#f97316]"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── FORMULAIRE DE CONTACT ─── */}
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
