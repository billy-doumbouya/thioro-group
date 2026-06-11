import { Suspense } from "react";
import Hero from "@/components/site/Hero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/site/ProductCard";
import ActualiteCard from "@/components/site/ActualiteCard";
import AnimatedNumber from "@/components/shared/AnimatedNumber";
import Link from "next/link";
import { Zap, Droplets, Fish, Truck, ArrowRight, MapPin, Award, Shield, Lightbulb } from "lucide-react";
import { produitsElectricite, produitsEau } from "@/data/produits";
import { actualites } from "@/data/actualites";
import { chiffresClés, valeurs } from "@/data/equipe";

const iconeMap = { MapPin, Award, Shield, Lightbulb };

const activites = [
  { icone: Zap, titre: "Équipements électriques", desc: "Câbles, disjoncteurs, éclairage, groupes électrogènes et solutions solaires.", href: "/electricite", couleur: "bg-yellow-50 text-yellow-600" },
  { icone: Droplets, titre: "Eau Minérale Kouria", desc: "Eau naturelle de la source de Kouriah, pure et contrôlée.", href: "/eau-kouria", couleur: "bg-bleu-clair text-bleu-electrique" },
  { icone: Fish, titre: "Pêche", desc: "Produits de la mer frais, approvisionnement local et régional.", href: "/autres-activites", couleur: "bg-emerald-50 text-emerald-600" },
  { icone: Truck, titre: "Services & Logistique", desc: "Transport, conseil et solutions logistiques sur mesure.", href: "/autres-activites", couleur: "bg-orange-50 text-orange-600" },
];

export default function HomePage() {
  const produitsVedette = [...produitsElectricite.slice(0, 2), ...produitsEau.slice(0, 1)];
  const actusRecentes = actualites.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Activités */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-bleu-electrique font-opensans font-semibold text-sm uppercase tracking-widest mb-3">
              Nos domaines
            </p>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-gray-900">
              Quatre activités, une vision
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activites.map((act, i) => (
              <Link key={act.titre} href={act.href}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${act.couleur}`}>
                    <act.icone size={22} />
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2 group-hover:text-bleu-electrique transition-colors">
                    {act.titre}
                  </h3>
                  <p className="text-gris-anthracite text-sm font-opensans leading-relaxed">{act.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Chiffres clés */}
      <SectionWrapper className="bg-bleu-electrique">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {chiffresClés.map((c) => (
              <div key={c.label}>
                <div className="font-montserrat font-extrabold text-4xl text-white mb-2">
                  <AnimatedNumber value={c.valeur} suffix={c.suffixe} />
                </div>
                <p className="text-white/70 font-opensans text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Produits vedettes */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-bleu-electrique font-opensans font-semibold text-sm uppercase tracking-widest mb-2">
                Catalogue
              </p>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-gray-900">
                Produits en vedette
              </h2>
            </div>
            <Link href="/electricite" className="hidden sm:flex items-center gap-1.5 text-bleu-electrique text-sm font-opensans font-semibold hover:text-bleu-fonce">
              Voir tout <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produitsVedette.map((p, i) => (
              <ProductCard key={p.id} produit={p} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pourquoi Thioro */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-bleu-electrique font-opensans font-semibold text-sm uppercase tracking-widest mb-3">Pourquoi nous choisir</p>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-gray-900">
              Nos valeurs fondamentales
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v, i) => {
              const Icon = iconeMap[v.icone];
              return (
                <div key={v.titre} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-bleu-clair flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon size={24} className="text-bleu-electrique" />}
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2">{v.titre}</h3>
                  <p className="text-gris-anthracite text-sm font-opensans leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Actualités */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-bleu-electrique font-opensans font-semibold text-sm uppercase tracking-widest mb-2">
                Actualités
              </p>
              <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-gray-900">
                Dernières nouvelles
              </h2>
            </div>
            <Link href="/actualites" className="hidden sm:flex items-center gap-1.5 text-bleu-electrique text-sm font-opensans font-semibold hover:text-bleu-fonce">
              Toutes les actualités <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actusRecentes.map((a, i) => (
              <ActualiteCard key={a.id} actualite={a} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Final */}
      <SectionWrapper className="bg-bleu-electrique">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Prêt à travailler ensemble ?
          </h2>
          <p className="text-white/80 font-opensans mb-8">
            Contactez-nous pour un devis personnalisé ou une information sur nos produits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-bleu-electrique px-8 py-4 rounded-xl font-montserrat font-bold text-sm hover:bg-bleu-clair transition-all shadow-xl"
            >
              Demander un devis
            </Link>
            <Link
              href="/electricite"
              className="border border-white/40 text-white px-8 py-4 rounded-xl font-opensans font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Voir le catalogue
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
