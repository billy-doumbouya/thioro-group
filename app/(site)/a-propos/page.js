import SectionWrapper from "@/components/shared/SectionWrapper";
import AnimatedNumber from "@/components/shared/AnimatedNumber";
import { equipe, chiffresClés, valeurs } from "@/data/equipe";
import { MapPin, Award, Shield, Lightbulb } from "lucide-react";

export const metadata = { title: "À propos" };

const iconeMap = { MapPin, Award, Shield, Lightbulb };

export default function AProposPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-20 text-white text-center">
        <p className="font-opensans text-bleu-eau text-sm font-semibold uppercase tracking-widest mb-3">Notre entreprise</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">À propos de Thioro Group</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">
          Depuis 2015, nous construisons une entreprise guinéenne de référence dans l&apos;énergie et l&apos;eau.
        </p>
      </div>

      {/* Histoire */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-bleu-electrique font-opensans font-semibold text-sm uppercase tracking-widest mb-3">Notre histoire</p>
              <h2 className="font-montserrat font-extrabold text-3xl text-gray-900 mb-6">Nés en Guinée, au service de la Guinée</h2>
              <div className="space-y-4 text-gris-anthracite font-opensans leading-relaxed">
                <p>Fondée en 2015 à Conakry, Thioro Group Sarlu est née de la volonté de répondre à deux besoins fondamentaux de la Guinée : l&apos;accès à des équipements électriques de qualité et à une eau minérale locale fiable.</p>
                <p>Au fil des années, nous avons développé des partenariats solides avec des fabricants européens et asiatiques de référence, tout en investissant dans notre usine de production d&apos;eau minérale à Kouriah, Coyah.</p>
                <p>Aujourd&apos;hui, Thioro Group est un acteur reconnu du secteur en Guinée, avec plus de 150 clients actifs et trois sites opérationnels.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {chiffresClés.map(c => (
                <div key={c.label} className="bg-bleu-clair rounded-2xl p-6 text-center">
                  <div className="font-montserrat font-extrabold text-3xl text-bleu-electrique mb-2">
                    <AnimatedNumber value={c.valeur} suffix={c.suffixe} />
                  </div>
                  <p className="text-gris-anthracite font-opensans text-sm">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Valeurs */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Nos valeurs</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map(v => {
              const Icon = iconeMap[v.icone];
              return (
                <div key={v.titre} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-bleu-clair flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon size={22} className="text-bleu-electrique" />}
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2">{v.titre}</h3>
                  <p className="text-gris-anthracite text-sm font-opensans">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Équipe */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Notre équipe dirigeante</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((m, i) => (
              <div key={m.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-20 h-20 rounded-2xl bg-bleu-clair flex items-center justify-center mx-auto mb-4">
                  <span className="font-montserrat font-extrabold text-2xl text-bleu-electrique">{m.nom.charAt(0)}</span>
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 mb-1">{m.nom}</h3>
                <p className="text-bleu-electrique text-xs font-opensans font-semibold mb-3">{m.poste}</p>
                <p className="text-gris-moyen text-xs font-opensans leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
