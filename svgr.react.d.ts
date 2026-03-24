// see https://doray.me/articles/use-svgs-as-react-components-in-astro-MNUvh
declare module "*.svg?react" {
	import type { FunctionComponent, ComponentProps } from "react";

	const ReactComponent: FunctionComponent<
		ComponentProps<"svg"> & { title?: string }
	>;

	export default ReactComponent;
}
