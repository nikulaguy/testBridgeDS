export type CaseStudy = {
	slug: string;
	category: string;
	title: string;
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

export const caseStudies: CaseStudy[] = [
	{
		slug: "design-system-bloque",
		category: "Design systems",
		title: "Débloquer un design system figé depuis 18 mois",
		metaCards: [
			{ label: "Client", value: "Lefebvre Dalloz" },
			{ label: "Problème", value: "DS non adopté par les développeurs" },
			{ label: "Intervention", value: "Audit + restructuration \u00b7 3 mois" },
			{ label: "Résultat", value: "78% d'adoption en 90 jours" },
		],
		clientInfo: [
			{ label: "Secteur", value: "SaaS B2B" },
			{ label: "Taille", value: "500\u20135 000 pers." },
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
				text: "Une citation courte et impactante du client sur la mission Frontguys.",
				author: "Prénom Nom \u00b7 Rôle \u00b7 Organisation",
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
		metaCards: [
			{ label: "Client", value: "Lefebvre Dalloz" },
			{ label: "Problème", value: "Expérience produit fragmentée" },
			{ label: "Intervention", value: "Product design \u00b7 6 mois" },
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
				text: "Une citation courte et impactante du client sur la mission Frontguys.",
				author: "Prénom Nom \u00b7 Rôle \u00b7 Organisation",
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
		metaCards: [
			{ label: "Client", value: "ODDO BHF" },
			{ label: "Problème", value: "Gap entre design et implémentation" },
			{ label: "Intervention", value: "Design-code \u00b7 4 mois" },
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
				text: "Une citation courte et impactante du client sur la mission Frontguys.",
				author: "Prénom Nom \u00b7 Rôle \u00b7 Organisation",
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
