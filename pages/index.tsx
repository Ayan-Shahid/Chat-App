import {
	Header,
	Message,
	NavBar,
	Chats,
	FindPeople,
	Avatar,
	TopBar,
} from "components";
import Chat from "components/Chat";
import { useBoolean } from "hooks";
import { Burger, Send } from "icons";
import { NextPage } from "next";
import React from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";

const Index: NextPage = () => {
	const { value: menu, toggle: toggleMenu } = useBoolean();
	const { colors } = useTheme();
	return (
		<Shared.Layout>
			<TopBar openMenu={toggleMenu} />
			<NavBar />
			<Chats toggleMobile={menu} />
			<Chat />
		</Shared.Layout>
	);
};

export default Index;
