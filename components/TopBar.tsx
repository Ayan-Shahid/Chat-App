import { Burger } from "icons";
import React, { FunctionComponent, MouseEventHandler } from "react";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface ITopBar {
	openMenu?: MouseEventHandler<HTMLButtonElement>;
}

const TopBar: FunctionComponent<ITopBar> = ({ openMenu }: ITopBar) => {
	return (
		<Shared.Row className="mobile-header">
			<Shared.Box onClick={openMenu} as="button" className="menu-icon">
				<Burger size="1.5rem" color="white" />
			</Shared.Box>
			<Avatar size="3rem" />
		</Shared.Row>
	);
};

export default TopBar;
