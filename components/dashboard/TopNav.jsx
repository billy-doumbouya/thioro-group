"use client";

import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import { useSession } from "next-auth/react";

export default function TopNav({ titre }) {
  const { data: session } = useSession();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30"
    >
      <h1 className="font-montserrat font-bold text-gray-900 text-lg">{titre}</h1>

      <div className="flex items-center gap-3">
        {/* Recherche */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-52">
          <Search size={14} className="text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent text-sm font-opensans outline-none text-gray-600 placeholder:text-gray-400 w-full"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Bell size={16} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-bleu-electrique flex items-center justify-center">
            <span className="text-white font-montserrat font-bold text-sm">
              {session?.user?.name?.charAt(0) || "A"}
            </span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-opensans font-semibold text-gray-900 leading-tight">
              {session?.user?.name || "Administrateur"}
            </p>
            <p className="text-xs font-opensans text-gris-moyen">Admin</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
