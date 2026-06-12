"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <div className="nav-logo-icon" aria-hidden>
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 2L6 10H10L8 16L14 7H10L11 2Z" fill="#fff" />
                <path
                  d="M3 11C3 8.5 5 6.5 5 6.5C5 6.5 7 8.5 7 11C7 12.1 6.1 13 5 13C3.9 13 3 12.1 3 11Z"
                  fill="#00AEEF"
                  opacity="0.85"
                />
              </svg>
            </div>
            THIORO GROUP SARLU
          </div>
          <div className="footer-desc">
            Votre partenaire de confiance pour les équipements électriques et
            l'eau minérale naturelle en Guinée depuis 2015.
          </div>
          <div className="footer-socials">
            <div className="footer-social">📘</div>
            <div className="footer-social">📸</div>
            <div className="footer-social">🎵</div>
            <div className="footer-social">▶️</div>
            <div className="footer-social">💬</div>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Entreprise</div>
          <a href="#" className="footer-link">
            Notre histoire
          </a>
          <a href="#" className="footer-link">
            Qualité & Conformité
          </a>
          <a href="#actualites" className="footer-link">
            Actualités
          </a>
          <a href="#" className="footer-link">
            Mentions légales
          </a>
        </div>
        <div>
          <div className="footer-col-title">Produits</div>
          <a href="#produits" className="footer-link">
            Équipements électriques
          </a>
          <a href="#eau" className="footer-link">
            Eau Minérale Kouria
          </a>
          <a href="#" className="footer-link">
            Pêche & Services
          </a>
          <a href="#contact" className="footer-link">
            Demander un devis
          </a>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <div className="footer-contact-item">📍 Hamdallaye, Conakry</div>
          <div className="footer-contact-item">📞 +224 000 000 000</div>
          <div className="footer-contact-item">✉️ contact@thiorogroup.com</div>
          <div className="footer-contact-item">🕒 Lun–Ven : 8h–18h</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2026 Thioro Group Sarlu. Tous droits réservés.
        </div>
        <div className="footer-legal">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
          <a href="#">RCCM Guinée</a>
        </div>
      </div>
    </footer>
  );
}
