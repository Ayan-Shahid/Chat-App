import Image from "next/image";
import styled, { keyframes } from "styled-components";

interface IBox {
	size?: string;
}

export const Box = styled.figure<IBox>`
	width: ${({ size }) => size};
	flex: none;
	height: ${({ size }) => size};
	border-radius: 100%;
	position: relative;
	background: ${({ theme: { colors } }) => colors.dark[500]};
`;

export const Picture = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
`;

interface IStatus {
	active?: string;
}

export const Status = styled.article<IStatus>`
	width: 30%;
	height: 30%;
	border-radius: 100%;
	position: absolute;
	right: 0;
	z-index: 1;
	background: ${({ theme: { colors } }) => colors.success[100]};
	display: ${({ active }) => (active === "true" ? "block" : "none")};
`;
