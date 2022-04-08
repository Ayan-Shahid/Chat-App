import Pusher from "pusher-js";
import React, {
	createContext,
	Dispatch,
	FunctionComponent,
	Reducer,
	useEffect,
	useReducer,
} from "react";
import { pusherReducer } from "./pusherReducer";

export type ReducerState = {
	chats: { sender: string; message: string }[] | null;
};

type DispatchActions = "SET_CHATS";

export type TDispatch = {
	payload: ReducerState;
	type: DispatchActions;
};

type TContextInitialState = {
	state: ReducerState;
	dispatch: Dispatch<TDispatch> | (() => void);
	pusher: Pusher | null;
};

export const PusherContext = createContext<TContextInitialState>({
	state: { chats: null },
	dispatch: () => null,
	pusher: null,
});

const PusherProvider: FunctionComponent = ({ children }) => {
	let pusher: Pusher | null = null;
	const [state, dispatch] = useReducer(pusherReducer, {
		chats: null,
	});

	useEffect(() => {
		pusher = new Pusher(process.env.NEXT_PUSHER_APP_CLIENT_KEY as string, {
			cluster: "ap2",
		});
	}, []);
	return (
		<PusherContext.Provider value={{ state, dispatch, pusher }}>
			{children}
		</PusherContext.Provider>
	);
};

export default PusherProvider;
