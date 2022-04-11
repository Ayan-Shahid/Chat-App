import React, { FunctionComponent, memo } from "react";
import { IIcon } from "./Send";

const PowerOff: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			className="off-icon icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M14.3941 9.59473L9.60211 14.3867"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.3999 14.393L9.59991 9.59302"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default memo(PowerOff);
