import { cva, type VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import { externalLinkLabel } from "../../site.config";
import { getExternalLinkLabel } from "../../utils/string.utils";
import {
	button,
	full_width,
	ghost,
	primary,
	secondary,
	small,
	squared,
} from "./Button.module.css";

const buttonStyle = cva(button, {
	variants: {
		variant: { primary, secondary, ghost },
		size: { small },
		isFullWidth: { true: full_width },
		isSquared: { true: squared },
	},
});

// Polymorphic props restricted to only <button> / <a>
type ButtonTag = "button" | "a";
type IntrinsicProps<Tag extends ButtonTag> = JSX.IntrinsicElements[Tag];
type ButtonProps = VariantProps<typeof buttonStyle>;

/**
 * Use polymorphism: native buttons by default but may be used as link with html anchor
 */
export const Button = <Tag extends ButtonTag>({
	as,
	className,
	variant = "primary",
	size,
	isFullWidth = false,
	isSquared = false,
	title,
	children,
	...props
}: ButtonProps & { as?: Tag } & IntrinsicProps<Tag>) => {
	const TagComponent = as ?? "button";

	const isExternal =
		as === "a" &&
		((props as IntrinsicProps<"a">).href?.includes("https://") ||
			(props as IntrinsicProps<"a">).target === "_blank");

	if (!title && isExternal) {
		throw new Error("Title attribute is required for external links");
	}

	const calculatedTitle = isExternal
		? getExternalLinkLabel(title ?? "")
		: undefined;

	return (
		<TagComponent
			{...props}
			title={calculatedTitle}
			className={buttonStyle({
				variant,
				size,
				isFullWidth,
				isSquared,
				className,
			})}
		>
			{children}
			{isExternal && (
				<span className="u-visually-hidden">{externalLinkLabel}</span>
			)}
		</TagComponent>
	);
};
