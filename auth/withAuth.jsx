import { useRouter } from "next/router";

const withAuth = (WrapperComponent) => {
	const Func = (props) => {
		const router = useRouter();
		if (typeof window !== "undefined") {
			const localToken = localStorage.getItem("token");
			const persistData = JSON.parse(localStorage.getItem("persist:root"));
			const token = persistData
				? JSON.parse(persistData.userReducer).token
				: localToken;

			if (!token) {
				router.replace("/auth");
				return null;
			}
			return <WrapperComponent {...props} />;
		}
		return null;
	};

	return Func;
};

export default withAuth;
