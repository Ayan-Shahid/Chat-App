import styled from "styled-components";

export const UserBubble = styled.article`
	background: ${({ theme: { colors } }) => colors.info[100]};
	color: ${({ theme: { colors } }) => colors.white[100]};
	padding: 1.5rem;
	max-width: 30rem;
	font-weight: 300;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius["3xl"]};
	position: relative;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};

	@media screen and (min-width: 800px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
	}

	&::before {
		content: "";
		position: absolute;
		background: inherit;

		height: 2rem;
		width: 2.5rem;
		right: -1.5rem;
		bottom: 0;
		border-bottom-left-radius: 1.5rem;
	}
	&::after {
		content: "";
		position: absolute;
		right: -2.5rem;
		width: 2.5rem;
		height: 2rem;
		bottom: 0rem;
		background: ${({ theme: { colors } }) => colors.dark[100]};

		border-bottom-left-radius: 1.5rem;
	}
`;

export const FriendBubble = styled(UserBubble)`
	background: ${({ theme: { colors } }) => colors.dark[200]};
	border: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
	font-weight: 100;

	&::before {
		content: "";
		position: absolute;
		background: inherit;

		height: 2rem;
		width: 2.5rem;
		left: -1.5rem;
		bottom: 0;

		border-bottom-right-radius: 1.5rem;
		border-bottom: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
	}
	&::after {
		content: "";
		position: absolute;

		left: -2.55rem;
		width: 2.5rem;
		height: 2rem;
		border: 0;
		bottom: 0.1rem;
		border-right: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};

		background: ${({ theme: { colors } }) => colors.dark[100]};

		border-bottom-right-radius: 1.5rem;
	}
`;

export const Box = styled.article`
	display: flex;
	gap: 1rem;
	@media screen and (min-width: 800px) {
		.avatar {
			width: 2rem;
			height: 2rem;
		}
	}
`;

export const UserBox = styled(Box)`
	justify-content: flex-end;
`;
