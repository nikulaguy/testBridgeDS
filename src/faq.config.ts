const faq: { [item: string]: { title: string; content: string } } = {
	accessibilityDefinition: {
		title: "Qu'est-ce que l'accessibilité numérique ?",
		content:
			"L'accessibilité numérique consiste à rendre les services numériques (sites, applications web et mobiles, documents bureautiques, etc.) compréhensibles et utilisables par tous et notamment par les personnes en situation de handicap. Les règles d'accessibilité numérique permettent d'atteindre cet objectif et de garantir une expérience utilisateur sans entrave pour un maximum de personnes.",
	},
	accessibilityLaws: {
		title: "Quelles sont les lois qui concernent l'accessibilité numérique ?",
		content:
			"La Loi Handicap de février 2005 est la loi fondatrice qui a introduction l'accessibilité numérique en France. Elle a été renforcé au fil des années par les transpositions des directives européennes « WAD » (2016/2102) puis « EAA » (2019/882).",
	},
	rgaaDefinition: {
		title: "Qu'est-ce que le RGAA ?",
		content:
			"Le RGAA (Référentiel Général d'Amélioration de l'Accessibilité) est le référentiel français pour l'accessibilité numérique. Il se base sur les recommandations internationales WCAG (niveau AA) et fournit une liste de critères à respecter ainsi que la méthodologie d'évaluation pour être en conformité.",
	},
	auditDefinition: {
		title: "Qu'est-ce qu'un audit d'accessibilité ?",
		content:
			"L'audit d'accessibilité numérique est un moyen d'évaluer la prise en compte des règles d'accessibilité dans les contenus et services numérique. C'est une évaluation experte qui se base sur les référentiels en vigueur (ex : RGAA pour la France) et qui aboutit sur un rapport détaillé et une restitution auprès des équipes opérationnelles. Plusieurs types d'audits sont possibles mais seul l'audit de conformité RGAA permet d'obtenir une déclaration d'accessibilité au sens légal.",
	},
	auditCost: {
		title: "Combien coûte un audit d'accessibilité ?",
		content:
			"Le coût d'un audit dépend de la complexité et du volume de pages auditées mais aussi du niveau de détail attendu dans le rapport de non-conformités. À titre d'exemple pour un échantillon de 10 pages, un audit de conformité simple se situera aux alentours de 3 000 € HT, tandis qu'un audit exhaustif avec des recommandations personnsalisées se situera aux alentours de 6 000 €.",
	},
};

export const offerPageFaq = [
	faq.accessibilityDefinition,
	faq.accessibilityLaws,
	faq.rgaaDefinition,
	faq.auditDefinition,
	faq.auditCost,
];
