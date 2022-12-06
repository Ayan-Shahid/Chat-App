import React, { FunctionComponent, useContext } from "react";
import { useTheme } from "styled-components";
import Friend from "./Friend";
import * as Shared from "styles/Shared.elements";
import { AppContext } from "context/AppProvider";

interface IFindPeople {
	toggleMobile?: boolean;
}

const FindPeople: FunctionComponent<IFindPeople> = ({
	toggleMobile,
}: IFindPeople) => {
	const { fontSizes } = useTheme();
	const {
		state: { users, currentUser },
	} = useContext(AppContext);

	return (
		<Shared.SideBar toggle={toggleMobile?.toString()}>
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
				{users
					?.filter((item) => item.id !== currentUser?.uid)
					.map((item) => (
						<Friend key={item.id} {...item} />
					))}
			</Shared.SideBarList>
		</Shared.SideBar>
	);
};

export default FindPeople;
