import { NavBar, TopBar, Chat, Chats, Login } from "components";
import { AppContext } from "context/AppProvider";
import { useBoolean } from "hooks";
import { NextPage } from "next";
import React, { useContext } from "react";
import * as Shared from "styles/Shared.elements";

const Index: NextPage = () => {
	const { value: menu, toggle: toggleMenu } = useBoolean();

	const { state } = useContext(AppContext);

	return (
		<>
			{state.currentUser ? (
				<Shared.Layout>
					<TopBar openMenu={toggleMenu} />
					<NavBar />
					<Chats toggleMobile={menu} />
					<Chat />
				</Shared.Layout>
			) : (
				<Login />
			)}
		</>
	);
};

export default Index;
