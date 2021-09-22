import axios from "axios";
import { getSingleUser } from "../redux/actions";

const fetchUser = async ({ id, setLoading, dispatch }) => {
	const res = await axios
		.get(`/api/users/${id}`)
		.then((res) => {
			dispatch(getSingleUser(res.data));
			setLoading(false);
		})
		.catch((err) => console.error(err));
	return res;
};

export default fetchUser;
