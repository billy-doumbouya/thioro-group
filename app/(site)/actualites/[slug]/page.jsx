import ArticlePageClient from "@/components/site/ArticlePageClient";
import { actualites } from "@/data/actualites";
import { notFound } from "next/navigation";

// 1. Les métadonnées sont résolues proprement côté serveur
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const actu = actualites.find((a) => a.slug === slug);
  if (!actu) return { title: "Article introuvable" };
  return { title: actu.titre, description: actu.extrait };
}

// 2. Le composant serveur qui reçoit les params
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const actu = actualites.find((a) => a.slug === slug);
  if (!actu) notFound();

  const autres = actualites.filter((a) => a.slug !== slug).slice(0, 3);

  // On passe les données prêtes au composant Client
  return <ArticlePageClient actu={actu} index={0} autres={autres} />;
}
