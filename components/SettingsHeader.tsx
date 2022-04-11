import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";

const SettingsHeader: FunctionComponent = () => {
	const { colors, fontSizes } = useTheme();
	return (
		<>
			<Shared.Row>
				<Shared.Text
					weight={500}
					className="settings-heading"
					color={colors.white[100]}
					size={fontSizes["3xl"]}
				>
					Account
				</Shared.Text>
			</Shared.Row>
			<Shared.Row>
				<Shared.Column gap="0.2rem">
					<Shared.Text
						weight={300}
						color={colors.white[100]}
						size={fontSizes.lg}
						className="settings-title"
					>
						Profile
					</Shared.Text>
					<Shared.Text
						weight={700}
						color={colors.white[500]}
						size={fontSizes.sm}
						className="settings-message"
					>
						This information will be displayed publicily.
					</Shared.Text>
				</Shared.Column>
			</Shared.Row>
		</>
	);
};

export default SettingsHeader;
