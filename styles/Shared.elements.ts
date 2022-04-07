import styled from "styled-components";

interface IText {
	family?: string;
	color?: string;
	weight?: number;
	size?: string;
	wordBreak?: "break-all" | "keep-all" | "normal";
	margin?: string;
}

export const Text = styled.p<IText>`
	font-family: ${({ family }) => family};
	font-weight: ${({ weight }) => weight};
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};
	margin: ${({ margin }) => margin};
	word-break: ${({ wordBreak }) => wordBreak};
`;

interface IDirection {
	gap?: string;
	align?: "flex-start" | "flex-end" | "center";
	justify?: "center" | "space-between" | "flex-end" | "flex-start";
	margin?: string;
	padding?: string;
	width?: string;
	height?: string;
	background?: string;
}

export const Row = styled.article<IDirection>`
	display: flex;
	align-items: ${({ align }) => align};
	justify-content: ${({ justify }) => justify};
	gap: ${({ gap }) => gap};
	margin: ${({ margin }) => margin};
	padding: ${({ padding }) => padding};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
`;

export const Column = styled(Row)`
	flex-direction: column;
`;

interface IInput {
	width?: string;
	fontSize?: string;
}

export const Input = styled.input<IInput>`
	padding: 1.2rem;
	width: ${({ width }) => width};
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.base};
	background: ${({ theme: { colors } }) => colors.dark[200]};
	color: ${({ theme: { colors } }) => colors.white[100]};
	font-size: ${({ fontSize }) => fontSize};

	border: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
	transition: 0.3s;

	&:hover {
		border-color: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.dark[300]};
	}
	&:focus {
		border-color: ${({ theme: { colors } }) => colors.primary[300]};

		outline: 0.2rem solid;
		outline-color: ${({ theme: { colors } }) =>
			colors.primary[300].concat("99")};
	}
`;

export const InputInfo = styled(Input)`
	&:hover {
		border-color: ${({ theme: { colors } }) => colors.info[100]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.dark[300]};
	}
	&:focus {
		border-color: ${({ theme: { colors } }) => colors.info[100]};

		outline: 0.2rem solid;
		outline-color: ${({ theme: { colors } }) => colors.info[100].concat("66")};
	}
`;

export const InputSecondary = styled(Input)`
	&:hover {
		border-color: ${({ theme: { colors } }) => colors.white[500]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.dark[300]};
	}
	&:focus {
		border-color: ${({ theme: { colors } }) => colors.white[500]};

		outline: 0.2rem solid;
		outline-color: ${({ theme: { colors } }) => colors.white[500].concat("55")};
	}
`;

interface IButton {
	width?: string;
	borderRadius?: string;
}

export const ButtonPrimary = styled.button<IButton>`
	padding: 1rem;
	display: flex;
	gap: 0.5rem;
	width: ${({ width }) => width};
	border-radius: ${({ borderRadius }) => borderRadius};
	align-items: center;
	cursor: pointer;
	justify-content: center;
	color: ${({ theme: { colors } }) => colors.white[100]};
	transition: 0.3s;
	background: ${({ theme: { colors } }) => colors.primary[100]};
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary[200]};
		stroke: ${({ theme: { colors } }) => colors.primary[300]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.primary[300]};
		stroke: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus {
		stroke: ${({ theme: { colors } }) => colors.primary[400]};

		outline: 0.2rem solid
			${({ theme: { colors } }) => colors.primary[100].concat("77")};
	}
	stroke: ${({ theme: { colors } }) => colors.primary[400]};
`;

interface ISideBar {
	toggle?: string;
}

export const SideBar = styled.nav<ISideBar>`
	width: fit-content;
	flex: none;
	height: 100%;
	padding: 2rem 0;
	gap: 2rem;
	background: ${({ theme: { colors } }) => colors.dark[200]};
	color: ${({ theme: { colors } }) => colors.white[100]};
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		.sidebar-title {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
			margin: 0 1rem;
		}
		.find-people-input-wrapper {
			margin: 0 1rem;
		}
		.find-people-input {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
			padding: 1rem;
		}
		padding: 1rem 0;
		gap: 1.5rem;
	}
	@media screen and (max-width: 600px) {
		z-index: ${({ toggle }) => (toggle === "true" ? 5 : -1)};
		position: absolute;
		width: 100%;
		transition: 0.3s;
		opacity: ${({ toggle }) => (toggle === "true" ? 1 : 0)};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		height: 80%;
	}
`;

export const SideBarList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: scroll;
	position: relative;
	scrollbar-width: none;
`;

export const Layout = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	background: ${({ theme: { colors } }) => colors.dark[100]};
	.mobile-header {
		padding: 1rem 1rem 0 1rem;
		height: 4rem;
		position: sticky;
		display: none;
		align-items: center;
		z-index: 3;
		top: 0;
		justify-content: flex-end;
	}

	.mobile-header .menu-icon {
		cursor: pointer;
		background: none;
	}

	@media screen and (max-width: 800px) {
		.settings-heading {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
		}
		.settings-title {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
		}
		.settings-message {
			font-size: ${({ theme: { fontSizes } }) => fontSizes["2xs"]};
		}
		.settings-input {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
			padding: 1rem;
		}
		.settings-button {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
			padding: 0.8rem;
		}

		.avatar {
			width: 2rem;
			height: 2rem;
		}
	}
	@media screen and (max-width: 600px) {
		flex-direction: column;
		.mobile-header {
			display: flex;
			justify-content: space-between;
		}
	}
`;

export const Box = styled(Row)`
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background: ${({ background }) => background};
`;

export const ButtonOutline = styled(ButtonPrimary)`
	background: none;
	border: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
	&:hover {
		background: ${({ theme: { colors } }) => colors.dark[200]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.dark[300]};
	}
	&:focus {
		background: ${({ theme: { colors } }) => colors.dark[300]};
		outline: 0.2rem solid
			${({ theme: { colors } }) => colors.dark[500].concat("55")};
	}
`;

export const ButtonPrimaryDanger = styled(ButtonPrimary)`
	background: ${({ theme: { colors } }) => colors.error[100]};
	&:hover {
		background: ${({ theme: { colors } }) => colors.error[200]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.error[300]};
	}
	&:focus {
		outline: 0.2rem solid
			${({ theme: { colors } }) => colors.error[100].concat("77")};
	}
`;

export const ButtonPrimaryInfo = styled(ButtonPrimary)`
	background: ${({ theme: { colors } }) => colors.info[100]};
	&:hover {
		background: ${({ theme: { colors } }) => colors.info[200]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.info[300]};
	}
	&:focus {
		outline: 0.2rem solid
			${({ theme: { colors } }) => colors.info[100].concat("77")};
	}
`;

export const ButtonPrimarySuccess = styled(ButtonPrimary)`
	background: ${({ theme: { colors } }) => colors.success[300]};
	&:hover {
		background: ${({ theme: { colors } }) => colors.success[400]};
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.success[300]};
	}
	&:focus {
		outline: 0.2rem solid
			${({ theme: { colors } }) => colors.success[100].concat("77")};
	}
`;

interface ISpinner {
	radius?: string;
	size?: string;
	color?: string;
}

export const Spinner = styled.article<ISpinner>`
	width: ${({ radius }) => radius};
	height: ${({ radius }) => radius};
	flex: none;
	background: none;
	border-radius: 100%;
	border: ${({ size }) => size} solid ${({ color }) => `${color}66`};
	border-top-color: ${({ color }) => color};
	animation: spin 1s linear infinite;
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`;
