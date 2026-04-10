# Design — Engagement utilisateur

**Date :** 2026-04-10
**Statut :** Approuvé

---

## Contexte

Implémentation des fonctionnalités d'engagement utilisateur décrites dans `instructions.md` (lignes 91–93) :
- Notifications de rappel pour réviser
- Objectifs quotidiens simples

L'app est une PWA Next.js avec stockage 100% côté client (localStorage). Pas de backend ni d'authentification.

---

## Approche retenue

**Approche A — Page Paramètres + Service Worker** : tous les réglages en localStorage, Service Worker pour les notifications système à heure fixe (18h00).

---

## Page `/parametres`

Accessible depuis une icône ⚙️ dans le Header. Quatre sections :

### 1. Objectif quotidien
- Toggle : "1 quiz minimum par jour" **ou** "Nombre personnalisé"
- Si personnalisé : sélecteur de 1 à 10 quiz/jour
- Seuls les quiz avec un score ≥ seuil de réussite configuré comptent
- Le seuil est affiché clairement sous le toggle

### 2. Notifications
- Bouton "Activer les notifications" (déclenche `Notification.requestPermission()`)
- Statut affiché : Activées / Désactivées / Non supportées
- Heure de rappel fixe : **18h00**
- La notification n'est envoyée que si l'objectif du jour n'est pas encore atteint

### 3. Autres paramètres
| Paramètre | Valeur par défaut | Options |
|---|---|---|
| Seuil de réussite minimum | 85% | 50% à 100% par pas de 5% |
| Niveau par défaut | Seconde | Seconde / Première / Terminale |
| Explications avancées dépliées par défaut | Non | Oui / Non |
| Nombre de questions par quiz | 5 | 3 / 5 / 10 |

### 4. Danger Zone
- Bouton "Réinitialiser toute la progression" (déplacé depuis la page Progression)
- Double confirmation identique à l'existant

---

## Système d'engagement quotidien

### Calcul de l'objectif du jour
- Source : historique existant (`quiz-history` dans localStorage)
- Filtre : entrées dont la date est aujourd'hui ET le score ≥ seuil configuré
- Résultat : nombre de quiz réussis aujourd'hui vs objectif cible

### Bannière in-app (page d'accueil)
- Affichée en haut de la page d'accueil, au-dessus de la liste des matières
- Contenu :
  - Progression : "X / Y quiz réussis aujourd'hui"
  - Barre de progression colorée (rouge → orange → vert)
  - Message d'encouragement contextuel
- États :
  - **En cours** : barre partielle, message motivant
  - **Objectif atteint** : barre verte, message de félicitations
  - **Aucun objectif configuré** : composant non affiché

### Notifications système (Service Worker)
- Fichier : `public/sw.js`
- Enregistré au chargement de l'app (si permission accordée)
- Vérification chaque jour à **18h00** via `setTimeout` calculé depuis l'heure actuelle
- Condition d'envoi : objectif du jour non atteint
- Message : *"N'oublie pas de réviser aujourd'hui ! Il te reste X quiz à faire."*
- La permission est demandée uniquement depuis la page Paramètres (jamais de pop-up automatique)

---

## Stockage localStorage

| Clé | Contenu |
|---|---|
| `quiz-parametres` | Objet JSON avec tous les paramètres utilisateur |
| `quiz-history` | Existant — utilisé pour calculer l'objectif du jour |

Structure de `quiz-parametres` :
```typescript
interface Parametres {
  objectifType: "minimum" | "personnalise";
  objectifNombre: number;           // 1-10
  seuilReussite: number;            // 50-100, par pas de 5
  niveauDefaut: "seconde" | "premiere" | "terminale";
  explicationsAvanceesOuvertes: boolean;
  questionsParQuiz: 3 | 5 | 10;
  notificationsActivees: boolean;
}
```

Valeurs par défaut :
```typescript
const PARAMETRES_DEFAUT: Parametres = {
  objectifType: "minimum",
  objectifNombre: 1,
  seuilReussite: 85,
  niveauDefaut: "seconde",
  explicationsAvanceesOuvertes: false,
  questionsParQuiz: 5,
  notificationsActivees: false,
};
```

---

## Fichiers créés / modifiés

| Fichier | Action |
|---|---|
| `src/app/parametres/page.tsx` | Créé — page Paramètres |
| `src/lib/parametres.ts` | Créé — lecture/écriture localStorage |
| `src/lib/objectif.ts` | Créé — logique calcul objectif du jour |
| `src/components/engagement/BanniereObjectif.tsx` | Créé — bannière page d'accueil |
| `public/sw.js` | Créé — Service Worker notifications |
| `src/components/navigation/Header.tsx` | Modifié — ajout icône ⚙️ |
| `src/app/page.tsx` | Modifié — ajout bannière |
| `src/app/progression/page.tsx` | Modifié — suppression bouton réinitialisation |
| `src/lib/constants.ts` | Modifié — `QUESTIONS_PAR_QUIZ` lu depuis paramètres |

---

## Contraintes

- Tout est 100% côté client (pas de serveur, pas d'API)
- Les notifications système nécessitent un navigateur compatible et une permission explicite
- Le Service Worker ne peut pas envoyer de notif si le navigateur est complètement fermé (limitation web)
- Le seuil de réussite à 85% s'applique aussi bien à l'objectif qu'à l'affichage de la bannière
