import React, { FunctionComponent } from "react";
import { IIcon } from "./Send";

const Mike: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			width={size}
			height={size}
			className="mike-icon icon"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.36475 13.6785C6.36475 16.8095 8.90275 19.3475 12.0337 19.3475C15.1657 19.3475 17.7037 16.8095 17.7037 13.6785"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.7035 10.423V8.169C17.7035 5.038 15.1655 2.5 12.0335 2.5C8.9025 2.5 6.3645 5.038 6.3645 8.169V10.423"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.0337 21.4997V19.3477"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.8999 13.6785H19.1679"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Mike;