"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import Logo from "@/components/shared/Logo";

const footerLinks = {
  entreprise: [
    { href: "/a-propos", label: "Notre histoire" },
    { href: "/qualite", label: "Qualité & Conformité" },
    { href: "/actualites", label: "Actualités" },
  ],
  produits: [
    { href: "/electricite", label: "Équipements électriques" },
    { href: "/eau-kouria", label: "Eau Minérale Kouria" },
    { href: "/autres-activites", label: "Pêche & Services" },
  ],
  contact: [
    { href: "/contact", label: "Nous contacter" },
    { href: "/contact#devis", label: "Demander un devis" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Colonne logo */}
          <div className="lg:col-span-1">
            <Logo variant="white" size="sm" />
            <p className="mt-4 text-gray-400 text-sm font-opensans leading-relaxed">
              Votre partenaire de confiance pour les équipements électriques et l&apos;eau minérale naturelle en Guinée.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-bleu-electrique transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Liens */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest text-gray-300 mb-4">
                {key === "entreprise" ? "Entreprise" : key === "produits" ? "Produits" : "Contact"}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-bleu-eau text-sm font-opensans transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Coordonnées */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-widest text-gray-300 mb-4">
              Nous trouver
            </h4>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "Hamdallaye, Immeuble Ecobank, Conakry" },
                { icon: Phone, text: "+224 000 000 000", href: "tel:+224000000000" },
                { icon: Mail, text: "contact@thiorogroup.com", href: "mailto:contact@thiorogroup.com" },
                { icon: MessageCircle, text: "WhatsApp", href: "https://wa.me/224000000000" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={15} className="text-bleu-eau shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} className="text-gray-400 hover:text-bleu-eau text-sm font-opensans transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm font-opensans">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs font-opensans">
            © {new Date().getFullYear()} Thioro Group Sarlu. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {[
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/confidentialite", label: "Confidentialité" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-500 hover:text-gray-300 text-xs font-opensans transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
