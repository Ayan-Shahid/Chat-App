import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { GoogleAuthProvider, reauthenticateWithPopup } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { Trash } from "icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext, useState } from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";
import { useFriend } from "hooks";

const DeleteAccount: FunctionComponent = () => {
	const {
		state: { currentUser },
	} = useContext(AppContext);

	const { friend: user } = useFriend(null, currentUser?.uid);

	const { colors, fontSizes, borderRadius } = useTheme();

	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	const router = useRouter();

	const deleteUser = async () => {
		if (currentUser) {
			setIsDeleting(true);

			reauthenticateWithPopup(currentUser, new GoogleAuthProvider())
				.then(async () => {
					await currentUser
						?.delete()
						.then(async () => {
							await deleteDoc(doc(firestore, `Users/${user?.docId}`));
							setIsDeleting(false);
							router.push("/");
						})
						.catch(({ message }) => {
							setIsDeleting(false);
							toast.error(message);
						});
				})
				.catch(({ message }) => toast.error(message));
		}
	};

	return (
		<>
			<Shared.Column>
				<Shared.Text
					weight={300}
					color={colors.error[100]}
					size={fontSizes.lg}
					className="settings-title"
				>
					Delete Account
				</Shared.Text>
				<Shared.Text
					weight={700}
					color={colors.error[400]}
					size={fontSizes.sm}
					className="settings-message"
				>
					Are you sure you want to delete your account? Everything will be
					deleted permenently and cannot be recoverd again!
				</Shared.Text>
			</Shared.Column>
			<Shared.Row justify="flex-end" gap="1rem">
				<Shared.ButtonPrimaryDanger
					className="settings-button"
					borderRadius={borderRadius["2xs"]}
					onClick={deleteUser}
					disabled={isDeleting}
				>
					{isDeleting ? (
						<Shared.Spinner
							size="0.3rem"
							radius="1.5rem"
							color={colors.error[300]}
						/>
					) : (
						<>
							<Trash color={colors.white[100]} size={fontSizes.lg} />
							<Shared.Text color={colors.white[100]}>
								Delete Account
							</Shared.Text>
						</>
					)}
				</Shared.ButtonPrimaryDanger>
			</Shared.Row>
			<ToastContainer theme="dark" position="top-center" />
		</>
	);
};

export default DeleteAccount;
