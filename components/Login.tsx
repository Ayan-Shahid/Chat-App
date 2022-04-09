import { auth, firestore } from "database/FireBase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";

const Login: FunctionComponent = () => {
	const { colors, borderRadius } = useTheme();
	const router = useRouter();

	const loginWithGoogle = () => {
		signInWithPopup(auth, new GoogleAuthProvider())
			.then(async (data) => {
				await addDoc(collection(firestore, "Users"), {
					username: data.user.displayName,
					avatar: data.user.photoURL,
					id: data.user.uid,
				});
			})
			.catch((error) => alert(error));
	};

	return (
		<Shared.Box background={colors.dark[100]} width="100%" height="100vh">
			<Shared.ButtonPrimaryInfo
				onClick={loginWithGoogle}
				borderRadius={borderRadius["3xs"]}
			>
				Sign In With Google
			</Shared.ButtonPrimaryInfo>
		</Shared.Box>
	);
};

export default Login;
