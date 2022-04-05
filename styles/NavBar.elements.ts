import styled from "styled-components";

export const Box = styled.nav`
	width: 5rem;
	background: ${({ theme: { colors } }) => colors.dark[300]};
	height: 100%;
	display: flex;
	padding: 1rem 0;
	flex-direction: column;
	flex: none;
	justify-content: space-between;
	position: relative;
	align-items: center;
	border-right: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
	@media screen and (max-width: 800px) {
		width: 3.5rem;

		.avatar {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		height: 4rem;
		position: sticky;
		flex-direction: row;
		justify-content: center;
		border-top: 0.1rem solid ${({ theme: { colors } }) => colors.dark[500]};
		border-right: none;
		padding: 0;
		gap: 3rem;
		bottom: 0;
		order: 3;
		.avatar {
			display: none;
		}
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	@media screen and (max-width: 600px) {
		flex-direction: row;
		gap: 3rem;
	}
`;

export const ListItem = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: none;
	transition: 0.3s;
	&:hover {
		transform: scale(1.3);
	}
	&:active {
		transform: scale(1);
	}

	stroke: ${({ theme: { colors } }) => colors.white[100]};

	@media screen and (max-width: 800px) {
		.icon {
			width: 0.8rem;
			height: 0.8rem;
		}
	}
`;
