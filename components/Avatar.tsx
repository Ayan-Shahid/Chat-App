import Male from "avatars/Male";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Avatar.elements";

interface IAvatar {
	size?: string;
	status?: "online" | "offline";
}

const Avatar: FunctionComponent<IAvatar> = ({ size, status }: IAvatar) => {
	return (
		<Styled.Box className="avatar" size={size}>
			<Styled.Status active={status === "online" ? "true" : "false"} />
			<Male size="inherit" />
		</Styled.Box>
	);
};

export default Avatar;
