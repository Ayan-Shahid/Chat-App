import { AppContext } from "context/AppProvider";
import { firestore } from "database/FireBase";
import { collection, onSnapshot } from "firebase/firestore";
import { useFriend } from "hooks";
import { Send } from "icons";
import Image from "next/image";
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from "react";
import { useTheme } from "styled-components";
import * as Styled from "styles/Chat.elements";
import * as Shared from "styles/Shared.elements";
import Header from "./Header";
import Message from "./Message";

const Chat: FunctionComponent = () => {
	const { colors, fontSizes } = useTheme();

	const {
		state: { conversation, currentUser },
	} = useContext(AppContext);

	const { friend, friendId } = useFriend(conversation?.users);

	return (
		<Styled.Main>
			{conversation ? (
				<>
					<Header title={friend?.username} />
					<Styled.Messages>
						<Message />
					</Styled.Messages>
					<Styled.Footer>
						<Shared.InputInfo
							className="message-input"
							width="100%"
							placeholder="Type something...."
						/>
						<Shared.ButtonPrimary className="send-button" borderRadius="100%">
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
