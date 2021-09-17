import connectDB from "../../../utils/connectDB";
import {
	addUser,
	editUser,
	getAllUsers,
} from "../../../controllers/userController";

const handler = async (req, res) => {
	switch (req.method) {
		case "GET":
			return getAllUsers(req, res);

		case "POST":
			return await addUser(req, res);

		case "PUT":
			return await editUser(req, res);

		default:
			res.status(400).send({ error: "Server Error" });
			break;
	}
};

export default connectDB(handler);
