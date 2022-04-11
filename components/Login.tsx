import { auth, firestore } from "database/FireBase";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	User,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, setDoc } from "firebase/firestore";

const Login: FunctionComponent = () => {
	const { colors, borderRadius } = useTheme();

	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

	const router = useRouter();

	const addUser = async (data: User) => {
		await setDoc(
			doc(firestore, `Users/${data?.uid}`),
			{
				username: data?.displayName,
				avatar: data?.photoURL,
				id: data?.uid,
			},
			{ merge: true }
		);
	};

	const loginWithGoogle = () => {
		setIsAuthenticating(true);
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((data) => {
				addUser(data.user);
				setIsAuthenticating(false);
				router.push("/");
			})
			.catch(({ message }) => {
				setIsAuthenticating(false);
				toast.error(message);
			});
	};
	const loginWithGitHub = () => {
		setIsAuthenticating(true);
		signInWithPopup(auth, new GithubAuthProvider())
			.then((data) => {
				addUser(data.user);
				setIsAuthenticating(false);
				router.push("/");
			})
			.catch(({ message }) => {
				setIsAuthenticating(false);
				toast.error(message);
			});
	};

	return (
		<Shared.Box background={colors.dark[100]} width="100%" height="100vh">
			{isAuthenticating ? (
				<Shared.Spinner
					color={colors.white[500]}
					size="0.3rem"
					radius="2.5rem"
				/>
			) : (
				<Shared.Column gap="1rem">
					<Shared.ButtonPrimaryInfo
						onClick={loginWithGoogle}
						borderRadius={borderRadius["3xs"]}
					>
						Sign In With Google
					</Shared.ButtonPrimaryInfo>
					<Shared.ButtonOutline
						onClick={loginWithGitHub}
						borderRadius={borderRadius["3xs"]}
					>
						Sign In With GitHub
					</Shared.ButtonOutline>
				</Shared.Column>
			)}
			<ToastContainer theme="dark" position="top-center" />
		</Shared.Box>
	);
};

export default Login;
