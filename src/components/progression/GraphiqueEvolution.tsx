"use client";
import { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine,
} from "recharts";
import type { EntreeHistorique } from "@/lib/history";

interface GraphiqueEvolutionProps {
  entrees: EntreeHistorique[];
}

export default function GraphiqueEvolution({ entrees }: GraphiqueEvolutionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="h-[200px] bg-gray-50 rounded-xl animate-pulse" />;
  }

  if (entrees.length === 0) {
    return (
      <div className="h-[200px] flex flex-col items-center justify-center gap-2 text-gray-400">
        <p className="text-3xl">📈</p>
        <p className="text-sm text-center">Clique sur un chapitre pour voir son évolution</p>
      </div>
    );
  }

  const data = entrees.slice(-5).map((e) => ({
    date: new Date(e.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" }),
    score: e.score,
  }));

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
        <Tooltip formatter={(value) => [`${value}%`, "Score"]} />
        <ReferenceLine
          y={80}
          stroke="#22c55e"
          strokeDasharray="4 2"
          label={{ value: "80%", fontSize: 9, fill: "#22c55e", position: "right" }}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#6366f1"
          strokeWidth={2}
          dot={{ r: 4, fill: "#6366f1" }}
          activeDot={{ r: 6 }}
          isAnimationActive
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
