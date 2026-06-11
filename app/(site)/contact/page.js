import ContactForm from "@/components/site/ContactForm";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const metadata = { title: "Contact & Devis" };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-bleu-electrique to-bleu-fonce py-20 text-white text-center">
        <p className="font-opensans text-bleu-eau text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl mb-4">Parlons de votre projet</h1>
        <p className="text-white/80 font-opensans max-w-xl mx-auto">
          Notre équipe est disponible pour répondre à vos questions et établir un devis personnalisé.
        </p>
      </div>

      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Informations */}
            <div className="space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-6">Nos coordonnées</h2>
                {[
                  { icon: MapPin, titre: "Siège social", texte: "Hamdallaye, Immeuble Ecobank\nConakry, Guinée" },
                  { icon: MapPin, titre: "Usine Kouria", texte: "Kouriah, Coyah, Guinée" },
                  { icon: Phone, titre: "Téléphone", texte: "+224 000 000 000", href: "tel:+224000000000" },
                  { icon: Mail, titre: "Email", texte: "contact@thiorogroup.com", href: "mailto:contact@thiorogroup.com" },
                  { icon: MessageCircle, titre: "WhatsApp", texte: "Disponible 7j/7", href: "https://wa.me/224000000000" },
                  { icon: Clock, titre: "Horaires", texte: "Lun–Ven : 8h–18h\nSam : 8h–13h" },
                ].map(({ icon: Icon, titre, texte, href }) => (
                  <div key={titre} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-bleu-clair flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-bleu-electrique" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-gray-900 text-sm">{titre}</p>
                      {href ? (
                        <a href={href} className="text-bleu-electrique text-sm font-opensans hover:underline">{texte}</a>
                      ) : (
                        <p className="text-gris-anthracite text-sm font-opensans whitespace-pre-line">{texte}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Carte */}
              <div className="rounded-2xl overflow-hidden h-52 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d-13.6!3d9.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzMnMDAuMCJOIDEzwrAzNicwMC4wIlc!5e0!3m2!1sfr!2sgn!4v1620000000000!5m2!1sfr!2sgn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-gris-moyen font-opensans text-sm mb-8">Nous vous répondons sous 24 heures ouvrables.</p>
              <ContactForm type="contact" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
