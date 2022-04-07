import mongoose from "mongoose";
const connectToDatabase = async () => {
	await mongoose
		.connect("mongodb://127.0.0.1/Chat-App")
		.then(() => console.log("Connected to Database."))
		.catch((error) => console.log(error));
};

export default connectToDatabase;
