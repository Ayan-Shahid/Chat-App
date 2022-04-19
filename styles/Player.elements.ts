import styled from "styled-components";

export const Box = styled.article`
	display: flex;
	height: fit-content;
	width: fit-content;
	gap: 1rem;
	align-items: center;
`;

export const Input = styled.input`
	appearance: none;
	width: 5rem;
	cursor: pointer;

	height: 0.3rem;
	background: ${({ theme: { colors } }) => colors.dark[500]};
	border-radius: 1rem;
	outline: none; /* Remove outline */
	opacity: 1;
	transition: 0.1s;
	-webkit-transition: 0.1s;

	&::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		width: 0.6rem; /* Set a specific slider handle width */
		height: 0.6rem; /* Slider handle height */
		background: #04aa6d; /* Green background */
		cursor: pointer; /* Cursor on hover */
	}
	&::-webkit-slider-runnable-track {
		height: 0.3rem;
		border-radius: 1rem;
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
	&::-moz-range-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		border-radius: 100%;
		border: none;
		width: 0.6rem; /* Set a specific slider handle width */
		height: 0.6rem; /* Slider handle height */
		background: ${({ theme: { colors } }) => colors.white[100]};

		cursor: pointer; /* Cursor on hover */
	}
	&::-moz-range-progress {
		height: 0.3rem;
		border-radius: 1rem;
		background: ${({ theme: { colors } }) => colors.primary[100]};
	}
`;

export const Button = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	-webkit-transition: 0.3s;
	&:hover {
		transform: scale(1.3);
		-webkit-transform: scale(1.3);
	}
	&:active {
		transform: scale(1);
		-webkit-transform: scale(1);
	}
`;
