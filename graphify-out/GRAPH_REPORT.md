# Graph Report - .  (2026-05-27)

## Corpus Check
- 104 files · ~50,000 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 692 nodes · 1074 edges · 52 communities (34 shown, 18 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 36 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Quiz Engine|Quiz Engine]]
- [[_COMMUNITY_Landing Page and App Navigation|Landing Page and App Navigation]]
- [[_COMMUNITY_Social and Challenges|Social and Challenges]]
- [[_COMMUNITY_Settings and PWA Engagement|Settings and PWA Engagement]]
- [[_COMMUNITY_Gamification and Consent|Gamification and Consent]]
- [[_COMMUNITY_Auth and Layout|Auth and Layout]]
- [[_COMMUNITY_Dependencies and Packages|Dependencies and Packages]]
- [[_COMMUNITY_Spaced Repetition (SRS)|Spaced Repetition (SRS)]]
- [[_COMMUNITY_Progression and Stats|Progression and Stats]]
- [[_COMMUNITY_AI Coach and API Routes|AI Coach and API Routes]]
- [[_COMMUNITY_App Navigation and Curriculum|App Navigation and Curriculum]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_RGPD and DPIA|RGPD and DPIA]]
- [[_COMMUNITY_Landing Page UI Blocks|Landing Page UI Blocks]]
- [[_COMMUNITY_Performance Analytics|Performance Analytics]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]

## God Nodes (most connected - your core abstractions)
1. `checkRateLimit()` - 23 edges
2. `supabase` - 21 edges
3. `aAccepte()` - 21 edges
4. `enregistrerQuizGamification()` - 20 edges
5. `QuizRunner()` - 20 edges
6. `Révioria App Overview` - 17 edges
7. `compilerOptions` - 16 edges
8. `getHistorique()` - 14 edges
9. `getToutesPerformances()` - 14 edges
10. `getMatiereBySlugAndNiveau()` - 13 edges

## Surprising Connections (you probably didn't know these)
- `Révioria App Overview` --conceptually_related_to--> `Révioria Visual Identity System`  [INFERRED]
  README.md → identite-visuelle.md
- `Révioria App Overview` --conceptually_related_to--> `Product Versioning Strategy (V0→V1→V2→V3)`  [INFERRED]
  README.md → instructions.md
- `Streak Freeze System (3 gels/month, auto-applied)` --conceptually_related_to--> `Gamification System (XP, Niveaux, Badges, Streaks)`  [INFERRED]
  docs/superpowers/plans/2026-04-21-streak-system.md → README.md
- `Mode Social (Classement, Amis, Défis)` --conceptually_related_to--> `Social Features Implementation Plan`  [INFERRED]
  README.md → docs/superpowers/plans/2026-04-17-social.md
- `PWA & Offline Support (Service Worker)` --conceptually_related_to--> `Service Worker (18h00 notification reminder)`  [INFERRED]
  README.md → docs/superpowers/plans/2026-04-10-engagement-utilisateur.md

## Hyperedges (group relationships)
- **Gamification System (XP, Levels, Badges, Streaks)** — readme_gamification, plan_gamification, plan_gamification_lib, plan_gamification_xptoast, plan_gamification_xpbar, plan_gamification_badgegrid, spec_gamification_design, plan_streak, plan_streak_gel_system, plan_streak_display, plan_streak_calendar, plan_streak_notifications [INFERRED 0.95]
- **Social Features System** — readme_social_mode, plan_social, plan_social_supabase_schema, plan_social_offline_sync, plan_social_auth_modal, plan_social_classement, plan_social_defis, spec_social_design, spec_social_offline_first, spec_social_rls_rationale [INFERRED 0.95]
- **RGPD Compliance System** — readme_rgpd_compliance, dpia_document, dpia_treatment_a_accounts, dpia_treatment_b_quiz, dpia_treatment_c_scan, dpia_treatment_d_audio, dpia_rls_security, dpia_minor_users_risk, plan_social_rgpd_bandeau [INFERRED 0.95]
- **Progression Tracking System** — plan_suivi_progression, plan_progression_history_ts, plan_progression_recharts, plan_progression_indicateur, plan_progression_page, spec_progression_design [INFERRED 0.95]
- **User Engagement System** — plan_engagement, plan_engagement_parametres, plan_engagement_banniere, plan_engagement_service_worker, plan_engagement_objectif_lib, spec_engagement_design, readme_pwa [INFERRED 0.95]
- **Premium Monetization System** — pour_version_payante, payante_stripe_integration, payante_access_keys, payante_free_limits, payante_admin_page, payante_use_premium_hook [EXTRACTED 1.00]
- **Quiz Execution Flow** — quiz_quizrunner_quizrunner, api_quiz_generate_route_post, api_quiz_verify_route_post, lib_performance_sauvegarderperformance, lib_gamification_enregistrerquizgamification, lib_revision_espacee_ajoutercarte [EXTRACTED 1.00]
- **Groq API Routes generate verify scan coach dialogue prononcer** — api_quiz_generate_route_post, api_quiz_verify_route_post, api_scan_route_post, api_coach_route_post, api_langues_dialogue_route_post, api_langues_prononcer_route_post [EXTRACTED 1.00]
- **Gamification Data Flow XP Sync Supabase** — lib_gamification_enregistrerquizgamification, lib_sync_ajouteralaqueue, lib_sync_flushsyncqueue, lib_supabase_supabase, types_index_profilgamification [EXTRACTED 1.00]

## Communities (52 total, 18 thin omitted)

### Community 0 - "Quiz Engine"
Cohesion: 0.06
Nodes (45): /[niveau]/[matiere]/[chapitre]/quiz Page, Adaptive Difficulty debutant intermediaire avance from score, XPToastProps, getNiveau(), NiveauDifficulte, CorrectionDisplay(), CorrectionDisplayProps, getLibelleBonneReponse() (+37 more)

### Community 1 - "Landing Page and App Navigation"
Cohesion: 0.06
Nodes (37): NotFound(), HomePage(), ChapitreDetailPage(), generateMetadata(), Props, getMatiereBySlugAndNiveau(), getMatieresByNiveau(), Niveau (+29 more)

### Community 2 - "Social and Challenges"
Cohesion: 0.07
Nodes (34): /defi/[id] Page challenge play, /social Page amis plus classement, accepterDemandeAmi(), creerDefi(), envoyerDemandeAmi(), getClassementAmis(), getClassementGlobal(), getDefi() (+26 more)

### Community 3 - "Settings and PWA Engagement"
Cohesion: 0.08
Nodes (33): /parametres Page settings plus danger zone, PWA Service Worker 18h00 daily notification, ServiceWorkerRegistrar(), CLES_ESSENTIELLES, CLES_NON_ESSENTIELLES, ConsentRecord, ConsentValue, effacerDonneesNonEssentielles() (+25 more)

### Community 4 - "Gamification and Consent"
Cohesion: 0.09
Nodes (36): BadgeGridProps, aAccepte(), BadgeDebloqueSchema, BadgeInfo, BADGES_GENERAUX plus getBadgesMatiere, calculerXPBrut(), enregistrerQuizGamification(), getDateAujourdhuiISO() (+28 more)

### Community 5 - "Auth and Layout"
Cohesion: 0.08
Nodes (29): Root Layout fonts plus providers, AuthModal(), AuthModalProps, Onglet, Offline-First Sync Architecture localStorage queue plus online flush, Supabase Row Level Security profiles friendships challenges, BandeauCookies(), connecter() (+21 more)

### Community 6 - "Dependencies and Packages"
Cohesion: 0.06
Nodes (33): dependencies, canvas-confetti, lottie-react, next, openai, react, react-dom, recharts (+25 more)

### Community 7 - "Spaced Repetition (SRS)"
Cohesion: 0.10
Nodes (28): /revision Page SRS flashcard review, ajouterCarteRevision, ajouterCarteRevision(), appliquerSM2(), CarteRevision, CarteRevisionSchema, dateAujourdhui(), dateDansNJours() (+20 more)

### Community 8 - "Progression and Stats"
Cohesion: 0.08
Nodes (24): /progression Page charts plus badges, BadgeGrid(), CalendrierStreak(), CalendrierStreakProps, EtatJour, getDaysInMonth(), getFirstDayOfMonth(), JOURS_SEMAINE (+16 more)

### Community 9 - "AI Coach and API Routes"
Cohesion: 0.08
Nodes (24): POST api/coach Groq streaming, POST api/quiz/generate Groq llama-3.3-70b, CoachIA(), CoachIAProps, Message, AI Fallback Pattern Groq to local fallback, Zod Schema Validation API boundaries plus localStorage, Programme Premiere (+16 more)

### Community 10 - "App Navigation and Curriculum"
Cohesion: 0.11
Nodes (18): /app Page niveau selector plus matieres, /[niveau]/[matiere] Page chapitre list, MATIERES_PREMIERE, getChapitreBySlug(), getMatiereBySlug(), MATIERES, MATIERES_TERMINALE, NiveauInfo (+10 more)

### Community 11 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 12 - "RGPD and DPIA"
Cohesion: 0.13
Nodes (19): DPIA — Data Protection Impact Assessment, Minor Users Risk (< 15 ans, email parental), Traitement A — User Account Management, Traitement B — Quiz Generation via AI, Traitement C — Scan de devoir (IA Vision), Traitement D — Audio Pronunciation (Biometric Data), RGPD Cookie Banner + Legal Pages, Coach IA (Streaming Pedagogical Chat) (+11 more)

### Community 13 - "Landing Page UI Blocks"
Cohesion: 0.13
Nodes (7): colorMap, FAQ_ITEMS, FAQ_SCHEMA, FeatureColor, LandingPage(), LottiePlayer, useReveal()

### Community 14 - "Performance Analytics"
Cohesion: 0.16
Nodes (8): PerformanceChapitre, AnalyseChapitre, ChapitreBarProps, PredictionNote(), PredictionNoteProps, Stats, StatsMatiereProps, Chapitre

### Community 15 - "Community 15"
Cohesion: 0.23
Nodes (10): LANGUES, Message, NIVEAUX, LANGUES, ReconnaissanceVocale(), SpeechRecognitionErrorEvent, SpeechRecognitionInstance, SpeechRecognitionResultEvent (+2 more)

### Community 16 - "Community 16"
Cohesion: 0.18
Nodes (13): objectif.ts — Daily Goal Progress Library, gamification.ts — XP/Level/Badge Logic Library, history.ts — Quiz History localStorage Library, IndicateurMaitrise Component (Red/Yellow/Green Badge), Progression Page (/progression), Recharts Integration (BarChart + LineChart), Streak System Implementation Plan, CalendrierStreak Component (Monthly Calendar View) (+5 more)

### Community 17 - "Community 17"
Cohesion: 0.18
Nodes (11): POST api/langues/dialogue Groq streaming, POST api/langues/prononcer Whisper plus Groq feedback, POST api/quiz/verify Groq grading, /langues Page dialogue plus pronunciation, Groq API Integration llama-3.3-70b llama-4-scout whisper, CorrectionPrononciation(), LANGUES, MotResultat (+3 more)

### Community 18 - "Community 18"
Cohesion: 0.24
Nodes (9): MessageSchema, POST(), RequestSchema, checkRateLimit(), Upstash Redis Rate Limiter, NO_STORE, POST(), sanitize() (+1 more)

### Community 19 - "Community 19"
Cohesion: 0.22
Nodes (8): POST api/scan llama-4-scout OCR vision, /scan Page photo exercise correction, fallbackSansApiKey(), POST(), RequestSchema, ScanResultat, Etat, ScanCorrection()

### Community 20 - "Community 20"
Cohesion: 0.25
Nodes (8): CodeLangue, LANGUES_SUPPORTEES, MessageSchema, NOMS_LANGUES, POST(), repondreLocalement(), REPONSES_LOCALES, RequestSchema

### Community 21 - "Community 21"
Cohesion: 0.31
Nodes (7): calculerSimilarite(), comparerMots(), LANGUES_WHISPER, MotResultat, NOMS_LANGUES, POST(), sanitizeForPrompt()

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (9): V0 MVP Feature Set, V1 Enhanced Features, V2 Advanced Features (Gamification, Social, Coach IA), Product Versioning Strategy (V0→V1→V2→V3), Engagement Utilisateur Implementation Plan, BanniereObjectif Component (Daily Goal Banner), Parametres Page (/parametres), Service Worker (18h00 notification reminder) (+1 more)

### Community 23 - "Community 23"
Cohesion: 0.25
Nodes (9): Social Features Implementation Plan, AuthModal Component (Email/Password Auth), Classement Component (Global + Friends Leaderboard), Defis System (Challenges with Timer), Offline-First Sync Queue (localStorage → Supabase), Mode Social (Classement, Amis, Défis), Social Features Design Spec, Offline-First Hybrid Architecture Rationale (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.22
Nodes (9): Row Level Security (Supabase RLS), Access Keys System (admin-generated premium codes), Admin Page /admin (protected by user ID), Free Tier Limits (2 quiz/chapitre, 15/niveau/semaine), Stripe Payment Integration (3€/mois, 24€/an), usePremium() Hook, Supabase Social Schema (profiles, friendships, challenges, notifications), Premium Version Plan (Stripe + Access Keys) (+1 more)

### Community 26 - "Community 26"
Cohesion: 0.36
Nodes (7): AiResponseSchema, NO_STORE, normaliserSimple(), POST(), sanitizeForPrompt(), verifierLocalReponse(), VerifySchema

### Community 27 - "Community 27"
Cohesion: 0.29
Nodes (8): Gamification Implementation Plan (XP, Levels, Badges), BadgeGrid Component, XP Daily Cap (150 XP/day anti-spam), XPBar Header Component, XPToast Component, Gamification System (XP, Niveaux, Badges, Streaks), Gamification Design Spec, XP Calculation Formula (BASE + bonusScore + bonusParfait + bonusStreak)

### Community 28 - "Community 28"
Cohesion: 0.40
Nodes (6): Brand Personality (Motivant, Lycéen Premium), Color Palette (Coral #EF6E5A, Indigo, Amber, Teal), Dark Theme Design (bg #090A12), Logo Design (Sparkle SVG, Indigo+Coral+Teal), Typography System (DM Serif Display, Nunito, Quicksand), Révioria Visual Identity System

### Community 29 - "Community 29"
Cohesion: 0.50
Nodes (4): getLimiteur(), getRedis(), LIMITES, limiteurs

## Knowledge Gaps
- **230 isolated node(s):** `TypeQuestion`, `QuestionQCM`, `QuestionVraiFaux`, `QuestionReponseCourte`, `Quiz` (+225 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `checkRateLimit()` connect `Community 18` to `Landing Page and App Navigation`, `AI Coach and API Routes`, `Community 17`, `Community 19`, `Community 20`, `Community 21`, `Community 26`, `Community 29`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **Why does `QuizRunner()` connect `Quiz Engine` to `Social and Challenges`, `Settings and PWA Engagement`, `Gamification and Consent`, `Spaced Repetition (SRS)`, `AI Coach and API Routes`, `Community 17`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `POST api/quiz/generate Groq llama-3.3-70b` connect `AI Coach and API Routes` to `Quiz Engine`, `Community 17`, `Community 18`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `supabase` (e.g. with `Supabase Row Level Security profiles friendships challenges` and `streak-notifications push via Supabase`) actually correct?**
  _`supabase` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `TypeQuestion`, `QuestionQCM`, `QuestionVraiFaux` to the rest of the system?**
  _234 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine` be split into smaller, more focused modules?**
  _Cohesion score 0.055051421657592255 - nodes in this community are weakly interconnected._
- **Should `Landing Page and App Navigation` be split into smaller, more focused modules?**
  _Cohesion score 0.06168831168831169 - nodes in this community are weakly interconnected._