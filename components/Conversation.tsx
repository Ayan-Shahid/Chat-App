import { setConversation } from "context/AppActions";
import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { collection, onSnapshot } from "firebase/firestore";
import { useFriend } from "hooks";
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface IConversation {
	users: string[];
	id: string;
}

const Conversation: FunctionComponent<IConversation> = ({
	users,
	id,
}: IConversation) => {
	const {
		state: { currentUser },
		dispatch,
	} = useContext(AppContext);
	const { friend, friendId } = useFriend(users);

	const startConversation = () => {
		if (friendId && currentUser?.uid)
			setConversation(dispatch, [currentUser?.uid, friendId], id);
	};

	return (
		<Shared.ListItem onClick={startConversation} as="button">
			<Avatar size="2.5rem" />
			<Shared.Column width="100%" gap="0.1rem">
				<Shared.Text className="friend-name" weight={500}>
					{friend?.username}
				</Shared.Text>
				<Shared.Row width="100%" justify="space-between" align="center">
					<Shared.ListItemTitle>you whas up how ya doin</Shared.ListItemTitle>
					<Shared.ListItemText>﹒10 min ago</Shared.ListItemText>
				</Shared.Row>
			</Shared.Column>
		</Shared.ListItem>
	);
};

export default Conversation;
