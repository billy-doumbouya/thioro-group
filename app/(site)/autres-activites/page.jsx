import React from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Fish, Truck, CheckCircle2 } from "lucide-react";

export const metadata = { title: "Autres activités — Thioro Group" };

export default function AutresActivitesPage() {
  return (
    <>
      {/* ─── EN-TÊTE HERO ASYMÉTRIQUE ─── */}
      <div
        className="relative overflow-hidden bg-[#001c38] pt-32 pb-24 text-white text-center dark:bg-black transition-colors duration-300"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full opacity-20 blur-[100px] bg-[#00aeef]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px] bg-[#0054a6]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest mb-4 inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#00aeef] font-sans">
            Diversification
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl tracking-tight mb-4">
            Autres activités
          </h1>
          <p className="text-zinc-300 font-sans font-light max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Au-delà de l&apos;électricité et de l&apos;eau, Thioro Group déploie
            son expertise sectorielle au service de l&apos;économie guinéenne à
            travers la pêche et les solutions logistiques.
          </p>
        </div>
      </div>

      {/* ─── CONTENU MULTI-SECTEURS PREMIUM ─── */}
      <SectionWrapper className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* SECTEUR 1 : LA PÊCHE (Mise en page gauche-droite) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 shadow-sm">
                <Fish size={26} />
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl tracking-tight text-zinc-900 dark:text-white">
                Filière Halieutique & Pêche
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                Thioro Group est un maillon actif de la filière halieutique
                guinéenne. Nous structurons des circuits
                d&apos;approvisionnement optimisés pour garantir la
                disponibilité de produits de la mer d&apos;une fraîcheur absolue
                sur les marchés locaux et régionaux.
              </p>
            </div>

            <div className="lg:col-span-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 rounded-2xl p-8 shadow-inner">
              <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                Engagements clés — Pêche
              </h3>
              <ul className="space-y-4">
                {[
                  "Approvisionnement local et distribution régionale",
                  "Garantie stricte sur les produits frais et transformés",
                  "Partenariats durables avec les pêcheurs artisanaux",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3.5 text-sm font-sans text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SECTEUR 2 : LOGISTIQUE (Mise en page inversée) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900/30 text-orange-600 dark:text-orange-400 shadow-sm">
                <Truck size={26} />
              </div>
              <h2 className="font-montserrat font-extrabold text-3xl tracking-tight text-zinc-900 dark:text-white">
                Services & Logistique Intégrée
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                Notre division services accompagne quotidiennement les
                entreprises, partenaires industriels et institutions privées
                dans la résolution de leurs défis logistiques complexes, de
                gestion de flux et d&apos;approvisionnement stratégique en
                Guinée.
              </p>
            </div>

            <div className="lg:col-span-6 lg:order-1 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900 rounded-2xl p-8 shadow-inner">
              <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                Expertises métiers — Logistique
              </h3>
              <ul className="space-y-4">
                {[
                  "Flotte de transport dédiée et livraison sécurisée",
                  "Conseil opérationnel en chaîne d'approvisionnement",
                  "Solutions sur mesure adaptées aux exigences B2B",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3.5 text-sm font-sans text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-orange-500 shrink-0 mt-0.5"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
