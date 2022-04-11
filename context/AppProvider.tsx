import { auth, firestore } from "database/FireBase";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
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

	// const setSignedInUser = async (data: User) => {
	// 	if (data && user?.docId) return;

	// 	await addDoc(collection(firestore, "Users"), {
	// 		username: data.displayName,
	// 		avatar: data.photoURL,
	// 		id: data.uid,
	// 	});
	// };

	useEffect(() => {
		let isMounted = true;
		let unsubscribe;

		if (isMounted) {
			updateUsers(dispatch);
			updateConversations(dispatch);
			updateMessages(dispatch);
		}
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
	}, []);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
