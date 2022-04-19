import React, { FunctionComponent } from "react";
import { IIcon } from "./Send";

const Play: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			className="play-icon icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 18.6919V5.54927C4 4.40555 5.22867 3.68259 6.22847 4.23804L19.371 11.5395C20.4528 12.1404 20.3826 13.7189 19.2518 14.2214L6.10921 20.0626C5.11728 20.5034 4 19.7773 4 18.6919Z"
				fill={color}
			/>
		</svg>
	);
};

export default Play;
