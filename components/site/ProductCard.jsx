"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductCard({ produit, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative h-48 bg-bleu-clair overflow-hidden">
        {produit.images?.[0] ? (
          <Image
            src={produit.images[0]}
            alt={produit.nom}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-bleu-electrique/10 flex items-center justify-center">
              <span className="text-bleu-electrique text-2xl font-montserrat font-bold">
                {produit.nom.charAt(0)}
              </span>
            </div>
          </div>
        )}
        {/* Badge catégorie */}
        {produit.sousCategorie && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-bleu-electrique text-xs font-opensans font-semibold px-3 py-1 rounded-full">
              {produit.sousCategorie}
            </span>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="font-montserrat font-bold text-gray-900 mb-2 group-hover:text-bleu-electrique transition-colors">
          {produit.nom}
        </h3>
        <p className="text-gris-anthracite text-sm font-opensans leading-relaxed line-clamp-2 mb-4">
          {produit.description}
        </p>

        {/* Marque / Origine */}
        {(produit.marque || produit.origine) && (
          <div className="flex gap-3 mb-4">
            {produit.marque && (
              <span className="text-xs text-gris-moyen font-opensans">
                Marque: <strong className="text-gris-anthracite">{produit.marque}</strong>
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {produit.pdfUrl ? (
            <a
              href={produit.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-bleu-electrique hover:text-bleu-fonce font-opensans font-medium"
            >
              <FileText size={13} />
              Fiche technique
            </a>
          ) : (
            <span />
          )}
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-xs font-opensans font-semibold text-white bg-bleu-electrique px-3 py-2 rounded-lg hover:bg-bleu-fonce transition-colors"
          >
            Devis
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
