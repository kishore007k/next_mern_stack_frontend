import { deletePost, getPost } from "../../../controllers/postController";
import connectDB from "../../../utils/connectDB";

const handler = async (req, res) => {
	switch (req.method) {
		case "GET":
			return await getPost(req, res);

		case "DELETE":
			return await deletePost(req, res);

		default:
			return res.send({ error: "Server Error" });
	}
};

export default connectDB(handler);
