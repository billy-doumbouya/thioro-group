"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { Loader2, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import Logo from "@/components/shared/Logo";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        toast.error(
          "Identifiants incorrects. Vérifiez votre email et mot de passe.",
        );
      } else {
        toast.success("Connexion réussie !");
        router.push("/dashboard");
      }
    } catch {
      toast.error("Erreur de connexion. Réessayez.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#003d7a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Orbes animés arrière-plan */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#00aeef] blur-[90px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.16, 0.08],
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#0054a6] blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-1/2 left-[15%] w-[220px] h-[220px] rounded-full bg-[#00aeef] blur-[70px] pointer-events-none"
      />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Clip-path décoratif bas de page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-[#00aeef]/5 pointer-events-none"
        style={{ clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }}
      />

      {/* Accents géométriques */}
      <svg
        className="absolute top-8 left-8 opacity-[0.07] pointer-events-none"
        width="110"
        height="110"
        viewBox="0 0 110 110"
      >
        <polygon
          points="55,5 105,95 5,95"
          fill="none"
          stroke="#00aeef"
          strokeWidth="1.5"
        />
        <polygon
          points="55,22 90,88 20,88"
          fill="none"
          stroke="#00aeef"
          strokeWidth="0.7"
        />
      </svg>
      <svg
        className="absolute bottom-10 right-10 opacity-[0.07] pointer-events-none"
        width="90"
        height="90"
        viewBox="0 0 90 90"
      >
        <rect
          x="5"
          y="5"
          width="80"
          height="80"
          fill="none"
          stroke="#00aeef"
          strokeWidth="1.5"
          transform="rotate(15 45 45)"
        />
        <rect
          x="18"
          y="18"
          width="54"
          height="54"
          fill="none"
          stroke="#00aeef"
          strokeWidth="0.7"
          transform="rotate(30 45 45)"
        />
      </svg>

      {/* Badge flottant */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-[#00aeef]/10 border border-[#00aeef]/25 backdrop-blur-sm rounded-full px-3.5 py-1.5"
      >
        <ShieldCheck size={11} className="text-[#00aeef]" />
        <span className="font-montserrat text-[10px] font-bold tracking-widest uppercase text-[#00aeef]">
          Accès sécurisé
        </span>
      </motion.div>

      {/* Card principale */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Barre top gradient */}
        <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-[#003d7a] via-[#0054a6] to-[#00aeef]" />

        <div className="bg-white/97 rounded-b-3xl shadow-2xl shadow-black/40 px-8 py-10 ring-1 ring-[#00aeef]/15">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-br from-[#003d7a] to-[#0054a6] flex items-center justify-center overflow-hidden shrink-0">
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#00aeef]/30" />
              <Logo size="sm" className="relative z-10" />
            </div>
            <div>
              <p className="font-montserrat text-[17px] font-extrabold text-[#003d7a] leading-none tracking-tight">
                Thioro Group
              </p>
              <p className="font-opensans text-[10px] font-semibold text-[#00aeef] uppercase tracking-[0.15em] mt-1">
                Sarlu — Conakry
              </p>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-[#e6f4fd] border border-[#0054a6]/12 text-[#0054a6] rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse" />
              <span className="font-opensans text-[11px] font-semibold uppercase tracking-widest">
                Espace administrateur
              </span>
            </div>
            <h1 className="font-montserrat text-2xl font-extrabold text-[#003d7a] tracking-tight">
              Bon retour
            </h1>
            <p className="font-opensans text-sm text-[#888888] mt-1">
              Connectez-vous pour gérer le site
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block font-opensans text-[11px] font-semibold text-[#555555] uppercase tracking-wider mb-2">
                Adresse email
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0054a6]">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </span>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="admin@thiorogroup.com"
                  className={`w-full pl-10 pr-4 py-3.5 rounded-xl border font-opensans text-sm text-[#003d7a] bg-[#f8fbff] placeholder-[#b3c9e0] outline-none transition-all duration-200 ${
                    errors.email
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-[#e6f4fd] focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/10 focus:bg-white"
                  }`}
                />
              </div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-red-500 text-xs mt-1.5 font-opensans"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Mot de passe */}
            <div>
              <label className="block font-opensans text-[11px] font-semibold text-[#555555] uppercase tracking-wider mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0054a6]">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  {...register("password")}
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-3.5 rounded-xl border font-opensans text-sm text-[#003d7a] bg-[#f8fbff] placeholder-[#b3c9e0] outline-none transition-all duration-200 ${
                    errors.password
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-[#e6f4fd] focus:border-[#00aeef] focus:ring-4 focus:ring-[#00aeef]/10 focus:bg-white"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#0054a6] transition-colors"
                >
                  {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <AnimatePresence>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-red-500 text-xs mt-1.5 font-opensans"
                  >
                    {errors.password.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Bouton submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01, y: loading ? 0 : -1 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="relative w-full py-4 rounded-xl font-montserrat font-extrabold text-sm uppercase tracking-widest text-white overflow-hidden disabled:opacity-70 mt-1"
              style={{
                background: "linear-gradient(135deg, #0054a6, #003d7a)",
              }}
            >
              {/* Hover shimmer */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #0054a6, #00aeef)",
                }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Connexion en cours…
                  </>
                ) : (
                  <>
                    <ArrowRight size={16} />
                    Se connecter
                  </>
                )}
              </span>
            </motion.button>
          </form>

          {/* Séparateur */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#0054a6]/12 to-transparent" />

          {/* Footer */}
          <p className="text-center font-opensans text-[11px] text-[#888888] flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef] animate-pulse inline-block" />
            Accès réservé aux administrateurs de Thioro Group
          </p>
        </div>
      </motion.div>
    </div>
  );
}
