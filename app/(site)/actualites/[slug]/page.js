import { actualites } from "@/data/actualites";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ActualiteCard from "@/components/site/ActualiteCard";

export async function generateMetadata({ params }) {
  const actu = actualites.find(a => a.slug === params.slug);
  if (!actu) return { title: "Article introuvable" };
  return { title: actu.titre, description: actu.extrait };
}

export default function ArticlePage({ params }) {
  const actu = actualites.find(a => a.slug === params.slug);
  if (!actu) notFound();

  const autres = actualites.filter(a => a.slug !== params.slug).slice(0, 3);

  return (
    <>
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-16 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/actualites" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-opensans mb-6 transition-colors">
            <ArrowLeft size={14} /> Retour aux actualités
          </Link>
          <div className="flex items-center gap-2 text-bleu-eau text-sm font-opensans mb-4">
            <Calendar size={13} />
            {formatDate(actu.createdAt)}
          </div>
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl">{actu.titre}</h1>
        </div>
      </div>
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4">
          {actu.image && (
            <div className="h-64 sm:h-96 rounded-2xl overflow-hidden bg-bleu-clair mb-10">
              <img src={actu.image} alt={actu.titre} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="prose prose-lg max-w-none font-opensans text-gray-700 leading-relaxed whitespace-pre-wrap">
            {actu.contenu}
          </div>
        </div>
      </SectionWrapper>
      {autres.length > 0 && (
        <SectionWrapper className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-extrabold text-2xl text-gray-900 mb-8">Autres articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {autres.map((a, i) => <ActualiteCard key={a.id} actualite={a} index={i} />)}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
