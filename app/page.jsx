"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/site/Hero";
import { StatsBar } from "@/components/site/statbar";
import ContactSection from "@/components/site/contactSection";
import VideoShowcase from "./(site)/VideoShowcase";

const Navbar = dynamic(() => import("../components/site/Navbar"));
const Footer = dynamic(() => import("../components/site/Footer"));

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main>
        {/* Notre tout nouveau Hero immersif */}
        <Hero />

        <VideoShowcase />

        {/* La barre de stats imbriquée sur le Hero grâce au -mt-10 */}
        <StatsBar />

        {/* Section Contact existante à moderniser par la suite */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
