"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/site/Navbar"));
const Footer = dynamic(() => import("../components/site/Footer"));

/* ── Compteur animé ── */
function AnimatedCounter({ target, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

/* ── FadeUp wrapper ── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Données ── */
const activites = [
  {
    emoji: "⚡",
    titre: "Équipements électriques",
    desc: "Câbles, disjoncteurs, éclairage LED, groupes électrogènes et solutions solaires. Certifiés CE et IEC.",
    bg: "bg-blue-50",
    color: "text-[#0054A6]",
  },
  {
    emoji: "💧",
    titre: "Eau Minérale Kouria",
    desc: "Eau naturelle captée à Kouriah, Coyah. Formats 0,5L / 1,5L / 5L. Certifiée ONAB Guinée.",
    bg: "bg-sky-50",
    color: "text-sky-600",
  },
  {
    emoji: "🐟",
    titre: "Pêche",
    desc: "Approvisionnement en produits halieutiques frais pour les marchés locaux et régionaux de Guinée.",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    emoji: "🚚",
    titre: "Services & Logistique",
    desc: "Conseil, transport et solutions logistiques sur mesure pour entreprises et institutions.",
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
];

const produits = [
  {
    emoji: "🔌",
    tag: "Câbles",
    nom: "Câbles électriques NYY",
    desc: "Installation haute qualité pour usage industriel et résidentiel. Isolation PVC résistant aux UV.",
    marque: "Nexans",
    bg: "bg-blue-50",
  },
  {
    emoji: "⚡",
    tag: "Protection",
    nom: "Disjoncteur différentiel 63A",
    desc: "Protection surintensités et courts-circuits. Certifié IEC 60898. Idéal pour tableaux résidentiels.",
    marque: "Schneider",
    bg: "bg-orange-50",
  },
  {
    emoji: "☀️",
    tag: "Solaire",
    nom: "Panneau solaire 400W",
    desc: "Photovoltaïque haute performance, idéal pour les zones rurales et urbaines de Guinée.",
    marque: "Jinko Solar",
    bg: "bg-yellow-50",
  },
  {
    emoji: "🔋",
    tag: "Groupes élec.",
    nom: "Groupe électrogène 10 KVA",
    desc: "Générateur silencieux diesel, autonomie 12h, démarrage automatique.",
    marque: "Perkins",
    bg: "bg-gray-100",
  },
  {
    emoji: "💡",
    tag: "Éclairage",
    nom: "Luminaire LED industriel 150W",
    desc: "Haute baie pour entrepôts et ateliers. Durée de vie 50 000h, économie 70%.",
    marque: "Philips",
    bg: "bg-purple-50",
  },
  {
    emoji: "🗃️",
    tag: "Tableaux",
    nom: "Tableau électrique 24 modules",
    desc: "Coffret de distribution pré-équipé, porte transparente, bornier de terre inclus.",
    marque: "Hager",
    bg: "bg-emerald-50",
  },
];

const eauFormats = [
  { emoji: "💧", taille: "0,5 L", desc: "Format individuel — mobilité" },
  { emoji: "🫙", taille: "1,5 L", desc: "Format familial — quotidien" },
  { emoji: "🪣", taille: "5 L", desc: "Grand format consigné" },
];

const actualites = [
  {
    emoji: "🏛️",
    date: "10 mai 2026",
    titre: "Thioro Group à la Foire Internationale de Conakry 2026",
    desc: "Stand B12 — nouvelles gammes d'équipements et l'Eau Kouria du 15 au 25 juin.",
    bg: "bg-blue-50",
  },
  {
    emoji: "☀️",
    date: "20 avr. 2026",
    titre: "Nouvelle gamme de panneaux solaires disponible",
    desc: "Solutions photovoltaïques complètes pour ménages et entreprises en Guinée.",
    bg: "bg-yellow-50",
  },
  {
    emoji: "✅",
    date: "15 mar. 2026",
    titre: "L'usine Kouria recertifiée par l'autorité sanitaire",
    desc: "Renouvellement de la certification sanitaire 2026–2027 pour notre usine de Kouriah.",
    bg: "bg-sky-50",
  },
];

const normes = [
  { code: "IEC 60898", desc: "Disjoncteurs pour installations domestiques" },
  { code: "IEC 60439", desc: "Tableaux de distribution basse tension" },
  { code: "ISO 22000", desc: "Sécurité des denrées alimentaires (Eau)" },
  { code: "ONAB Guinée", desc: "Office National des Aliments et Boissons" },
  { code: "NF C 32-100", desc: "Conducteurs et câbles isolés" },
  { code: "RCCM Guinée", desc: "Registre du Commerce et du Crédit Mobilier" },
];

const equipe = [
  {
    initial: "M",
    nom: "Mamadou Thioro",
    poste: "Directeur Général",
    bio: "Fondateur de Thioro Group, 15+ ans d'expérience dans le commerce de matériaux électriques en Afrique de l'Ouest.",
  },
  {
    initial: "F",
    nom: "Fatoumata Diallo",
    poste: "Directrice Commerciale",
    bio: "Experte en développement commercial, elle supervise les relations clients et les partenariats fournisseurs.",
  },
  {
    initial: "I",
    nom: "Ibrahima Camara",
    poste: "Responsable Technique",
    bio: "Ingénieur électricien diplômé, il assure le conseil technique et la conformité des produits distribués.",
  },
  {
    initial: "M",
    nom: "Mariame Bah",
    poste: "Responsable Production Eau",
    bio: "Technicienne en agroalimentaire, elle supervise la production et les contrôles qualité de l'Eau Kouria.",
  },
];

/* ════════════════════════════════════════════════════ */
export default function Home() {
  const [submitState, setSubmitState] = useState("idle"); // idle | loading | done

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitState("loading");
    setTimeout(() => {
      setSubmitState("done");
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="font-[Open_Sans] text-gray-900 bg-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section
          id="accueil"
          className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]"
        >
          {/* Gauche */}
          <div className="bg-white px-10 py-20 lg:px-16 lg:py-24 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0054A6] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-fit">
              <span className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
              Conakry, Guinée — Partenaire de confiance
            </div>

            {/* Titre */}
            <h1 className="font-[Montserrat] font-black text-4xl lg:text-5xl leading-tight text-gray-950 mb-5">
              L&apos;énergie et l&apos;eau,
              <br />
              <span className="text-[#0054A6]">au cœur</span> de la
              <br />
              <span className="text-[#00AEEF]">Guinée</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-[15px] leading-relaxed text-gray-500 max-w-md mb-9">
              Thioro Group Sarlu distribue des équipements électriques certifiés
              et produit l&apos;Eau Minérale Kouria depuis la source naturelle
              de Kouriah, Coyah.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#produits"
                className="inline-flex items-center gap-2 bg-[#0054A6] text-white px-7 py-3.5 rounded-xl font-[Montserrat] font-bold text-sm hover:bg-[#003d7a] transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200"
              >
                Voir le catalogue
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-[#0054A6] text-[#0054A6] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-all"
              >
                Demander un devis
              </a>
            </div>
          </div>

          {/* Droite */}
          <div
            className="relative bg-[#0054A6] overflow-hidden hidden lg:block"
            style={{ clipPath: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            {/* Grille décorative */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Cercles animés + icônes */}
            <div className="absolute inset-0 flex items-center justify-center pl-14">
              <div className="relative w-48 h-48">
                {/* Cercles */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_22s_linear_infinite]" />
                <div className="absolute inset-5 rounded-full border border-white/12 animate-[spin_15s_linear_infinite_reverse]" />
                {/* Icônes */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 54 54"
                    fill="none"
                    className="animate-[float_3s_ease-in-out_infinite]"
                    style={{
                      filter: "drop-shadow(0 0 12px rgba(255,255,255,0.3))",
                    }}
                  >
                    <path
                      d="M33 5L16 30H27L23 49L41 23H30L33 5Z"
                      fill="#fff"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1"
                    />
                  </svg>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 38 38"
                    fill="none"
                    className="animate-[float_3s_ease-in-out_1.5s_infinite]"
                  >
                    <path
                      d="M19 4C19 4 8 17 8 24C8 30.1 13 35 19 35C25 35 30 30.1 30 24C30 17 19 4 19 4Z"
                      fill="#00AEEF"
                      opacity="0.9"
                    />
                  </svg>
                </div>
              </div>
              {/* Labels flottants */}
              <div className="absolute bottom-14 right-8 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 text-white">
                <strong className="block font-bold text-sm">Eau Kouria</strong>
                <span className="text-xs text-white/70">
                  Source naturelle · Coyah
                </span>
              </div>
              <div className="absolute top-14 right-6 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 text-white">
                <strong className="block font-bold text-sm">
                  150+ clients
                </strong>
                <span className="text-xs text-white/70">actifs en Guinée</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="bg-[#0054A6] grid grid-cols-2 lg:grid-cols-4 gap-px">
          {[
            {
              target: 2015,
              suffix: "",
              label: "Année de création",
              accent: true,
            },
            { target: 150, suffix: "+", label: "Clients actifs" },
            { target: 3, suffix: "", label: "Sites opérationnels" },
            { target: 98, suffix: "%", label: "Satisfaction client" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#0054A6] py-6 text-center text-white"
            >
              <div
                className={`font-[Montserrat] font-black text-3xl mb-1 ${s.accent ? "text-[#00AEEF]" : ""}`}
              >
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-[11px] text-white/60 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── ACTIVITÉS ── */}
        <section className="bg-[#f8fafd] py-20 px-6 lg:px-16">
          <p className="text-[11px] font-bold text-[#0054A6] uppercase tracking-widest mb-2">
            Nos domaines
          </p>
          <h2 className="font-[Montserrat] font-black text-3xl text-gray-950 mb-10">
            Quatre activités, une vision guinéenne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activites.map((a, i) => (
              <FadeUp key={a.titre} delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full hover:-translate-y-1 hover:shadow-xl hover:border-[#0054A6] transition-all duration-300 cursor-default">
                  <div
                    className={`w-12 h-12 ${a.bg} rounded-2xl flex items-center justify-center text-xl mb-4`}
                  >
                    {a.emoji}
                  </div>
                  <h3
                    className={`font-[Montserrat] font-bold text-sm text-gray-900 mb-2 hover:${a.color} transition-colors`}
                  >
                    {a.titre}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── PRODUITS ── */}
        <section className="py-20 px-6 lg:px-16" id="produits">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold text-[#0054A6] uppercase tracking-widest mb-2">
                Catalogue
              </p>
              <h2 className="font-[Montserrat] font-black text-3xl text-gray-950">
                Produits en vedette
              </h2>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0054A6] hover:text-[#003d7a] transition-colors"
            >
              Voir tout →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {produits.map((p, i) => (
              <FadeUp key={p.nom} delay={i * 70}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`${p.bg} h-28 flex items-center justify-center text-4xl relative`}
                  >
                    {p.emoji}
                    <span className="absolute top-2.5 left-2.5 bg-white/90 text-[#0054A6] text-[10px] font-bold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[Montserrat] font-bold text-sm text-gray-900 mb-1.5">
                      {p.nom}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        Marque : {p.marque}
                      </span>
                      <a
                        href="#contact"
                        className="flex items-center gap-1.5 bg-[#0054A6] text-white text-xs font-semibold px-3.5 py-2 rounded-lg hover:bg-[#003d7a] transition-colors"
                      >
                        Devis →
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── EAU KOURIA ── */}
        <section
          className="relative py-20 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0054A6 0%, #0077cc 55%, #00AEEF 100%)",
          }}
        >
          {/* Grille déco */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Texte */}
          <FadeUp className="relative z-10">
            <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-3">
              Notre production locale
            </p>
            <h2 className="font-[Montserrat] font-black text-3xl text-white mb-4 leading-tight">
              Eau Minérale Kouria —<br />
              Pure depuis la source
            </h2>
            <p className="text-[14px] text-white/80 leading-relaxed mb-6 max-w-md">
              Captée à la source naturelle de Kouriah (Coyah), l&apos;Eau
              Minérale Kouria est produite localement, certifiée par les
              autorités sanitaires guinéennes, et distribuée dans tout le pays.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "📍 Kouriah, Coyah",
                "✅ Certifiée ONAB",
                "🌿 Produit guinéen",
                "💎 Riche en minéraux",
              ].map((pill) => (
                <span
                  key={pill}
                  className="bg-white/15 border border-white/25 text-white text-xs px-3.5 py-1.5 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0054A6] font-[Montserrat] font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-xl"
            >
              Devenir point de vente →
            </a>
          </FadeUp>

          {/* Formats */}
          <FadeUp delay={120} className="relative z-10 grid grid-cols-3 gap-4">
            {eauFormats.map((f) => (
              <div
                key={f.taille}
                className="bg-white/15 border border-white/25 rounded-2xl py-6 px-4 text-center"
              >
                <div className="text-3xl mb-3">{f.emoji}</div>
                <div className="font-[Montserrat] font-bold text-white text-sm mb-1">
                  {f.taille}
                </div>
                <div className="text-[11px] text-white/60 leading-relaxed">
                  {f.desc}
                </div>
              </div>
            ))}
          </FadeUp>
        </section>

        {/* ── QUALITÉ ── */}
        <section className="bg-[#f8fafd] py-20 px-6 lg:px-16">
          <p className="text-[11px] font-bold text-[#0054A6] uppercase tracking-widest mb-2">
            Conformité
          </p>
          <h2 className="font-[Montserrat] font-black text-3xl text-gray-950 mb-10">
            Qualité & Certifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Checklist */}
            <FadeUp>
              <ul className="divide-y divide-gray-100">
                {[
                  "Produits électriques certifiés CE et IEC",
                  "Fiches techniques disponibles sur demande",
                  "Garantie fabricant sur tous les équipements",
                  "Analyses bactériologiques régulières (Eau Kouria)",
                  "Contrôle qualité avant chaque livraison",
                  "Service après-vente réactif à Conakry",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3.5 text-sm text-gray-600"
                  >
                    <span className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            {/* Normes grid */}
            <FadeUp delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {normes.map((n) => (
                  <div
                    key={n.code}
                    className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3"
                  >
                    <span className="w-9 h-9 bg-blue-50 text-[#0054A6] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                      📋
                    </span>
                    <div>
                      <p className="font-[Montserrat] font-bold text-xs text-[#0054A6] mb-0.5">
                        {n.code}
                      </p>
                      <p className="text-[11px] text-gray-400 leading-snug">
                        {n.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── ÉQUIPE ── */}
        <section className="py-20 px-6 lg:px-16">
          <p className="text-[11px] font-bold text-[#0054A6] uppercase tracking-widest mb-2">
            Notre équipe
          </p>
          <h2 className="font-[Montserrat] font-black text-3xl text-gray-950 mb-10">
            Les visages de Thioro Group
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {equipe.map((m, i) => (
              <FadeUp key={m.nom} delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0054A6] font-[Montserrat] font-black text-2xl flex items-center justify-center mx-auto mb-4">
                    {m.initial}
                  </div>
                  <h3 className="font-[Montserrat] font-bold text-sm text-gray-900 mb-1">
                    {m.nom}
                  </h3>
                  <p className="text-xs text-[#0054A6] font-semibold mb-3">
                    {m.poste}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── ACTUALITÉS ── */}
        <section className="bg-[#f8fafd] py-20 px-6 lg:px-16" id="actualites">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold text-[#0054A6] uppercase tracking-widest mb-2">
                Blog
              </p>
              <h2 className="font-[Montserrat] font-black text-3xl text-gray-950">
                Dernières actualités
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0054A6] hover:text-[#003d7a]"
            >
              Toutes les actualités →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {actualites.map((a, i) => (
              <FadeUp key={a.titre} delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default">
                  <div
                    className={`${a.bg} h-24 flex items-center justify-center text-3xl`}
                  >
                    {a.emoji}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] text-[#00AEEF] font-bold mb-2">
                      📅 {a.date}
                    </p>
                    <h3 className="font-[Montserrat] font-bold text-sm text-gray-900 mb-2 leading-snug">
                      {a.titre}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-[#0054A6] py-20 px-6 text-center">
          <h2 className="font-[Montserrat] font-black text-3xl text-white mb-4">
            Prêt à travailler ensemble ?
          </h2>
          <p className="text-white/75 text-[15px] mb-9 max-w-md mx-auto leading-relaxed">
            Notre équipe est disponible du lundi au vendredi de 8h à 18h pour
            répondre à vos questions et établir un devis personnalisé.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0054A6] font-[Montserrat] font-bold text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-xl"
            >
              Demander un devis
            </a>
            <a
              href="tel:+224000000000"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
            >
              📞 Nous appeler
            </a>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="py-20 px-6 lg:px-16" id="contact">
          <p className="text-[11px] font-bold text-[#0054A6] uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="font-[Montserrat] font-black text-3xl text-gray-950 mb-10">
            Parlons de votre projet
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Coordonnées */}
            <div className="space-y-1">
              <h3 className="font-[Montserrat] font-bold text-xl text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              {[
                {
                  icon: "📍",
                  label: "Siège social",
                  val: "Hamdallaye, Immeuble Ecobank, Conakry, Guinée",
                },
                {
                  icon: "📍",
                  label: "Usine Kouria",
                  val: "Kouriah, Coyah, Guinée",
                },
                { icon: "📞", label: "Téléphone", val: "+224 000 000 000" },
                { icon: "✉️", label: "Email", val: "contact@thiorogroup.com" },
                { icon: "💬", label: "WhatsApp", val: "Disponible 7j/7" },
                {
                  icon: "🕐",
                  label: "Horaires",
                  val: "Lun–Ven : 8h–18h  |  Sam : 8h–13h",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-base flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-[Montserrat] font-bold text-xs text-gray-900 mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-xs text-gray-500">{c.val}</p>
                  </div>
                </div>
              ))}
              {/* Carte placeholder */}
              <div className="mt-4 h-44 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-sm text-blue-300">
                🗺️ Carte — Hamdallaye, Conakry
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <h3 className="font-[Montserrat] font-bold text-xl text-gray-900 mb-1.5">
                Envoyez-nous un message
              </h3>
              <p className="text-sm text-gray-400 mb-7">
                Nous vous répondons sous 24 heures ouvrables.
              </p>

              {submitState === "done" ? (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-700 text-sm">
                  <span className="text-xl">✅</span>
                  Message envoyé ! Nous vous répondrons sous 24h.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      {
                        label: "Nom *",
                        type: "text",
                        placeholder: "Votre nom",
                        required: true,
                      },
                      {
                        label: "Prénom *",
                        type: "text",
                        placeholder: "Votre prénom",
                        required: true,
                      },
                      {
                        label: "Société",
                        type: "text",
                        placeholder: "Nom de votre société",
                      },
                      {
                        label: "Téléphone *",
                        type: "tel",
                        placeholder: "+224 000 000 000",
                        required: true,
                      },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required={f.required}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/15 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Domaine d&apos;intérêt *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/15 transition-all bg-white"
                    >
                      <option value="">Sélectionner un domaine</option>
                      <option>Équipements électriques</option>
                      <option>Eau Minérale Kouria</option>
                      <option>Pêche</option>
                      <option>Services &amp; Logistique</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      placeholder="Décrivez votre besoin (quantités, spécifications, délais...)"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/15 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="w-full bg-[#0054A6] text-white py-4 rounded-xl font-[Montserrat] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#003d7a] transition-all disabled:opacity-70 shadow-lg shadow-blue-200"
                  >
                    {submitState === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="32"
                            strokeDashoffset="12"
                          />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>✉️ Envoyer le message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Keyframes CSS pour float + spin */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
