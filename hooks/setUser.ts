import { firestore } from "database/FireBase";
import { User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import useFriend from "./useFriend";

const setUser = async (currentUser?: User | null, docId?: string | null) => {
	if (docId) {
		return await updateDoc(doc(firestore, `Users/${docId}`), {
			username: currentUser?.displayName,
			avatar: currentUser?.photoURL,
			id: currentUser?.uid,
		});
	}
};

export default setUser;
