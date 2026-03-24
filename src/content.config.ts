import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const orderedCollectionSchema = z.object({
	order: z.number(),
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

export const collections = {
	businessCases: businessCasesCollection,
};
