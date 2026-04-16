# Révioria — Révise avec l'IA

> Application web de révision scolaire propulsée par l'IA, conçue pour les élèves de Seconde, Première et Terminale.

Collaboration entre **Ben** et **Dan**.

---

## Introduction

Révioria génère des questions personnalisées alignées sur les programmes officiels du lycée général et technologique en France. L'élève choisit son niveau, une matière et un chapitre, et l'IA produit instantanément un quiz corrigé avec des explications pédagogiques.

**Niveaux couverts :** Seconde, Première, Terminale.

**Matières couvertes :** Mathématiques, Français, Histoire-Géographie, Philosophie, SES, SVT, Physique-chimie, NSI, SNT, EMC, Anglais, Espagnol, Allemand.

*Contenus inspirés des programmes officiels du ministère de l'Éducation nationale.*

**Types de questions :** QCM (4 options), Vrai/Faux, Réponse courte.

---

## Fonctionnalités

### V0 — MVP (disponible)
- Quiz générés dynamiquement par l'IA (GPT-4o mini)
- 3 types de questions : QCM, Vrai/Faux, Réponse courte
- Correction immédiate avec explication détaillée pour chaque question
- Toutes les matières et chapitres du programme officiel de Seconde
- Interface responsive (mobile & desktop)
- Mode mock intégré pour tester sans clé API

### V1 — Personnalisation (disponible)
- **Timer par question** : temps adapté selon le type et la difficulté
- **Score basé sur le temps** : plus tu réponds vite, plus tu gagnes de points
- **Adaptation de la difficulté** : les questions s'ajustent selon tes performances (stocké en localStorage)
- **Révision ciblée** : les chapitres où tu as échoué sont prioritaires dans les prochains quiz
- **Clavier mathématique** : saisie facilitée des symboles et expressions mathématiques

### V2 — Tout le lycée (disponible)
- **Sélecteur de niveau** : Seconde, Première et Terminale
- **Programmes Première** : Maths, Français, Histoire-Géo, spécialités (Physique-Chimie, SVT, SES, NSI), Anglais, EMC
- **Programmes Terminale** : Maths, Philosophie, Histoire-Géo, spécialités (Physique-Chimie, SVT, SES, NSI), Anglais, EMC
- **Source officielle** : contenus alignés sur les programmes du ministère de l'Éducation nationale

### V3 — Gamification (disponible)
- **XP & niveaux** : chaque quiz rapporte des points d'expérience
- **Badges** : récompenses débloquées selon les performances et l'assiduité
- **XPBar discrète** dans le header pour suivre sa progression en temps réel
- **Coach IA** : conseils personnalisés selon l'historique de révisions

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| Next.js (App Router) | Framework web |
| TypeScript | Langage |
| Tailwind CSS | Styles |
| OpenAI API (GPT-4o mini) | Génération des quiz |
| Zod | Validation des données |
| Playwright | Tests E2E |

---

## Structure du projet

```
projet-Ben-Dan/
├── src/
│   ├── app/                # Pages et routes API
│   │   └── api/            # Endpoints (quiz, coach)
│   ├── components/
│   │   ├── navigation/     # Header, sélection matière/chapitre
│   │   ├── quiz/           # Déroulement du quiz
│   │   ├── progression/    # Statistiques & historique
│   │   ├── gamification/   # XP, badges, toasts
│   │   ├── coach/          # Coach IA
│   │   └── engagement/     # Objectifs, service worker
│   ├── data/               # Programme scolaire (matières & chapitres)
│   ├── lib/                # Utilitaires, schémas Zod, gamification
│   └── types/              # Types TypeScript
├── public/                 # Assets statiques (logo, icônes)
└── tests/
    └── e2e/                # Tests Playwright
```

---

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- Une clé API [OpenAI](https://platform.openai.com/api-keys)

### Étapes

**1. Cloner le dépôt**

```bash
git clone https://github.com/Ben-126/Quiz_2nd.git
cd Quiz_2nd
```

**2. Installer les dépendances**

```bash
npm install
```

**3. Configurer les variables d'environnement**

```bash
cp .env.example .env.local
```

Ouvrir `.env.local` et renseigner la clé API :

```env
OPENAI_API_KEY=sk-...
```

**4. Lancer l'application**

```bash
npm run dev
```

L'application est disponible sur **http://localhost:3000**.

### Variables d'environnement

| Variable | Description | Obligatoire |
|----------|-------------|-------------|
| `OPENAI_API_KEY` | Clé API OpenAI | Oui (en production) |
| `NEXT_PUBLIC_USE_MOCK` | `true` pour données mock sans clé API | Non |

> Sans clé API, l'application bascule automatiquement en mode mock avec des questions prédéfinies.

---

## Utilisation

1. Ouvrir `http://localhost:3000`
2. Choisir son **niveau** (Seconde, Première ou Terminale)
3. Choisir une **matière** (ex. Mathématiques)
4. Choisir un **chapitre** (ex. Fonctions)
5. Répondre aux questions générées par l'IA avant que le timer expire
6. Consulter la correction et l'explication après chaque réponse
7. Voir le **score final** à la fin du quiz (calculé en fonction du temps de réponse)

---

## Contribuer

Les contributions sont les bienvenues !

### Processus

1. Forker le dépôt
2. Créer une branche pour ta fonctionnalité

```bash
git checkout -b feat/ma-fonctionnalite
```

3. Faire tes modifications en respectant le style du projet
4. Vérifier que les tests passent

```bash
npm run build
npx playwright test
```

5. Committer avec un message clair

```bash
git commit -m "feat: description de la fonctionnalité"
```

6. Ouvrir une Pull Request vers la branche `master`

### Convention de commits

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `refactor` | Refactorisation |
| `test` | Ajout de tests |
| `chore` | Tâches diverses |

### Signaler un bug

Ouvrir une [issue GitHub](https://github.com/Ben-126/Quiz_2nd/issues) avec :
- La description du problème
- Les étapes pour reproduire
- Le comportement attendu
