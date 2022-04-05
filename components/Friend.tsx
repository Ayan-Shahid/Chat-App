import React, { FunctionComponent, MouseEventHandler } from "react";
import * as Shared from "styles/Shared.elements";
import * as Styled from "styles/Friend.elements";
import Avatar from "./Avatar";

interface IFriend {
	onClick?: MouseEventHandler<HTMLLIElement>;
}

const Friend: FunctionComponent<IFriend> = ({ onClick }: IFriend) => {
	return (
		<Styled.Box>
			<Avatar size="2.5rem" />
			<Shared.Column gap="0.1rem">
				<Shared.Text className="friend-name" weight={500}>
					Saad Rana
				</Shared.Text>
				<Shared.Row align="center">
					<Styled.Message>you whas up how ya doin</Styled.Message>
					<Styled.Time>﹒10 min ago</Styled.Time>
				</Shared.Row>
			</Shared.Column>
		</Styled.Box>
	);
};

export default Friend;
