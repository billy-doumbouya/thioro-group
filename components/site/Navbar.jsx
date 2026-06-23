"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

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

/* ── Logo SVG inline (remplace @/components/shared/Logo) ── */


function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      {/* ── Barre supérieure ── */}
      <div className="bg-[#0054A6] text-white py-1.5 px-4 text-sm hidden md:flex justify-between items-center">
        <span className="font-[Open_Sans]">
          Hamdallaye, Immeuble Ecobank, Conakry — Guinée
        </span>
        <a
          href="tel:+224 621 12 12 83"
          className="flex items-center gap-1.5 hover:text-[#00AEEF] transition-colors font-[Open_Sans]"
        >
          <Phone size={13} />
          +224 621 12 12 83
        </a>
      </div>

      {/* ── Navbar principale ── */}
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
            <Image
              src="/logo.jpg"
              alt="Logo Thioro Group"
              width={40}
              height={40}
            />

            {/* ── Desktop nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-[#555555] hover:text-[#0054A6] hover:bg-[#e6f4fd] transition-all font-[Open_Sans]">
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
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
                              className="block px-4 py-3 text-sm text-[#555555] hover:bg-[#e6f4fd] hover:text-[#0054A6] transition-colors font-[Open_Sans]"
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
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all font-[Open_Sans]",
                      pathname === link.href
                        ? "text-[#0054A6] bg-[#e6f4fd] font-semibold"
                        : "text-[#555555] hover:text-[#0054A6] hover:bg-[#e6f4fd]",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* ── CTA Desktop ── */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#0054A6] text-white px-5 py-2.5 rounded-xl text-sm font-semibold font-[Montserrat] hover:bg-[#003d7a] transition-all shadow-md hover:shadow-lg"
              >
                Demander un devis
              </Link>
            </div>

            {/* ── Burger mobile ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#555555] hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Menu mobile ── */}
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
                      <p className="px-3 py-2 text-xs font-bold text-[#888888] uppercase tracking-widest font-[Montserrat]">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-6 py-2.5 text-sm text-[#555555] hover:text-[#0054A6] font-[Open_Sans] transition-colors"
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
                        "px-3 py-2.5 rounded-lg text-sm font-medium font-[Open_Sans] transition-colors",
                        pathname === link.href
                          ? "bg-[#e6f4fd] text-[#0054A6] font-semibold"
                          : "text-[#555555] hover:bg-gray-50",
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 bg-[#0054A6] text-white px-4 py-3 rounded-xl text-sm font-semibold text-center font-[Montserrat] hover:bg-[#003d7a] transition-colors"
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
