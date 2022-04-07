// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "database/models";
import { connectToDatabase } from "helpers";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { username, email, avatar } = req.body;
		await connectToDatabase();

		const exists = await User.findOne({ email }).catch((error) =>
			res.status(500).json(error)
		);

		if (exists) return res.status(200).json(exists);

		await new User({ username, email, avatar })
			.save()
			.then((data: { username: string; email: string; avatar: string }) =>
				res.status(200).json(data)
			)
			.catch((error: string) => res.status(500).json(error));
	}
}
