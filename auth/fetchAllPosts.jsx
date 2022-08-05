import axios from "axios";
import {
	fetchAllPostsStart,
	fetchAllPostsSuccess,
	fetchAllPostsFailure,
} from "../redux/reducer/postReducer";

const fetchAllPosts = async ({ dispatch }) => {
	const res = await axios
		.get(
			`${
				process.env.NODE_ENV === "production"
					? process.env.BACKEND_URL_PROD
					: process.env.BACKEND_URL_DEV
			}/api/posts`,
			{
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			}
		)
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
