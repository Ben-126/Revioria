# Gamification — Système XP, Niveaux & Badges
**Date :** 2026-04-16
**Projet :** projet-Ben-Dan (app révision lycée)
**Statut :** Approuvé

---

## 1. Objectif

Ajouter un système de gamification motivant pour les lycéens : XP gagné après chaque quiz, niveaux progressifs, et badges de récompense. Visible discrètement dans le header et en détail sur la page Progression.

## 2. Principes directeurs

- **Régulé** : les gains d'XP sont plafonnés pour éviter tout abus (pas d'XP infini via spam de quiz).
- **Optimisé** : un seul objet en localStorage, recalcul léger au runtime, aucun appel réseau.
- **Cohérent** : même pattern de validation Zod que `history.ts` et `performance.ts`.
- **Centré utilisateur** : chaque mécanique répond à une motivation réelle (progrès, régularité, excellence).

---

## 3. Stockage

Clé localStorage : `gamification-profil`

```typescript
interface ProfilGamification {
  xpTotal: number;
  dernierQuizDate: string | null;   // ISO date "YYYY-MM-DD"
  streakJours: number;
  badgesDebloques: BadgeDebloque[];
}

interface BadgeDebloque {
  id: string;
  dateObtention: string;  // ISO date
}
```

Validation Zod au chargement, valeur par défaut si données corrompues.

---

## 4. Calcul d'XP

### Formule de base (par quiz)

```
xpBrut = BASE + bonusScore + bonusParfait + bonusStreak
xpFinal = modeControle ? floor(xpBrut × 1.5) : xpBrut
```

| Composante | Valeur | Condition |
|---|---|---|
| `BASE` | 10 XP | Toujours |
| `bonusScore` | `floor(score% / 10)` | 0 à +10 XP |
| `bonusParfait` | +15 XP | Score = 100% uniquement |
| `bonusStreak` | +5 XP | Joué hier (streak actif) |
| Multiplicateur contrôle | ×1.5 | Mode contrôle uniquement |

### Plafond anti-spam
- Maximum **1 gain d'XP par quiz unique** (matière + chapitre + date). Si l'utilisateur refait le même quiz le même jour, l'XP supplémentaire est ignoré.
- Plafond journalier : **150 XP/jour** (≈ 5-6 quiz excellents). Au-delà, le quiz est comptabilisé mais sans XP.

### Exemples concrets

| Situation | Calcul | XP |
|---|---|---|
| 60% entraînement | 10 + 6 | **16 XP** |
| 85% entraînement + streak | 10 + 8 + 5 | **23 XP** |
| 100% entraînement + streak | 10 + 10 + 15 + 5 | **40 XP** |
| 80% contrôle | (10 + 8) × 1.5 | **27 XP** |
| 100% contrôle + streak | (10 + 10 + 15 + 5) × 1.5 | **60 XP** |

---

## 5. Niveaux (10 paliers)

La progression est exponentielle pour maintenir le défi sur le long terme.

| Niveau | Nom | XP requis | XP pour monter |
|---|---|---|---|
| 1 | Novice | 0 | 100 |
| 2 | Apprenti | 100 | 150 |
| 3 | Étudiant | 250 | 250 |
| 4 | Appliqué | 500 | 400 |
| 5 | Studieux | 900 | 500 |
| 6 | Brillant | 1 400 | 700 |
| 7 | Expert | 2 100 | 900 |
| 8 | Savant | 3 000 | 1 500 |
| 9 | Génie | 4 500 | 2 500 |
| 10 | Maître | 7 000 | — |

La barre d'XP dans le header affiche la progression vers le niveau suivant (XP courant dans la tranche / XP nécessaire pour monter).

---

## 6. Badges

### Badges généraux (9)

| ID | Nom | Condition | Emoji |
|---|---|---|---|
| `premier-pas` | Premier Pas | 1er quiz terminé | 🎯 |
| `dizaine` | Décuplé | 10 quiz complétés | 🔟 |
| `cinquantaine` | Centurion | 50 quiz complétés | 🏅 |
| `score-parfait` | Score Parfait | Obtenir 100% une fois | ⭐ |
| `perfectionniste` | Perfectionniste | 3 scores parfaits | 💎 |
| `serie-3` | Série ×3 | Streak 3 jours | 🔥 |
| `serie-7` | Série ×7 | Streak 7 jours | 🔥🔥 |
| `assidu` | Assidu | Streak 30 jours | 🏆 |
| `niveau-5` | Studieux Confirmé | Atteindre le niveau 5 | 🌟 |

### Badges par matière (3 par matière)

Pour chaque matière disponible dans l'app (ex: Maths, Physique, Français…) :

| Pattern ID | Nom | Condition | Emoji |
|---|---|---|---|
| `apprenti-{matiere}` | Apprenti {Matière} | 3 quiz dans cette matière | 📚 |
| `expert-{matiere}` | Expert {Matière} | Score moyen ≥ 80% sur ≥ 5 quiz | 🎓 |
| `as-{matiere}` | As de {Matière} | 1 score parfait dans cette matière | 💫 |

Les badges non débloqués sont affichés en grisé (silhouette) pour encourager leur obtention.

---

## 7. Composants UI

### Nouveaux fichiers

| Fichier | Rôle |
|---|---|
| `src/lib/gamification.ts` | Toute la logique métier (calcul XP, niveaux, badges, localStorage) |
| `src/components/gamification/XPBar.tsx` | Barre XP discrète pour le header |
| `src/components/gamification/BadgeGrid.tsx` | Grille de badges pour la page Progression |
| `src/components/gamification/XPToast.tsx` | Notification "+XX XP" après un quiz |

### Fichiers modifiés

| Fichier | Modification |
|---|---|
| `src/types/index.ts` | Ajout des types `ProfilGamification`, `Badge`, `Niveau` |
| `src/components/navigation/Header.tsx` | Intégration `XPBar` (discrète, conditionnel si XP > 0) |
| `src/components/quiz/ScoreDisplay.tsx` | Déclencher le gain d'XP + afficher `XPToast` |
| `src/app/progression/page.tsx` | Section gamification avec niveau + `BadgeGrid` |

---

## 8. Comportement XP Toast

Après chaque quiz, un toast apparaît brièvement (2.5s) avec :
- Le gain d'XP du quiz
- Si level-up : animation spéciale "Niveau X atteint !"
- Si nouveau badge : nom du badge débloqué

Un seul toast à la fois, empilés si plusieurs événements (level-up + badge simultanés).

---

## 9. Intégration dans le Header

- Visible uniquement si `xpTotal > 0` (pas de clutter pour les nouveaux utilisateurs)
- Format : `[Emoji niveau] Niveau N · [barre XP fine] · XXX XP`
- Clic → redirige vers `/progression`
- Design minimaliste, ne détourne pas l'attention du contenu principal

---

## 10. Régulation & Edge Cases

- **Première utilisation** : profil initialisé avec des valeurs par défaut, aucun badge, XP = 0.
- **Données corrompues** : Zod reset le profil proprement, sans crash.
- **Streak** : calculé à la date du quiz, non à l'heure. Si l'utilisateur joue à 23h59 et 00h01, le streak continue.
- **Refaire un quiz** : l'XP est gagné une seule fois par (matière + chapitre + jour).
- **Badges déjà débloqués** : re-vérification idempotente, pas de doublons.
- **Pas de serveur** : tout est local, pas de classement, pas de comparaison entre utilisateurs.
