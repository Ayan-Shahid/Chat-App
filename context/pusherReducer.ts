import { ReducerState, TDispatch } from "./PusherProvider";
import { Reducer } from "react";

export const pusherReducer: Reducer<ReducerState, TDispatch> = (
	state: ReducerState,
	action: TDispatch
): ReducerState => {
	switch (action.type) {
		case "SET_CHATS":
			return {
				chats: action.payload.chats,
			};
		default:
			return state;
	}
};
