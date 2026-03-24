import {
	externalLinkLabel,
	type Page,
	pageTitleSeparator,
	siteDescription,
	siteName,
} from "../site.config";

/**
 * @name kebabify
 * @description Convert string to kebab case
 * @param {String} string The string to convert
 * @return {String} The kebab cased string
 * @see {@link https://www.geeksforgeeks.org/how-to-convert-a-string-into-kebab-case-using-javascript/|Source}
 */
export const kebabify = (string: string): string => {
	return string
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, "-")
		.toLowerCase();
};

/**
 * @name getAriaCurrentValue
 * @description Get the aria-current value for a given path
 * @param url The URL to check
 * @param path The path to check
 * @returns The aria-current value
 */
export const getAriaCurrentValue = (url: URL, path: string) => {
	return url.pathname.includes(path) ? "page" : null;
};

/**
 * @name getPageTitle
 * @description Get the page title by combining the title and the site name
 * @param page - The page data
 * @param frontmatter - The page frontmatter
 * @returns The full page title with the site name
 * @example "Accueil" => "Accueil | Frontguys - Accessibilité numérique"
 */
export const getPageTitle = (page: Page, frontmatter?: Record<string, any>) => {
	const pageTitle = page.meta?.title ?? page.label ?? frontmatter?.title;

	return pageTitle ? [pageTitle, siteName].join(pageTitleSeparator) : siteName;
};

/**
 * @name getPageDescription
 * @description Get the page description or fallback to the default site description
 * @param page - The page data
 * @param frontmatter - The page frontmatter
 * @returns The page description
 */
export const getPageDescription = (
	page: Page,
	frontmatter?: Record<string, any>,
) => {
	const pageDescription =
		page.meta?.description ?? page.header.subtitle ?? frontmatter?.description;

	return pageDescription ?? siteDescription;
};

/**
 * @name formatPrice
 * @description Format a price value to a string
 * @param price - The price to format
 * @returns The formatted price value
 */
export const formatPrice = (price: number) => {
	return price.toLocaleString("fr-FR", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
};

/**
 * @name getExternalLinkLabel
 * @description Get the title for an external link
 * @param label - The label of the link
 * @returns The label for the external link
 */
export const getExternalLinkLabel = (label: string) => {
	if (label.includes(externalLinkLabel)) {
		return label;
	}

	return `${label}${externalLinkLabel}`;
};
