import Male from "avatars/Male";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Avatar.elements";

interface IAvatar {
	size?: string;
	status?: "authenticated" | "unauthenticated";
	src?: string | null;
}

const Avatar: FunctionComponent<IAvatar> = ({ size, status, src }: IAvatar) => {
	return (
		<Styled.Box className="avatar" size={size}>
			<Styled.Status active={status === "authenticated" ? "true" : "false"} />
			{src ? (
				<Styled.Picture layout="fill" src={src} />
			) : (
				<Male size="inherit" />
			)}
		</Styled.Box>
	);
};

export default Avatar;
