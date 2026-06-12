"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      e.target.reset();
    }, 1500);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-white/8 bg-[#001022]/70 font-opensans text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#00aeef]/50 focus:ring-2 focus:ring-[#00aeef]/15 transition-all duration-300";

  const labelClass =
    "text-[11px] font-semibold font-montserrat tracking-widest uppercase text-white/50 mb-2 block";

  return (
    <section
      id="contact"
      className="relative bg-[#00152b] py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-white"
      style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* Halos d'ambiance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 right-0 w-[600px] h-[600px] rounded-full bg-[#0054a6] blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-16 left-10 w-[350px] h-[350px] rounded-full bg-[#00aeef] blur-[110px]"
        />
        {/* Grille */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:44px_44px]" />
        {/* Clip déco bas */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,174,239,0.04), transparent)",
            clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-montserrat uppercase tracking-widest bg-[#00aeef]/10 text-[#00aeef] border border-[#00aeef]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
            Contact & Devis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-white tracking-tight leading-tight">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-white/45 font-opensans max-w-xl text-sm sm:text-base leading-relaxed">
            Particulier ou grande entreprise, nos équipes basées à Conakry sont
            à votre écoute pour concevoir vos solutions sur mesure.
          </p>
        </motion.div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Carte adresse */}
            <div className="group p-7 rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-xl hover:border-[#0054a6]/30 transition-all duration-300 flex items-start gap-5">
              <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#0054a6]/20 border border-[#0054a6]/30 text-[#00aeef]">
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="text-[11px] font-semibold font-montserrat tracking-widest uppercase text-white/35 mb-2">
                  Siège social
                </h3>
                <p className="text-white/85 font-opensans text-sm leading-relaxed">
                  Hamdallaye, Immeuble Ecobank
                  <br />
                  Conakry, Guinée
                </p>
              </div>
            </div>

            {/* Infos contact rapides */}
            {[
              { label: "Téléphone", value: "+224 600 00 00 00" },
              { label: "Email", value: "contact@thiorogroup.com" },
              { label: "Horaires", value: "Lun–Sam · 8h00–18h00" },
            ].map((item) => (
              <div
                key={item.label}
                className="group px-7 py-4 rounded-xl border border-white/8 bg-white/[0.02] backdrop-blur-xl hover:border-[#00aeef]/25 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between"
              >
                <span className="text-[11px] font-semibold font-montserrat tracking-widest uppercase text-white/35">
                  {item.label}
                </span>
                <span className="text-sm font-opensans text-white/80 group-hover:text-[#00aeef] transition-colors duration-300">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Carte Map */}
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-white/8 overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-[#00152b]/20 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none" />
              <iframe
                title="Siège Thioro Group Sarlu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.135648873092!2d-13.652156825227747!3d9.540134490543666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1cda0933cb6ca175%3A0x6b6a03cda17c0cbb!2sHamdallaye%2C%20Conakry!5e0!3m2!1sfr!2sgn!4v1710000000000!5m2!1sfr!2sgn"
                className="w-full h-full border-0 grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative p-8 sm:p-10 rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* Barre accent top */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #0054a6, #00aeef, transparent)",
              }}
            />

            <div className="mb-8">
              <h3 className="text-xl font-bold font-montserrat text-white tracking-tight">
                Envoyez-nous un message
              </h3>
              <p className="text-sm text-white/40 mt-1.5 font-opensans">
                Réponse garantie sous 24 heures ouvrables.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom & Prénom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Nom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Prénom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre prénom"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Société & Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Société</label>
                  <input
                    type="text"
                    placeholder="Nom de votre société"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Téléphone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+224 600 00 00 00"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className={inputClass}
                />
              </div>

              {/* Domaine */}
              <div>
                <label className={labelClass}>Domaine d&apos;intérêt *</label>
                <div className="relative">
                  <select
                    required
                    className={`${inputClass} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="" className="bg-[#00152b]">
                      Sélectionner un domaine
                    </option>
                    <option className="bg-[#00152b]">
                      Équipements électriques
                    </option>
                    <option className="bg-[#00152b]">
                      Eau Minérale Kouria
                    </option>
                    <option className="bg-[#00152b]">Pêche</option>
                    <option className="bg-[#00152b]">
                      Services & Logistique
                    </option>
                    <option className="bg-[#00152b]">Autre</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/30 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez votre besoin (quantités, spécifications, délais...)"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={{
                  y: isSubmitting || isSuccess ? 0 : -2,
                  boxShadow: "0 16px 40px rgba(0,84,166,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 rounded-xl font-montserrat font-bold text-sm uppercase tracking-widest text-white overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg, #0054a6, #003d7a)",
                }}
              >
                {/* Shimmer hover */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.55 }}
                  style={{
                    background:
                      "linear-gradient(135deg, transparent, rgba(0,174,239,0.25), transparent)",
                  }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Traitement
                      en cours…
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle size={16} /> Message envoyé
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Envoyer le message
                    </>
                  )}
                </span>
              </motion.button>

              {/* Message succès */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[#00aeef]/20 bg-[#00aeef]/8 text-sm font-opensans text-[#00aeef]/90"
                  >
                    <CheckCircle size={16} className="shrink-0 mt-0.5" />
                    <span>
                      Votre message a été transmis avec succès. Nos équipes vous
                      recontacteront sous 24h.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
