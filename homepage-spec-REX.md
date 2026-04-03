# Homepage — Frontguys (Version annotée REX)

<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  SPEC ANNOTÉE POUR DÉMONSTRATION REX                        ║
  ║                                                              ║
  ║  Ce document est la spec qui pilote la génération            ║
  ║  automatique d'un écran Figma via Claude + MCP Figma.        ║
  ║                                                              ║
  ║  Chaque section est commentée pour expliquer :               ║
  ║  • POURQUOI elle existe dans la spec                         ║
  ║  • CE QUE Claude en fait concrètement lors de la génération  ║
  ║                                                              ║
  ║  L'objectif : montrer qu'une spec bien structurée remplace   ║
  ║  le brief verbal et garantit un résultat reproductible.      ║
  ╚══════════════════════════════════════════════════════════════╝
-->

---

## Plan du document

> Ce que vous allez trouver dans cette spec, dans l'ordre :

1. **Description** — Le cadre stratégique : à qui parle la page, quel objectif elle sert
2. **Reference Screen** — L'écran Figma existant qui sert de modèle structurel
3. **Visual Reference** — Les règles de composition visuelle extraites de l'analyse des maquettes
4. **Layout Structure** — Le schéma ASCII de la page complète, section par section
5. **Sections (×10)** — Le détail de chaque section : rôle, composants DS, contenu, fonds
6. **States** — Les états possibles de la page (chargement, erreur, etc.)
7. **DS Components Used** — Le registre exact des composants à importer avec leurs keys
8. **Content Structure** — Le contenu réel, prêt à injecter, section par section
9. **Design Tokens** — Les tokens de couleur, spacing et layout utilisés
10. **Acceptance Criteria** — La checklist de validation post-génération

---

## Description

<!--
  ► POURQUOI cette section ?
  C'est le brief condensé. Sans elle, Claude génère "une homepage générique".
  Avec elle, il comprend QUI visite la page, CE QU'ON veut qu'il ressente,
  et COMMENT la page s'inscrit dans le funnel de conversion.

  C'est aussi ce qui permet de valider le contenu : chaque texte doit
  servir l'objectif décrit ici, pas juste "remplir un espace".
-->

Page d'accueil du site Frontguys. Premier point de contact pour les trois personas : Claire (Expert Métier), Marc-Antoine (Dirigeant), Laurent (Manager Digital).

**Objectif utilisateur** : Comprendre qui est Frontguys, se reconnaître dans les enjeux présentés, croire à l'expertise, choisir son parcours selon son profil — puis passer à l'action via un diagnostic sans friction.

**Funnel couvert** : Comprendre → Se reconnaître → Croire → Se projeter → Passer à l'action (étapes 1 à 5 du brief).

**Figma cible** : fichier de travail `wccOltCGHInJMULejWIMYT`

**Sources stratégiques** : `arbo-experience.md` (Section A — Accueil), `persona.md` (v2.1 — implications site)

---

## Reference Screen

<!--
  ► POURQUOI cette section ?
  Claude ne dessine pas "à l'aveugle". Il a besoin d'un écran de référence
  existant dans Figma pour en cloner la structure (shell).

  Sans référence, les proportions, les spacings et l'assemblage global
  sont approximatifs. Avec, Claude reproduit le squelette exact
  et ne remplace que le contenu.

  C'est le secret d'une génération fiable : on ne recrée pas le layout,
  on le RÉUTILISE.
-->

| | |
|---|---|
| **Reference URL** | `https://www.figma.com/design/MxeRvqRBPDdeKcZyUJDRJh/UI-to-Dev-Website-A11Y?node-id=3832-3973` |
| **Reference node ID** | `3832:3973` (Accueil Desktop) |
| **Shell elements à cloner** | Structure globale de la page (header + sections empilées + footer), proportions des zones |
| **Ce qui change vs référence** | Tout le contenu (texte, données, CTAs). Services → 4 expertises nommées. Ajout section "Vos enjeux" et "Choisissez votre entrée". |

---

## Visual Reference

<!--
  ► POURQUOI cette section ?
  La référence précédente donne la STRUCTURE. Celle-ci donne les RÈGLES
  VISUELLES : comment les éléments sont composés, quelles proportions,
  quel rythme visuel.

  C'est ce qui évite que Claude produise un layout techniquement correct
  mais visuellement "plat" ou déséquilibré.
-->

| | |
|---|---|
| **Pattern** | Template A — Marketing/Offer page |
| **Screenshots étudiés** | `accueil-desktop.png` (principal), `enjeux-desktop.png` (section preuve), `cas-clients-liste-desktop.png` (section cas) |
| **Key composition rules** | Split hero 55/45, sections dark alternées, grilles 3-col avec gap ~32px, CTA Banner centré avant footer |

**Notes de composition :**
- Le hero occupe ~25–30% de la hauteur de la page, fond teal, texte à gauche, photo à droite (ratio 55/45)
- Les sections s'enchaînent sur fond dark alternant deux nuances (dark-navy / dark-grey)
- La grille de services est en 4 colonnes (2×2 ou scroll horizontal) avec cards bordées et icône ↗ en haut à droite
- Le bloc expert (profileBanner) est centré à ~60% de la largeur de page
- Les cas clients : 3 colonnes, image pleine (card photo), title + description en-dessous, sans bordure
- Le CTA Banner est centré, full-width dark, deux boutons (ghost + primary)
- Le footer est identique à tous les écrans (DS component direct)

---

## Layout Structure

<!--
  ► POURQUOI cette section ?
  C'est la "carte" de la page. Claude l'utilise comme plan de construction :
  il crée les frames dans cet ordre exact, de haut en bas.

  Le schéma ASCII est volontairement simple — c'est un contrat visuel
  entre le designer (toi) et le générateur (Claude).
  Chaque ligne = un frame Figma avec son fond, son contenu, ses proportions.

  L'alternance des fonds (dark/light) y est visible d'un coup d'œil.
-->

```
┌──────────────────────────────────────────────────────────┐
│  HEADER (NAV fixe) — 1440px                              │
│  Logo ← | Pourquoi FG Expertises Cas Insights À propos  |→ CTA |
├──────────────────────────────────────────────────────────┤
│  HERO — dark #282839 + pattern logo + illustration ↗     │
│  [Eyebrow][H1 double lecture][Body+chiffres][CTA×2] | [Illus.] │
│  ← 55% text                          45% illustration →  │
├──────────────────────────────────────────────────────────┤
│  ENJEUX — "Vous reconnaissez-vous ?" — light #FFFFFF     │
│  [Card enjeu] [Card enjeu] [Card enjeu] [Card enjeu]     │
│   Cohérence   Silos D/D   DS bloqué    Résultats mesur. │
├──────────────────────────────────────────────────────────┤
│  STATS — "Des résultats mesurables" — dark #3C3C56 + pattern + illustration ↗ │
│  [Stat]        [Stat]        [Stat]   | [Illus.]         │
│  82 missions   35+ clients   98%      |                  │
├──────────────────────────────────────────────────────────┤
│  EXPERTISES — "Nos 4 expertises" — light #FFFFFF         │
│  [H2 centré][Body centré]                                │
│  [Card] [Card] [Card] [Card]                             │
│   Produit  Process  DesignSys  Transform.                │
├──────────────────────────────────────────────────────────┤
│  EXPERT — Contact card — dark #282839                    │
│       [profileBanner — contact state]                    │
├──────────────────────────────────────────────────────────┤
│  CAS CLIENTS — "Ce que nous faisons ensemble" — light #FFFFFF │
│  [H2 left][Body left]                                    │
│  [Card photo] [Card photo] [Card photo]                  │
├──────────────────────────────────────────────────────────┤
│  PARCOURS — "Par où commencer ?" — dark #3C3C56          │
│  [Card parcours Claire] [Card Marc-Antoine] [Card Laurent]│
├──────────────────────────────────────────────────────────┤
│  CTA BANNER — "Démarrons ensemble" — dark #282839 + pattern logo │
│       [Eyebrow][H2][Body]                                │
│       [Ghost button]  [Primary button]                   │
├──────────────────────────────────────────────────────────┤
│  FOOTER — DS component — dark #282839 + pattern logo     │
└──────────────────────────────────────────────────────────┘
```

**Alternance brand extension :** dark → light → dark → light → dark → light → dark → dark → dark
**Largeur** : 1440px, contenu centré dans un max-width de ~1200px.
**Hauteur totale estimée** : ~4800–5200px.

---

## Sections

<!--
  ► POURQUOI cette méga-section ?
  C'est le CŒUR de la spec. Chaque sous-section décrit une "tranche" de la page
  avec 4 informations systématiques :

  1. Purpose    → Quel rôle dans le funnel (pourquoi cette section existe)
  2. Components → Quels composants DS utiliser (pas de recréation manuelle)
  3. Fond       → Quelle couleur de background (alternance stricte)
  4. Contenu    → Texte exact, structure, règles de mise en forme

  Ce format systématique est ce qui rend la génération REPRODUCTIBLE :
  Claude n'a aucune décision à inventer, tout est spécifié.
-->

### 1. Header (NAV)

<!--
  Le header n'est JAMAIS recréé depuis le component set.
  On le CLONE depuis une page existante pour conserver les overrides
  (labels de navigation, logo, liens). C'est une erreur documentée
  dans figma-generation-rules.md qu'on a appris à ne plus faire.
-->

- **Purpose** : Navigation fixe, point d'entrée vers toutes les pages
- **DS Components** : `header` (device: desktop, State: default)
- **Contenu** : Logo Frontguys à gauche, liens nav (Pourquoi Frontguys / Expertises / Cas & preuves / Insights / À propos), bouton "Diagnostic gratuit" à droite
- **Comportement** : Fixe au scroll (sticky)

### 2. Hero

<!--
  Le hero est la section la plus complexe à générer car elle combine :
  - Un layout split 55/45 (texte / illustration)
  - Un brand extension (pattern logo en overlay 52%)
  - Des composants DS (boutons) + du texte libre
  - Une double lecture persona (Claire + Marc-Antoine dans le même H1)

  Le fond est #282839 (Rythm Grey/90), PAS teal. C'est un choix
  d'itération documenté dans le changelog v3.0.
-->

- **Purpose** : Comprendre — promesse double-lecture (Claire + Marc-Antoine simultanément)
- **DS Components** : `Button` (×2 : primary + ghost)
- **Fond** : `color/bg/primary-dark` (#282839) — section dark
- **Brand extensions** : pattern logo 52% blend-mode multiply + illustration outline à droite (200–280px, stroke `color/text/primary-dark` #D2D3F4, stroke-width 1.5px)
- **Structure** :
  - Layout : 55% texte + CTAs / 45% illustration outline (remplace la photo)
  - Eyebrow : "CONSEIL & ACCOMPAGNEMENT"
  - H1 : "Vos équipes produit livrent plus vite. Vos interfaces tiennent dans le temps. On vous montre comment."
  - Body : "Frontguys réunit des experts design et développement front pour résoudre ce qui freine vraiment vos équipes : design systems bloqués, friction design/dev, dette UI, manque de gouvernance. 82 missions. Des résultats chiffrés."
  - CTA primary : "Demander un diagnostic" (Button, Type: primary, Size: medium)
  - CTA ghost : "Voir nos expertises" (Button, Type: ghost — border + texte #FFFFFF sur dark)
  - Texte : `color/text/primary-dark` (#D2D3F4)
- **Note persona** : Le H1 doit fonctionner pour Claire (expert, ~20 sec de décision) et Marc-Antoine (dirigeant, 3–8 min) simultanément. "Vos équipes produit" parle à Claire. "Vos interfaces tiennent dans le temps" parle à Marc-Antoine.

### 3. Enjeux — "Vous reconnaissez-vous ?"

<!--
  Section NOUVELLE (absente de la v1.0).
  Ajoutée après l'analyse des personas pour répondre à l'étape 2
  du funnel ("Se reconnaître"). Le visiteur doit identifier SON problème
  parmi les 4 enjeux proposés.

  On passe en fond LIGHT ici — c'est le premier contraste visuel fort
  après le hero dark. Ce changement de rythme capte l'attention.
-->

- **Purpose** : Se reconnaître — permettre à chaque persona d'identifier son problème
- **DS Components** : `card` (type: simple, state: default) ×4
- **Fond** : `color/bg/primary-light` (#FFFFFF) — section light
- **Cards** : fond `color/bg/card-dark` (#4B4B66) non applicable sur light → fond neutre DS, border standard
- **Structure** :
  - H2 centré : "Vous reconnaissez-vous ?"
  - Body centré : "Ces enjeux reviennent dans presque toutes nos missions."
  - 4 cards en grille 2×2 :
    1. **"Vos produits manquent de cohérence"** — "Interfaces incohérentes, dette UI qui s'accumule, expérience dégradée à chaque release."
    2. **"Design et développement travaillent en silo"** — "Double travail, incompréhensions, production ralentie, décisions dispersées."
    3. **"Votre design system n'accélère pas vraiment"** — "Bloqué depuis des mois, faible adoption, gouvernance absente."
    4. **"Vous avez besoin de résultats mesurables"** — "Pas d'une couche esthétique — d'un impact business traçable."

### 4. Stats — "Des résultats mesurables"

<!--
  Les stats sont placées AVANT les expertises (changement v3.0).
  Logique funnel : on montre d'abord la PREUVE (chiffres),
  puis on explique COMMENT on y arrive (expertises).

  Le brand extension (pattern logo + illustration outline) est appliqué
  ici aussi pour renforcer l'identité visuelle sur les sections à forte
  valeur probante.
-->

- **Purpose** : Croire — chiffres clés qui prouvent l'expertise et l'impact
- **DS Components** : Frame custom (texte large + caption) ×3 colonnes + illustration outline droite
- **Fond** : `color/bg/section-dark` (#3C3C56) — section dark
- **Brand extensions** : pattern logo 52% blend-mode multiply + illustration outline droite (200–280px, stroke `color/text/primary-dark`)
- **Structure** :
  - Layout : stats à gauche (~70%), illustration outline à droite (~30%)
  - 3 stats côte à côte :
    1. **82** missions livrées / Source : Frontguys
    2. **35+** clients accompagnés / Source : Frontguys
    3. **98%** satisfaction client / Source : Enquête post-projet
  - Texte : `color/text/primary-dark` (#D2D3F4), source : `color/text/muted-dark` (#8181AA)

### 5. Expertises — "Nos 4 expertises"

<!--
  Passée de 3 à 4 expertises entre la v1.0 et la v2.0
  suite à l'alignement avec l'arborescence officielle du site.

  Retour en fond LIGHT pour maintenir l'alternance.
  Les cards reprennent le pattern Feature Grid 2×2 du DS.
-->

- **Purpose** : Se reconnaître → Croire — relier les enjeux aux expertises Frontguys
- **DS Components** : `card` (type: simple, state: default + hover) ×4
- **Fond** : `color/bg/primary-light` (#FFFFFF) — section light
- **Structure** :
  - H2 centré : "Nos 4 expertises, un même objectif"
  - Body centré : "Impact, fluidité, qualité, durabilité."
  - 4 cards en grille 2×2 :
    1. **Produits numériques performants** — "Cadrage, conception, mise en qualité et amélioration continue de vos produits." (icône ↗)
    2. **Process de collaboration design/dev** — "Structurer les rituels, les outils et les flux pour accélérer sans perdre en qualité." (icône ↗)
    3. **Design systems modulaires et accessibles** — "Fondations solides, gouvernance claire, adoption réelle par vos équipes." (icône ↗)
    4. **Transformation & accompagnement** — "Renforcer la collaboration humaine pour rendre les changements durables." (icône ↗)

### 6. Expert — Planifier un échange

<!--
  Section courte mais stratégique : elle humanise l'offre.
  Un visage, un nom, un bouton "Planifiez un échange".

  C'est le composant profileBanner du DS en état "contact".
  Pas de recréation manuelle — on utilise la key du component set.
-->

- **Purpose** : Croire + Se projeter — humaniser l'offre, faciliter le premier contact
- **DS Components** : `profileBanner` (State: contact, Viewport: desktop, Show Button: true)
- **Fond** : `color/bg/primary-dark` (#282839) — section dark
- **Contenu** :
  - Label : "Contactez un expert"
  - Name : "Nicolas Guy"
  - jobTitle : "Co-fondateur & Lead Design"
  - Bouton : "Planifiez un échange" (avec icône calendrier)

### 7. Cas Clients

<!--
  Première utilisation du composant card en type "photo".
  Les images occupent le haut de la card (full-bleed),
  le titre et la description sont en-dessous.

  On revient en fond LIGHT — les images des cas clients
  ressortent mieux sur fond blanc.
-->

- **Purpose** : Se projeter — montrer des missions concrètes réalisées
- **DS Components** : `card` (type: photo, state: default) ×3
- **Fond** : `color/bg/primary-light` (#FFFFFF) — section light
- **Structure** :
  - H2 left : "Ce que nous faisons ensemble"
  - Body left : "Des projets ambitieux, des équipes exigeantes, des résultats mesurables."
  - 3 cards photo :
    1. **Lefebvre Dalloz** — Image projet / "Refonte de l'expérience produit" / "Design system + composants React"
    2. **Accor Groupe** — Image projet / "Audit & accompagnement design" / "Revue UX + guidelines équipe"
    3. **ODDO BHF** — Image projet / "Intégration design-code" / "Composants accessibles et scalables"

### 8. Parcours — "Par où commencer ?"

<!--
  Section NOUVELLE (v2.0). Chaque card correspond à un persona :
  Card 1 → Claire (expert métier), Card 2 → Marc-Antoine (dirigeant),
  Card 3 → Laurent (manager digital).

  C'est l'aiguillage : au lieu de forcer tout le monde dans le même
  tunnel, on laisse le visiteur choisir son entrée.

  Cards sur fond dark avec ghost style (5% blanc, border 20% blanc).
-->

- **Purpose** : Orienter — guider chaque persona vers son parcours naturel
- **DS Components** : `card` (type: simple, state: default) ×3
- **Fond** : `color/bg/section-dark` (#3C3C56) — section dark
- **Cards** : fond `color/bg/card-ghost` (#FFFFFF 5%), border `#FFFFFF 20%`, texte `color/text/primary-dark`
- **Structure** :
  - H2 centré : "Par où commencer ?"
  - Body centré : "Choisissez l'entrée qui correspond à votre contexte."
  - 3 cards en grille 3 colonnes :
    1. **"J'ai un besoin produit ou design"** — "Design system, produit numérique, collaboration design/dev." → CTA : "Voir nos expertises"
    2. **"Je veux former mon équipe"** — "Formations intra, ateliers, accompagnement montée en compétences." → CTA : "Voir les formations"
    3. **"Je pilote une transformation"** — "Cadrage stratégique, audit, accompagnement du changement." → CTA : "Réserver un atelier"
- **Note persona** : Card 1 → Claire, Card 2 → Marc-Antoine, Card 3 → Laurent

### 9. CTA Banner

<!--
  Présent sur TOUTES les pages sauf Contact (qui a un formulaire).
  C'est le "filet de sécurité" de conversion : si le visiteur
  a scrollé jusque-là sans cliquer, on lui offre une dernière
  invitation claire et sans friction.

  Deux boutons : ghost ("Parler à un expert") pour les hésitants,
  primary ("Demander un diagnostic") pour les décidés.
  Le pattern logo renforce la clôture de marque.
-->

- **Purpose** : Passer à l'action — diagnostic sans friction, CTA final de page
- **DS Components** : `Button` (Type: primary) + `Button` (Type: ghost)
- **Fond** : `color/bg/primary-dark` (#282839) — section dark
- **Brand extensions** : pattern logo 52% blend-mode multiply (pas d'illustration)
- **Contenu** : centré
  - Eyebrow : "DÉMARRONS ENSEMBLE"
  - H2 : "Un premier échange pour identifier vos enjeux"
  - Body : "Gratuit. Sans engagement. On identifie vos besoins en 30 minutes."
  - CTA primary : "Demander un diagnostic" (bg `color/accent/teal`, texte #FFFFFF)
  - CTA ghost : "Parler à un expert" (border + texte #FFFFFF sur dark)

### 10. Footer

<!--
  Comme le Header : JAMAIS recréé, toujours CLONÉ depuis une page
  existante pour conserver les overrides (liens, logo, réseaux sociaux).
-->

- **Purpose** : Navigation secondaire + légal
- **DS Components** : `footer` (device: desktop)
- **Fond** : `color/bg/primary-dark` (#282839) — section dark
- **Brand extensions** : pattern logo 52% blend-mode multiply
- **Contenu** : Logo + tagline + colonnes de liens + réseaux sociaux

---

## States

<!--
  ► POURQUOI cette section ?
  Par rigueur. Même si cette page est statique (Astro SSG),
  on documente l'absence d'états alternatifs pour éviter
  qu'un développeur n'ajoute un loader inutile.
-->

| State | Description |
|-------|-------------|
| Populated | État normal, tout le contenu affiché |
| Loading | Non applicable (page statique) |
| Empty | Non applicable |
| Error | Non applicable |

---

## DS Components Used

<!--
  ► POURQUOI cette section ?
  C'est la TABLE DE CORRESPONDANCE entre la spec et le Design System.
  Chaque ligne = un composant Figma importé via sa KEY unique.

  La colonne "Strategy" est critique :
  - "import" = composant du DS, importé via importComponentByKeyAsync()
  - "clone"  = composant local, copié depuis une page existante

  Sans cette table, Claude devrait deviner quels composants utiliser.
  Avec elle, il fait un import précis, sans erreur de variant.
-->

| Component | Variant/Size | Key | Strategy | Section |
|-----------|-------------|-----|----------|---------|
| `header` | device: desktop, State: default | `acd1461008e80aae31f30c1e6706467afbf41ef1` | clone | NAV |
| `Button` | Type: primary, Size: medium | `f16817b95db1fe4bd3f84d54ca4a4b14193a3bee` | import | Hero, CTA Banner |
| `Button` | Type: ghost, Size: medium | `f16817b95db1fe4bd3f84d54ca4a4b14193a3bee` | import | Hero, CTA Banner |
| `aspectRatio` | type: 16:9 | `1dbcac74a285c6182b8a8839221970d2359137eb` | import | Hero |
| `card` | type: simple, state: default | `07db2ac2aff0e7df8eb6d1ddbf67acd703debb36` | import | Enjeux (×4), Expertises (×4), Parcours (×3) |
| `card` | type: photo, state: default | `07db2ac2aff0e7df8eb6d1ddbf67acd703debb36` | import | Cas Clients (×3) |
| `profileBanner` | State: contact, Viewport: desktop | `05a6315e433f5c5a35a2141e445a671bc8e3ad98` | import | Expert |
| `footer` | device: desktop | `f7c5672fbf3bb0c19ec79c543564f1e4ab12ac29` | clone | Footer |

**Éléments custom (frames sans composant DS) :**
- Hero frame complet (fond teal, layout split 55/45) — assemblé depuis primitives
- Section frames (fond, padding) — assemblés manuellement
- Stats row (texte large, pas de composant DS dédié) — frame custom avec text nodes
- Grilles (2×2 pour Enjeux et Expertises, 3-col pour Parcours et Cas clients) — frames custom

---

## New DS Components Required

<!--
  ► POURQUOI cette section ?
  Si un pattern visuel n'est pas couvert par le DS existant,
  il faut le créer AVANT de générer l'écran.
  Ici : aucun composant manquant. Tout est couvert.
-->

None — tous les patterns sont couverts par les composants DS existants ou des frames custom légères.

---

## Content Structure

<!--
  ► POURQUOI cette section ?
  C'est le CONTENU EXACT prêt à copier-coller dans les composants.
  Pas de lorem ipsum, pas de "à définir".

  Claude injecte ce texte tel quel dans les text nodes Figma.
  Si le contenu change, on met à jour ICI et on relance la génération.

  Tout le contenu suit les 4 règles du Content System :
  1. "Nous" actif dans les titres
  2. Pragmatique avant l'abstrait
  3. Alternance Nous/Vous (titre → sous-titre)
  4. Impératif de politesse dans les CTA
-->

### Hero
```
Eyebrow: "CONSEIL & ACCOMPAGNEMENT"
H1: "Vos équipes produit livrent plus vite. Vos interfaces tiennent dans le temps. On vous montre comment."
Body: "Frontguys réunit des experts design et développement front pour résoudre ce qui freine vraiment vos équipes : design systems bloqués, friction design/dev, dette UI, manque de gouvernance. 82 missions. Des résultats chiffrés."
CTA 1: "Demander un diagnostic"
CTA 2: "Voir nos expertises"
Image: [placeholder 16:9 — photo équipe Frontguys]
```

### Enjeux (4 cards)
```
H2: "Vous reconnaissez-vous ?"
Body: "Ces enjeux reviennent dans presque toutes nos missions."

Card 1 — Title: "Vos produits manquent de cohérence"
         Text: "Interfaces incohérentes, dette UI qui s'accumule, expérience dégradée à chaque release."
Card 2 — Title: "Design et développement travaillent en silo"
         Text: "Double travail, incompréhensions, production ralentie, décisions dispersées."
Card 3 — Title: "Votre design system n'accélère pas vraiment"
         Text: "Bloqué depuis des mois, faible adoption, gouvernance absente."
Card 4 — Title: "Vous avez besoin de résultats mesurables"
         Text: "Pas d'une couche esthétique — d'un impact business traçable."
```

### Expertises (4 cards)
```
H2: "Nos 4 expertises, un même objectif"
Body: "Impact, fluidité, qualité, durabilité."

Card 1 — Title: "Produits numériques performants"
         Text: "Cadrage, conception, mise en qualité et amélioration continue de vos produits."
Card 2 — Title: "Process de collaboration design/dev"
         Text: "Structurer les rituels, les outils et les flux pour accélérer sans perdre en qualité."
Card 3 — Title: "Design systems modulaires et accessibles"
         Text: "Fondations solides, gouvernance claire, adoption réelle par vos équipes."
Card 4 — Title: "Transformation & accompagnement"
         Text: "Renforcer la collaboration humaine pour rendre les changements durables."
```

### Stats (3 blocs)
```
Stat 1: "82" / "missions livrées" / Source: Frontguys
Stat 2: "35+" / "clients accompagnés" / Source: Frontguys
Stat 3: "98%" / "satisfaction client" / Source: Enquête post-projet
```

### Cas clients (3 cards photo)
```
Card 1 — Lefebvre Dalloz: image + "Refonte de l'expérience produit" + "Design system + composants React"
Card 2 — Accor Groupe: image + "Audit & accompagnement design" + "Revue UX + guidelines équipe"
Card 3 — ODDO BHF: image + "Intégration design-code" + "Composants accessibles et scalables"
```

### Parcours (3 cards)
```
H2: "Par où commencer ?"
Body: "Choisissez l'entrée qui correspond à votre contexte."

Card 1 — Title: "J'ai un besoin produit ou design"
         Text: "Design system, produit numérique, collaboration design/dev."
         CTA: "Voir nos expertises"
Card 2 — Title: "Je veux former mon équipe"
         Text: "Formations intra, ateliers, accompagnement montée en compétences."
         CTA: "Voir les formations"
Card 3 — Title: "Je pilote une transformation"
         Text: "Cadrage stratégique, audit, accompagnement du changement."
         CTA: "Réserver un atelier"
```

### CTA Banner
```
Eyebrow: "DÉMARRONS ENSEMBLE"
H2: "Un premier échange pour identifier vos enjeux"
Body: "Gratuit. Sans engagement. On identifie vos besoins en 30 minutes."
CTA 1: "Demander un diagnostic"
CTA 2: "Parler à un expert"
```

---

## Design Tokens

<!--
  ► POURQUOI cette section ?
  Claude utilise ces tokens pour appliquer les bonnes valeurs
  via setBoundVariable() dans l'API Figma Plugin.

  AUCUNE valeur hex n'est utilisée directement dans le code généré.
  Tout passe par des variables Figma — c'est ce qui rend le design
  maintenable et thémable (light/dark mode par exemple).

  La table d'alternance en bas est le "plan de peinture" :
  section par section, fond + pattern + illustration.
-->

### Layout
| Token | Valeur observée | Usage |
|-------|----------------|-------|
| `max-content-width` | ~1200px | Centrage du contenu dans les sections |
| `section-padding-y` | ~80px (spacing/base-20) | Padding vertical de chaque section |
| `grid-gap` | ~32px (spacing/base-8) | Gap entre cards dans les grilles |
| `card-padding` | ~24px (spacing/base-6) | Padding interne des cards |
| `nav-height` | ~64–72px | Hauteur de la nav |

### Couleurs (tokens brand extension)
| Token | Valeur | Opacité | Usage sur la page |
|-------|--------|---------|-------------------|
| `color/bg/primary-dark` | `#282839` | 100% | Hero, Expert, CTA Banner, Footer |
| `color/bg/section-dark` | `#3C3C56` | 100% | Stats, Parcours |
| `color/bg/primary-light` | `#FFFFFF` | 100% | Enjeux, Expertises, Cas clients |
| `color/bg/card-ghost` | `#FFFFFF` | 5% | Cards sur fond dark (Parcours) |
| `color/text/primary-dark` | `#D2D3F4` | 100% | Texte principal sur fond sombre |
| `color/text/muted-dark` | `#8181AA` | 100% | Sources stats, texte secondaire |
| `color/accent/teal` | `#004C61` | 100% | CTA primary background |
| `color/overlay/pattern` | `#3C3C56` | 52% | Pattern logo (Hero, Stats, CTA Banner, Footer) |

### Alternance sections (brand extension)
| # | Section | Fond | Pattern | Illustration |
|---|---------|------|---------|--------------|
| 2 | Hero | dark `#282839` | oui | oui |
| 3 | Enjeux | light `#FFFFFF` | non | non |
| 4 | Stats | dark `#3C3C56` | oui | oui |
| 5 | Expertises | light `#FFFFFF` | non | non |
| 6 | Expert | dark `#282839` | non | non |
| 7 | Cas clients | light `#FFFFFF` | non | non |
| 8 | Parcours | dark `#3C3C56` | non | non |
| 9 | CTA Banner | dark `#282839` | oui | non |
| 10 | Footer | dark `#282839` | oui | non |

---

## Responsive Rules

<!--
  ► POURQUOI cette section ?
  Pour cadrer le SCOPE. Ici : desktop only (1440px).
  Ça évite que quelqu'un demande "et sur mobile ?" alors que
  ce n'est pas couvert par cette spec.
-->

| Breakpoint | Comportement |
|-----------|-------------|
| Desktop (>1024px) | Layout spec ci-dessus — 1440px cible |
| Tablet (768-1024px) | Hors scope spec actuelle |
| Mobile (<768px) | Hors scope spec actuelle |

> **Scope** : cette spec couvre uniquement le viewport desktop (1440px).

---

## Acceptance Criteria

<!--
  ► POURQUOI cette section ?
  C'est la CHECKLIST DE RECETTE. Après génération, on parcourt
  chaque critère pour valider que le résultat est conforme.

  Sans elle, la validation est subjective ("ça a l'air bien").
  Avec elle, c'est binaire : chaque case est cochée ou pas.

  C'est aussi ce qu'on utilise pour le get_screenshot post-génération :
  on compare visuellement le résultat à chaque critère.
-->

### Structure & contenu
- [ ] Le header DS est importé et positionné en haut de page (sticky)
- [ ] Le hero affiche le split 55/45 (texte / illustration outline) sur fond `#282839`
- [ ] Le H1 hero est "Vos équipes produit livrent plus vite. Vos interfaces tiennent dans le temps. On vous montre comment."
- [ ] Le body hero mentionne "82 missions" et "Des résultats chiffrés"
- [ ] Les 2 CTAs du hero sont "Demander un diagnostic" (primary) + "Voir nos expertises" (ghost)
- [ ] La section Stats apparaît **avant** la section Expertises (ordre brand extension)
- [ ] La section Enjeux contient 4 cards formulées en langage symptôme client
- [ ] La section Expertises contient exactement 4 instances `card` type simple avec les noms officiels des 4 expertises
- [ ] La section Stats affiche "82 missions" (pas "+50")
- [ ] Le `profileBanner` en état "contact" avec bouton visible est centré
- [ ] La section Cas clients contient 3 instances `card` type photo avec title + description
- [ ] La section Parcours contient 3 cards orientant Claire / Marc-Antoine / Laurent
- [ ] Le CTA Banner final a "Parler à un expert" en ghost (pas "Découvrez notre approche")
- [ ] Le footer DS est importé en bas de page

### Brand extensions
- [ ] Le fond du Hero est `color/bg/primary-dark` (#282839) — pas teal
- [ ] Le pattern logo est appliqué (52%, blend-mode multiply) sur Hero, Stats, CTA Banner, Footer
- [ ] Une illustration outline est présente à droite dans le Hero (stroke #D2D3F4, 1.5px, 200–280px)
- [ ] Une illustration outline est présente à droite dans la section Stats
- [ ] L'alternance dark/light est respectée : Hero(dark) → Enjeux(light) → Stats(dark) → Expertises(light) → Expert(dark) → Cas clients(light) → Parcours(dark) → CTA(dark) → Footer(dark)
- [ ] Les cards de la section Parcours (fond dark) utilisent `color/bg/card-ghost` (#FFFFFF 5%)
- [ ] Aucune valeur de couleur ou espacement n'est hardcodée — tout suit les tokens brand extension

---

## Open Questions

Aucune — toutes les questions ouvertes ont été résolues.

---

## Changelog

| Date | Version | Changements |
|------|---------|------------|
| 2026-03-20 | v1.0 | Spec initiale |
| 2026-03-20 | v2.0 | Mise à jour suite analyse `persona.md` + `arbo-experience.md` : nouveau H1, body hero, CTAs, services → 4 expertises, ajout sections Enjeux et Parcours, stat "+50" → "82" |
| 2026-03-21 | v3.0 | Application brand extensions : fonds dark/light selon alternance, tokens `color/bg/*` et `color/overlay/pattern`, illustration outline hero + stats, pattern logo, ordre sections (Stats avant Expertises), hero fond #282839 remplace teal |
| 2026-04-03 | v3.0-REX | Version annotée pour démonstration REX — ajout commentaires pédagogiques, plan, intro |
