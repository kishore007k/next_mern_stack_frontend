import connectDB from "../../../utils/connectDB";
import {
	userLogin,
	editUser,
	getAllUsers,
} from "../../../controllers/userController";

const handler = async (req, res) => {
	switch (req.method) {
		case "GET":
			return await getAllUsers(req, res);

		case "POST":
			return await userLogin(req, res);

		case "PUT":
			return await editUser(req, res);

		default:
			return res.status(400).send({ error: "Server Error" });
	}
};

export default connectDB(handler);
