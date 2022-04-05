import React, { FunctionComponent } from "react";
import { IIcon } from "./Send";

const Save: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<path
				d="M11.879 14.791V2.75"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.795 11.8643L11.879 14.7923L8.96301 11.8643"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.3702 7.25879C19.9492 7.58879 21.2502 8.92879 21.2502 14.2588C21.2502 21.3588 18.9392 21.3588 12.0002 21.3588C5.05924 21.3588 2.75024 21.3588 2.75024 14.2588C2.75024 8.92879 4.05024 7.58879 7.63024 7.25879"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Save;
