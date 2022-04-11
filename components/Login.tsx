import { auth, firestore } from "database/FireBase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { FunctionComponent, useState } from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, collection } from "firebase/firestore";

const Login: FunctionComponent = () => {
	const { colors, borderRadius } = useTheme();

	const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

	const router = useRouter();

	const addUser = async (data?: User) => {
		await addDoc(collection(firestore, "Users"), {
			username: data?.displayName,
			avatar: data?.photoURL,
			id: data?.uid,
		}).catch(({ message }) => toast.error(message));
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

	return (
		<Shared.Box background={colors.dark[100]} width="100%" height="100vh">
			{isAuthenticating ? (
				<Shared.Spinner
					color={colors.white[500]}
					size="0.3rem"
					radius="2.5rem"
				/>
			) : (
				<Shared.ButtonPrimaryInfo
					onClick={loginWithGoogle}
					borderRadius={borderRadius["3xs"]}
				>
					Sign In With Google
				</Shared.ButtonPrimaryInfo>
			)}
			<ToastContainer theme="dark" position="top-center" />
		</Shared.Box>
	);
};

export default Login;
