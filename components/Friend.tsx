import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { addDoc, collection } from "firebase/firestore";
import React, { FunctionComponent, useContext } from "react";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

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

	const router = useRouter();

	const createConversation = async () => {
		if (currentUser?.uid === id)
			return toast.error("You cannot start a chat with yourself");
		if (currentUser)
			await addDoc(collection(firestore, "Conversations"), {
				users: [currentUser?.uid, id],
			}).then(() => router.push("/"));
	};
	return (
		<>
			<Shared.ListItem as="button" onClick={createConversation}>
				<Avatar src={avatar} size="2.5rem" />
				<Shared.Column width="100%" gap="0.1rem">
					<Shared.Text className="friend-name" weight={500}>
						{username}
					</Shared.Text>
				</Shared.Column>
			</Shared.ListItem>
			<ToastContainer theme="dark" position="top-center" />
		</>
	);
};

export default Friend;
