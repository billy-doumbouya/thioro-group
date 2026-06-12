"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  {
    label: "Produits",
    children: [
      { href: "/electricite", label: "Équipements électriques" },
      { href: "/eau-kouria", label: "Eau Minérale Kouria" },
      { href: "/autres-activites", label: "Autres activités" },
    ],
  },
  { href: "/a-propos", label: "À propos" },
  { href: "/qualite", label: "Qualité" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barre supérieure */}
      <div className="bg-bleu-electrique text-white py-1.5 px-4 text-sm hidden md:flex justify-between items-center">
        <span className="font-opensans">
          Hamdallaye, Immeuble Ecobank, Conakry — Guinée
        </span>
        <a
          href="tel:+224000000000"
          className="flex items-center gap-1.5 hover:text-bleu-eau transition-colors"
        >
          <Phone size={13} />
          +224 623952011
        </a>
      </div>

      {/* Navbar principale */}
      <motion.nav
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
        variants={{
          top: { backgroundColor: "rgba(255,255,255,0.95)", boxShadow: "none" },
          scrolled: {
            backgroundColor: "rgba(255,255,255,0.98)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          },
        }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="sm" />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gris-anthracite hover:text-bleu-electrique hover:bg-bleu-clair transition-all font-opensans">
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform",
                          dropdownOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-gris-anthracite hover:bg-bleu-clair hover:text-bleu-electrique transition-colors font-opensans"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all font-opensans",
                      pathname === link.href
                        ? "text-bleu-electrique bg-bleu-clair font-semibold"
                        : "text-gris-anthracite hover:text-bleu-electrique hover:bg-bleu-clair",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-bleu-electrique text-white px-5 py-2.5 rounded-xl text-sm font-semibold font-montserrat hover:bg-bleu-fonce transition-all shadow-md hover:shadow-lg"
              >
                Demander un devis
              </Link>
            </div>

            {/* Burger mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gris-anthracite hover:bg-gray-100"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <p className="px-3 py-2 text-xs font-bold text-gris-moyen uppercase tracking-widest font-montserrat">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-6 py-2.5 text-sm text-gris-anthracite hover:text-bleu-electrique font-opensans"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "px-3 py-2.5 rounded-lg text-sm font-medium font-opensans",
                        pathname === link.href
                          ? "bg-bleu-clair text-bleu-electrique font-semibold"
                          : "text-gris-anthracite",
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 bg-bleu-electrique text-white px-4 py-3 rounded-xl text-sm font-semibold text-center font-montserrat"
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
