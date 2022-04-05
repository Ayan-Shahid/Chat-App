import React, { FunctionComponent } from "react";
import * as Styled from "styles/Message.elements";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface IMessage {
	isUser?: boolean;
}

const Message: FunctionComponent<IMessage> = ({ isUser }: IMessage) => {
	return isUser ? (
		<Styled.UserBox>
			<Styled.UserBubble>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit quaerat
				rem, ducimus eum aperiam blanditiis suscipit maxime quisquam ipsa, nisi
				soluta debitis dolorum nam officia adipisci earum veniam? Perspiciatis.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem
				praesentium doloribus, dolorem veritatis ullam officia aspernatur
				voluptas, dolorum voluptatum similique consequuntur itaque, hic sapiente
				repudiandae inventore quibusdam nemo perspiciatis!
			</Styled.UserBubble>
			<Avatar size="1.5rem" />
		</Styled.UserBox>
	) : (
		<Styled.Box>
			<Avatar size="1.5rem" />
			<Styled.FriendBubble>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit quaerat
				rem, ducimus eum aperiam blanditiis suscipit maxime quisquam ipsa, nisi
				soluta debitis dolorum nam officia adipisci earum veniam? Perspiciatis.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem
				praesentium doloribus, dolorem veritatis ullam officia aspernatur
				voluptas, dolorum voluptatum similique consequuntur itaque, hic sapiente
				repudiandae inventore quibusdam nemo perspiciatis!
			</Styled.FriendBubble>
		</Styled.Box>
	);
};

export default Message;
