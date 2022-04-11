import { firestore } from "database/FireBase";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const setUser = async (currentUser?: User | null, docId?: string | null) => {
	if (docId) {
		return await setDoc(
			doc(firestore, `Users/${docId}`),
			{
				username: currentUser?.displayName,
				avatar: currentUser?.photoURL,
				id: currentUser?.uid,
			},
			{ merge: true }
		);
	}
};

export default setUser;
