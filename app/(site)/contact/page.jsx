"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import ContactForm from "@/components/site/ContactForm";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function ContactPage() {
  const coordonnees = [
    {
      icon: MapPin,
      titre: "Siège social",
      texte: "Hamdallaye, Immeuble Ecobank\nConakry, Guinée",
      couleur: "#00aeef",
      bg: "rgba(0,174,239,0.06)",
    },
    {
      icon: MapPin,
      titre: "Usine Kouria",
      texte: "Kouriah, Coyah, Guinée",
      couleur: "#0054a6",
      bg: "rgba(0,84,166,0.06)",
    },
    {
      icon: Phone,
      titre: "Téléphone",
      texte: "+224 623 95 20 11",
      href: "tel:+224623952011",
      couleur: "#10b981",
      bg: "rgba(16,185,129,0.06)",
    },
    {
      icon: Mail,
      titre: "Email",
      texte: "contact@thiorogroup.com",
      href: "mailto:contact@thiorogroup.com",
      couleur: "#3b82f6",
      bg: "rgba(59,130,246,0.06)",
    },
    {
      icon: MessageCircle,
      titre: "WhatsApp Business",
      texte: "Disponible 7j / 7",
      href: "https://wa.me/224623952011",
      couleur: "#25d366",
      bg: "rgba(37,211,102,0.06)",
    },
    {
      icon: Clock,
      titre: "Horaires d'ouverture",
      texte: "Lun – Ven : 8h – 18h\nSam : 8h – 13h",
      couleur: "#64748b",
      bg: "rgba(100,116,139,0.06)",
    },
  ];

  return (
    <>
      {/* ─── HERO CINÉTIQUE ET GÉOMÉTRIQUE ─── */}
      <section
        className="relative overflow-hidden bg-[#001c38] py-28 px-4 sm:px-6 lg:px-8 text-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
      >
        {/* Halos hydro-lumineux */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#0054a6] opacity-35 blur-[110px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 0.9, 1], x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-24 bottom-0 w-[550px] h-[550px] rounded-full bg-[#00aeef] opacity-20 blur-[130px]"
          />
          {/* Trame technique signature */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(0,84,166,0.4), rgba(0,174,239,0.2))",
              border: "1px solid rgba(0,174,239,0.25)",
            }}
          >
            <MessageCircle size={26} className="text-[#00aeef]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              Service Client & Bureau d'études
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat font-black text-4xl sm:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.1] mb-6"
          >
            Parlons de votre{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0054a6] to-[#00aeef]">
              Projet
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/60 font-sans font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Une question technique, une demande de cotation sur mesure ou un besoin de distribution ? Nos experts basés à Conakry vous répondent avec précision.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTENU PRINCIPAL ASYMÉTRIQUE ─── */}
      <section className="relative bg-[#f4f8fd] dark:bg-zinc-950 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ marginTop: "-2px" }}>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0054a6] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* BLOC GAUCHE : Coordonnées (5 colonnes) */}
            <div className="lg:col-span-5 space-y-8 w-full">
              <div>
                <h2 className="font-montserrat font-black text-2xl text-zinc-900 dark:text-white tracking-tight mb-2">
                  Nos coordonnées
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 font-sans font-light text-sm">
                  Retrouvez nos bureaux directeurs ainsi que notre site de production d'eau de source.
                </p>
              </div>

              {/* Matrice de Cartes de Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {coordonnees.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.titre}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex gap-4 items-start"
                    >
                      <div 
                        className="absolute left-0 top-0 h-full w-[3px] transition-all duration-300 group-hover:h-full" 
                        style={{ backgroundColor: item.couleur }} 
                      />
                      
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: item.bg, color: item.couleur }}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>

                      <div className="space-y-0.5">
                        <p className="font-montserrat font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          {item.titre}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-sans font-medium hover:underline transition-colors block break-all"
                            style={{ color: item.couleur }}
                          >
                            {item.texte}
                          </a>
                        ) : (
                          <p className="text-zinc-700 dark:text-zinc-300 text-sm font-sans font-normal whitespace-pre-line leading-relaxed">
                            {item.texte}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Carte Google intégrée à l'identité visuelle */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden h-56 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm relative group"
              >
                <div className="absolute inset-0 bg-[#0054a6]/5 mix-blend-multiply pointer-events-none z-10 transition-opacity group-hover:opacity-0" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.4385153245464!2d-13.635832!3d9.544167!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzInMzkuMCJOIDEzwrAzOCcwOS4wIlc!5e0!3m2!1sfr!2sgn!4v1650000000000!5m2!1sfr!2sgn"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>

            {/* BLOC DROIT : Formulaire Haute Performance (7 colonnes) */}
            <div className="lg:col-span-7 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
              >
                {/* Ligne de gradient supérieure signature */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0054a6] to-[#00aeef]" />
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0054a6] dark:text-[#00aeef] mb-2 font-sans">
                    <Send size={12} /> Transmission sécurisée
                  </div>
                  <h2 className="font-montserrat font-black text-2xl text-zinc-900 dark:text-white tracking-tight mb-1.5">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-zinc-400 dark:text-zinc-500 font-sans font-light text-sm">
                    Remplissez ce formulaire d'intention. Nos ingénieurs et chargés de compte s'engagent à vous recontacter sous 24h ouvrables.
                  </p>
                </div>

                {/* Formulaire standardisé */}
                <ContactForm type="contact" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}