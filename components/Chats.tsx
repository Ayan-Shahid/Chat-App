import React, { FunctionComponent, useContext } from "react";
import * as Shared from "styles/Shared.elements";
import { useTheme } from "styled-components";
import { AppContext } from "context/AppProvider";
import Conversation from "./Conversation";

interface IChats {
	toggleMobile?: boolean;
}

const Chats: FunctionComponent<IChats> = ({ toggleMobile }: IChats) => {
	const { fontSizes } = useTheme();
	const {
		state: { conversations, currentUser },
	} = useContext(AppContext);

	const myConversations = () => {
		if (currentUser) {
			return conversations?.filter((item) =>
				item.users.includes(currentUser.uid)
			);
		}
	};

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
				{myConversations()?.map((item) => (
					<Conversation key={item.id} {...item} />
				))}
			</Shared.SideBarList>
		</Shared.SideBar>
	);
};

export default Chats;
