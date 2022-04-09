import { Avatar, NavBar } from "components";
import { Edit, Save, Trash } from "icons";
import { NextPage } from "next";
import React from "react";
import { useTheme } from "styled-components";
import * as Shared from "styles/Shared.elements";

const Settings: NextPage = () => {
	const { colors, fontSizes, borderRadius } = useTheme();
	return (
		<Shared.Layout>
			<NavBar />
			<Shared.Column
				justify="space-between"
				width="100%"
				height="100%"
				padding="2rem"
			>
				<Shared.Column gap="1.5rem">
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
					<Shared.Column>
						<Shared.Input className="settings-input" placeholder="Username" />
					</Shared.Column>
					<Shared.Row align="center" gap="1rem">
						<Avatar size="3rem" />
						<Shared.ButtonPrimaryInfo
							className="settings-button"
							borderRadius={borderRadius["2xs"]}
						>
							<Edit color={colors.white[100]} size={fontSizes.lg} />
							<Shared.Text color={colors.white[100]}>Change</Shared.Text>
						</Shared.ButtonPrimaryInfo>
						<Shared.ButtonPrimaryDanger
							className="settings-button"
							borderRadius={borderRadius["2xs"]}
						>
							<Trash color={colors.white[100]} size={fontSizes.lg} />
							<Shared.Text color={colors.white[100]}>Remove</Shared.Text>
						</Shared.ButtonPrimaryDanger>
					</Shared.Row>
					<Shared.Row>
						<Shared.Text
							weight={700}
							color={colors.white[500]}
							size={fontSizes.sm}
							className="settings-message"
						>
							This account was created on January 1st 2022, 8:35:40 PM.
						</Shared.Text>
					</Shared.Row>
				</Shared.Column>
				<Shared.Row justify="flex-end" gap="1rem">
					<Shared.ButtonOutline
						className="settings-button"
						borderRadius={borderRadius["2xs"]}
					>
						<Shared.Text color={colors.white[100]}>Cancel</Shared.Text>
					</Shared.ButtonOutline>
					<Shared.ButtonPrimarySuccess
						className="settings-button"
						borderRadius={borderRadius["2xs"]}
					>
						<Save color={colors.white[100]} size={fontSizes.lg} />
						<Shared.Text color={colors.white[100]}>Save</Shared.Text>
					</Shared.ButtonPrimarySuccess>
				</Shared.Row>
				<Shared.Column>
					<Shared.Text
						weight={300}
						color={colors.error[100]}
						size={fontSizes.lg}
						className="settings-title"
					>
						Delete Account
					</Shared.Text>
					<Shared.Text
						weight={700}
						color={colors.error[400]}
						size={fontSizes.sm}
						className="settings-message"
					>
						Are you sure you want to delete your account? Everything will be
						deleted permenently and cannot be recoverd again!
					</Shared.Text>
				</Shared.Column>
				<Shared.Row justify="flex-end" gap="1rem">
					<Shared.ButtonOutline
						className="settings-button"
						borderRadius={borderRadius["2xs"]}
					>
						<Shared.Text color={colors.white[100]}>Cancel</Shared.Text>
					</Shared.ButtonOutline>
					<Shared.ButtonPrimaryDanger
						className="settings-button"
						borderRadius={borderRadius["2xs"]}
					>
						<Trash color={colors.white[100]} size={fontSizes.lg} />
						<Shared.Text color={colors.white[100]}>Delete Account</Shared.Text>
					</Shared.ButtonPrimaryDanger>
				</Shared.Row>
			</Shared.Column>
		</Shared.Layout>
	);
};

export default Settings;
