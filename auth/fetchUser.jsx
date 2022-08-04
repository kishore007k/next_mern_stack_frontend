import axios from "axios";
import {
	getSingleUserRequest,
	getSingleUserSuccess,
	getSingleUserFailure,
} from "../redux/reducer/userReducer";

const fetchUser = async ({ id, dispatch }) => {
	const res = await axios
		.get(
			`${
				process.env.NODE_ENV === "production"
					? process.env.BACKEND_URL_PROD
					: process.env.BACKEND_URL_DEV
			}/api/users/${id}`
		)
		.then((res) => {
			dispatch(getSingleUserRequest());

			if (res.data) {
				dispatch(getSingleUserSuccess(res.data));
			}
		})
		.catch((err) => {
			console.error(err);
			dispatch(getSingleUserFailure(err));
		});
	return res;
};

export default fetchUser;
