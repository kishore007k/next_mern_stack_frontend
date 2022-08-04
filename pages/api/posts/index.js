import {
	createPost,
	editPost,
	getAllPosts,
} from "../../../controllers/postController";
import connectDB from "../../../utils/connectDB";

const handler = async (req, res) => {
	switch (req.method) {
		case "GET":
			return await getAllPosts(req, res);

		case "POST":
			return await createPost(req, res);

		case "PUT":
			return await editPost(req, res);

		default:
			return res.send({ error: "Server Error" });
	}
};

export default connectDB(handler);
