import SectionWrapper from "@/components/shared/SectionWrapper";
import { Shield, Award, FileCheck, CheckCircle } from "lucide-react";

export const metadata = { title: "Qualité & Conformité" };

const normes = [
  { code: "IEC 60898", desc: "Disjoncteurs pour installations domestiques et analogues" },
  { code: "IEC 60439", desc: "Tableaux de distribution basse tension" },
  { code: "NF C 32-100", desc: "Conducteurs et câbles isolés" },
  { code: "ISO 22000", desc: "Sécurité des denrées alimentaires (Eau Kouria)" },
  { code: "ONAB", desc: "Office National des Aliments et Boissons — Guinée" },
  { code: "RCCM Guinée", desc: "Registre du Commerce et du Crédit Mobilier" },
];

export default function QualitePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-20 text-white text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
          <Shield size={28} />
        </div>
        <p className="font-opensans text-bleu-eau text-sm font-semibold uppercase tracking-widest mb-3">Conformité</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">Qualité & Conformité</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">
          Chaque produit distribué par Thioro Group répond aux normes internationales les plus exigeantes.
        </p>
      </div>

      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-montserrat font-extrabold text-3xl text-gray-900 mb-6">Notre engagement qualité</h2>
              <div className="space-y-4 text-gris-anthracite font-opensans leading-relaxed">
                <p>Thioro Group s&apos;engage à ne distribuer que des produits certifiés, importés directement de fabricants reconnus et ayant passé nos contrôles internes avant mise en vente.</p>
                <p>Pour l&apos;Eau Minérale Kouria, des analyses bactériologiques et physicochimiques sont effectuées régulièrement par des laboratoires agréés.</p>
              </div>
              <div className="mt-8 space-y-3">
                {["Produits certifiés CE et IEC", "Fiches techniques disponibles", "Garantie fabricant sur tous les équipements", "Service après-vente réactif"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                    <span className="text-gris-anthracite font-opensans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {normes.map(n => (
                <div key={n.code} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-bleu-clair flex items-center justify-center shrink-0">
                    <FileCheck size={18} className="text-bleu-electrique" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-gray-900 text-sm">{n.code}</p>
                    <p className="text-gris-moyen text-xs font-opensans">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
