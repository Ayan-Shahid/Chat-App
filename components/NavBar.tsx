import { AppContext } from "context/AppProvider";
import { auth } from "database/FireBase";
import { Bubble, Gear, PowerOff, Search } from "icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, MouseEventHandler, useContext } from "react";
import * as Styled from "styles/NavBar.elements";
import Avatar from "./Avatar";

interface NavbarProps {
	toggleMobileMenu?: MouseEventHandler<HTMLButtonElement>;
}

const NavBar: FunctionComponent<NavbarProps> = ({ toggleMobileMenu }) => {
	const router = useRouter();

	const {
		state: { currentUser },
	} = useContext(AppContext);

	const signOut = async () => {
		await auth.signOut().then(async () => {
			router.push("/");
		});
	};

	const status = currentUser?.isAnonymous ? "authenticated" : "unauthenticated";
	return (
		<Styled.Box>
			<Avatar src={currentUser?.photoURL} status={status} size="2.5rem" />
			<Styled.List>
				<Link href="/">
					<Styled.ListItem onClick={toggleMobileMenu}>
						<Bubble size="1.3rem" />
					</Styled.ListItem>
				</Link>
				<Link href="/Settings">
					<Styled.ListItem>
						<Gear size="1.3rem" />
					</Styled.ListItem>
				</Link>
				<Link href="/Search">
					<Styled.ListItem onClick={toggleMobileMenu}>
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
