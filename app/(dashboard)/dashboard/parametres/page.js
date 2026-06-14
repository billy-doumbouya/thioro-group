"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import TopNav from "@/components/dashboard/TopNav";
import {
  Loader2,
  Save,
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Lock,
} from "lucide-react";

const infoSchema = yup.object({
  nom_entreprise: yup.string().required("Nom requis"),
  telephone: yup.string().required("Téléphone requis"),
  email: yup.string().email("Email invalide").required("Email requis"),
  adresse: yup.string().required("Adresse requise"),
  site_web: yup.string().url("URL invalide").nullable(),
  facebook: yup.string().nullable(),
  instagram: yup.string().nullable(),
  whatsapp: yup.string().nullable(),
});

const passwordSchema = yup.object({
  ancien: yup.string().required("Requis"),
  nouveau: yup.string().required("Requis").min(8, "Min 8 caractères"),
  confirmation: yup
    .string()
    .oneOf([yup.ref("nouveau")], "Les mots de passe ne correspondent pas")
    .required("Requis"),
});

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-[Open_Sans] outline-none focus:border-[#0054A6] focus:ring-2 focus:ring-[#0054A6]/20 transition-all";

const Section = ({ titre, icone: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
  >
    <div className="p-5 border-b border-gray-100 flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
        <Icon size={17} className="text-[#0054A6]" />
      </div>
      <h2 className="font-[Montserrat] font-bold text-gray-900">{titre}</h2>
    </div>
    <div className="p-6">{children}</div>
  </motion.div>
);

export default function ParametresPage() {
  const [loading, setLoading] = useState(true);
  const [savingInfo, setSavingInfo] = useState(false);
  const [savingPwd, setSavingPwd] = useState(false);

  const {
    register: regInfo,
    handleSubmit: handleInfo,
    reset: resetInfo,
    formState: { errors: errInfo },
  } = useForm({ resolver: yupResolver(infoSchema) });
  const {
    register: regPwd,
    handleSubmit: handlePwd,
    reset: resetPwd,
    formState: { errors: errPwd },
  } = useForm({ resolver: yupResolver(passwordSchema) });

  useEffect(() => {
    fetch("/api/parametres")
      .then((r) => r.json())
      .then((data) => {
        const obj = {};
        data.forEach((p) => {
          obj[p.cle] = p.valeur;
        });
        resetInfo(obj);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const saveInfo = async (data) => {
    setSavingInfo(true);
    try {
      await fetch("/api/parametres", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Informations mises à jour !");
    } catch {
      toast.error("Erreur lors de la sauvegarde");
    }
    setSavingInfo(false);
  };

  const savePwd = async (data) => {
    setSavingPwd(true);
    try {
      const res = await fetch("/api/parametres/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      toast.success("Mot de passe mis à jour !");
      resetPwd();
    } catch (e) {
      toast.error(e.message || "Erreur");
    }
    setSavingPwd(false);
  };

  if (loading)
    return (
      <div className="flex-1 overflow-y-auto">
        <TopNav titre="Paramètres" />
        <div className="flex justify-center py-20">
          <Loader2 size={32} className="animate-spin text-[#0054A6]" />
        </div>
      </div>
    );

  return (
    <div className="flex-1 overflow-y-auto">
      <TopNav titre="Paramètres" />
      <div className="p-6 max-w-3xl space-y-6">
        {/* Informations entreprise */}
        <Section titre="Informations entreprise" icone={Building2}>
          <form onSubmit={handleInfo(saveInfo)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  name: "nom_entreprise",
                  label: "Nom de l'entreprise",
                  placeholder: "Thioro Group Sarlu",
                },
                {
                  name: "telephone",
                  label: "Téléphone",
                  placeholder: "+224 000 000 000",
                },
                {
                  name: "email",
                  label: "Email de contact",
                  placeholder: "contact@thiorogroup.com",
                },
                {
                  name: "site_web",
                  label: "Site web",
                  placeholder: "https://thiorogroup.com",
                },
              ].map(({ name, label, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-[Open_Sans] font-medium text-gray-700 mb-1.5">
                    {label}
                  </label>
                  <input
                    {...regInfo(name)}
                    className={inputClass}
                    placeholder={placeholder}
                  />
                  {errInfo[name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errInfo[name].message}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-[Open_Sans] font-medium text-gray-700 mb-1.5">
                Adresse
              </label>
              <textarea
                {...regInfo("adresse")}
                rows={2}
                className={`${inputClass} resize-none`}
                placeholder="Hamdallaye, Immeuble Ecobank, Conakry, Guinée"
              />
            </div>
            <p className="text-xs font-[Open_Sans] font-semibold text-gray-400 uppercase tracking-wider pt-1">
              Réseaux sociaux
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  name: "facebook",
                  label: "Facebook",
                  placeholder: "URL Facebook",
                },
                {
                  name: "instagram",
                  label: "Instagram",
                  placeholder: "URL Instagram",
                },
                { name: "whatsapp", label: "WhatsApp", placeholder: "+224..." },
              ].map(({ name, label, placeholder }) => (
                <div key={name}>
                  <label className="block text-sm font-[Open_Sans] font-medium text-gray-700 mb-1.5">
                    {label}
                  </label>
                  <input
                    {...regInfo(name)}
                    className={inputClass}
                    placeholder={placeholder}
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              disabled={savingInfo}
              className="flex items-center gap-2 bg-[#0054A6] text-white px-6 py-3 rounded-xl font-[Open_Sans] font-semibold text-sm hover:bg-[#003d7a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {savingInfo ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sauvegarde...
                </>
              ) : (
                <>
                  <Save size={15} /> Enregistrer
                </>
              )}
            </button>
          </form>
        </Section>

        {/* Sécurité */}
        <Section titre="Changer le mot de passe" icone={Lock}>
          <form onSubmit={handlePwd(savePwd)} className="space-y-5 max-w-sm">
            {[
              { name: "ancien", label: "Mot de passe actuel" },
              { name: "nouveau", label: "Nouveau mot de passe" },
              {
                name: "confirmation",
                label: "Confirmer le nouveau mot de passe",
              },
            ].map(({ name, label }) => (
              <div key={name}>
                <label className="block text-sm font-[Open_Sans] font-medium text-gray-700 mb-1.5">
                  {label}
                </label>
                <input
                  {...regPwd(name)}
                  type="password"
                  className={inputClass}
                />
                {errPwd[name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errPwd[name].message}
                  </p>
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={savingPwd}
              className="flex items-center gap-2 bg-[#0054A6] text-white px-6 py-3 rounded-xl font-[Open_Sans] font-semibold text-sm hover:bg-[#003d7a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {savingPwd ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Mise à jour...
                </>
              ) : (
                <>
                  <Lock size={15} /> Mettre à jour
                </>
              )}
            </button>
          </form>
        </Section>
      </div>
    </div>
  );
}
