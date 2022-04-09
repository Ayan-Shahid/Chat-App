import { auth } from "database/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import React, {
	createContext,
	FunctionComponent,
	useEffect,
	useReducer,
} from "react";
import { ContextType } from "types/appContext";
import { updateConversations, updateMessages, updateUsers } from "./AppActions";
import { appReducer } from "./appReducer";

export const AppContext = createContext<ContextType>({
	state: {
		currentUser: null,
		users: null,
		conversations: null,
		conversation: null,
		messages: null,
	},
	dispatch: () => null,
});

const AppProvider: FunctionComponent = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, {
		currentUser: null,
		users: null,
		conversations: null,
		messages: null,
		conversation: null,
	});

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			updateUsers(dispatch);
			updateConversations(dispatch);
			updateMessages(dispatch);
			let unsubscribe;

			unsubscribe = onAuthStateChanged(auth, (user) => {
				dispatch({
					type: "SET_USER",
					payload: {
						currentUser: user,
						conversation: null,
						conversations: null,
						messages: null,
						users: null,
					},
				});
			});

			return unsubscribe;
		}
	}, []);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
