"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Newspaper,
  FileText,
  MessageSquare,
  Image,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Zap,
} from "lucide-react";
import Logo from "@/components/shared/Logo";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { useConfirmModal } from "@/hooks/useConfirmModal";
import ConfirmModal from "@/app/(dashboard)/dashboard/ConfirmModal";

const navItems = [
  { href: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/dashboard/produits", label: "Produits", icon: Package },
  { href: "/dashboard/actualites", label: "Actualités", icon: Newspaper },
  { href: "/dashboard/devis", label: "Devis reçus", icon: FileText },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/galerie", label: "Galerie", icon: Image },
  { href: "/dashboard/parametres", label: "Paramètres", icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const confirmModal = useConfirmModal();

  const handleLogoutClick = () => {
    confirmModal.open({
      title: "Se déconnecter ?",
      description:
        "Vous devrez vous reconnecter pour accéder au tableau de bord.",
      variant: "warning",
      confirmLabel: "Déconnexion",
      onConfirm: async () => {
        await signOut({ callbackUrl: "/admin/login" });
      },
    });
  };

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-gray-900 text-white flex flex-col h-screen sticky top-0 shrink-0"
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Logo variant="white" size="sm" />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 ml-auto"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-[Open_Sans] transition-colors cursor-pointer",
                  isActive
                    ? "bg-[#0054A6] text-white font-semibold"
                    : "text-gray-400 hover:bg-white/10 hover:text-white",
                )}
              >
                <item.icon size={18} className="shrink-0" />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Déconnexion */}
      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={handleLogoutClick}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors w-full font-[Open_Sans]"
        >
          <LogOut size={18} className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="whitespace-nowrap"
              >
                Déconnexion
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <ConfirmModal {...confirmModal.props} />
    </motion.aside>
  );
}
