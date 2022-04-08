import { Dispatch } from "react";
import { ReducerState, TDispatch } from "./PusherProvider";

export const updateChats = (
	dispatch: Dispatch<TDispatch>,
	data: ReducerState
) => {
	dispatch({ type: "SET_CHATS", payload: data });
};
