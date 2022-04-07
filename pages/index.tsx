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
import { useSession, signIn } from "next-auth/react";

const Index: NextPage = () => {
	const { value: menu, toggle: toggleMenu } = useBoolean();

	const { status } = useSession();
	const { colors, borderRadius } = useTheme();

	const handleSignIn = () => {
		signIn();
	};

	return (
		<>
			{status === "authenticated" ? (
				<Shared.Layout>
					<TopBar openMenu={toggleMenu} />
					<NavBar />
					<Chats toggleMobile={menu} />
					<Chat />
				</Shared.Layout>
			) : status === "loading" ? (
				<Shared.Box background={colors.dark[100]} width="100%" height="100vh">
					<Shared.Spinner
						radius="2.5rem"
						size="0.3rem"
						color={colors.white[500]}
					/>
				</Shared.Box>
			) : (
				<Shared.Box background={colors.dark[100]} width="100%" height="100vh">
					<Shared.ButtonPrimary
						borderRadius={borderRadius["3xs"]}
						onClick={handleSignIn}
					>
						Sign In
					</Shared.ButtonPrimary>
				</Shared.Box>
			)}
		</>
	);
};

export default Index;
