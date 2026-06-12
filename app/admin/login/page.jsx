"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { Loader2, Lock, Mail, Eye, EyeOff } from "lucide-react";
import Logo from "@/components/shared/Logo";

const schema = yup.object({
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis"),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) {
        toast.error("Identifiants incorrects. Vérifiez votre email et mot de passe.");
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
    <div className="min-h-screen bg-gradient-to-br from-bleu-electrique via-bleu-fonce to-gray-900 flex items-center justify-center p-4">
      {/* Fond décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-bleu-eau" />
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-bleu-eau" />
      </div>

      <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="md" />
        </div>

        <div className="text-center mb-8">
          <h1 className="font-montserrat font-extrabold text-2xl text-gray-900 mb-1">Espace administrateur</h1>
          <p className="text-gris-moyen text-sm font-opensans">Connectez-vous pour gérer le site</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input {...register("email")} type="email" placeholder="admin@thiorogroup.com"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-opensans outline-none transition-all ${errors.email ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-gray-200 focus:border-bleu-electrique focus:ring-2 focus:ring-bleu-electrique/20"}`} />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">Mot de passe</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input {...register("password")} type={showPwd ? "text" : "password"} placeholder="••••••••"
                className={`w-full pl-11 pr-12 py-3 rounded-xl border text-sm font-opensans outline-none transition-all ${errors.password ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-gray-200 focus:border-bleu-electrique focus:ring-2 focus:ring-bleu-electrique/20"}`} />
              <button type="button" onClick={() => setShowPwd(!showPwd)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <motion.button type="submit" disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }} whileTap={{ scale: loading ? 1 : 0.99 }}
            className="w-full bg-bleu-electrique text-white py-4 rounded-xl font-montserrat font-bold text-sm flex items-center justify-center gap-2 hover:bg-bleu-fonce transition-colors disabled:opacity-70 shadow-lg mt-2">
            {loading ? <><Loader2 size={16} className="animate-spin" /> Connexion...</> : "Se connecter"}
          </motion.button>
        </form>

        <p className="text-center text-xs text-gris-moyen font-opensans mt-6">
          Accès réservé aux administrateurs de Thioro Group
        </p>
      </motion.div>
    </div>
  );
}
