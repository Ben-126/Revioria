const PARAMETRES_KEY = "quiz-parametres";

export type ObjectifType = "minimum" | "personnalise";
export type NiveauDefaut = "seconde" | "premiere" | "terminale";
export type QuestionsParQuiz = 3 | 5 | 10;

export interface Parametres {
  objectifType: ObjectifType;
  objectifNombre: number;        // 1 à 10
  seuilReussite: number;         // 50 à 100, par pas de 5
  niveauDefaut: NiveauDefaut;
  explicationsAvanceesOuvertes: boolean;
  questionsParQuiz: QuestionsParQuiz;
  notificationsActivees: boolean;
}

export const PARAMETRES_DEFAUT: Parametres = {
  objectifType: "minimum",
  objectifNombre: 1,
  seuilReussite: 85,
  niveauDefaut: "seconde",
  explicationsAvanceesOuvertes: false,
  questionsParQuiz: 5,
  notificationsActivees: false,
};

export function getParametres(): Parametres {
  if (typeof window === "undefined") return PARAMETRES_DEFAUT;
  try {
    const raw = localStorage.getItem(PARAMETRES_KEY);
    if (!raw) return PARAMETRES_DEFAUT;
    return { ...PARAMETRES_DEFAUT, ...(JSON.parse(raw) as Partial<Parametres>) };
  } catch {
    return PARAMETRES_DEFAUT;
  }
}

export function saveParametres(parametres: Parametres): void {
  try {
    localStorage.setItem(PARAMETRES_KEY, JSON.stringify(parametres));
  } catch {}
}
