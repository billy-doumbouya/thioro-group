import SectionWrapper from "@/components/shared/SectionWrapper";
import ProductCard from "@/components/site/ProductCard";
import ContactForm from "@/components/site/ContactForm";
import { produitsElectricite, categories } from "@/data/produits";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Équipements électriques" };

export default function ElectricitePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-20 text-white text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
          <Zap size={28} />
        </div>
        <p className="font-opensans text-bleu-eau text-sm font-semibold uppercase tracking-widest mb-3">Catalogue</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">Équipements électriques</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">
          Câbles, disjoncteurs, éclairage industriel, groupes électrogènes et solutions solaires. Produits certifiés, importés directement des meilleurs fabricants mondiaux.
        </p>
      </div>

      {/* Catégories */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(c => (
              <div key={c.id} className="bg-white border border-gray-100 px-4 py-2 rounded-xl text-sm font-opensans font-medium text-gris-anthracite shadow-sm hover:border-bleu-electrique hover:text-bleu-electrique transition-all cursor-pointer">
                {c.label}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produitsElectricite.map((p, i) => <ProductCard key={p.id} produit={p} index={i} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA devis */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900 mb-4">Besoin d&apos;un devis ?</h2>
          <p className="text-gris-anthracite font-opensans mb-8">Remplissez le formulaire et notre équipe vous répond sous 24h avec une offre personnalisée.</p>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <ContactForm type="devis" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
