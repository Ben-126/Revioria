"use client";

import { useEffect, useRef, useState } from "react";

interface TimerControleProps {
  dureeInitiale: number; // secondes totales
  onExpire: () => void;
  actif: boolean;
}

function formatTemps(secondes: number): string {
  const m = Math.floor(secondes / 60);
  const s = secondes % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Timer isolé pour le mode contrôle.
 * Sa propre state ne re-rend que ce composant — pas QuizRunner entier.
 */
export default function TimerControle({ dureeInitiale, onExpire, actif }: TimerControleProps) {
  const [restant, setRestant] = useState(dureeInitiale);
  const onExpireRef = useRef(onExpire);

  // Stabilise le callback pour éviter les re-runs de l'effect
  useEffect(() => {
    onExpireRef.current = onExpire;
  });

  // Reset quand une nouvelle durée arrive (nouveau quiz)
  useEffect(() => {
    setRestant(dureeInitiale);
  }, [dureeInitiale]);

  // Tick d'une seconde — isolé dans ce composant
  useEffect(() => {
    if (!actif) return;
    if (restant <= 0) {
      onExpireRef.current();
      return;
    }
    const id = setTimeout(() => setRestant((r) => r - 1), 1000);
    return () => clearTimeout(id);
  }, [actif, restant]);

  const alerte = restant <= 60;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 16px",
        borderRadius: "var(--r-md)",
        border: "2px solid",
        borderColor: alerte ? "rgba(239,110,90,0.5)" : "rgba(245,200,64,0.4)",
        background: alerte ? "rgba(239,110,90,0.1)" : "rgba(245,200,64,0.08)",
      }}
    >
      <span
        style={{ fontSize: 14, fontWeight: 700, color: alerte ? "var(--coral-l)" : "var(--amber)" }}
      >
        📝 Mode Contrôle
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 18,
          color: alerte ? "var(--coral-l)" : "var(--amber)",
        }}
      >
        <span aria-label="Temps restant">⏱</span>
        <span data-testid="timer-controle">{formatTemps(restant)}</span>
      </div>
    </div>
  );
}
