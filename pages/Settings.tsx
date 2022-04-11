import { EditAccount, NavBar } from "components";
import { NextPage } from "next";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import * as Shared from "styles/Shared.elements";
import DeleteAccount from "components/DeleteAccount";

const Settings: NextPage = () => {
	return (
		<Shared.Layout>
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
