"use client";

import { useState } from "react";
import Header from "@/components/navigation/Header";
import MatiereCard from "@/components/navigation/MatiereCard";
import { NIVEAUX, type Niveau } from "@/data/programmes";
import BanniereObjectif from "@/components/engagement/BanniereObjectif";
import { getParametres } from "@/lib/parametres";

export default function HomePage() {
  const [niveauActif, setNiveauActif] = useState<Niveau>(
    () => (typeof window !== "undefined" ? getParametres().niveauDefaut : "seconde")
  );

  const niveauInfo = NIVEAUX.find((n) => n.slug === niveauActif)!;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <BanniereObjectif />
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Révioria" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
          </div>
          <h1 className="flex items-center justify-center gap-1 mb-1">
            <svg width="220" height="52" viewBox="0 0 340 95" role="img" aria-label="Révioria" xmlns="http://www.w3.org/2000/svg">
              <text x="162" y="70" fontFamily="Georgia, serif" fontSize="66" fontWeight="300" fill="#0F172A" textAnchor="middle" letterSpacing="6">Révioria</text>
              <circle cx="299" cy="50" r="7" fill="#2563EB" />
            </svg>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Révise avec l&apos;IA · Choisis ton niveau puis une matière pour commencer
          </p>
        </div>

        {/* Sélecteur de niveau */}
        <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="Niveau scolaire">
          {NIVEAUX.map((niveau) => (
            <button
              key={niveau.slug}
              role="tab"
              aria-selected={niveauActif === niveau.slug}
              onClick={() => setNiveauActif(niveau.slug)}
              className={`px-4 py-2 rounded-full font-semibold text-sm sm:text-base transition-colors border-2 ${
                niveauActif === niveau.slug
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-indigo-600 border-indigo-300 hover:border-indigo-500"
              }`}
            >
              {niveau.emoji} {niveau.label}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3 sm:gap-4"
          data-testid="liste-matieres"
        >
          {niveauInfo.matieres.map((matiere) => (
            <MatiereCard key={matiere.slug} matiere={matiere} niveau={niveauActif} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Contenus inspirés des{" "}
          <a
            href="https://www.education.gouv.fr/reussir-au-lycee/les-programmes-du-lycee-general-et-technologique-9812"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-500"
          >
            programmes officiels du ministère de l&apos;Éducation nationale
          </a>
        </p>
      </main>
    </div>
  );
}
