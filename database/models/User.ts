import { Schema, Document, model, models } from "mongoose";

interface IUserSchema extends Document {
	username: string;
	email: string;
	avatar?: string;
}

const UserSchema = new Schema<IUserSchema>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
		},
	},
	{ collection: "Users", timestamps: true }
);

const User = models.User || model<IUserSchema>("User", UserSchema);
export default User;
