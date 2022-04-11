import { AppContext } from "context/AppProvider";
import { auth, firestore } from "database/FireBase";
import { deleteDoc, doc } from "firebase/firestore";
import { useFriend } from "hooks";
import { Bubble, Gear, PowerOff, Search } from "icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext } from "react";
import * as Styled from "styles/NavBar.elements";
import Avatar from "./Avatar";

const NavBar: FunctionComponent = () => {
	const router = useRouter();

	const {
		state: { currentUser },
	} = useContext(AppContext);

	const { friend: user } = useFriend(null, currentUser?.uid);

	const signOut = async () => {
		await auth.signOut().then(async () => {
			await deleteDoc(doc(firestore, `Users/${user?.docId}`));
			router.push("/");
		});
	};

	const status = currentUser?.isAnonymous ? "authenticated" : "unauthenticated";
	return (
		<Styled.Box>
			<Avatar src={currentUser?.photoURL} status={status} size="2.5rem" />
			<Styled.List>
				<Link href="/">
					<Styled.ListItem>
						<Bubble size="1.3rem" />
					</Styled.ListItem>
				</Link>
				<Link href="/Settings">
					<Styled.ListItem>
						<Gear size="1.3rem" />
					</Styled.ListItem>
				</Link>
				<Link href="/Search">
					<Styled.ListItem>
						<Search size="1.3rem" />
					</Styled.ListItem>
				</Link>
			</Styled.List>
			<Styled.ListItem onClick={signOut}>
				<PowerOff size="1.3rem" />
			</Styled.ListItem>
		</Styled.Box>
	);
};

export default NavBar;
