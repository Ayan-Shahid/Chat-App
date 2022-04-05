import React, { FunctionComponent } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

type Color = {
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
};

type Size = {
	"3xl": string;
	"2xl": string;
	xl: string;
	lg: string;
	base: string;
	sm: string;
	xs: string;
	"2xs": string;
	"3xs": string;
};

export interface ITheme {
	colors: {
		primary: Color;
		info: Color;
		success: Color;
		error: Color;
		warning: Color;
		dark: Color;
		white: Color;
	};
	fontSizes: Size;
	borderRadius: Size;
}

const theme: ITheme = {
	colors: {
		primary: {
			100: "#6400FF",
			200: "#8333FF",
			300: "#A266FF",
			400: "#C199FF",
			500: "#E0CCFF",
		},
		info: {
			100: "#0064FF",
			200: "#3383FF",
			300: "#66A2FF",
			400: "#99C1FF",
			500: "#CCE0FF",
		},
		success: {
			100: "#00FF64",
			200: "#1AE569",
			300: "#33CB6F",
			400: "#4CB274",
			500: "#66987A",
		},
		error: {
			100: "#FF0064",
			200: "#E51A6A",
			300: "#CB336F",
			400: "#B24C74",
			500: "#98667A",
		},
		warning: {
			100: "#FFFF00",
			200: "#E6E51A",
			300: "#CBCB33",
			400: "#B2B24C",
			500: "#989866",
		},
		dark: {
			100: "#1a1a1a",
			200: "#1f1f1f",
			300: "#2a2a2a",
			400: "#2f2f2f",
			500: "#3a3a3a",
		},
		white: {
			100: "#ffffff",
			200: "#E6E6E6",
			300: "#CCCCCC",
			400: "#B3B3B3",
			500: "#999999",
		},
	},
	fontSizes: {
		"3xl": "1.814rem",
		"2xl": "1.512rem",
		xl: "1.26rem",
		lg: "1.05rem",
		base: "0.875rem",
		sm: "0.729rem",
		xs: "0.608rem",
		"2xs": "0.506rem",
		"3xs": "0.422rem",
	},
	borderRadius: {
		"3xl": "1.814rem",
		"2xl": "1.512rem",
		xl: "1.26rem",
		lg: "1.05rem",
		base: "0.875rem",
		sm: "0.729rem",
		xs: "0.608rem",
		"2xs": "0.506rem",
		"3xs": "0.422rem",
	},
};

const Theme: FunctionComponent = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
