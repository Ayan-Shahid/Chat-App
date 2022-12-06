import { FindPeople, NavBar, TopBar, Chat } from "components";
import { useBoolean } from "hooks";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import * as Shared from "styles/Shared.elements";

const Search: NextPage = () => {
	const { value: menu, toggle: toggleMenu } = useBoolean();

	return (
		<>
			<Head>
				<title>Search for people</title>
				<meta name="title" content="Search" />
				<meta name="description" content="Search for people to message." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Shared.Layout>
				<TopBar openMenu={toggleMenu} />
				<NavBar toggleMobileMenu={toggleMenu} />
				<FindPeople toggleMobile={menu} />
				<Chat />
			</Shared.Layout>
		</>
	);
};

export default Search;
