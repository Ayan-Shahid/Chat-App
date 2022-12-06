import { AppContext } from "context/AppProvider";
import { Burger } from "icons";
import React, { FunctionComponent, MouseEventHandler, useContext } from "react";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface ITopBar {
	openMenu?: MouseEventHandler<HTMLButtonElement>;
}

const TopBar: FunctionComponent<ITopBar> = ({ openMenu }: ITopBar) => {
	const {
		state: { currentUser },
	} = useContext(AppContext);
	return (
		<Shared.Row className="mobile-header">
			<Shared.Box onClick={openMenu} as="button" className="menu-icon">
				<Burger size="1.5rem" color="white" />
			</Shared.Box>
			<Avatar src={currentUser?.photoURL} size="3rem" />
		</Shared.Row>
	);
};

export default TopBar;
