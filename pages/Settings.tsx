import { EditAccount, NavBar } from "components";
import { NextPage } from "next";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import * as Shared from "styles/Shared.elements";
import DeleteAccount from "components/DeleteAccount";
import Head from "next/head";

const Settings: NextPage = () => {
	return (
		<Shared.Layout>
			<Head>
				<title>Settings</title>
				<meta name="title" content="Settings" />
				<meta name="description" content="Edit your picture or username." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<NavBar />
			<Shared.Column
				justify="space-between"
				width="100%"
				height="100%"
				padding="2rem"
			>
				<EditAccount />
				<DeleteAccount />
			</Shared.Column>
		</Shared.Layout>
	);
};

export default Settings;
