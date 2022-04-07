import { FindPeople, NavBar, TopBar } from "components";
import Chat from "components/Chat";
import { useBoolean } from "hooks";
import { NextPage } from "next";
import React from "react";
import * as Shared from "styles/Shared.elements";

const Search: NextPage = () => {
	const { value: menu, toggle: toggleMenu } = useBoolean();

	return (
		<Shared.Layout>
			<TopBar openMenu={toggleMenu} />
			<NavBar />
			<FindPeople toggleMobile={menu} />
			<Chat />
		</Shared.Layout>
	);
};

export default Search;
