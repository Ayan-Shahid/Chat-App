import { FindPeople, NavBar } from "components";
import Chat from "components/Chat";
import { NextPage } from "next";
import React from "react";
import * as Shared from "styles/Shared.elements";

const Search: NextPage = () => {
	return (
		<Shared.Layout>
			<NavBar />
			<FindPeople />
			<Chat />
		</Shared.Layout>
	);
};

export default Search;
