interface IndicateurMaitriseProps {
  scoreMoyen: number | null;
  nombreQuiz: number;
}

export default function IndicateurMaitrise({ scoreMoyen, nombreQuiz }: IndicateurMaitriseProps) {
  if (nombreQuiz === 0 || scoreMoyen === null) {
    return (
      <div className="flex items-center gap-1.5 mt-1.5">
        <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
        <span className="text-xs text-gray-400">Pas encore fait</span>
      </div>
    );
  }

  const couleurBarre =
    scoreMoyen >= 80 ? "bg-green-500" :
    scoreMoyen < 40 ? "bg-red-500" : "bg-orange-400";

  const couleurTexte =
    scoreMoyen >= 80 ? "text-green-700" :
    scoreMoyen < 40 ? "text-red-600" : "text-orange-600";

  const couleurFond =
    scoreMoyen >= 80 ? "bg-green-100" :
    scoreMoyen < 40 ? "bg-red-50" : "bg-orange-50";

  const badge =
    scoreMoyen >= 80 ? "🟢" :
    scoreMoyen < 40 ? "🔴" : "🟡";

  return (
    <div className="mt-1.5 space-y-1">
      <span className={`inline-block text-xs font-semibold px-1.5 py-0.5 rounded-full ${couleurFond} ${couleurTexte}`}>
        {badge} {scoreMoyen}% · {nombreQuiz} quiz
      </span>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${couleurBarre} rounded-full transition-all duration-700`}
          style={{ width: `${scoreMoyen}%` }}
        />
      </div>
    </div>
  );
}
