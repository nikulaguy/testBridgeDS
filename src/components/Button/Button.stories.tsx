import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import SearchIcon from "../../assets/icons/search.svg?react";

const figma = (nodeId: string, file = "CxcxtE8sbs8ugVSkfZs1Wp") => ({
	parameters: {
		design: {
			type: "figma",
			url: `https://www.figma.com/file/${file}/Foundation---Web-Components?node-id=${nodeId}`,
		},
	},
});

const meta = {
	component: Button,
	args: {
		children: "Label",
	},
	// argTypes: {
	//   variant: { control: { type: "radio" }, options: ["primary", "secondary", "ghost"] },
	// },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
	},
	...figma("2814-1613"),
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
	...figma("2814-1644"),
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
	},
	...figma("2814-1671"),
};

export const IconSquared: Story = {
	args: {
		variant: "secondary",
		isSquared: true,
		children: <SearchIcon />,
	},
};

export const IconAndText: Story = {
	args: {
		children: [<SearchIcon key="icon" />, "Label"],
	},
	...figma("2814-1839"),
};

export const TextAndIcon: Story = {
	args: {
		children: ["Label", <SearchIcon key="icon" />],
	},
	...figma("2814-1846"),
};

/**
 * Use polymorphism to render button as a link, all link props may be defined
 */
export const CustomAnchor: Story = {
	args: {
		variant: "ghost",
		as: "a",
		size: "small",
		href: "#",
		target: "_blank",
		children: "Link 🔗‍️",
	},
};

/**
 * Use polymorphism to render button as a link, all link props may be defined
 */
export const FullWidth: Story = {
	args: {
		variant: "secondary",
		isFullWidth: true,
		children: "Super extra wide button‍️",
	},
};
