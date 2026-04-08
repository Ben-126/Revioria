import type { EntreeHistorique } from "@/lib/history";

interface HistoriqueQuizProps {
  entrees: EntreeHistorique[];
}

function labelDate(isoDate: string): string {
  const entreeDate = new Date(isoDate).toDateString();
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (entreeDate === today) return "Aujourd'hui";
  if (entreeDate === yesterday) return "Hier";
  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function badgeScore(score: number): string {
  if (score >= 80) return "🟢";
  if (score >= 40) return "🟡";
  return "🔴";
}

export default function HistoriqueQuiz({ entrees }: HistoriqueQuizProps) {
  if (entrees.length === 0) {
    return (
      <p className="text-sm text-gray-400 text-center py-4">
        Aucun quiz complété pour l&apos;instant.
      </p>
    );
  }

  const groups: { label: string; entrees: EntreeHistorique[] }[] = [];
  for (const entree of entrees) {
    const label = labelDate(entree.date);
    const existing = groups.find((g) => g.label === label);
    if (existing) {
      existing.entrees.push(entree);
    } else {
      groups.push({ label, entrees: [entree] });
    }
  }

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            {group.label}
          </p>
          <div className="space-y-2">
            {group.entrees.map((e, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {e.matiereName} · {e.chapitreNom}
                  </p>
                  <p className="text-xs text-gray-400 capitalize">{e.niveau}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="text-sm font-bold text-gray-700">{e.score}%</span>
                  <span>{badgeScore(e.score)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
