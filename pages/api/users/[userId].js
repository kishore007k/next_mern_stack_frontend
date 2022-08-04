import connectDB from "../../../utils/connectDB";
import { deleteUser, getSingleUser } from "../../../controllers/userController";

const handler = async (req, res) => {
	switch (req.method) {
		case "DELETE":
			return deleteUser(req, res);

		case "GET":
			return getSingleUser(req, res);

		default:
			res.status(400).send({ error: "Server Error" });
			break;
	}
};

export default connectDB(handler);
