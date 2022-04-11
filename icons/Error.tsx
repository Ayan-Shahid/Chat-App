import React, { FunctionComponent, memo } from "react";
import { IIcon } from "./Send";

const Error: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="12" fill={color} />
			<rect x="10" y="10" width="4" height="9" rx="2" fill="white" />
			<circle cx="12" cy="7" r="2" fill="white" />
		</svg>
	);
};

export default memo(Error);
