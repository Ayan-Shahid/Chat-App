import React, { FunctionComponent, MouseEvent, useState } from "react";
import * as Shared from "styles/Shared.elements";
import { useTheme } from "styled-components";
import Friend from "./Friend";

interface IChats {
	toggleMobile?: boolean;
}

const Chats: FunctionComponent<IChats> = ({ toggleMobile }: IChats) => {
	const { colors, fontSizes } = useTheme();

	return (
		<Shared.SideBar toggle={toggleMobile?.toString()}>
			<Shared.Text
				className="sidebar-title"
				margin="0 2rem"
				size={fontSizes["3xl"]}
				weight={500}
			>
				Chats
			</Shared.Text>
			<Shared.SideBarList>
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
			</Shared.SideBarList>
		</Shared.SideBar>
	);
};

export default Chats;
