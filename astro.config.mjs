import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { toString as toHastString } from "hast-util-to-string";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import remarkToc from "remark-toc";
import { visit } from "unist-util-visit";
import svgr from "vite-plugin-svgr";

// exported to be shared with storybook
export const svgrPlugin = svgr({
	include: "**/*.svg?react",
	svgrOptions: {
		plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
		svgoConfig: {
			plugins: [
				"preset-default",
				"removeTitle",
				"removeDesc",
				"removeDoctype",
				"cleanupIds",
			],
		},
	},
});

const createExternalLinkIcon = () => [
	{
		type: "element",
		tagName: "span",
		properties: {
			className: "u-visually-hidden",
		},
		children: [
			{
				type: "text",
				value: "- Nouvelle fenêtre",
			},
		],
	},
	{
		type: "element",
		tagName: "svg",
		properties: {
			xmlns: "http://www.w3.org/2000/svg",
			width: "24",
			height: "24",
			viewBox: "0 0 24 24",
			fill: "none",
			"aria-hidden": "true",
		},
		children: [
			{
				type: "element",
				tagName: "path",
				properties: {
					d: "M6.5198 16.4194L15.139 7.80016L7.05013 7.80017C6.63592 7.80017 6.30021 7.46446 6.30021 7.05025C6.30021 6.63603 6.63592 6.30033 7.05013 6.30033L16.9496 6.30033L17.0263 6.30378C17.4045 6.34215 17.6995 6.6619 17.6995 7.05025L17.6995 16.9497C17.6995 17.364 17.3638 17.6997 16.9496 17.6997C16.5354 17.6997 16.1997 17.364 16.1997 16.9497L16.1997 8.86083L7.58046 17.4801C7.28757 17.773 6.81269 17.773 6.5198 17.4801C6.22691 17.1872 6.22691 16.7123 6.5198 16.4194Z",
					fill: "currentColor",
				},
				children: [],
			},
		],
	},
];

const remarkLangDirective = () => {
	return (tree) => {
		visit(tree, (node) => {
			if (
				node.type !== "textDirective" &&
				node.type !== "leafDirective" &&
				node.type !== "containerDirective"
			) {
				return;
			}

			if (!node.name) return;

			// :en[Texte] -> <i lang="en">Texte</i>
			if (node.name === "en") {
				node.data = node.data || {};
				node.data.hName = "i";
				node.data.hProperties = node.data.hProperties || {};
				node.data.hProperties.lang = "en";
			}
		});
	};
};

// https://astro.build/config
export default defineConfig({
	site: "https://frontguys-prototype.netlify.app",
	integrations: [
		mdx(),
		sitemap({
			filter: (page) =>
				!page.includes("styleguide") && !page.includes("contact-form-sent"),
		}),
		robotsTxt(),
		icon({ iconDir: "src/assets/icons" }),
		react(),
	],
	prefetch: true,
	output: "static",
	vite: {
		build: {
			cssCodeSplit: false,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
@use '${import.meta.dirname}/src/assets/styles/01-utils/_variables.scss' as *;
@use '${import.meta.dirname}/src/assets/styles/01-utils/_mixins.scss' as *;
`,
				},
			},
		},
		plugins: [svgrPlugin],
	},
	image: {
		responsiveStyles: true,
	},
	markdown: {
		remarkPlugins: [
			[remarkToc, { heading: "sommaire", maxDepth: 3 }],
			remarkDirective,
			remarkLangDirective,
		],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: "noopener noreferrer",
					content: createExternalLinkIcon,
					contentProperties: { className: ["a-link__icon"] },
					properties: (element) => ({
						class: ["a-link"],
						title: `${toHastString(element)} - Nouvelle fenêtre`,
					}),
				},
			],
		],
	},
});
