import styled from "styled-components";
import { Text } from "./Shared.elements";

export const Box = styled.li`
	display: flex;
	cursor: pointer;
	gap: 1rem;
	align-items: center;

	width: 100%;
	padding: 1rem 2rem;
	position: relative;
	color: ${({ theme: { colors } }) => colors.white[100]};

	transition: 0.3s;
	background: none;
	&:hover {
		background: ${({ theme: { colors } }) => colors.dark[100]};
	}
	&::before {
		content: "";
		width: 0;
		height: 100%;
		position: absolute;
		left: 0;
		transition: 0.3s;
		background: ${({ theme: { colors } }) => colors.primary[200]};
	}
	&:focus::before {
		width: 0.3rem;
	}
	&:active {
		background: ${({ theme: { colors } }) => colors.dark[500]};
	}
	&:focus:not(:active) {
		background: linear-gradient(
			90deg,
			rgba(78, 50, 187, 0.4) 0%,
			rgba(42, 42, 42, 1) 26%
		);
	}

	p {
		user-select: none;
		align-self: flex-start;
	}
	@media screen and (max-width: 800px) {
		.friend-name {
			font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
		}
		padding: 0.5rem 1rem;
		gap: 0.5rem;

		.avatar {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;

export const Message = styled(Text)`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 5rem;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	font-weight: 100;
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes["2xs"]};
	}
`;

export const Time = styled(Text)`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	font-weight: 700;
	flex: none;
	color: ${({ theme: { colors } }) => colors.white[500]};
	@media screen and (max-width: 800px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes["2xs"]};
	}
`;
