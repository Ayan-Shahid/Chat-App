import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useFriend, useOnChange } from "hooks";
import { Send } from "icons";
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
					<Header title={friend?.username} />
					<Styled.Messages>
						{messages
							?.filter((item) => item.conversationId === conversation.id)
							?.map((item) => (
								<Shared.Row ref={(ref) => (scrollRef = ref)} key={item.key}>
									<Message {...item} />
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
						<Image width="400rem" height="400rem" src="/images/Saly-16.png" />
					</Shared.Column>
				</Shared.Box>
			)}
		</Styled.Main>
	);
};

export default Chat;
