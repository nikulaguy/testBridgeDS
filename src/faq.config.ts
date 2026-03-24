const faq: { [item: string]: { title: string; content: string } } = {
	designSystemDefinition: {
		title: "Qu'est-ce qu'un design system ?",
		content:
			"Un design system est un ensemble cohérent de composants réutilisables, de guidelines et de tokens de design qui servent de source de vérité pour les équipes produit. Il accélère la production, garantit la cohérence et facilite la collaboration entre designers et développeurs.",
	},
	designSystemCost: {
		title: "Combien coûte la mise en place d'un design system ?",
		content:
			"Le coût varie selon la maturité de votre organisation et l'ambition du projet. Un audit et des fondations solides démarrent à partir de 15 000 € HT. Un design system complet avec gouvernance et documentation peut représenter 50 000 à 150 000 € selon le périmètre.",
	},
	collaborationDesignDev: {
		title: "Comment améliorer la collaboration design/dev ?",
		content:
			"La clé réside dans des rituels partagés (design reviews, handoff structuré), des outils communs (Figma, Storybook, tokens partagés) et une culture de feedback continu. Nous mettons en place ces process pour réduire les frictions et accélérer la livraison.",
	},
	transformationDuration: {
		title: "Combien de temps dure une mission type ?",
		content:
			"Une mission de cadrage ou d'audit dure généralement 2 à 4 semaines. Un accompagnement produit ou design system s'étend sur 3 à 12 mois selon la complexité. Chaque engagement est calibré à vos besoins réels.",
	},
	frontguysApproach: {
		title: "Quelle est votre approche ?",
		content:
			"Nous combinons expertise stratégique et exécution opérationnelle. Nos consultants maîtrisent à la fois le design et le développement front-end, ce qui élimine les gaps entre maquette et code. Notre objectif : rendre votre équipe autonome.",
	},
};

export const offerPageFaq = [
	faq.designSystemDefinition,
	faq.designSystemCost,
	faq.collaborationDesignDev,
	faq.transformationDuration,
	faq.frontguysApproach,
];
