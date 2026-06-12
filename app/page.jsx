"use client";

import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/site/Navbar"));
const Footer = dynamic(() => import("../components/site/Footer"));

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <section className="hero" id="accueil">
          <div className="hero-left">
            <div className="badge">
              <span className="badge-dot" />
              Conakry, Guinée — Partenaire de confiance
            </div>
            <h1 className="hero-title">
              L&apos;énergie et l&apos;eau,
              <br />
              <span className="c-blue">au cœur</span> de la
              <br />
              <span className="c-eau">Guinée</span>
            </h1>
            <p className="hero-sub">
              Thioro Group Sarlu distribue des équipements électriques certifiés
              et produit l&apos;Eau Minérale Kouria depuis la source naturelle
              de Kouriah, Coyah.
            </p>
            <div className="hero-ctas">
              <a href="#produits" className="btn-primary">
                Voir le catalogue
              </a>
              <a href="#contact" className="btn-secondary">
                Demander un devis
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-bg" />
            <div className="hero-visual">
              <div className="hero-icon-wrap">
                <div className="hero-circle" />
                <div className="hero-circle-2" />
                <div className="hero-center-icon">
                  <svg
                    className="hero-zap"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <path
                      d="M33 5L16 30H27L23 49L41 23H30L33 5Z"
                      fill="#ffffff"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="1"
                    />
                  </svg>
                  <svg
                    className="hero-drop"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M19 4C19 4 8 17 8 24C8 30.1 13 35 19 35C25 35 30 30.1 30 24C30 17 19 4 19 4Z"
                      fill="#00AEEF"
                      opacity="0.9"
                    />
                  </svg>
                </div>
              </div>
              <div className="hero-label" style={{ bottom: 55, right: 28 }}>
                <strong>Eau Kouria</strong>
                <span>Source naturelle · Coyah</span>
              </div>
              <div className="hero-label" style={{ top: 55, right: 24 }}>
                <strong>150+ clients</strong>
                <span>actifs en Guinée</span>
              </div>
            </div>
          </div>
        </section>

        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-number">
              <span className="counter stat-accent" data-target="2015">
                0
              </span>
            </div>
            <div className="stat-label">Année de création</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <span className="counter" data-target="150" data-suffix="+">
                0
              </span>
            </div>
            <div className="stat-label">Clients actifs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <span className="counter" data-target="3">
                0
              </span>
            </div>
            <div className="stat-label">Sites opérationnels</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <span className="counter" data-target="98" data-suffix="%">
                0
              </span>
            </div>
            <div className="stat-label">Satisfaction client</div>
          </div>
        </div>

        {/* Additional sections (activities, products, etc.) can be ported similarly when needed */}

        <section className="contact-section" id="contact">
          <div className="section-label">Contact</div>
          <div className="section-title mont">Parlons de votre projet</div>
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Nos coordonnées</h2>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-item-label">Siège social</div>
                  <div className="contact-item-val">
                    Hamdallaye, Immeuble Ecobank, Conakry, Guinée
                  </div>
                </div>
              </div>
              <div className="map-placeholder">
                Carte Google Maps — Hamdallaye, Conakry
              </div>
            </div>
            <div className="contact-form-wrap">
              <h2>Envoyez-nous un message</h2>
              <p>Nous vous répondons sous 24 heures ouvrables.</p>
              <form
                id="contactForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  const btn = document.getElementById("submitBtn");
                  btn.disabled = true;
                  btn.innerHTML = "Envoi...";
                  setTimeout(() => {
                    btn.style.display = "none";
                    document.getElementById("successMsg").style.display =
                      "flex";
                    e.target.reset();
                  }, 1500);
                }}
              >
                <div className="form-row">
                  <div>
                    <label className="form-label">Nom *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Prénom *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label className="form-label">Société</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Nom de votre société"
                    />
                  </div>
                  <div>
                    <label className="form-label">Téléphone *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+224 000 000 000"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Domaine d&apos;intérêt *</label>
                  <select className="form-select" required>
                    <option value="">Sélectionner un domaine</option>
                    <option>Équipements électriques</option>
                    <option>Eau Minérale Kouria</option>
                    <option>Pêche</option>
                    <option>Services & Logistique</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Décrivez votre besoin (quantités, spécifications, délais...)"
                    required
                  />
                </div>
                <button type="submit" className="btn-submit" id="submitBtn">
                  Envoyer le message
                </button>
                <div
                  id="successMsg"
                  style={{
                    display: "none",
                    marginTop: 14,
                    background: "#e8f8ef",
                    border: "1px solid #a3dab8",
                    borderRadius: 10,
                    padding: "14px 18px",
                    color: "#1a7a4a",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span>Message envoyé ! Nous vous répondrons sous 24h.</span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
