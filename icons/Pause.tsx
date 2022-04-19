import React, { FunctionComponent } from "react";
import { IIcon } from "./Send";

const Pause: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 17.5V6.5C6 5.11929 7.11929 4 8.5 4C9.88071 4 11 5.11929 11 6.5V12V17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5Z"
				fill={color}
			/>
			<path
				d="M18 17.5V6.5C18 5.11929 16.8807 4 15.5 4C14.1193 4 13 5.11929 13 6.5V12V17.5C13 18.8807 14.1193 20 15.5 20C16.8807 20 18 18.8807 18 17.5Z"
				fill={color}
			/>
		</svg>
	);
};

export default Pause;
