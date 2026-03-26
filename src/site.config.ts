import type { FunctionComponent } from "react";
import LinkedInIcon from "./assets/icons/linkedin.svg?react";
import YoutubeIcon from "./assets/icons/youtube.svg?react";

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

export const siteName = "Frontguys";
export const siteDescription =
	"Conseil, design et développement front pour accélérer votre transformation digitale.";

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
			description: "Frontguys réunit des experts stratégiques, design et développement front pour résoudre ce qui freine vraiment vos équipes.",
		},
		header: {
			title: "Nous clarifions vos objectifs,\nfluidifions vos organisations,\nrenforçons vos produits.",
			surtitle: "Conseil & accompagnement",
			subtitle:
				"Résolvez ce qui freine vraiment vos équipes. Nous réunissons stratégie, design et développement front pour accélérer votre cadrage, votre alignement et votre industrialisation.",
			illustration: "HandHero",
		},
	},
	expertise: {
		path: "/expertise",
		label: "Expertises",
		header: {
			title: "Nous intervenons sur quatre leviers\npour accélérer vos équipes.",
			surtitle: "Nos expertises",
			subtitle:
				"Produit, collaboration, design system, transformation. Toujours avec des profils seniors. Toujours avec un impact mesurable.",
			illustration: "PencilHero",
		},
	},
	businessCases: {
		path: "/cas-clients",
		label: "Cas clients",
		header: {
			title: "Ce que nous faisons ensemble",
			surtitle: "Cas & preuves",
			subtitle:
				"Des projets ambitieux, des équipes exigeantes, des résultats mesurables. Découvrez nos dernières collaborations.",
			illustration: "illustration-design",
		},
	},
	contact: {
		path: "/contact",
		label: "Contactez-nous",
		header: {
			title: "Parlons de votre projet",
			surtitle: "Contactez-nous",
			subtitle: "Un premier échange gratuit pour identifier vos enjeux et vous orienter.",
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
	whyFrontguys: {
		path: "/pourquoi-frontguys",
		label: "Pourquoi Frontguys",
		header: {
			title: "Nous apportons clarté, confiance,\nefficacité et impact.",
			surtitle: "Pourquoi Frontguys",
			subtitle:
				"Renforcez la maturité de vos équipes. Nous réunissons stratégie, design et développement pour industrialiser la cohérence de vos interfaces.",
			illustration: "ScreenHero",
		},
	},
	convictions: {
		path: "/nos-convictions",
		label: "Nos convictions",
		header: {
			title: "Ce en quoi nous croyons — et pourquoi cela change vos projets.",
			surtitle: "Nos convictions",
			subtitle:
				"Ces convictions guident chaque arbitrage de nos missions. Du cadrage initial à la dernière livraison.",
		},
	},
	methods: {
		path: "/nos-methodes",
		label: "Nos méthodes",
		header: {
			title: "Nous pilotons par la valeur, pas par l'activité.",
			surtitle: "Nos méthodes",
			subtitle:
				"Chaque mission démarre par un objectif SMART défini ensemble. Vous voyez ce qui est produit, pas seulement ce qui est livré.",
			illustration: "ScreenHero",
		},
	},
	results: {
		path: "/nos-resultats",
		label: "Nos résultats",
		header: {
			title: "Des résultats concrets, pas seulement des convictions.",
			surtitle: "Cas & preuves",
			subtitle:
				"Chaque mission produit des livrables mesurables. Découvrez nos collaborations et leurs résultats.",
		},
	},
	resources: {
		path: "/ressources",
		label: "Ressources",
		header: {
			title: "Nos ressources pour accélérer\nvotre transformation",
			subtitle:
				"Articles, guides et outils pour vos équipes.",
		},
	},
	formations: {
		path: "/formations",
		label: "Formations",
		header: {
			title: "Nous accompagnons votre montée en compétence",
			surtitle: "Formations",
			subtitle:
				"Accélérez votre montée en compétence avec notre organisme certifié Qualiopi. Bénéficiez d'un accompagnement sur mesure, pensé pour s'intégrer naturellement à vos process de production, vos outils et vos contextes métiers.",
			illustration: "PencilHero",
		},
	},
	expertiseProduitsNumeriques: {
		path: "/expertise/produits-numeriques",
		label: "Produits numériques performants",
		header: {
			title: "Aligner besoins utilisateurs, stratégie d'entreprise et impact mesurable.",
			surtitle: "Expertise — Produits numériques",
			subtitle:
				"Nous intervenons sur les produits numériques qui stagnent, sous-performent ou peinent à trouver leur marché. Cadrage, conception, mise en qualité, amélioration continue.",
			illustration: "PencilHero",
			backLink: {
				label: "Nos expertises",
				href: "/expertise",
			},
		},
	},
	expertiseProcessDesignDev: {
		path: "/expertise/process-design-dev",
		label: "Process de collaboration design/dev",
		header: {
			title: "La qualité et la vitesse se jouent dans la collaboration entre design et développement.",
			surtitle: "Expertise — Process design/dev",
			subtitle:
				"Nous identifions et éliminons les frictions entre vos équipes design et développement. Rituels, flux de handoff, standards partagés, gouvernance.",
			illustration: "PencilHero",
			backLink: {
				label: "Nos expertises",
				href: "/expertise",
			},
		},
	},
	expertiseDesignSystems: {
		path: "/expertise/design-systems",
		label: "Design systems modulaires",
		header: {
			title: "Un design system modulaire et accessible qui accélère vraiment la production.",
			surtitle: "Expertise — Design systems",
			subtitle:
				"Nous construisons, consolidons ou relançons votre design system — avec une obsession : qu'il soit réellement adopté par vos équipes.",
			illustration: "PencilHero",
			backLink: {
				label: "Nos expertises",
				href: "/expertise",
			},
		},
	},
	expertiseTransformation: {
		path: "/expertise/transformation",
		label: "Transformation & accompagnement",
		header: {
			title: "Renforcer la collaboration humaine pour rendre les transformations durables.",
			surtitle: "Expertise — Transformation",
			subtitle:
				"Les outils ne suffisent pas. Nous accompagnons les équipes dans leur montée en compétences, leurs rituels et leur culture produit.",
			illustration: "PencilHero",
			backLink: {
				label: "Nos expertises",
				href: "/expertise",
			},
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
	pages.whyFrontguys,
	pages.expertise,
	pages.results,
	pages.resources,
	pages.formations,
	pages.contact,
];

export const footerLinks: MenuLink[] = [
	pages.whyFrontguys,
	pages.expertise,
	pages.results,
	pages.resources,
	pages.formations,
	{ path: "https://accessibilite.frontguys.fr", label: "Découvrez notre offre Accessibilité", external: true },
	pages.contact,
];

export const footerLegalLinks: MenuLink[] = [
	pages.legalNotice,
	pages.privacyPolicy,
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
