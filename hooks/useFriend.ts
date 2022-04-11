import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

const useFriend = (users?: string[] | null, userId?: string | null) => {
	const {
		state: { currentUser },
	} = useContext(AppContext);
	const [friend, setFriend] = useState<{
		avatar: string | null;
		username: string | null;
		id: string | null;
		docId?: string | null;
	}>();
	let friendId: string | undefined;
	if (users) friendId = users.find((item) => item !== currentUser?.uid);

	const getFriend = () => {
		if (friendId || userId) {
			onSnapshot(collection(firestore, "Users"), ({ docs }) => {
				const friendData = docs.find(
					(item) => item.get("id") === friendId || userId
				);
				setFriend({
					avatar: friendData?.get("avatar"),
					username: friendData?.get("username"),
					id: friendData?.get("id"),
					docId: friendData?.id,
				});
			});
		}
	};

	useEffect(() => {
		let isMounted = true;

		if (isMounted) getFriend();

		return () => {
			isMounted = false;
		};
	}, [users]);
	return { friend, friendId };
};

export default useFriend;
