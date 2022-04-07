import { useBoolean } from "hooks";
import { Bubble, Gear, PowerOff, Search } from "icons";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/NavBar.elements";
import Avatar from "./Avatar";
import { signOut, useSession } from "next-auth/react";

const NavBar: FunctionComponent = () => {
	const { data, status } = useSession();
	const handleSignOut = () => {
		signOut();
	};
	return (
		<Styled.Box>
			<Avatar src={data?.user?.image} status={status} size="2.5rem" />
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
			<Styled.ListItem onClick={handleSignOut}>
				<PowerOff size="1.3rem" />
			</Styled.ListItem>
		</Styled.Box>
	);
};

export default NavBar;
