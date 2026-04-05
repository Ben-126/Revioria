# Quiz IA — Programme Seconde

> Application web de révision scolaire propulsée par l'IA, conçue pour les élèves de Seconde.

Collaboration entre **Ben** et **Dan**.

---

## Introduction

Quiz IA génère des questions personnalisées alignées sur le programme officiel de la classe de Seconde en France. L'élève choisit une matière et un chapitre, et l'IA produit instantanément un quiz corrigé avec des explications pédagogiques.

**Matières couvertes :** Mathématiques, Français, Histoire-Géographie, SES, SVT, Physique-chimie, SNT, EMC, Anglais, Espagnol, Allemand.

**Types de questions :** QCM (4 options), Vrai/Faux, Réponse courte.

---

## Fonctionnalités

- Quiz générés dynamiquement par l'IA (GPT-4o mini)
- Correction immédiate avec explication détaillée pour chaque question
- Toutes les matières et chapitres du programme officiel de Seconde
- Interface responsive (mobile & desktop)
- Mode mock intégré pour tester sans clé API

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| Next.js 15 (App Router) | Framework web |
| TypeScript | Langage |
| Tailwind CSS | Styles |
| OpenAI API (GPT-4o mini) | Génération des quiz |
| Zod | Validation des données |
| Playwright | Tests E2E |

---

## Structure du projet

```
Quiz_2nd/
└── quiz-app/               # Application Next.js
    ├── src/
    │   ├── app/            # Pages et routes API
    │   │   └── api/quiz/   # Endpoint de génération
    │   ├── components/     # Composants React
    │   │   ├── navigation/ # Sélection matière/chapitre
    │   │   └── quiz/       # Déroulement du quiz
    │   ├── data/           # Programme scolaire (matières & chapitres)
    │   ├── lib/            # Utilitaires, schémas Zod, constantes
    │   └── types/          # Types TypeScript
    └── tests/
        └── e2e/            # Tests Playwright
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
cd quiz-app
npm install
```

**3. Configurer les variables d'environnement**

```bash
# Windows
copy .env.example .env.local

# macOS / Linux
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
2. Choisir une **matière** (ex. Mathématiques)
3. Choisir un **chapitre** (ex. Fonctions)
4. Répondre aux questions générées par l'IA
5. Consulter la correction et l'explication après chaque réponse
6. Voir le **score final** à la fin du quiz

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

---

## Licence

Ce projet est sous licence **MIT**.

```
MIT License

Copyright (c) 2026 Ben & Dan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
