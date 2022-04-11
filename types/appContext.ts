/* eslint-disable no-mixed-spaces-and-tabs */
import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { Dispatch } from "react";

export type ReducerStateType = {
	currentUser: User | null;
	users: { username: string; avatar: string; id: string }[] | null;
	conversations:
		| {
				users: string[];
				id: string;
		  }[]
		| null;

	conversation: {
		users: string[];
		id: string;
	} | null;
	messages:
		| {
				conversationId: string;
				userId: string;
				text: string;
				key: string;
				timeStamp: Timestamp;
		  }[]
		| null;
};

export type DispatchActionsType =
	| "UPDATE_USERS"
	| "UPDATE_CONVERSATIONS"
	| "UPDATE_MESSAGES"
	| "SET_USER"
	| "SET_CONVERSATION";

export type DispatchType = {
	payload: ReducerStateType;
	type: DispatchActionsType;
};
export type ContextType = {
	state: ReducerStateType;
	dispatch: Dispatch<DispatchType> | (() => void);
};
