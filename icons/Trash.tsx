import React, { FunctionComponent, memo } from "react";
import { IIcon } from "./Send";

const Trash: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			className="trash-icon icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.3651 6.47985H4.2146"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default memo(Trash);
