import type { FunctionComponent } from "react";
import LinkedInIcon from "./assets/icons/linkedin.svg?react";
import YoutubeIcon from "./assets/icons/youtube.svg?react";
import imgHeroSectionTrainings from "./assets/img/groupe-frontguys-2.jpg";
import imgHeroSectionExpertise from "./assets/img/groupe-frontguys-4.jpg";
import imgHeroSectionChallenges from "./assets/img/groupe-frontguys-5.jpg";
import imgHeroSectionHome from "./assets/img/groupe-frontguys-6.jpg";
import imgHeroSectionOffer from "./assets/img/groupe-frontguys-9.jpg";

export type Page = {
	/**
	 * @property {string} path
	 * @description Path to the page or anchor to the section
	 */
	path: string;
	/**
	 * @property {string} label
	 * @description Label to display in the menu
	 */
	label: string;
	/**
	 * @property {object} meta (optional)
	 * @description Meta data of the page used in the `<head>` tag.
	 * @property {string} title - Title, used as `<title>` tag. The `label` property is used as fallback
	 * @property {string} description - Description, used as `<meta name="description">` tag. The `header.subtitle` property is used as fallback
	 */
	meta?: {
		title?: string;
		description?: string;
	};
	/**
	 * @property {object} header
	 * @description Page data to display in the `<header>` section tag
	 * @property {string} title - Title, usually lonnger than the label
	 * @property {string} surtitle - Surtitle, displayed above the title
	 * @property {string} subtitle - Subtitle, displayed below the title
	 * @property {string} illustration - Illustration used in the Header `<MediaObject>` component
	 * @property {ImageMetadata} img - Image used in the Header `<MediaObject>` component
	 * @property {object} backLink - Back link to add to the header
	 */
	header: {
		title: string;
		surtitle?: string;
		subtitle?: string;
		illustration?: string;
		img?: ImageMetadata;
		backLink?: {
			label: string;
			href: string;
		};
	};
	/**
	 * @property {MenuLink[]} skipLinks
	 * @description Extra skip links to add to the default ones
	 */
	skipLinks?: MenuLink[];
};

export type MenuLink = Pick<Page, "path" | "label"> & {
	external?: boolean;
};

type SocialLink = Pick<Page, "path" | "label"> & {
	icon: FunctionComponent;
};

export const siteName = "Frontguys - Accessibilité numérique";
export const siteDescription =
	"Expertise, conseil et accompagnement pour créer des expériences numériques accessibles.";

export const guideBookPath =
	"/pdf/guide-gratuit-accessibilite-numerique-frontguys.pdf";

export const contactExpertPath =
	"https://calendly.com/hamza-frontguys/votre-besoin";

export const pageTitleSeparator = " | ";
const linkPartSeparator = " - ";
export const homePageLabel = `${linkPartSeparator}Page d'accueil`;
export const externalLinkLabel = `${linkPartSeparator}Nouvelle fenêtre`;

export const pages: Record<string, Page> = {
	contentAnchor: {
		path: "#main",
		label: "Aller au contenu",
	} as Page,
	navigationAnchor: {
		path: "#site-nav",
		label: "Aller au menu principal",
	} as Page,
	home: {
		path: "/",
		label: "Accueil",
		meta: {
			description: siteDescription,
		},
		header: {
			title: "Nous intégrons l'accessibilité dans votre quotidien",
			surtitle: "Conseil & formation",
			subtitle:
				"Profitez de nos méthodes et ressources pour concevoir des expériences utilisables par tous et toutes.",
			img: imgHeroSectionHome,
		},
	},
	challenges: {
		path: "/enjeux",
		label: "Enjeux",
		header: {
			title: "Nous donnons du sens grâce à l'accessibilité",
			surtitle: "Enjeux de l’accessibilité",
			subtitle:
				"Améliorez l'expérience de tous vos utilisateurs, sans exception.",
			img: imgHeroSectionChallenges,
		},
	},
	expertise: {
		path: "/expertise",
		label: "Expertise",
		header: {
			title: "Nous structurons votre démarche d'accessibilité numérique",
			surtitle: "Expertise",
			subtitle:
				"Sécurisez la conformité de vos produits. Nous vous accompagnons à chaque étape stratégique.",
			img: imgHeroSectionExpertise,
		},
	},
	offer: {
		path: "/offre",
		label: "Offre",
		header: {
			title: "Nous calibrons l'accompagnement idéal",
			surtitle: "Offre",
			subtitle:
				"Avancez à votre rythme. Quel que soit votre niveau de maturité, accédez à des offres concrètes ou bâtissons ensemble un programme 100 % sur mesure.",
			img: imgHeroSectionOffer,
		},
	},
	audits: {
		path: "/offre/audits",
		label: "Nos audits d'accessibilité",
		header: {
			title: "Nos audits d’accessibilité et de conformité",
			subtitle:
				"Mettez vos services en conformité avec le RGAA en les auditant et en créant une stratégie de remédiation réaliste et efficace.",
			illustration: "illustration-developpement",
			backLink: {
				label: "Notre offre",
				href: "/offre",
			},
		},
	},
	trainings: {
		path: "/formations",
		label: "Formations",
		header: {
			title: "Nous accompagnons votre montée en compétence",
			surtitle: "Formations",
			subtitle:
				"Accélérez votre montée en compétence avec notre organisme certifié Qualiopi. Bénéficiez d'un accompagnement sur mesure, pensé pour s'intégrer naturellement à vos process de production, vos outils et vos contextes métiers.",
			img: imgHeroSectionTrainings,
		},
	},
	trainingCustom: {
		path: "/formations/formation-sur-mesure",
		label: "Formation sur-mesure",
		header: {
			title: "Formation sur-mesure adaptée à votre organisation",
			subtitle:
				"Chez vous ou dans nos locaux, nous créons avec vous un cursus unique qui s'intègre parfaitement à vos flux de travail et à vos contraintes techniques.",
		},
	},
	businessCases: {
		path: "/cas-clients",
		label: "Cas clients",
		header: {
			title: "Nous rendons l'accessibilité opérationnelle",
			surtitle: "Cas clients",
			subtitle:
				"Visualisez l'impact de notre accompagnement. De l'audit stratégique à la mise en conformité technique, découvrez comment nous apportons des réponses précises aux problématiques de nos clients.",
			illustration: "illustration-design",
		},
	},
	contact: {
		path: "/contact",
		label: "Contactez-nous",
		header: {
			title: "Envoyez-nous un message",
			surtitle: "Contactez-nous",
			subtitle: "Nous diagnostiquons gratuitement vos enjeux d'accessibilité.",
		},
		skipLinks: [
			{
				path: "#contact-form",
				label: "Aller au formulaire de contact",
			},
		],
	},
	contactFormSent: {
		path: "/contact-form-sent",
		label: "Contact",
		header: {
			title: "Confirmation d'envoi",
			surtitle: "Contactez-nous",
		},
	},
	guideBook: {
		path: "/guide-gratuit-accessibilite-numerique",
		label: "Guide gratuit de l'accessibilité numérique",
		header: {
			title: "Nous transformons l'accessibilité en levier de performance",
			surtitle: "Guide de l’accessibilité numérique",
			subtitle:
				"Faites de la mise en conformité une opportunité. Téléchargez notre guide pour découvrir comment transformer vos obligations réglementaires en véritables avantages concurrentiels et structurer une démarche durable.",
		},
	},
	articles: {
		path: "/articles",
		label: "Articles",
	} as Page,
	faq: {
		path: "/faq",
		label: "Foire aux questions",
		header: {
			title: "Nous répondons à vos questions",
			surtitle: "Foire aux questions",
			subtitle: "Retrouvez les réponses à vos questions fréquentes.",
		},
	},
	legalNotice: {
		path: "/mentions-legales",
		label: "Mentions légales",
		header: {
			title: "Mentions légales",
		},
	},
	privacyPolicy: {
		path: "/politique-confidentialite",
		label: "Politique de confidentialité",
		header: {
			title: "Politique de confidentialité",
		},
	},
	accessibilityStatement: {
		path: "/declaration-accessibilite",
		label: "Déclaration d'accessibilité",
		meta: {
			description:
				"Déclaration d'accessibilité du site obtenue suite à l'audit de conformité.",
		},
		header: {
			title: "Déclaration d'accessibilité",
		},
	},
	siteMap: {
		path: "/plan-site",
		label: "Plan du site",
		header: {
			title: "Plan du site",
		},
	},
	styleguide: {
		path: "/styleguide",
		label: "Styleguide",
		header: {
			title: "Styleguide",
		},
	},
	notFound: {
		path: "/404",
		label: "Erreur 404",
		header: {
			title: "Page non trouvée",
			surtitle: "Erreur",
			subtitle:
				"La page que vous cherchez n'existe pas. Cela peut être dû à une erreur dans l'URL ou à une page qui a été supprimée.",
			illustration: "illustration-pain-point",
		},
	},
} as const;

export const skipLinks: MenuLink[] = [
	pages.contentAnchor,
	pages.navigationAnchor,
];

export const headerLinks: MenuLink[] = [
	pages.challenges,
	pages.expertise,
	pages.offer,
	pages.trainings,
	pages.businessCases,
	pages.contact,
];

export const footerLinks: MenuLink[] = [pages.audits, pages.guideBook];

export const footerLegalLinks: MenuLink[] = [
	pages.siteMap,
	pages.legalNotice,
	pages.privacyPolicy,
	pages.accessibilityStatement,
];

export const socialLinks: SocialLink[] = [
	{
		path: "https://www.linkedin.com/company/front-guys",
		icon: LinkedInIcon,
		label: "LinkedIn",
	},
	{
		path: "https://www.youtube.com/@frontguys-thedesignopscomp5059",
		icon: YoutubeIcon,
		label: "YouTube",
	},
];

export const siteMap: MenuLink[] = [
	pages.home,
	pages.challenges,
	pages.expertise,
	pages.offer,
	pages.audits,
	pages.trainings,
	pages.businessCases,
	pages.contact,
	pages.guideBook,
	pages.articles,
	pages.accessibilityStatement,
	pages.siteMap,
	pages.legalNotice,
	pages.privacyPolicy,
];
