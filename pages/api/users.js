import bcrypt from "bcryptjs";
import connectDB from "../../utils/connectDB";
import UserModel from "../../models/userModel";

const handler = async (req, res) => {
	switch (req.method) {
		case "GET":
			try {
				const users = await UserModel.find({});
				res.status(200).send({ data: users });
			} catch (error) {
				res.status(400).send({ error: error });
			}
			break;

		case "POST":
			try {
				const { userName, email, password, cPassword } = req.body;
				if (password !== cPassword) {
					return res.send({ message: "Passwords doesn't match" });
				}
				const hashed = bcrypt.hashSync(password, 10);
				const newUser = new UserModel({
					userName,
					email,
					password: hashed,
				});
				const saved = await newUser.save();
				if (saved) return res.send({ data: saved });
			} catch (error) {
				res.send({ error: error });
			}
			break;

		default:
			res.status(400).send({ error: "Server Error" });
			break;
	}
};

export default connectDB(handler);
