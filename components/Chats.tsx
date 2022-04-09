import React, { FunctionComponent, useContext } from "react";
import * as Shared from "styles/Shared.elements";
import { useTheme } from "styled-components";
import { AppContext } from "context/AppProvider";
import Conversation from "./Conversation";

interface IChats {
	toggleMobile?: boolean;
}

const Chats: FunctionComponent<IChats> = ({ toggleMobile }: IChats) => {
	const { colors, fontSizes } = useTheme();
	const {
		state: { conversations },
	} = useContext(AppContext);

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
				{conversations?.map((item) => (
					<Conversation key={item.id} {...item} />
				))}
			</Shared.SideBarList>
		</Shared.SideBar>
	);
};

export default Chats;
