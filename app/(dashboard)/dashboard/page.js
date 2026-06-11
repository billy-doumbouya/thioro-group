"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TopNav from "@/components/dashboard/TopNav";
import StatCard from "@/components/dashboard/StatCard";
import { Package, FileText, MessageSquare, Newspaper, TrendingUp, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function DashboardPage() {
  const [stats, setStats] = useState({ produits: 0, devis: 0, messages: 0, actualites: 0 });
  const [devisRecents, setDevisRecents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [produitsRes, devisRes, messagesRes, actusRes] = await Promise.all([
          fetch("/api/produits"),
          fetch("/api/devis"),
          fetch("/api/messages"),
          fetch("/api/actualites?all=true"),
        ]);
        const [produits, devis, messages, actualites] = await Promise.all([
          produitsRes.json(), devisRes.json(), messagesRes.json(), actusRes.json()
        ]);
        setStats({
          produits: produits.length || 0,
          devis: devis.length || 0,
          messages: messages.filter(m => !m.lu).length || 0,
          actualites: actualites.filter(a => a.publie).length || 0,
        });
        setDevisRecents(devis.slice(0, 5) || []);
      } catch {}
      setLoading(false);
    };
    fetchData();
  }, []);

  const statCards = [
    { titre: "Produits actifs", valeur: stats.produits, icone: Package, couleur: "bleu", tendance: 12 },
    { titre: "Devis reçus", valeur: stats.devis, icone: FileText, couleur: "orange", tendance: 8 },
    { titre: "Messages non lus", valeur: stats.messages, icone: MessageSquare, couleur: "violet" },
    { titre: "Articles publiés", valeur: stats.actualites, icone: Newspaper, couleur: "vert", tendance: 5 },
  ];

  const statutColors = {
    nouveau: "bg-blue-50 text-blue-600",
    traite: "bg-emerald-50 text-emerald-600",
    archive: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <TopNav titre="Tableau de bord" />
      <div className="p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {statCards.map((s, i) => (
            <motion.div
              key={s.titre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <StatCard {...s} />
            </motion.div>
          ))}
        </div>

        {/* Devis récents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-montserrat font-bold text-gray-900">Derniers devis reçus</h2>
            <span className="text-xs font-opensans text-gris-moyen flex items-center gap-1.5">
              <Clock size={12} /> Temps réel
            </span>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-8 text-center">
                <div className="w-8 h-8 border-2 border-bleu-electrique border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            ) : devisRecents.length === 0 ? (
              <div className="p-8 text-center text-gris-moyen font-opensans text-sm">
                Aucun devis reçu pour le moment.
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-100">
                    {["Client", "Société", "Domaine", "Date", "Statut"].map((h) => (
                      <th key={h} className="px-6 py-3 text-xs font-opensans font-semibold text-gris-moyen uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {devisRecents.map((d) => (
                    <motion.tr
                      key={d.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-opensans font-medium text-gray-900 text-sm">
                        {d.prenom} {d.nom}
                      </td>
                      <td className="px-6 py-4 text-sm font-opensans text-gris-anthracite">{d.societe || "—"}</td>
                      <td className="px-6 py-4 text-sm font-opensans text-gris-anthracite capitalize">{d.activite}</td>
                      <td className="px-6 py-4 text-sm font-opensans text-gris-moyen">{formatDate(d.createdAt)}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-opensans font-semibold px-2.5 py-1 rounded-full ${statutColors[d.statut] || statutColors.nouveau}`}>
                          {d.statut}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
