"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = yup.object({
  nom: yup.string().required("Le nom est requis").min(2, "Minimum 2 caractères"),
  prenom: yup.string().required("Le prénom est requis"),
  societe: yup.string(),
  telephone: yup.string().required("Le téléphone est requis").min(8, "Numéro invalide"),
  email: yup.string().required("L'email est requis").email("Email invalide"),
  activite: yup.string().required("Veuillez sélectionner un domaine"),
  message: yup.string().required("Le message est requis").min(20, "Minimum 20 caractères"),
});

const Field = ({ label, error, children }) => (
  <div>
    <label className="block text-sm font-opensans font-medium text-gray-700 mb-1.5">{label}</label>
    {children}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-xs mt-1 font-opensans"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const inputClass = (hasError) =>
  cn(
    "w-full px-4 py-3 rounded-xl border text-sm font-opensans outline-none transition-all",
    hasError
      ? "border-red-400 focus:ring-2 focus:ring-red-200"
      : "border-gray-200 focus:border-bleu-electrique focus:ring-2 focus:ring-bleu-electrique/20"
  );

export default function ContactForm({ type = "contact" }) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const endpoint = type === "devis" ? "/api/devis" : "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      toast.success(
        type === "devis"
          ? "Votre demande de devis a été envoyée ! Nous vous répondrons sous 24h."
          : "Message envoyé avec succès ! Nous vous répondrons rapidement."
      );
      reset();
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom *" error={errors.nom?.message}>
          <input {...register("nom")} placeholder="Votre nom" className={inputClass(errors.nom)} />
        </Field>
        <Field label="Prénom *" error={errors.prenom?.message}>
          <input {...register("prenom")} placeholder="Votre prénom" className={inputClass(errors.prenom)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Société" error={errors.societe?.message}>
          <input {...register("societe")} placeholder="Nom de votre société" className={inputClass(errors.societe)} />
        </Field>
        <Field label="Téléphone *" error={errors.telephone?.message}>
          <input {...register("telephone")} placeholder="+224 000 000 000" className={inputClass(errors.telephone)} />
        </Field>
      </div>

      <Field label="Email *" error={errors.email?.message}>
        <input {...register("email")} type="email" placeholder="votre@email.com" className={inputClass(errors.email)} />
      </Field>

      <Field label="Domaine d'intérêt *" error={errors.activite?.message}>
        <select {...register("activite")} className={inputClass(errors.activite)}>
          <option value="">Sélectionner un domaine</option>
          <option value="electricite">Équipements électriques</option>
          <option value="eau">Eau Minérale Kouria</option>
          <option value="peche">Pêche</option>
          <option value="services">Services & Logistique</option>
          <option value="autre">Autre</option>
        </select>
      </Field>

      <Field label="Message *" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder={type === "devis" ? "Décrivez votre besoin (quantités, spécifications...)" : "Votre message..."}
          className={cn(inputClass(errors.message), "resize-none")}
        />
      </Field>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.01 }}
        whileTap={{ scale: loading ? 1 : 0.99 }}
        className="w-full bg-bleu-electrique text-white py-4 rounded-xl font-montserrat font-bold text-sm flex items-center justify-center gap-2 hover:bg-bleu-fonce transition-colors disabled:opacity-70 shadow-lg"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={16} />
            {type === "devis" ? "Envoyer ma demande de devis" : "Envoyer le message"}
          </>
        )}
      </motion.button>
    </form>
  );
}
