import { Reducer } from "react";
import { ReducerStateType, DispatchType } from "./../types/appContext";
export const appReducer: Reducer<ReducerStateType, DispatchType> = (
	state: ReducerStateType,
	action: DispatchType
): ReducerStateType => {
	switch (action.type) {
		case "UPDATE_USERS":
			return {
				...state,
				users: action.payload.users,
			};
		case "UPDATE_CONVERSATIONS":
			return {
				...state,
				conversations: action.payload.conversations,
			};
		case "SET_CONVERSATION":
			return {
				...state,
				conversation: action.payload.conversation,
			};
		case "UPDATE_MESSAGES":
			return {
				...state,
				messages: action.payload.messages,
			};
		case "SET_USER":
			return {
				...state,
				currentUser: action.payload.currentUser,
			};
		default:
			return state;
	}
};
