export type Expertise =
	| "Produits numériques"
	| "Process design/dev"
	| "Design systems"
	| "Transformation";

export type Sector =
	| "SaaS B2B"
	| "Retail"
	| "Industrie"
	| "Finance"
	| "Services"
	| "Médias";

export type Gain =
	| "Adoption"
	| "Vélocité"
	| "Cohérence"
	| "Gouvernance";

export type CaseStudy = {
	slug: string;
	category: string;
	title: string;
	/** Filter metadata */
	expertise: Expertise;
	sector: Sector;
	gain: Gain;
	/** Highlight stat shown on the card (e.g. "+78%") */
	highlightStat: { value: string; label: string };
	/** Short description for the card listing */
	cardDescription: string;
	metaCards: { label: string; value: string }[];
	clientInfo: { label: string; value: string }[];
	context: string[];
	tensions: { title: string; text: string }[];
	intervention: {
		intro: string;
		steps: { title: string; description: string }[];
	};
	results: {
		stats: { value: string; label: string }[];
		quote: { text: string; author: string };
	};
	learnings: {
		intro: string;
		items: { number: string; title: string; text: string }[];
	};
	relatedSlugs: string[];
};

export const expertises: Expertise[] = [
	"Produits numériques",
	"Process design/dev",
	"Design systems",
	"Transformation",
];

export const sectors: Sector[] = [
	"SaaS B2B",
	"Retail",
	"Industrie",
	"Finance",
	"Services",
	"Médias",
];

export const gains: Gain[] = [
	"Adoption",
	"Vélocité",
	"Cohérence",
	"Gouvernance",
];

export const caseStudies: CaseStudy[] = [
	{
		slug: "design-system-bloque",
		category: "Design systems",
		title: "Débloquer un design system figé depuis 18 mois",
		expertise: "Design systems",
		sector: "SaaS B2B",
		gain: "Adoption",
		highlightStat: { value: "+78%", label: "d'adoption en 90 jours" },
		cardDescription:
			"Un design system existait dans Figma mais aucun développeur ne l'utilisait. Nous avons restructuré la gouvernance et les process pour atteindre 78% d'adoption.",
		metaCards: [
			{ label: "Client", value: "Lefebvre Dalloz" },
			{ label: "Problème", value: "DS non adopté par les développeurs" },
			{ label: "Intervention", value: "Audit + restructuration · 3 mois" },
			{ label: "Résultat", value: "78% d'adoption en 90 jours" },
		],
		clientInfo: [
			{ label: "Secteur", value: "SaaS B2B" },
			{ label: "Taille", value: "500–5 000 pers." },
			{ label: "Équipe design", value: "12 designers" },
			{ label: "Maturité", value: "Consolidation" },
		],
		context: [
			"Notre client est un éditeur de logiciel SaaS B2B dans le secteur RH, avec une équipe produit de 80 personnes dont 4 designers. Ils développaient leur design system depuis 18 mois.",
			"La situation initiale : le DS existait dans Figma avec plus de 200 composants documentés, mais aucun développeur ne l'utilisait comme référence. Chaque sprint réintroduisait les mêmes inconsistances visuelles.",
			"Le problème était devenu urgent suite à une refonte de l'interface principale : 6 semaines de travail annulées parce que les composants Figma et les composants code ne correspondaient pas.",
		],
		tensions: [
			{
				title: "Un design system que personne n'adoptait",
				text: "Le DS existait en Figma mais n'était pas connecté au code. Les développeurs avaient construit leur propre librairie de composants React en parallèle — les deux évoluaient séparément.",
			},
			{
				title: "Un handoff design/dev sans structure",
				text: "Les specs de design arrivaient aux devs sans documentation de comportement, sans token, sans état d'exception. Chaque développeur interprétait les maquettes à sa manière.",
			},
			{
				title: "Des décisions de design prises trop tard",
				text: "Les designers étaient sollicités en fin de sprint pour valider — pas en amont pour cadrer. Le design system était un outil de documentation, pas un outil de collaboration.",
			},
		],
		intervention: {
			intro: "Frontguys est entré dans l'équipe en position de consultant intégré — ni en externe donnant des recommandations, ni en régie exécutant des tâches.\nLe rôle était de co-construire un DS qui serait adopté, pas seulement livré.",
			steps: [
				{ title: "Étape 1", description: "Audit de l'existant" },
				{ title: "Étape 2", description: "Co-construction de la roadmap" },
				{ title: "Étape 3", description: "Priorisation et définitions des KPI" },
				{ title: "Étape 4", description: "Co-construction des process" },
			],
		},
		results: {
			stats: [
				{ value: "78%", label: "d'adoption du DS dans les 3 mois" },
				{ value: "214", label: "composants documentés et connectés au code" },
				{ value: "+3 sem.", label: "de delivery accéléré par sprint en moyenne" },
			],
			quote: {
				text: "Frontguys a su embarquer nos équipes sans imposer de méthode. Le DS est enfin un outil que tout le monde utilise.",
				author: "Directeur produit · Lefebvre Dalloz",
			},
		},
		learnings: {
			intro: "Trois enseignements applicables à des contextes similaires.",
			items: [
				{
					number: "01",
					title: "L'adoption se prépare avant la livraison",
					text: "Un DS adopté n'est pas un DS parfait — c'est un DS dont les utilisateurs ont été impliqués dès la phase de conception. La documentation vient en dernier, pas en premier.",
				},
				{
					number: "02",
					title: "La gouvernance est un problème de décision",
					text: "Le vrai problème n'était pas la qualité des composants mais l'absence de règle décidée : qui tranche quand un dev veut dévier du DS ? Sans gouvernance, le DS dérive.",
				},
				{
					number: "03",
					title: "Un DS sans connexion au code n'est qu'une librairie Figma",
					text: "La valeur d'un design system se réalise au moment où les tokens sont en prod et où le gap Figma/code est mesuré et géré. Sinon, c'est de la documentation.",
				},
			],
		},
		relatedSlugs: ["refonte-experience-produit", "integration-design-code"],
	},
	{
		slug: "refonte-experience-produit",
		category: "Product design",
		title: "Refonte de l'expérience produit — Design system + composants React",
		expertise: "Produits numériques",
		sector: "Médias",
		gain: "Cohérence",
		highlightStat: { value: "-40%", label: "de temps de développement UI" },
		cardDescription:
			"Quatre produits numériques incohérents visuellement. Nous avons structuré la fonction Product Design et construit un design system partagé entre toutes les équipes.",
		metaCards: [
			{ label: "Client", value: "Lefebvre Dalloz" },
			{ label: "Problème", value: "Expérience produit fragmentée" },
			{ label: "Intervention", value: "Product design · 6 mois" },
			{ label: "Résultat", value: "Design system unifié" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Édition juridique" },
			{ label: "Taille", value: "5 000+ pers." },
			{ label: "Équipe design", value: "8 designers" },
			{ label: "Maturité", value: "Transformation" },
		],
		context: [
			"Lefebvre Dalloz souhaitait unifier l'expérience utilisateur de ses produits numériques, dispersés entre plusieurs plateformes et équipes.",
			"L'absence de design system partagé générait des incohérences visuelles et fonctionnelles entre les produits, ralentissant la delivery.",
		],
		tensions: [
			{
				title: "Des produits visuellement incohérents",
				text: "Chaque équipe produit avait développé ses propres composants UI, créant une expérience fragmentée pour les utilisateurs.",
			},
			{
				title: "Un delivery ralenti par le manque de standards",
				text: "Sans composants partagés, chaque fonctionnalité nécessitait de recréer des éléments d'interface depuis zéro.",
			},
			{
				title: "Des équipes design et dev cloisonnées",
				text: "Le manque de langage commun entre designers et développeurs générait des allers-retours coûteux à chaque sprint.",
			},
		],
		intervention: {
			intro: "Nous avons structuré une fonction Product Design transverse et accompagné la création d'un design system partagé entre toutes les équipes.",
			steps: [
				{ title: "Étape 1", description: "Audit UX multi-produits" },
				{ title: "Étape 2", description: "Définition de la vision design" },
				{ title: "Étape 3", description: "Construction du design system" },
				{ title: "Étape 4", description: "Déploiement et accompagnement" },
			],
		},
		results: {
			stats: [
				{ value: "4", label: "produits alignés sur un design system commun" },
				{ value: "40%", label: "de réduction du temps de développement UI" },
				{ value: "100%", label: "des équipes formées au DS" },
			],
			quote: {
				text: "Leur leadership et leur exigence sur l'UX ont eu un impact concret, rapide et durable.",
				author: "Pauline De Certeau · Directrice produits digitaux · Lefebvre Dalloz",
			},
		},
		learnings: {
			intro: "Trois enseignements clés de cette mission.",
			items: [
				{
					number: "01",
					title: "Un DS se construit avec les équipes, pas pour elles",
					text: "Impliquer les développeurs dès la phase de conception garantit l'adoption et la pertinence technique du système.",
				},
				{
					number: "02",
					title: "La vision produit précède la vision design",
					text: "Sans stratégie produit claire, un design system risque de standardiser des expériences qui ne répondent pas aux besoins utilisateurs.",
				},
				{
					number: "03",
					title: "Le déploiement est un projet en soi",
					text: "Créer un design system ne suffit pas. L'accompagnement au changement et la formation sont aussi importants que les composants eux-mêmes.",
				},
			],
		},
		relatedSlugs: ["design-system-bloque", "integration-design-code"],
	},
	{
		slug: "integration-design-code",
		category: "Design systems",
		title: "Intégration design-code — Composants accessibles et scalables",
		expertise: "Design systems",
		sector: "Finance",
		gain: "Cohérence",
		highlightStat: { value: "0", label: "régression visuelle sur 3 releases" },
		cardDescription:
			"Le gap entre maquettes Figma et code en production créait des régressions à chaque release. Nous avons mis en place un workflow de synchronisation design-code avec tests d'accessibilité automatisés.",
		metaCards: [
			{ label: "Client", value: "ODDO BHF" },
			{ label: "Problème", value: "Gap entre design et implémentation" },
			{ label: "Intervention", value: "Design-code · 4 mois" },
			{ label: "Résultat", value: "Composants accessibles WCAG AA" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Finance" },
			{ label: "Taille", value: "2 500+ pers." },
			{ label: "Équipe design", value: "6 designers" },
			{ label: "Maturité", value: "Scaling" },
		],
		context: [
			"ODDO BHF cherchait à industrialiser son interface tout en respectant les normes d'accessibilité WCAG AA pour ses applications financières.",
			"Le gap entre les maquettes Figma et le code en production créait des régressions visuelles à chaque release.",
		],
		tensions: [
			{
				title: "Un gap design/code non maîtrisé",
				text: "Les composants Figma et les composants code divergeaient à chaque sprint, créant une dette d'interface croissante.",
			},
			{
				title: "Des exigences d'accessibilité non couvertes",
				text: "Les applications financières nécessitaient une conformité WCAG AA, mais aucun process ne garantissait le respect des critères.",
			},
			{
				title: "Une scalabilité limitée",
				text: "L'architecture des composants ne permettait pas de couvrir les cas d'usage complexes des interfaces financières.",
			},
		],
		intervention: {
			intro: "Nous avons mis en place un workflow de synchronisation design-code avec des tests d'accessibilité automatisés à chaque étape.",
			steps: [
				{ title: "Étape 1", description: "Audit d'accessibilité complet" },
				{ title: "Étape 2", description: "Refonte de l'architecture composants" },
				{ title: "Étape 3", description: "Mise en place du pipeline design-code" },
				{ title: "Étape 4", description: "Tests automatisés et documentation" },
			],
		},
		results: {
			stats: [
				{ value: "100%", label: "de conformité WCAG AA" },
				{ value: "56", label: "composants synchronisés design/code" },
				{ value: "0", label: "régression visuelle sur 3 releases" },
			],
			quote: {
				text: "Le pipeline design-code a supprimé les régressions visuelles que nous subissions à chaque release.",
				author: "Lead front-end · ODDO BHF",
			},
		},
		learnings: {
			intro: "Trois enseignements issus de cette collaboration.",
			items: [
				{
					number: "01",
					title: "L'accessibilité se conçoit, ne se corrige pas",
					text: "Intégrer les critères WCAG dès la conception des composants évite 80% des corrections a posteriori.",
				},
				{
					number: "02",
					title: "La synchronisation design-code est un process continu",
					text: "Un workflow automatisé de vérification design/code à chaque PR supprime les régressions visuelles.",
				},
				{
					number: "03",
					title: "La documentation vivante remplace la documentation figée",
					text: "Des composants auto-documentés dans Storybook avec leurs variantes Figma créent une source de vérité partagée.",
				},
			],
		},
		relatedSlugs: ["design-system-bloque", "refonte-experience-produit"],
	},
	{
		slug: "velocite-delivery-manutan",
		category: "Process design/dev",
		title: "Accélérer la delivery en alignant design et développement",
		expertise: "Process design/dev",
		sector: "Retail",
		gain: "Vélocité",
		highlightStat: { value: "+60%", label: "de vélocité sur les sprints UI" },
		cardDescription:
			"Les allers-retours design/dev rallongeaient chaque sprint de 3 jours. Nous avons restructuré les rituels, le handoff et les standards partagés pour fluidifier la collaboration.",
		metaCards: [
			{ label: "Client", value: "Manutan" },
			{ label: "Problème", value: "Allers-retours design/dev excessifs" },
			{ label: "Intervention", value: "Process design/dev · 4 mois" },
			{ label: "Résultat", value: "+60% de vélocité UI" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Retail B2B" },
			{ label: "Taille", value: "2 000+ pers." },
			{ label: "Équipe design", value: "5 designers" },
			{ label: "Maturité", value: "Consolidation" },
		],
		context: [
			"Manutan souhaitait refondre son interface e-commerce B2B mais la collaboration entre design et développement créait des frictions constantes.",
			"Chaque fonctionnalité nécessitait en moyenne 3 jours d'allers-retours avant d'atteindre un état validé par les deux équipes.",
		],
		tensions: [
			{
				title: "Un handoff sans cadre partagé",
				text: "Les maquettes arrivaient sans spécifications de comportement. Les développeurs devaient deviner les interactions, les états d'erreur et les cas limites.",
			},
			{
				title: "Des rituels design/dev inexistants",
				text: "Aucun point de synchronisation structuré entre les deux équipes. Les problèmes remontaient en fin de sprint, trop tard pour être corrigés.",
			},
			{
				title: "Une dette d'interface croissante",
				text: "Chaque sprint ajoutait des variations non prévues. L'interface devenait incohérente et la maintenance de plus en plus coûteuse.",
			},
		],
		intervention: {
			intro: "Nous avons repensé l'ensemble du workflow de collaboration entre designers et développeurs, des rituels aux outils en passant par les standards.",
			steps: [
				{ title: "Étape 1", description: "Cartographie des frictions existantes" },
				{ title: "Étape 2", description: "Définition des standards de handoff" },
				{ title: "Étape 3", description: "Mise en place des rituels design/dev" },
				{ title: "Étape 4", description: "Formation et accompagnement des équipes" },
			],
		},
		results: {
			stats: [
				{ value: "+60%", label: "de vélocité sur les sprints UI" },
				{ value: "-3j", label: "d'allers-retours par fonctionnalité" },
				{ value: "100%", label: "des specs documentées avant développement" },
			],
			quote: {
				text: "Nos sprints sont enfin fluides. Le design et le dev avancent ensemble, pas l'un après l'autre.",
				author: "Product Owner · Manutan",
			},
		},
		learnings: {
			intro: "Trois enseignements issus de cette mission.",
			items: [
				{
					number: "01",
					title: "La vélocité se gagne dans les rituels, pas dans les outils",
					text: "Les outils ne corrigent pas un process défaillant. Des rituels simples et réguliers entre design et dev suffisent à supprimer 80% des frictions.",
				},
				{
					number: "02",
					title: "Le handoff n'est pas un moment, c'est un flux continu",
					text: "Remplacer le « handoff en fin de sprint » par une collaboration continue réduit les surprises et les reprises.",
				},
				{
					number: "03",
					title: "La documentation est un investissement, pas un coût",
					text: "Documenter les comportements et les cas limites en amont prend du temps, mais en économise trois fois plus en aval.",
				},
			],
		},
		relatedSlugs: ["design-system-bloque", "gouvernance-ds-euronext"],
	},
	{
		slug: "gouvernance-ds-euronext",
		category: "Design systems",
		title: "Structurer la gouvernance d'un design system multi-équipes",
		expertise: "Design systems",
		sector: "Finance",
		gain: "Gouvernance",
		highlightStat: { value: "5→1", label: "librairies consolidées en un DS" },
		cardDescription:
			"Cinq équipes produit, cinq librairies de composants. Nous avons unifié l'ensemble en un design system gouverné, avec des rôles, des process et des KPI partagés.",
		metaCards: [
			{ label: "Client", value: "Euronext" },
			{ label: "Problème", value: "5 librairies UI non gouvernées" },
			{ label: "Intervention", value: "Gouvernance DS · 5 mois" },
			{ label: "Résultat", value: "1 DS gouverné multi-équipes" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Finance" },
			{ label: "Taille", value: "2 000+ pers." },
			{ label: "Équipe design", value: "10 designers" },
			{ label: "Maturité", value: "Scaling" },
		],
		context: [
			"Euronext opérait cinq plateformes de trading avec cinq équipes indépendantes. Chaque équipe avait construit sa propre librairie UI.",
			"Le résultat : des interfaces incohérentes, une maintenance coûteuse et une impossibilité de partager des composants entre produits.",
		],
		tensions: [
			{
				title: "Cinq librairies pour un même écosystème",
				text: "Chaque équipe avait ses propres composants, ses propres tokens, ses propres conventions. Aucune réutilisation possible entre produits.",
			},
			{
				title: "Aucune gouvernance établie",
				text: "Personne ne décidait quand un composant devenait partagé, qui validait les contributions, ni comment les mises à jour se propageaient.",
			},
			{
				title: "Une dette technique UI croissante",
				text: "Les 5 librairies totalisaient plus de 800 composants avec des doublons massifs. La maintenance consommait 30% du temps des développeurs front.",
			},
		],
		intervention: {
			intro: "Nous avons accompagné la consolidation des 5 librairies en un design system unique avec un modèle de gouvernance adapté à l'organisation.",
			steps: [
				{ title: "Étape 1", description: "Audit et cartographie des 5 librairies" },
				{ title: "Étape 2", description: "Définition du modèle de gouvernance" },
				{ title: "Étape 3", description: "Migration et consolidation progressive" },
				{ title: "Étape 4", description: "Mise en place des rituels de contribution" },
			],
		},
		results: {
			stats: [
				{ value: "1", label: "design system unifié pour 5 produits" },
				{ value: "-30%", label: "de temps de maintenance UI" },
				{ value: "120", label: "composants partagés et gouvernés" },
			],
			quote: {
				text: "La gouvernance n'est plus un frein. C'est ce qui permet à nos 5 équipes d'avancer ensemble.",
				author: "VP Engineering · Euronext",
			},
		},
		learnings: {
			intro: "Trois enseignements issus de cette transformation.",
			items: [
				{
					number: "01",
					title: "La gouvernance doit être adaptée à l'organisation",
					text: "Un modèle centralisé ne convient pas à une organisation distribuée. Nous avons opté pour un modèle fédéré avec un core team et des contributeurs.",
				},
				{
					number: "02",
					title: "La migration se fait par valeur, pas par volume",
					text: "Migrer les composants les plus utilisés en premier crée un effet de levier qui accélère l'adoption des suivants.",
				},
				{
					number: "03",
					title: "Les KPI de gouvernance motivent les équipes",
					text: "Mesurer le taux de réutilisation et le temps gagné par sprint rend la valeur du DS visible et concrète pour les décideurs.",
				},
			],
		},
		relatedSlugs: ["design-system-bloque", "integration-design-code"],
	},
	{
		slug: "transformation-produit-accor",
		category: "Transformation",
		title: "Accélérer la transformation produit d'un groupe hôtelier",
		expertise: "Transformation",
		sector: "Services",
		gain: "Adoption",
		highlightStat: { value: "+45%", label: "de maturité produit en 6 mois" },
		cardDescription:
			"Les équipes produit travaillaient en silos, sans culture produit partagée. Nous avons accompagné la montée en compétences et structuré les rituels de collaboration.",
		metaCards: [
			{ label: "Client", value: "Accor" },
			{ label: "Problème", value: "Silos entre équipes produit" },
			{ label: "Intervention", value: "Transformation · 6 mois" },
			{ label: "Résultat", value: "+45% de maturité produit" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Services / Hôtellerie" },
			{ label: "Taille", value: "10 000+ pers." },
			{ label: "Équipe design", value: "15 designers" },
			{ label: "Maturité", value: "Transformation" },
		],
		context: [
			"Accor souhaitait accélérer la digitalisation de ses services hôteliers avec une approche produit centrée utilisateur.",
			"Les équipes design et produit manquaient de maturité dans les pratiques de collaboration, de priorisation et de mesure d'impact.",
		],
		tensions: [
			{
				title: "Des équipes en silos fonctionnels",
				text: "Design, développement et métier travaillaient séparément. Les décisions se prenaient sans confrontation des perspectives.",
			},
			{
				title: "Une culture produit à construire",
				text: "Les pratiques UX Research, les rituels de discovery et les indicateurs d'impact n'existaient pas dans les process établis.",
			},
			{
				title: "Un time-to-market trop long",
				text: "Les cycles de conception et de validation rallongeaient les délais de mise en production des fonctionnalités clés.",
			},
		],
		intervention: {
			intro: "Nous avons accompagné la transformation des pratiques produit en intégrant des profils seniors sur les sujets UX, design et collaboration design/dev.",
			steps: [
				{ title: "Étape 1", description: "Diagnostic de maturité produit" },
				{ title: "Étape 2", description: "Co-construction de la roadmap de transformation" },
				{ title: "Étape 3", description: "Coaching et montée en compétences des équipes" },
				{ title: "Étape 4", description: "Mise en place des rituels et indicateurs" },
			],
		},
		results: {
			stats: [
				{ value: "+45%", label: "de maturité produit mesurée" },
				{ value: "8", label: "équipes accompagnées" },
				{ value: "-35%", label: "de time-to-market sur les features clés" },
			],
			quote: {
				text: "Frontguys nous a aidés à passer d'une organisation en silos à une vraie culture produit partagée.",
				author: "Directrice digitale · Accor",
			},
		},
		learnings: {
			intro: "Trois enseignements de cette transformation.",
			items: [
				{
					number: "01",
					title: "La transformation se mesure, pas seulement se décrète",
					text: "Un diagnostic de maturité en début et en fin de mission permet de montrer le chemin parcouru et de justifier l'investissement.",
				},
				{
					number: "02",
					title: "Les rituels créent la culture, pas l'inverse",
					text: "Instaurer des rituels de discovery, de critique design et de rétrospective design/dev ancre les bonnes pratiques plus vite que la formation seule.",
				},
				{
					number: "03",
					title: "Le sponsorship exécutif est non négociable",
					text: "Sans un sponsor qui porte la vision produit au niveau direction, les changements restent superficiels et temporaires.",
				},
			],
		},
		relatedSlugs: ["refonte-experience-produit", "ux-strategy-prisma"],
	},
	{
		slug: "ux-strategy-prisma",
		category: "Produits numériques",
		title: "Refondre la stratégie UX d'un groupe média",
		expertise: "Produits numériques",
		sector: "Médias",
		gain: "Vélocité",
		highlightStat: { value: "+25%", label: "d'engagement sur les parcours clés" },
		cardDescription:
			"Les parcours utilisateurs étaient conçus en silo par chaque rédaction. Nous avons unifié la stratégie UX et accéléré la mise en production des nouveaux parcours.",
		metaCards: [
			{ label: "Client", value: "Prisma Media" },
			{ label: "Problème", value: "Parcours utilisateurs fragmentés" },
			{ label: "Intervention", value: "UX Strategy · 5 mois" },
			{ label: "Résultat", value: "+25% d'engagement" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Médias" },
			{ label: "Taille", value: "1 000+ pers." },
			{ label: "Équipe design", value: "7 designers" },
			{ label: "Maturité", value: "Consolidation" },
		],
		context: [
			"Prisma Media gérait plusieurs marques numériques avec des équipes design distinctes. Les parcours utilisateurs variaient d'un titre à l'autre.",
			"L'engagement sur les parcours clés stagnait, et les équipes manquaient de méthodologie UX Research pour identifier les vrais points de friction.",
		],
		tensions: [
			{
				title: "Des parcours conçus sans données utilisateurs",
				text: "Les décisions UX se prenaient sur la base d'intuitions éditoriales, sans recherche utilisateur structurée ni données d'usage consolidées.",
			},
			{
				title: "Une fragmentation entre marques",
				text: "Chaque rédaction avait ses propres parcours, ses propres composants et ses propres règles UX. Aucune mutualisation possible.",
			},
			{
				title: "Un delivery design trop lent",
				text: "Les designers recréaient des parcours similaires pour chaque marque. Le manque de patterns partagés ralentissait considérablement la production.",
			},
		],
		intervention: {
			intro: "Nous avons structuré une stratégie UX transverse et mis en place les outils et méthodes de recherche utilisateur nécessaires à des décisions basées sur les données.",
			steps: [
				{ title: "Étape 1", description: "Audit UX des parcours existants" },
				{ title: "Étape 2", description: "Mise en place de la recherche utilisateur" },
				{ title: "Étape 3", description: "Définition des patterns UX partagés" },
				{ title: "Étape 4", description: "Déploiement et mesure d'impact" },
			],
		},
		results: {
			stats: [
				{ value: "+25%", label: "d'engagement sur les parcours clés" },
				{ value: "12", label: "patterns UX partagés entre marques" },
				{ value: "-50%", label: "de temps de conception par parcours" },
			],
			quote: {
				text: "Nous concevons enfin avec des données, pas avec des opinions. L'engagement le prouve.",
				author: "Head of Product · Prisma Media",
			},
		},
		learnings: {
			intro: "Trois enseignements de cette collaboration.",
			items: [
				{
					number: "01",
					title: "La recherche utilisateur n'est pas un luxe",
					text: "5 tests utilisateurs suffisent à identifier 80% des problèmes. Le retour sur investissement est immédiat et mesurable.",
				},
				{
					number: "02",
					title: "Les patterns partagés accélèrent sans standardiser",
					text: "Définir des patterns UX communs entre marques accélère la production tout en préservant l'identité de chaque titre.",
				},
				{
					number: "03",
					title: "La mesure transforme les conversations",
					text: "Quand les décisions UX sont adossées à des données d'engagement, les débats subjectifs disparaissent.",
				},
			],
		},
		relatedSlugs: ["refonte-experience-produit", "transformation-produit-accor"],
	},
	{
		slug: "front-industrialise-scaleway",
		category: "Process design/dev",
		title: "Industrialiser le front-end d'une plateforme cloud",
		expertise: "Process design/dev",
		sector: "SaaS B2B",
		gain: "Vélocité",
		highlightStat: { value: "×2", label: "de features UI livrées par sprint" },
		cardDescription:
			"Le front-end était un frein à la livraison de nouvelles fonctionnalités. Nous avons industrialisé l'architecture, les composants et le pipeline pour doubler la cadence.",
		metaCards: [
			{ label: "Client", value: "Scaleway" },
			{ label: "Problème", value: "Front-end frein à la delivery" },
			{ label: "Intervention", value: "Front-end · 4 mois" },
			{ label: "Résultat", value: "×2 features UI par sprint" },
		],
		clientInfo: [
			{ label: "Secteur", value: "SaaS B2B / Cloud" },
			{ label: "Taille", value: "500+ pers." },
			{ label: "Équipe design", value: "4 designers" },
			{ label: "Maturité", value: "Scaling" },
		],
		context: [
			"Scaleway développait une console cloud avec une interface riche et technique. Le front-end était devenu le goulot d'étranglement de la delivery.",
			"L'architecture des composants ne permettait pas de scaler au rythme des demandes produit. Chaque feature UI nécessitait trop de code spécifique.",
		],
		tensions: [
			{
				title: "Une architecture front monolithique",
				text: "Les composants étaient couplés entre eux et difficiles à réutiliser. Ajouter un écran nécessitait de toucher à des dizaines de fichiers.",
			},
			{
				title: "Un design system non exploité",
				text: "Le DS existait mais les développeurs front ne l'utilisaient pas systématiquement. Les composants custom proliféraient.",
			},
			{
				title: "Un pipeline de tests insuffisant",
				text: "L'absence de tests visuels et d'intégration rendait chaque déploiement risqué, ralentissant la cadence de release.",
			},
		],
		intervention: {
			intro: "Nous avons industrialisé le front-end en restructurant l'architecture des composants, en connectant le design system au code et en fiabilisant le pipeline.",
			steps: [
				{ title: "Étape 1", description: "Audit de l'architecture front existante" },
				{ title: "Étape 2", description: "Restructuration des composants" },
				{ title: "Étape 3", description: "Connexion design system / code" },
				{ title: "Étape 4", description: "Pipeline de tests visuels" },
			],
		},
		results: {
			stats: [
				{ value: "×2", label: "de features UI livrées par sprint" },
				{ value: "-70%", label: "de code spécifique par écran" },
				{ value: "98%", label: "de couverture de tests visuels" },
			],
			quote: {
				text: "Le front n'est plus notre goulot d'étranglement. On livre deux fois plus vite avec plus de confiance.",
				author: "CTO · Scaleway",
			},
		},
		learnings: {
			intro: "Trois enseignements de cette industrialisation.",
			items: [
				{
					number: "01",
					title: "L'architecture est un choix de vélocité",
					text: "Une architecture composants bien pensée est le levier le plus puissant pour accélérer la delivery UI. Elle vaut le temps investi.",
				},
				{
					number: "02",
					title: "Le DS doit être le chemin le plus simple",
					text: "Si utiliser le design system demande plus d'effort que créer un composant custom, personne ne l'utilisera. Simplifier l'accès est clé.",
				},
				{
					number: "03",
					title: "Les tests visuels libèrent la confiance",
					text: "Un pipeline de tests visuels automatisés permet de déployer plus souvent en supprimant la peur des régressions.",
				},
			],
		},
		relatedSlugs: ["velocite-delivery-manutan", "integration-design-code"],
	},
	{
		slug: "transformation-digitale-bnp",
		category: "Transformation",
		title: "Accompagner la transformation digitale d'une banque internationale",
		expertise: "Transformation",
		sector: "Finance",
		gain: "Gouvernance",
		highlightStat: { value: "12", label: "équipes alignées sur une vision produit" },
		cardDescription:
			"Douze équipes produit sans vision partagée ni gouvernance design. Nous avons structuré la gouvernance, les standards et l'accompagnement pour aligner l'ensemble.",
		metaCards: [
			{ label: "Client", value: "BNP Paribas" },
			{ label: "Problème", value: "Absence de vision produit unifiée" },
			{ label: "Intervention", value: "Transformation · 8 mois" },
			{ label: "Résultat", value: "12 équipes alignées" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Finance / Banque" },
			{ label: "Taille", value: "50 000+ pers." },
			{ label: "Équipe design", value: "20+ designers" },
			{ label: "Maturité", value: "Transformation" },
		],
		context: [
			"BNP Paribas souhaitait structurer sa fonction design produit pour accélérer la transformation digitale de ses services bancaires.",
			"Les équipes travaillaient sans standards partagés ni gouvernance design. Chaque département avait ses propres pratiques et outils.",
		],
		tensions: [
			{
				title: "Des pratiques design hétérogènes",
				text: "Chaque département avait ses propres process de design, ses propres outils et ses propres niveaux de maturité. Aucune cohérence transverse.",
			},
			{
				title: "Un investissement design sans visibilité",
				text: "La direction investissait dans le design sans pouvoir mesurer l'impact. Les budgets étaient questionnés à chaque trimestre.",
			},
			{
				title: "Des talents difficiles à fidéliser",
				text: "L'absence de communauté design et de parcours de carrière structuré rendait le recrutement et la rétention des profils seniors difficiles.",
			},
		],
		intervention: {
			intro: "Nous avons structuré la gouvernance design à l'échelle du groupe, en définissant les standards, les rituels et les indicateurs partagés entre toutes les équipes.",
			steps: [
				{ title: "Étape 1", description: "Diagnostic de la maturité design" },
				{ title: "Étape 2", description: "Définition du modèle de gouvernance" },
				{ title: "Étape 3", description: "Déploiement des standards et rituels" },
				{ title: "Étape 4", description: "Mise en place des indicateurs de suivi" },
			],
		},
		results: {
			stats: [
				{ value: "12", label: "équipes alignées sur une vision design" },
				{ value: "1", label: "framework de gouvernance déployé" },
				{ value: "+40%", label: "de satisfaction des designers internes" },
			],
			quote: {
				text: "Nous avons enfin une vision design partagée. Les décisions se prennent plus vite et avec plus de confiance.",
				author: "Directeur de la transformation · BNP Paribas",
			},
		},
		learnings: {
			intro: "Trois enseignements de cette transformation.",
			items: [
				{
					number: "01",
					title: "La gouvernance crée la confiance",
					text: "Quand les rôles, les process et les décisions sont clairs, les équipes collaborent mieux et les managers investissent avec plus de confiance.",
				},
				{
					number: "02",
					title: "La communauté est un levier de rétention",
					text: "Créer une communauté de pratique design avec des rituels réguliers améliore la rétention des talents autant que les augmentations salariales.",
				},
				{
					number: "03",
					title: "Les indicateurs rendent le design visible",
					text: "Mesurer la vélocité design, le taux de réutilisation et la satisfaction interne transforme la perception du design au niveau direction.",
				},
			],
		},
		relatedSlugs: ["transformation-produit-accor", "gouvernance-ds-euronext"],
	},
	{
		slug: "produit-accessible-hitachi",
		category: "Produits numériques",
		title: "Concevoir un produit accessible pour le secteur ferroviaire",
		expertise: "Produits numériques",
		sector: "Industrie",
		gain: "Cohérence",
		highlightStat: { value: "AAA", label: "conformité WCAG atteinte" },
		cardDescription:
			"Une application métier critique devait respecter les normes d'accessibilité les plus exigeantes. Nous avons conçu et développé l'interface avec une conformité WCAG AAA.",
		metaCards: [
			{ label: "Client", value: "Hitachi Rail" },
			{ label: "Problème", value: "Application métier non accessible" },
			{ label: "Intervention", value: "Product design + a11y · 5 mois" },
			{ label: "Résultat", value: "Conformité WCAG AAA" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Industrie / Ferroviaire" },
			{ label: "Taille", value: "30 000+ pers." },
			{ label: "Équipe design", value: "3 designers" },
			{ label: "Maturité", value: "Construction" },
		],
		context: [
			"Hitachi Rail développait une application de supervision ferroviaire utilisée par des opérateurs en conditions contraintes — lumière variable, postes debout, écrans tactiles.",
			"L'accessibilité n'était pas un choix mais une obligation réglementaire. L'interface existante ne respectait aucun critère WCAG.",
		],
		tensions: [
			{
				title: "Une interface conçue sans contrainte d'accessibilité",
				text: "L'application avait été développée sans prendre en compte les besoins d'accessibilité. Les contrastes, la navigation clavier et le zoom étaient défaillants.",
			},
			{
				title: "Des conditions d'usage extrêmes",
				text: "Les opérateurs utilisaient l'application en conditions dégradées : lumière directe, gants, postes debout. L'interface devait être lisible et utilisable dans tous les cas.",
			},
			{
				title: "Une équipe design à faire monter en compétence",
				text: "L'équipe interne n'avait pas l'expertise en accessibilité numérique. Le transfert de compétences faisait partie de la mission.",
			},
		],
		intervention: {
			intro: "Nous avons refondu l'interface en intégrant les critères WCAG AAA dès la conception, tout en formant l'équipe interne à l'accessibilité numérique.",
			steps: [
				{ title: "Étape 1", description: "Audit d'accessibilité de l'existant" },
				{ title: "Étape 2", description: "Conception accessible (tokens, composants)" },
				{ title: "Étape 3", description: "Développement et tests automatisés" },
				{ title: "Étape 4", description: "Formation de l'équipe et documentation" },
			],
		},
		results: {
			stats: [
				{ value: "AAA", label: "de conformité WCAG" },
				{ value: "100%", label: "des composants testés en accessibilité" },
				{ value: "3", label: "designers formés à l'a11y" },
			],
			quote: {
				text: "L'accessibilité est devenue un réflexe pour notre équipe. Nos opérateurs le ressentent au quotidien.",
				author: "Responsable UX · Hitachi Rail",
			},
		},
		learnings: {
			intro: "Trois enseignements de cette mission.",
			items: [
				{
					number: "01",
					title: "L'accessibilité est un avantage compétitif",
					text: "Dans les marchés réglementés, la conformité WCAG n'est pas un coût — c'est une condition d'accès aux appels d'offres.",
				},
				{
					number: "02",
					title: "Concevoir pour les cas extrêmes améliore l'expérience de tous",
					text: "Une interface conçue pour la lumière directe et l'utilisation avec des gants est meilleure pour tous les utilisateurs.",
				},
				{
					number: "03",
					title: "Le transfert de compétences pérennise l'investissement",
					text: "Former l'équipe interne garantit que les standards d'accessibilité seront maintenus après la fin de la mission.",
				},
			],
		},
		relatedSlugs: ["integration-design-code", "refonte-experience-produit"],
	},
	{
		slug: "design-ops-galeries",
		category: "Process design/dev",
		title: "Structurer le DesignOps d'un acteur du retail premium",
		expertise: "Process design/dev",
		sector: "Retail",
		gain: "Adoption",
		highlightStat: { value: "+90%", label: "d'adoption des process design" },
		cardDescription:
			"Les process design étaient informels et dépendaient des individus. Nous avons structuré le DesignOps pour rendre les pratiques reproductibles et mesurables.",
		metaCards: [
			{ label: "Client", value: "Galeries Lafayette" },
			{ label: "Problème", value: "Process design informels" },
			{ label: "Intervention", value: "DesignOps · 4 mois" },
			{ label: "Résultat", value: "+90% d'adoption des process" },
		],
		clientInfo: [
			{ label: "Secteur", value: "Retail" },
			{ label: "Taille", value: "10 000+ pers." },
			{ label: "Équipe design", value: "8 designers" },
			{ label: "Maturité", value: "Consolidation" },
		],
		context: [
			"Galeries Lafayette souhaitait structurer ses process design pour accompagner la croissance de son équipe produit et de son offre e-commerce.",
			"Les pratiques de design reposaient sur les individus, pas sur des process. Les arrivées et départs de designers créaient des ruptures dans la qualité.",
		],
		tensions: [
			{
				title: "Des process non documentés",
				text: "Les rituels de design review, de handoff et de contribution au DS n'étaient pas formalisés. Chaque designer avait sa propre méthode.",
			},
			{
				title: "Une montée en charge difficile",
				text: "L'arrivée de nouveaux designers nécessitait des semaines d'onboarding informel. La qualité du travail était imprévisible.",
			},
			{
				title: "Un design system sous-exploité",
				text: "Le DS existait mais sans process de contribution structuré. Les designers le contournaient par manque de documentation et de rituels.",
			},
		],
		intervention: {
			intro: "Nous avons structuré le DesignOps en formalisant les process, les rituels et les outils pour rendre les pratiques design reproductibles et mesurables.",
			steps: [
				{ title: "Étape 1", description: "Audit des pratiques design existantes" },
				{ title: "Étape 2", description: "Définition des process DesignOps" },
				{ title: "Étape 3", description: "Déploiement des rituels et outils" },
				{ title: "Étape 4", description: "Formation et suivi d'adoption" },
			],
		},
		results: {
			stats: [
				{ value: "+90%", label: "d'adoption des process design" },
				{ value: "-60%", label: "de temps d'onboarding nouveaux designers" },
				{ value: "8", label: "rituels DesignOps en place" },
			],
			quote: {
				text: "Nos process sont enfin documentés et partagés. L'onboarding est devenu fluide et prévisible.",
				author: "Head of Design · Galeries Lafayette",
			},
		},
		learnings: {
			intro: "Trois enseignements de cette structuration.",
			items: [
				{
					number: "01",
					title: "Le DesignOps est invisible quand il fonctionne",
					text: "Les meilleurs process sont ceux que les designers suivent sans y penser. La friction zéro est l'objectif.",
				},
				{
					number: "02",
					title: "L'onboarding est le test ultime des process",
					text: "Si un nouveau designer peut être productif en une semaine, les process sont bons. Sinon, ils sont incomplets.",
				},
				{
					number: "03",
					title: "Les rituels doivent avoir une valeur perçue immédiate",
					text: "Un rituel qui ne produit pas de valeur visible dans la semaine sera abandonné. Commencer par les rituels à impact rapide.",
				},
			],
		},
		relatedSlugs: ["velocite-delivery-manutan", "transformation-produit-accor"],
	},
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
	return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
	return slugs
		.map((slug) => getCaseStudy(slug))
		.filter((cs): cs is CaseStudy => cs !== undefined);
}

/** Short info for card display on hub page */
export function getCaseStudyCardData() {
	return caseStudies.map((cs) => ({
		slug: cs.slug,
		title: cs.metaCards[0].value, // Client name
		subtitle: cs.title,
		url: `/nos-resultats/${cs.slug}`,
	}));
}

/** Filter case studies by criteria */
export function filterCaseStudies(filters: {
	expertise?: Expertise;
	sector?: Sector;
	gain?: Gain;
}): CaseStudy[] {
	return caseStudies.filter((cs) => {
		if (filters.expertise && cs.expertise !== filters.expertise) return false;
		if (filters.sector && cs.sector !== filters.sector) return false;
		if (filters.gain && cs.gain !== filters.gain) return false;
		return true;
	});
}
