import axios from "axios";
import {
	fetchAllPostsStart,
	fetchAllPostsSuccess,
	fetchAllPostsFailure,
} from "../redux/reducer/postReducer";

const fetchAllPosts = async ({ dispatch }) => {
	const res = await axios
		.get("/api/posts")
		.then((res) => {
			dispatch(fetchAllPostsStart());

			if (res.data) {
				dispatch(fetchAllPostsSuccess(res.data.data));
			}
		})
		.catch((err) => {
			console.error({ err });
			dispatch(fetchAllPostsFailure(err));
		});
	return res;
};

export default fetchAllPosts;
