import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const orderedCollectionSchema = z.object({
	order: z.number(),
});

/**
 * Articles
 */
const articlesCollection = defineCollection({
	loader: glob({
		pattern: ["*.md*", "!_*.md*"],
		base: "./src/content/articles",
	}),
	schema: orderedCollectionSchema.extend({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		date: z.string(),
		contactExpertBanner: z.boolean(),
	}),
});

/**
 * Formations
 */
const trainingsCollection = defineCollection({
	loader: glob({
		pattern: ["*.md*", "!_*.md*", "!sur-mesure.md*"],
		base: "./src/content/formations",
	}),
	schema: orderedCollectionSchema.extend({
		title: z.string(),
		shortDescription: z.string(),
		description: z.string(),
		level: z.enum(["Découverte", "Expert", "Avancé", "Adapté"]),
		duration: z.string(),
		price: z.number(),
		scope: z.array(z.string()),
	}),
});

const trainingMethodsCollection = defineCollection({
	loader: file("./src/content/formations/methodologie.yaml"),
	schema: z.object({
		title: z.string(),
		items: z.array(z.string()),
	}),
});

const trainingWithFrontguysCollection = defineCollection({
	loader: file("./src/content/formations/pourquoi-frontguys.yaml"),
	schema: z.object({
		title: z.string(),
		text: z.string(),
	}),
});

/**
 * Cas clients
 */
const businessCasesCollection = defineCollection({
	loader: glob({ pattern: ["*.md*"], base: "./src/content/cas-clients" }),
	schema: orderedCollectionSchema.extend({
		title: z.string(),
		client: z.string(),
		imgPath: z.string(),
		shortDescription: z.string(),
		description: z.string(),
		clientQuote: z
			.object({
				quote: z.string(),
				author: z.string(),
			})
			.optional(),
		challenges: z.array(z.string()),
		method: z.array(
			z.object({
				icon: z.string(),
				title: z.string(),
				text: z.string(),
			}),
		),
		results: z.array(
			z.object({
				value: z.string(),
				text: z.string(),
			}),
		),
		impact: z.array(
			z.object({
				title: z.string(),
				text: z.string(),
			}),
		),
	}),
});

/**
 * Offre
 */
const servicesCollection = defineCollection({
	loader: glob({ pattern: "*.md*", base: "./src/content/offre" }),
	schema: orderedCollectionSchema.extend({
		title: z.string(),
		subtitle: z.string(),
		illustration: z.string(),
		shortDescription: z.string(),
		description: z.string(),
		arguments: z.array(z.string()),
	}),
});

/**
 * Enjeux
 */
const accessibilityKeyFiguresCollection = defineCollection({
	loader: file("./src/content/enjeux/chiffres-cles.yaml"),
	schema: z.object({
		value: z.string(),
		text: z.string(),
		source: z.string(),
	}),
});

/**
 * Expertise
 */
const expertiseArgumentsCollection = defineCollection({
	loader: file("./src/content/expertise/arguments-cles.yaml"),
	schema: z.object({
		icon: z.string(),
		title: z.string(),
		text: z.string(),
	}),
});

/**
 * Livre blanc
 */
const guideBookChaptersCollection = defineCollection({
	loader: file("./src/content/guide-gratuit/chapitres.yaml"),
	schema: z.object({
		title: z.string(),
		illustration: z.string(),
		description: z.string(),
		items: z.array(z.string()),
	}),
});

/**
 * Audits
 */
const auditsCollection = defineCollection({
	loader: glob({ pattern: "*.md*", base: "./src/content/audits" }),
	schema: orderedCollectionSchema.extend({
		title: z.string(),
		description: z.string(),
		compliance: z.boolean(),
		arguments: z.array(z.string()),
	}),
});

const auditsMethodCollection = defineCollection({
	loader: file("./src/content/audits/audit-methode.yaml"),
	schema: z.object({
		title: z.string(),
		text: z.string(),
	}),
});

export const collections = {
	articles: articlesCollection,
	trainings: trainingsCollection,
	trainingMethods: trainingMethodsCollection,
	trainingWithFrontguys: trainingWithFrontguysCollection,
	businessCases: businessCasesCollection,
	services: servicesCollection,
	expertiseArguments: expertiseArgumentsCollection,
	accessibilityKeyFigures: accessibilityKeyFiguresCollection,
	guideBookChapters: guideBookChaptersCollection,
	audits: auditsCollection,
	auditsMethod: auditsMethodCollection,
};
