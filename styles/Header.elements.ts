import styled from "styled-components";

export const Box = styled.header`
	width: 100%;
	display: flex;
	gap: 1rem;
	flex: none;
	align-items: center;
	@media screen and (min-width: 800px) {
		gap: 2rem;
		.friend-name {
			font-size: ${({ theme: { fontSizes } }) => fontSizes["3xl"]};
		}
		.avatar,
		.avatar {
			width: 4rem;
			height: 4rem;
		}
	}
`;
