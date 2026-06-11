"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate, truncate } from "@/lib/utils";

export default function ActualiteCard({ actualite, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-48 bg-bleu-clair overflow-hidden">
        {actualite.image ? (
          <Image
            src={actualite.image}
            alt={actualite.titre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-bleu-electrique/10 to-bleu-eau/10 flex items-center justify-center">
            <span className="text-bleu-electrique/30 font-montserrat font-bold text-4xl">TG</span>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-gris-moyen text-xs font-opensans mb-3">
          <Calendar size={12} />
          {formatDate(actualite.createdAt)}
        </div>

        <h3 className="font-montserrat font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-bleu-electrique transition-colors">
          {actualite.titre}
        </h3>
        <p className="text-gris-anthracite text-sm font-opensans leading-relaxed line-clamp-3 mb-4">
          {actualite.extrait || truncate(actualite.contenu)}
        </p>

        <Link
          href={`/actualites/${actualite.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-opensans font-semibold text-bleu-electrique hover:text-bleu-fonce transition-colors"
        >
          Lire la suite
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
