import axios from "axios";
import { getAllPosts } from "../redux/actions";

const fetchAllPosts = async ({ dispatch }) => {
	const res = await axios
		.get("/api/posts")
		.then((res) => {
			dispatch(getAllPosts(res.data.data));
		})
		.catch((err) => console.error(err));
	return res;
};

export default fetchAllPosts;
