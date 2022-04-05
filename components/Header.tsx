import React, { FunctionComponent } from "react";
import * as Shared from "styles/Shared.elements";
import * as Styled from "styles/Header.elements";
import { useTheme } from "styled-components";
import Avatar from "./Avatar";

const Header: FunctionComponent = () => {
	const { colors, fontSizes } = useTheme();
	return (
		<Styled.Box>
			<Avatar size="2.5rem" />
			<Shared.Text
				className="friend-name"
				size={fontSizes.xl}
				color={colors.white[100]}
			>
				Saad Rana
			</Shared.Text>
		</Styled.Box>
	);
};

export default Header;
