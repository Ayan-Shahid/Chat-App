import { Player } from "components";
import { AppContext } from "context/AppProvider";
import { Timestamp } from "firebase/firestore";
import { useFriend, useMinute } from "hooks";
import React, { FunctionComponent, useContext } from "react";
import { useTheme } from "styled-components";
import * as Styled from "styles/Message.elements";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface IMessage {
	isUser?: boolean;
	text?: string | null;
	userId?: string | null;
	voice?: string | null;
	timeStamp?: Timestamp | null;
}

const Message: FunctionComponent<IMessage> = ({
	text,
	userId,
	timeStamp,
	voice,
}: IMessage) => {
	const {
		state: { currentUser },
	} = useContext(AppContext);
	const isUser = currentUser?.uid === userId ? true : false;

	const { colors, fontSizes } = useTheme();

	const { friend } = useFriend(null, userId);

	const { time } = useMinute(timeStamp?.toMillis());

	return isUser ? (
		<>
			<Styled.UserBox>
				<Shared.Column gap="1rem">
					<Shared.Row gap="1rem" width="100%">
						<Styled.UserBubble>
							{text} {voice && voice !== "" ? <Player src={voice} /> : null}
						</Styled.UserBubble>
						<Avatar src={friend?.avatar} size="1.5rem" />
					</Shared.Row>
					<Shared.Text
						weight={700}
						size={fontSizes.sm}
						color={colors.white[500]}
					>
						{time}
					</Shared.Text>
				</Shared.Column>
			</Styled.UserBox>
		</>
	) : (
		<Styled.Box>
			<Shared.Column align="flex-end" gap="1rem">
				<Shared.Row gap="1rem" width="100%">
					<Avatar src={friend?.avatar} size="1.5rem" />
					<Styled.FriendBubble>
						{text}
						{voice && voice !== "" ? <Player src={voice} /> : null}
					</Styled.FriendBubble>
				</Shared.Row>
				<Shared.Text weight={700} size={fontSizes.sm} color={colors.white[500]}>
					{time}
				</Shared.Text>
			</Shared.Column>
		</Styled.Box>
	);
};

export default Message;
