import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/site/ProductCard";
import { produitsEau } from "@/data/produits";
import { Droplets, MapPin, Shield, Leaf } from "lucide-react";

export const metadata = { title: "Eau Minérale Kouria" };

export default function EauKouriaPage() {
  const atouts = [
    { icon: MapPin, titre: "Source naturelle", desc: "Captée à Kouriah, Coyah — eau pure à la source" },
    { icon: Shield, titre: "Certifiée", desc: "Contrôlée par l'autorité sanitaire guinéenne" },
    { icon: Leaf, titre: "Locale", desc: "Produit guinéen, emploi local, chaîne courte" },
    { icon: Droplets, titre: "Minéraux naturels", desc: "Riche en minéraux essentiels au corps" },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-bleu-eau to-bleu-electrique py-20 text-white text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
          <Droplets size={28} />
        </div>
        <p className="font-opensans text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">Nos produits</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">Eau Minérale Kouria</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">
          L&apos;eau naturelle de la source de Kouriah, produite localement en Guinée. Pure, saine et rafraîchissante.
        </p>
      </div>

      {/* Atouts */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {atouts.map(({ icon: Icon, titre, desc }) => (
              <div key={titre} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-bleu-clair flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-bleu-electrique" />
                </div>
                <h3 className="font-montserrat font-bold text-gray-900 text-sm mb-1">{titre}</h3>
                <p className="text-gris-moyen text-xs font-opensans">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900 text-center mb-10">Nos formats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {produitsEau.map((p, i) => <ProductCard key={p.id} produit={p} index={i} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* Points de vente */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900 mb-4">Où nous trouver ?</h2>
          <p className="text-gris-anthracite font-opensans mb-8">L&apos;Eau Kouria est disponible dans les supermarchés, hôtels et restaurants partenaires à Conakry et dans les principales villes de Guinée.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-bleu-electrique text-white px-8 py-4 rounded-xl font-montserrat font-bold text-sm hover:bg-bleu-fonce transition-all shadow-lg">
            Devenir point de vente
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
