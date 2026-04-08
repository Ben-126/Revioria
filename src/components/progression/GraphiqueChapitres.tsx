"use client";
import { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip,
} from "recharts";

interface ChapitreData {
  slug: string;
  nom: string;
  scoreMoyen: number | null;
}

interface GraphiqueChapitresProps {
  chapitres: ChapitreData[];
  chapitreActifSlug: string | null;
  onSelectChapitre: (slug: string) => void;
}

export default function GraphiqueChapitres({
  chapitres,
  chapitreActifSlug,
  onSelectChapitre,
}: GraphiqueChapitresProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="h-[200px] bg-gray-50 rounded-xl animate-pulse" />;
  }

  if (chapitres.length === 0) {
    return (
      <div className="h-[200px] flex items-center justify-center text-gray-400 text-sm">
        Aucun chapitre disponible
      </div>
    );
  }

  const data = chapitres.map((c) => ({
    slug: c.slug,
    nom: c.nom.length > 18 ? c.nom.slice(0, 18) + "…" : c.nom,
    score: c.scoreMoyen ?? 0,
    nonFait: c.scoreMoyen === null,
  }));

  return (
    <ResponsiveContainer width="100%" height={Math.max(200, chapitres.length * 36)}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
        onClick={(payload) => {
          if (payload?.activePayload?.[0]?.payload?.slug) {
            onSelectChapitre(payload.activePayload[0].payload.slug as string);
          }
        }}
      >
        <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
        <YAxis type="category" dataKey="nom" tick={{ fontSize: 10 }} width={90} />
        <Tooltip formatter={(value: number) => [`${value}%`, "Score moyen"]} />
        <Bar dataKey="score" radius={[0, 4, 4, 0]} cursor="pointer" isAnimationActive>
          {data.map((entry) => (
            <Cell
              key={entry.slug}
              fill={
                entry.slug === chapitreActifSlug
                  ? "#6366f1"
                  : entry.nonFait
                  ? "#e5e7eb"
                  : "#a5b4fc"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
