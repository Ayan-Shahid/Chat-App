import React, {
	FunctionComponent,
	useRef,
	useContext,
	useState,
	ChangeEvent,
} from "react";
import { useTheme } from "styled-components";
import { Edit, Save, Trash } from "icons";
import { updateProfile } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setUser, useFriend, useOnChange } from "hooks";

import * as Shared from "styles/Shared.elements";
import { AppContext } from "context/AppProvider";
import { Avatar } from "components";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "database/FireBase";
import SettingsHeader from "./SettingsHeader";
import FormInput from "./FormInput";

const EditAccount: FunctionComponent = () => {
	const {
		state: { currentUser },
	} = useContext(AppContext);

	const { text: username, handleText: handleUsername } = useOnChange(
		currentUser?.displayName
	);

	const { colors, fontSizes, borderRadius } = useTheme();

	const { friend: user } = useFriend(null, currentUser?.uid);

	const [file, setFile] = useState<File | null>(null);

	const [saving, setSaving] = useState<boolean>(false);

	const [isRemovingAvatar, setIsRemovingAvatar] = useState<boolean>(false);

	let fileRef = useRef<HTMLInputElement>(null).current;

	const updateUserDoc = async () => {
		await setUser(currentUser, user?.docId)
			.then(() => setSaving(false))
			.catch(({ message }) => {
				setSaving(false);
				toast.error(message);
			});
	};

	const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0]);
		}
	};

	const setFileImage = () => {
		fileRef?.click();
	};

	const removeAvatar = () => {
		setIsRemovingAvatar(true);
		if (currentUser)
			updateProfile(currentUser, {
				photoURL: "",
			})
				.then(() => {
					updateUserDoc();
					setIsRemovingAvatar(false);
				})
				.catch(({ message }) => {
					setIsRemovingAvatar(false);
					toast.error(message);
				});
	};

	const saveUser = async () => {
		if (file && username.length > 0 && currentUser) {
			setSaving(true);
			const uploadFile = await uploadBytes(ref(storage, "profile"), file);
			await getDownloadURL(uploadFile.ref).then((url) =>
				updateProfile(currentUser, {
					displayName: username,
					photoURL: url,
				})
					.then(() => updateUserDoc())
					.catch(({ message }) => {
						setSaving(false);
						toast.error(message);
					})
			);
		}
	};

	return (
		<>
			<Shared.Column gap="1.5rem">
				<SettingsHeader />
				<FormInput
					defaultValue={
						currentUser?.displayName ? currentUser?.displayName : ""
					}
					type="text"
					placeholder="Username"
					onChange={handleUsername}
				/>
				<Shared.Row align="center" gap="1rem">
					{file ? (
						<Avatar src={URL.createObjectURL(file)} size="3rem" />
					) : (
						<Avatar src={currentUser?.photoURL} size="3rem" />
					)}
					<Shared.Row>
						<Shared.FileInput
							accept=".png,.jpg,.jpeg"
							id="avatar-input"
							type="file"
							ref={(ref) => (fileRef = ref)}
							onChange={handleFile}
						/>
						<Shared.ButtonPrimaryInfo
							className="settings-button"
							onClick={setFileImage}
							borderRadius={borderRadius["2xs"]}
						>
							<Edit color={colors.white[100]} size={fontSizes.lg} />
							<Shared.Text color={colors.white[100]}>Change</Shared.Text>
						</Shared.ButtonPrimaryInfo>
					</Shared.Row>
					<Shared.ButtonPrimaryDanger
						className="settings-button"
						borderRadius={borderRadius["2xs"]}
						onClick={removeAvatar}
						disabled={isRemovingAvatar}
					>
						{isRemovingAvatar ? (
							<Shared.Spinner
								size="0.3rem"
								radius="1.5rem"
								color={colors.error[400]}
							/>
						) : (
							<>
								<Trash color={colors.white[100]} size={fontSizes.lg} />
								<Shared.Text color={colors.white[100]}>Remove</Shared.Text>
							</>
						)}
					</Shared.ButtonPrimaryDanger>
				</Shared.Row>
				<Shared.Row>
					<Shared.Text
						weight={700}
						color={colors.white[500]}
						size={fontSizes.sm}
						className="settings-message"
					>
						This account was created on {currentUser?.metadata.creationTime}.
					</Shared.Text>
				</Shared.Row>
			</Shared.Column>
			<Shared.Row justify="flex-end" gap="1rem">
				<Shared.ButtonPrimarySuccess
					className="settings-button"
					onClick={saveUser}
					borderRadius={borderRadius["2xs"]}
					disabled={saving}
				>
					{saving ? (
						<Shared.Spinner
							size="0.3rem"
							radius="1.5rem"
							color={colors.success[100]}
						/>
					) : (
						<>
							<Save color={colors.white[100]} size={fontSizes.lg} />
							<Shared.Text color={colors.white[100]}>Save</Shared.Text>
						</>
					)}
				</Shared.ButtonPrimarySuccess>
			</Shared.Row>
			<ToastContainer theme="dark" position="top-center" />
		</>
	);
};

export default EditAccount;
