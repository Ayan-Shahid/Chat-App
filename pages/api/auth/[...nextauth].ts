import { instance } from "instance";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		// ...add more providers here
	],
	callbacks: {
		signIn: async ({ user, account, profile, email, credentials }) => {
			const data = await instance
				.post("/user/register", {
					username: user.name,
					email: user.email,
					avatar: user.image,
				})
				.catch(({ response: { data } }) => console.log(data));
			return true;
		},
	},
});
