import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";
import Friend from "./Friend";
import * as Shared from "styles/Shared.elements";

const FindPeople: FunctionComponent = () => {
	const { colors, fontSizes } = useTheme();

	return (
		<Shared.SideBar>
			<Shared.Text
				className="sidebar-title"
				margin="0 2rem"
				size={fontSizes["3xl"]}
				weight={500}
			>
				Find People
			</Shared.Text>
			<Shared.Row className="find-people-input-wrapper" margin="0 2rem">
				<Shared.Input
					className="find-people-input"
					width="100%"
					fontSize={fontSizes.base}
					placeholder="Search for people..."
				/>
			</Shared.Row>
			<Shared.SideBarList>
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
				<Friend />
			</Shared.SideBarList>
		</Shared.SideBar>
	);
};

export default FindPeople;
