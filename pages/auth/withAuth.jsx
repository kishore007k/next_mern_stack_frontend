import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const verifyToken = ({ id, secret }) => {
	const response = axios
		.get(`/api/user/${id}`)
		.then((res) => {
			if (res.data.data.secretKey !== secret) {
				return false;
			}
			return true;
		})
		.catch((err) => console.log(err));
	return response;
};

const withAuth = (WrapperComponent) => {
	return async (props) => {
		if (typeof window !== "undefined") {
			const router = useRouter();
			const token = Cookies.get("token");
			const user = JSON.parse(Cookies.get("userData"));
			console.log(user);

			if (!token) {
				router.replace("/auth");
				return null;
			}
			return <WrapperComponent {...props} />;
		}
		return null;
	};
};

export default withAuth;
