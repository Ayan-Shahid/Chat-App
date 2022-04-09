import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { addDoc, collection } from "firebase/firestore";
import React, { FunctionComponent, useContext } from "react";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface IFriend {
	avatar: string;
	username: string;
	id: string;
}

const Friend: FunctionComponent<IFriend> = ({
	avatar,
	username,
	id,
}: IFriend) => {
	const {
		state: { currentUser },
	} = useContext(AppContext);

	const createConversation = async () => {
		if (currentUser)
			await addDoc(collection(firestore, "Conversations"), {
				users: [currentUser?.uid, id],
			});
	};
	return (
		<Shared.ListItem as="button" onClick={createConversation}>
			<Avatar src={avatar} size="2.5rem" />
			<Shared.Column width="100%" gap="0.1rem">
				<Shared.Text className="friend-name" weight={500}>
					{username}
				</Shared.Text>
			</Shared.Column>
		</Shared.ListItem>
	);
};

export default Friend;
