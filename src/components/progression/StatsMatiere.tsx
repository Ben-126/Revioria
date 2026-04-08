"use client";
import { useEffect, useState } from "react";
import { getToutesPerformances } from "@/lib/performance";
import type { Chapitre } from "@/types";

interface StatsMatiereProps {
  matiereSlug: string;
  chapitres: Chapitre[];
}

interface Stats {
  totalQuiz: number;
  scoreMoyen: number | null;
  chapitresMaitrises: number;
}

export default function StatsMatiere({ matiereSlug, chapitres }: StatsMatiereProps) {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const data = getToutesPerformances();
    let totalQuiz = 0;
    let sommeScores = 0;
    let chapitresAvecDonnees = 0;
    let chapitresMaitrises = 0;

    for (const chapitre of chapitres) {
      const cle = `${matiereSlug}/${chapitre.slug}`;
      const perf = data[cle];
      if (perf && perf.nombreQuizCompletes > 0) {
        totalQuiz += perf.nombreQuizCompletes;
        sommeScores += perf.scoreMoyen;
        chapitresAvecDonnees++;
        if (perf.scoreMoyen >= 80) chapitresMaitrises++;
      }
    }

    setStats({
      totalQuiz,
      scoreMoyen: chapitresAvecDonnees > 0 ? Math.round(sommeScores / chapitresAvecDonnees) : null,
      chapitresMaitrises,
    });
  }, [matiereSlug, chapitres]);

  if (!stats || stats.totalQuiz === 0) return null;

  return (
    <div className="flex gap-3 p-3 bg-indigo-50 rounded-xl border border-indigo-100 mb-4">
      <div className="flex-1 text-center">
        <p className="text-lg font-bold text-indigo-700">{stats.totalQuiz}</p>
        <p className="text-xs text-indigo-500">quiz complétés</p>
      </div>
      <div className="w-px bg-indigo-200" />
      <div className="flex-1 text-center">
        <p className="text-lg font-bold text-indigo-700">{stats.scoreMoyen ?? "—"}%</p>
        <p className="text-xs text-indigo-500">score moyen</p>
      </div>
      <div className="w-px bg-indigo-200" />
      <div className="flex-1 text-center">
        <p className="text-lg font-bold text-indigo-700">{stats.chapitresMaitrises}/{chapitres.length}</p>
        <p className="text-xs text-indigo-500">maîtrisés</p>
      </div>
    </div>
  );
}
