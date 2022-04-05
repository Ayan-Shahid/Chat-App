import React, { FunctionComponent } from "react";

export interface IIcon {
	size?: string;
	color?: string;
}

const Send: FunctionComponent<IIcon> = ({ size, color }: IIcon) => {
	return (
		<svg
			className="send-icon icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.4933 12.4382C11.4933 12.4382 -0.483351 9.96062 3.6786 7.55807C7.19075 5.53077 19.2947 2.04522 20.9857 2.94582C21.8863 4.63682 18.4007 16.7408 16.3734 20.2529C13.9709 24.4149 11.4933 12.4382 11.4933 12.4382Z"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M11.4933 12.4382L20.9857 2.9458"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Send;
