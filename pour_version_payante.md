Je travaille sur Révioria, une app Next.js 15 + Supabase + TypeScript de révision pour lycéens.
Je veux implémenter un système Premium complet. Voici exactement ce que je veux :

## 1. PAIEMENT — Stripe
- Intégrer Stripe (le plus safe et légal pour collecter des paiements)
- Plan mensuel à 3€/mois
- Plan annuel à 24€/an (soit 2€/mois)
- Pas d'essai gratuit, paiement direct
- Page /premium avec les deux offres et un bouton "S'abonner"
- Webhooks Stripe pour mettre à jour Supabase quand un paiement réussit ou échoue

## 2. BASE DE DONNÉES Supabase — nouvelles tables
- Ajouter un champ `is_premium` (boolean) et `premium_expires_at` (timestamp) dans la table `profiles`
- Créer une table `access_keys` avec les champs :
  - `id` (uuid)
  - `code` (string unique, genre "RXKP-7MQT-29BV" généré aléatoirement)
  - `created_by` (mon user id admin)
  - `used_by` (user id, nullable)
  - `used_at` (timestamp, nullable)
  - `expires_at` (timestamp, nullable — je décide au cas par cas)
  - `is_single_use` (boolean — je décide si la clé peut être utilisée une seule fois ou plusieurs fois)
  - `duration_days` (integer — durée du premium accordé en jours)

## 3. LIMITES EN VERSION GRATUITE
- Quiz : max 2 quiz par chapitre (trackés dans la table existante des performances), et max 15 quiz par niveau (seconde/première/terminale) par semaine — reset chaque lundi
- Prononciation (langues) : max 3 analyses de prononciation par jour — reset à minuit
- Le chat de dialogue en langues reste illimité

Quand la limite est atteinte :
- Afficher un modal qui propose soit de "Continuer gratuitement" (fermer le modal) soit "Passer Premium" (aller sur /premium)
- Envoyer un email automatique 7 jours avant l'expiration du Premium (via Stripe ou Supabase Edge Functions)

## 4. PAGE /admin (protégée)
Accessible uniquement si mon user id Supabase correspond à l'admin.
La page doit permettre de :
- Générer une nouvelle clé d'accès : choisir `is_single_use` (oui/non), `expires_at` (date ou null), `duration_days`
- Voir la liste de toutes les clés avec leur statut (utilisée/disponible, par qui, quand)
- Révoquer une clé (la désactiver)
- Voir combien d'utilisateurs sont Premium en ce moment

## 5. ACTIVATION D'UNE CLÉ
- Dans les paramètres du compte (/parametres), ajouter une section "Clé d'accès Premium"
- L'utilisateur entre son code (ex: RXKP-7MQT-29BV)
- Si la clé est valide : activer le Premium pour `duration_days` jours, marquer la clé comme utilisée si `is_single_use`
- Si la clé est invalide ou expirée : afficher un message d'erreur

## 6. VÉRIFICATION DU STATUT PREMIUM
- Créer un hook `usePremium()` qui vérifie `is_premium` et `premium_expires_at` dans Supabase
- Utiliser ce hook dans tous les composants qui ont des limites
- Si `premium_expires_at` est dépassé : remettre `is_premium` à false automatiquement

Commence par me donner le plan d'implémentation étape par étape, puis implémente étape par étape en commençant par Supabase (migrations SQL), puis Stripe, puis les limites, puis /admin, puis l'activation de clé.