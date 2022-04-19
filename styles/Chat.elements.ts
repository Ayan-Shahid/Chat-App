import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;
	@media screen and (min-width: 800px) {
		gap: 3rem;
	}
	@media screen and (max-width: 600px) {
		overflow: scroll;
		gap: 1rem;
	}
`;

export const Messages = styled.article`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	overflow: scroll;
	scrollbar-width: none;
`;

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1rem;
	.message-input {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	}
	.send-button .send-icon,
	.mike-button .mike-icon {
		width: 1rem;
		height: 1rem;
	}

	@media screen and (min-width: 800px) {
		.message-input {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
		}
		.send-button .send-icon,
		.mike-button .mike-icon {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;
