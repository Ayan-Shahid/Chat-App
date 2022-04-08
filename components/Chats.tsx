import React, {
	FunctionComponent,
	MouseEvent,
	useContext,
	useEffect,
	useState,
} from "react";
import * as Shared from "styles/Shared.elements";
import { useTheme } from "styled-components";
import Friend from "./Friend";
import { PusherContext } from "context/PusherProvider";
import { updateChats } from "context/pusherActions";

interface IChats {
	toggleMobile?: boolean;
}

const Chats: FunctionComponent<IChats> = ({ toggleMobile }: IChats) => {
	const { colors, fontSizes } = useTheme();
	const { state, dispatch, pusher } = useContext(PusherContext);

	useEffect(() => {
		const channel = pusher?.subscribe("chat");

		channel?.bind("chat-event", function (data: { sender: any; message: any }) {
			updateChats(dispatch, {
				chats: [{ sender: data.sender, message: data.message }],
			});
		});

		console.log(state);

		return () => {
			pusher?.unsubscribe("chat");
		};
	}, []);

	return (
		<Shared.SideBar toggle={toggleMobile?.toString()}>
			<Shared.Text
				className="sidebar-title"
				margin="0 2rem"
				size={fontSizes["3xl"]}
				weight={500}
			>
				Chats
			</Shared.Text>
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

export default Chats;
