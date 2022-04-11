import React, { FunctionComponent, InputHTMLAttributes } from "react";
import * as Shared from "styles/Shared.elements";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {}

const FormInput: FunctionComponent<IFormInput> = ({ ...props }: IFormInput) => {
	return (
		<Shared.Column gap="0.5rem">
			<Shared.Input
				{...props}
				width="100%"
				required
				min={1}
				className="settings-input"
			/>
		</Shared.Column>
	);
};

export default FormInput;
