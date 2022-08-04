import connectDB from "../../../utils/connectDB";
import { addUser } from "../../../controllers/userController";

const handler = async (req, res) => {
	switch (req.method) {
		case "POST":
			return await addUser(req, res);

		default:
			return res.status(400).send({ error: "Server Error" });
	}
};

export default connectDB(handler);
