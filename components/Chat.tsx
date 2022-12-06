import { AppContext } from "context/AppProvider";
import { firestore, storage } from "database/FireBase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useFriend, useOnChange, useRecorder } from "hooks";
import { Mike, Send } from "icons";
import Image from "next/image";
import React, {
	FunctionComponent,
	KeyboardEvent,
	useContext,
	useEffect,
	useRef,
} from "react";
import { useTheme } from "styled-components";
import * as Styled from "styles/Chat.elements";
import * as Shared from "styles/Shared.elements";
import Header from "./Header";
import Message from "./Message";

const Chat: FunctionComponent = () => {
	const { colors, fontSizes } = useTheme();
	const {
		text: message,
		setText: setMessage,
		handleText: handleMessage,
	} = useOnChange();
	let scrollRef = useRef<HTMLElement>(null).current;

	const {
		state: { conversation, currentUser, messages },
	} = useContext(AppContext);

	const { friend } = useFriend(conversation?.users);

	const { state: recorderState, start, stop } = useRecorder();

	const sendVoiceMessage = async () => {
		stop();
		if (recorderState.audio) {
			const uploadAudio = await uploadBytes(
				ref(storage, `audio/${Date.now()}`),
				recorderState.audio
			);
			await getDownloadURL(uploadAudio.ref).then(async (url) => {
				await addDoc(collection(firestore, "Messages"), {
					conversationId: conversation?.id,
					userId: currentUser?.uid,
					voice: url,
					timeStamp: serverTimestamp(),
				});
			});
		}
	};

	const sendMessage = async () => {
		if (message.length > 0) {
			await addDoc(collection(firestore, "Messages"), {
				conversationId: conversation?.id,
				userId: currentUser?.uid,
				text: message,
				timeStamp: serverTimestamp(),
			});
			setMessage("");
		}
	};

	const keyboardMessage = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			sendMessage();
		}
	};

	useEffect(() => {
		scrollRef?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<Styled.Main>
			{conversation ? (
				<>
					<Header title={friend?.username} src={friend?.avatar} />
					<Styled.Messages>
						{messages
							?.filter((item) => item.conversationId === conversation.id)
							?.map((item) => (
								<Shared.Row ref={(ref) => (scrollRef = ref)} key={item.key}>
									<Message friendAvatar={friend?.avatar} {...item} />
								</Shared.Row>
							))}
					</Styled.Messages>

					<Styled.Footer>
						<Shared.InputInfo
							onChange={handleMessage}
							onKeyDown={keyboardMessage}
							value={message}
							className="message-input"
							width="100%"
							placeholder="Type something...."
						/>

						{recorderState.init ? (
							<Shared.ButtonPrimaryDanger
								onClick={sendVoiceMessage}
								className="mike-button"
								borderRadius="100%"
							>
								<Mike color={colors.white[100]} size="inherit" />
							</Shared.ButtonPrimaryDanger>
						) : (
							<Shared.ButtonOutline
								onClick={start}
								className="mike-button"
								borderRadius="100%"
							>
								<Mike color={colors.white[500]} size="inherit" />
							</Shared.ButtonOutline>
						)}
						<Shared.ButtonPrimary
							onClick={sendMessage}
							className="send-button"
							borderRadius="100%"
						>
							<Send size="inherit" />
						</Shared.ButtonPrimary>
					</Styled.Footer>
				</>
			) : (
				<Shared.Box height="100%">
					<Shared.Column gap="0.5rem">
						<Shared.Text
							color={colors.white[100]}
							size={fontSizes["3xl"]}
							weight={700}
						>
							You have not selected any chat.
						</Shared.Text>
						<Shared.Text size={fontSizes.base} color={colors.white[500]}>
							Choose one from your existing chats.
						</Shared.Text>
						<Image
							width="400"
							height="400"
							alt="no-chat"
							src="/images/Saly-16.png"
						/>
					</Shared.Column>
				</Shared.Box>
			)}
		</Styled.Main>
	);
};

export default Chat;
