export type Formation = {
	slug: string;
	title: string;
	badges: { label: string; title?: string }[];
	summary: string;
	learningsTitle: string;
	learnings: string[];
	detail: {
		objectives: { bold: string; rest: string }[];
		program: { title: string; items: string[] }[];
		modalities: string[];
		audience: string;
		meta: { label: string; value: string }[];
		trainer: {
			name: string;
			role: string;
			avatar: string;
		};
	};
};

export const formations: Formation[] = [
	{
		slug: "conformite-rgaa",
		title: "Améliorez la conformité RGAA en autonomie",
		badges: [
			{ label: "Niveau expert", title: "Niveau" },
			{ label: "2 jours", title: "Durée" },
			{ label: "1 600 €", title: "Prix" },
		],
		summary:
			"Prenez les rênes de votre mise en conformité. Nous vous transmettons les clés pour décrypter le référentiel RGAA, piloter vos propres audits avec rigueur et produire en toute autonomie les documents réglementaires indispensables à vos projets.",
		learningsTitle: "Ce que vous apprendrez :",
		learnings: [
			"Adopter les critères et tests du RGAA 4.1.",
			"Expérimenter le handicap par l'usage.",
			"Adopter les outils d'évaluation technique.",
			"Produire vos rapports et schémas réglementaires.",
		],
		detail: {
			objectives: [
				{ bold: "Comprenez le référentiel RGAA", rest: " et ses exigences techniques." },
				{ bold: "Maîtrisez les outils d'audit", rest: " pour évaluer la conformité." },
				{ bold: "Produisez les livrables réglementaires", rest: " en toute autonomie." },
				{ bold: "Pilotez vos propres audits", rest: " avec rigueur et méthode." },
			],
			program: [
				{
					title: "Le référentiel RGAA",
					items: [
						"Présentation du RGAA 4.1 et de ses objectifs.",
						"Comprendre les critères et les tests.",
						"Parcours des thématiques clés.",
					],
				},
				{
					title: "Méthodologie d'audit",
					items: [
						"Prise en main des outils d'évaluation.",
						"Simulation de handicaps.",
						"Audit d'un échantillon de pages.",
					],
				},
				{
					title: "Production des livrables",
					items: [
						"Rédaction de la déclaration d'accessibilité.",
						"Schéma pluriannuel de mise en conformité.",
						"Rapport d'audit structuré.",
					],
				},
			],
			modalities: [
				"Présentiel (locaux Frontguys Paris 9e).",
				"8 stagiaires maximum.",
				"Repas du midi inclus sur place.",
			],
			audience: "Chefs de projet, référents accessibilité, responsables qualité souhaitant piloter la conformité RGAA de leurs services numériques.",
			meta: [
				{ label: "Niveau", value: "Expert" },
				{ label: "Durée", value: "2 jours" },
				{ label: "Prix présentiel", value: "1 600€ HT/Pers." },
			],
			trainer: {
				name: "Hamza Iqbal",
				role: "Expert en accessibilité Web",
				avatar: "/src/assets/img/hamza.jpg",
			},
		},
	},
	{
		slug: "enjeux-accessibilite",
		title: "Saisissez les enjeux de l'accessibilité numérique",
		badges: [
			{ label: "Niveau découverte", title: "Niveau" },
			{ label: "1 jour", title: "Durée" },
			{ label: "900 €", title: "Prix" },
		],
		summary:
			"Transformez vos engagements en actes. Une initiation complète pour comprendre les enjeux du handicap, les règles du jeu légales et les bonnes pratiques pour une culture d'entreprise inclusive.",
		learningsTitle: "Ce que vous apprendrez :",
		learnings: [
			"Comprendre vos obligations et référentiels.",
			"Tester vos services en situation réelle.",
			"Allier performance et impact social.",
			"Tracer votre feuille de route stratégique.",
		],
		detail: {
			objectives: [
				{ bold: "Comprenez les enjeux", rest: " du handicap et de l'accessibilité numérique." },
				{ bold: "Identifiez vos obligations", rest: " légales et réglementaires." },
				{ bold: "Testez vos services", rest: " en situation de handicap." },
				{ bold: "Tracez votre feuille de route", rest: " vers l'inclusion numérique." },
			],
			program: [
				{
					title: "Handicap et accessibilité",
					items: [
						"Les différents types de handicap.",
						"L'accessibilité numérique : définition et enjeux.",
						"Mise en situation pratique.",
					],
				},
				{
					title: "Cadre légal et référentiels",
					items: [
						"Obligations légales en France et en Europe.",
						"Présentation du RGAA et des WCAG.",
						"Sanctions et risques.",
					],
				},
				{
					title: "Stratégie et feuille de route",
					items: [
						"Construire une démarche d'accessibilité.",
						"Identifier les priorités.",
						"Embarquer les parties prenantes.",
					],
				},
			],
			modalities: [
				"Présentiel (locaux Frontguys Paris 9e).",
				"8 stagiaires maximum.",
				"Repas du midi inclus sur place.",
			],
			audience: "Dirigeants, chefs de projet, product owners, designers et toute personne souhaitant comprendre les enjeux de l'accessibilité numérique.",
			meta: [
				{ label: "Niveau", value: "Découverte" },
				{ label: "Durée", value: "1 jour" },
				{ label: "Prix présentiel", value: "900€ HT/Pers." },
			],
			trainer: {
				name: "Hamza Iqbal",
				role: "Expert en accessibilité Web",
				avatar: "/src/assets/img/hamza.jpg",
			},
		},
	},
	{
		slug: "interfaces-web-accessibles",
		title: "Développez des interfaces web accessibles",
		badges: [
			{ label: "Niveau avancé", title: "Niveau" },
			{ label: "2 jours", title: "Durée" },
			{ label: "1 600 €", title: "Prix" },
		],
		summary:
			"Passez à la pratique. Un parcours complet pour les équipes techniques afin d'intégrer l'accessibilité au cœur de la production. Apprenez à architecturer des pages et des composants riches pour garantir une expérience utilisateur sans barrière.",
		learningsTitle: "Ce que vous apprendrez :",
		learnings: [
			"Coder proprement avec le HTML sémantique.",
			"Développer des composants ARIA accessibles.",
			"Utiliser les bons outils de vérification technique.",
			"Intégrer l'accessibilité dans vos workflows.",
		],
		detail: {
			objectives: [
				{ bold: "Comprenez les impacts ", rest: "entre accessibilité numérique et développement web." },
				{ bold: "Maîtrisez les patterns", rest: " de code accessible." },
				{ bold: "Identifiez les erreurs d'accessibilité", rest: " et trouver des solutions de réparation." },
				{ bold: "Utilisez des outils d'évaluation.", rest: "" },
			],
			program: [
				{
					title: "Accessibilité numérique",
					items: [
						"Rappels sur les principes de l'accessibilité numérique.",
						"Prise en main des outils d'évaluation.",
						"Simulations de handicaps.",
					],
				},
				{
					title: "RGAA",
					items: [
						"Présentation du RGAA.",
						"Présentation des thématiques et de leurs objectifs.",
						"Présentation des critères orientés développement.",
					],
				},
				{
					title: "Mise en oeuvre pratique",
					items: [
						"Sémantique HTML.",
						"Structuration du document.",
						"Eléments graphiques.",
						"Boutons et liens.",
						"ARIA et scripts.",
						"Formulaires.",
						"Tableaux.",
						"Eléments multimédias.",
					],
				},
			],
			modalities: [
				"Présentiel (locaux Frontguys Paris 9e).",
				"8 stagiaires maximum.",
				"Repas du midi inclus sur place.",
			],
			audience: "Dev, Intégrateurs Web sensibilisé à l'accessibilité et avoir eu une expérience dans le développement.",
			meta: [
				{ label: "Niveau", value: "Avancé" },
				{ label: "Durée", value: "2 jours" },
				{ label: "Prix présentiel", value: "1 600€ HT/Pers." },
			],
			trainer: {
				name: "Hamza Iqbal",
				role: "Expert en accessibilité Web",
				avatar: "/src/assets/img/hamza.jpg",
			},
		},
	},
	{
		slug: "formation-sur-mesure",
		title: "Adaptez la formation à votre organisation",
		badges: [
			{ label: "Niveau adapté", title: "Niveau" },
			{ label: "Sur devis", title: "Prix" },
		],
		summary:
			"Chez vous ou dans nos locaux, nous créons avec vous un cursus unique qui s'intègre parfaitement à vos flux de travail et à vos contraintes techniques.",
		learningsTitle: "Quelques exemples de modules activables :",
		learnings: [
			"Intégrer l'accessibilité dans les User Stories",
			"Auditer et annoter des maquettes avant le passage au code",
			"Instaurer des rituels de production orientés accessibilité",
			"Créer des composants accessibles pour un Design System",
			"Créer des contenus éditoriaux accessibles",
		],
		detail: {
			objectives: [
				{ bold: "Adaptez le programme", rest: " à vos enjeux métiers et vos outils." },
				{ bold: "Formez vos équipes", rest: " dans votre environnement de travail." },
				{ bold: "Intégrez l'accessibilité", rest: " dans vos process existants." },
				{ bold: "Mesurez les progrès", rest: " avec des indicateurs concrets." },
			],
			program: [
				{
					title: "Diagnostic initial",
					items: [
						"Analyse de vos process actuels.",
						"Identification des points de friction.",
						"Définition des objectifs pédagogiques.",
					],
				},
				{
					title: "Programme adapté",
					items: [
						"Modules sélectionnés selon vos besoins.",
						"Exercices basés sur vos projets réels.",
						"Cas pratiques issus de votre contexte métier.",
					],
				},
				{
					title: "Suivi post-formation",
					items: [
						"Accompagnement de 30 jours.",
						"Revue des mises en pratique.",
						"Ajustement des process.",
					],
				},
			],
			modalities: [
				"Présentiel dans vos locaux ou chez Frontguys.",
				"Nombre de participants à définir.",
				"Programme modulable.",
			],
			audience: "Équipes produit, design, développement et management souhaitant intégrer l'accessibilité dans leurs pratiques quotidiennes.",
			meta: [
				{ label: "Niveau", value: "Adapté" },
				{ label: "Durée", value: "Sur mesure" },
				{ label: "Prix", value: "Sur devis" },
			],
			trainer: {
				name: "Hamza Iqbal",
				role: "Expert en accessibilité Web",
				avatar: "/src/assets/img/hamza.jpg",
			},
		},
	},
];

export function getFormationBySlug(slug: string): Formation | undefined {
	return formations.find((f) => f.slug === slug);
}
