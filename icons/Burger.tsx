import React, { FunctionComponent, memo } from "react";
import { IIcon } from "./Send";

const Burger: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			className="burger-icon icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M19.8571 6.28571H4.14286C3.51167 6.28571 3 5.77404 3 5.14286C3 4.51167 3.51167 4 4.14286 4H19.8571C20.4883 4 21 4.51167 21 5.14286C21 5.77404 20.4883 6.28571 19.8571 6.28571Z"
				fill={color}
			/>
			<path
				d="M19.8571 10.8571H4.14286C3.51167 10.8571 3 11.3688 3 12C3 12.6312 3.51167 13.1429 4.14286 13.1429H19.8571C20.4883 13.1429 21 12.6312 21 12C21 11.3688 20.4883 10.8571 19.8571 10.8571Z"
				fill={color}
			/>
			<path
				d="M19.8571 17.7143H4.14286C3.51167 17.7143 3 18.226 3 18.8571C3 19.4883 3.51167 20 4.14286 20H19.8571C20.4883 20 21 19.4883 21 18.8571C21 18.226 20.4883 17.7143 19.8571 17.7143Z"
				fill={color}
			/>
		</svg>
	);
};

export default memo(Burger);
