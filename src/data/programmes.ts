import type { Matiere } from "@/types";
import { MATIERES } from "./programme-seconde";
import { MATIERES_PREMIERE } from "./programme-premiere";
import { MATIERES_TERMINALE } from "./programme-terminale";

export type Niveau = "seconde" | "premiere" | "terminale";

export interface NiveauInfo {
  slug: Niveau;
  label: string;
  emoji: string;
  matieres: Matiere[];
}

export const NIVEAUX: NiveauInfo[] = [
  {
    slug: "seconde",
    label: "Seconde",
    emoji: "2️⃣",
    matieres: MATIERES,
  },
  {
    slug: "premiere",
    label: "Première",
    emoji: "1️⃣",
    matieres: MATIERES_PREMIERE,
  },
  {
    slug: "terminale",
    label: "Terminale",
    emoji: "🎓",
    matieres: MATIERES_TERMINALE,
  },
];

export function getMatieresByNiveau(niveau: Niveau): Matiere[] {
  const found = NIVEAUX.find((n) => n.slug === niveau);
  return found ? found.matieres : MATIERES;
}

export function getMatiereBySlugAndNiveau(
  niveau: Niveau,
  slug: string
): Matiere | undefined {
  return getMatieresByNiveau(niveau).find((m) => m.slug === slug);
}
