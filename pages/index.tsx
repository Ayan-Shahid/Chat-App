import { NavBar, TopBar, Chat, Chats, Login } from "components";
import { AppContext } from "context/AppProvider";
import { useBoolean } from "hooks";
import { NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import * as Shared from "styles/Shared.elements";

const Index: NextPage = () => {
	const { value: menu, toggle: toggleMenu } = useBoolean();

	const {
		state: { currentUser },
	} = useContext(AppContext);

	return (
		<>
			<Head>
				<title>Chaty</title>
				<meta name="title" content="Chaty" />
				<meta
					name="description"
					content="A chat application for messaging users."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			{currentUser ? (
				<Shared.Layout>
					<TopBar openMenu={toggleMenu} />
					<NavBar toggleMobileMenu={toggleMenu} />
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
