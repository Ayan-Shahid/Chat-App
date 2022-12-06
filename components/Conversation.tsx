import { setConversation } from "context/AppActions";
import { AppContext } from "context/AppProvider";
import { useFriend, useMinute } from "hooks";
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	collection,
	onSnapshot,
	orderBy,
	query,
	Timestamp,
} from "firebase/firestore";
import { firestore } from "database/FireBase";

interface IConversation {
	users: string[];
	id: string;
}

const Conversation: FunctionComponent<IConversation> = ({
	users,
	id,
}: IConversation) => {
	const {
		state: { currentUser, conversation },
		dispatch,
	} = useContext(AppContext);
	const { friend, friendId } = useFriend(users);
	const [message, setMessage] = useState<{
		text?: string | null;
		timestamp?: Timestamp | null;
	} | null>(null);

	const { time } = useMinute(message?.timestamp?.toMillis());

	const getMessage = () => {
		onSnapshot(
			query(collection(firestore, "Messages"), orderBy("timeStamp", "desc")),
			({ docs }) => {
				const latestMessages = docs
					.filter((item) => item.get("conversationId") === id)
					.at(0);

				setMessage({
					text: latestMessages?.get("text"),
					timestamp: latestMessages?.get("timeStamp"),
				});
			}
		);
	};

	const startConversation = () => {
		if (friendId === currentUser?.uid)
			return toast.error("You cannot start a conversation with yourself!");
		if (friendId && currentUser?.uid)
			setConversation(dispatch, [currentUser?.uid, friendId], id);
	};

	useEffect(() => {
		getMessage();
	}, []);

	const active = id === conversation?.id ? "true" : "false";

	return (
		<>
			<Shared.ListItem active={active} onClick={startConversation} as="button">
				<Avatar src={friend?.avatar} size="2.5rem" />
				<Shared.Column width="100%" gap="0.1rem">
					<Shared.Text className="friend-name" weight={500}>
						{friend?.username}
					</Shared.Text>
					<Shared.Row width="100%">
						<Shared.ListItemTitle>{message?.text}</Shared.ListItemTitle>
						<Shared.ListItemText>
							{message?.text ? `﹒${time}` : null}
						</Shared.ListItemText>
					</Shared.Row>
				</Shared.Column>
			</Shared.ListItem>

			<ToastContainer theme="dark" position="top-center" />
		</>
	);
};

export default Conversation;
