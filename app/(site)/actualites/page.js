import SectionWrapper from "@/components/shared/SectionWrapper";
import ActualiteCard from "@/components/site/ActualiteCard";
import { actualites } from "@/data/actualites";

export const metadata = { title: "Actualités" };

export default function ActualitesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-20 text-white text-center">
        <p className="font-opensans text-bleu-eau text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">Actualités</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">Suivez les dernières nouvelles de Thioro Group et du secteur.</p>
      </div>
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actualites.map((a, i) => <ActualiteCard key={a.id} actualite={a} index={i} />)}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
