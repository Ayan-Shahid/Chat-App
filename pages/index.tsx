import { Header, Message, NavBar, Chats, FindPeople, Avatar } from "components";
import Chat from "components/Chat";
import { Burger, Send } from "icons";
import { NextPage } from "next";
import React from "react";
import * as Shared from "styles/Shared.elements";

const Index: NextPage = () => {
	return (
		<Shared.Layout>
			<Shared.Row className="mobile-header">
				<Burger size="1.5rem" color="white" />
				<Avatar size="3rem" status="online" />
			</Shared.Row>
			<NavBar />
			<Chats />
			<Chat />
		</Shared.Layout>
	);
};

export default Index;
