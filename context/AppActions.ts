import { Dispatch } from "react";
import { firestore } from "database/FireBase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { DispatchType } from "types/appContext";

export const updateUsers = (dispatch: Dispatch<DispatchType>) => {
	onSnapshot(collection(firestore, "Users"), ({ docs }) => {
		const data = docs.map((item) => {
			return {
				username: item.get("username"),
				avatar: item.get("avatar"),
				id: item.get("id"),
			};
		});
		dispatch({
			type: "UPDATE_USERS",
			payload: {
				currentUser: null,
				users: data,
				conversation: null,
				conversations: null,
				messages: null,
			},
		});
	});
};

export const updateConversations = (dispatch: Dispatch<DispatchType>) => {
	onSnapshot(collection(firestore, "Conversations"), ({ docs }) => {
		const data = docs.map((item) => {
			return {
				users: item.get("users"),
				id: item.id,
			};
		});
		dispatch({
			type: "UPDATE_CONVERSATIONS",
			payload: {
				currentUser: null,

				users: null,
				conversation: null,
				conversations: data,
				messages: null,
			},
		});
	});
};

export const updateMessages = (dispatch: Dispatch<DispatchType>) => {
	onSnapshot(
		query(collection(firestore, "Messages"), orderBy("timeStamp")),
		({ docs }) => {
			const data = docs.map((item) => {
				return {
					conversationId: item.get("conversationId"),
					userId: item.get("userId"),
					text: item.get("text"),
					key: item.id,
					timeStamp: item.get("timeStamp"),
				};
			});
			dispatch({
				type: "UPDATE_MESSAGES",
				payload: {
					currentUser: null,
					users: null,
					conversation: null,
					conversations: null,
					messages: data,
				},
			});
		}
	);
};

export const setConversation = (
	dispatch: Dispatch<DispatchType>,
	users: string[],
	id: string
) => {
	dispatch({
		type: "SET_CONVERSATION",
		payload: {
			currentUser: null,

			users: null,
			conversation: { users, id },
			conversations: null,
			messages: null,
		},
	});
};
