import SectionWrapper from "@/components/shared/SectionWrapper";
import { Fish, Truck, Package, Users } from "lucide-react";

export const metadata = { title: "Autres activités" };

export default function AutresActivitesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-20 text-white text-center">
        <p className="font-opensans text-bleu-eau text-sm font-semibold uppercase tracking-widest mb-3">Diversification</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">Autres activités</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">Au-delà de l&apos;électricité et de l&apos;eau, Thioro Group s&apos;implique dans la pêche et les services logistiques.</p>
      </div>

      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            {
              icon: Fish, titre: "Pêche", couleur: "bg-emerald-50 text-emerald-600",
              desc: "Thioro Group est actif dans la filière halieutique guinéenne, assurant l&apos;approvisionnement en produits de la mer frais pour les marchés locaux et régionaux.",
              points: ["Approvisionnement local et régional", "Produits frais et transformés", "Partenariats avec les pêcheurs artisanaux"],
            },
            {
              icon: Truck, titre: "Services & Logistique", couleur: "bg-orange-50 text-orange-600",
              desc: "Notre division services accompagne entreprises et institutions dans leurs besoins logistiques, de conseil et d&apos;approvisionnement en Guinée.",
              points: ["Transport et livraison", "Conseil en approvisionnement", "Solutions sur mesure pour entreprises"],
            },
          ].map(({ icon: Icon, titre, couleur, desc, points }) => (
            <div key={titre} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${couleur}`}>
                <Icon size={26} />
              </div>
              <h2 className="font-montserrat font-extrabold text-2xl text-gray-900 mb-4">{titre}</h2>
              <p className="text-gris-anthracite font-opensans leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: desc }} />
              <ul className="space-y-2">
                {points.map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm font-opensans text-gris-anthracite">
                    <div className="w-1.5 h-1.5 rounded-full bg-bleu-electrique shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
