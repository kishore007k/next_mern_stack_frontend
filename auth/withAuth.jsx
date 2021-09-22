import { useRouter } from "next/router";

const withAuth = (WrapperComponent) => {
	const Func = (props) => {
		const router = useRouter();
		if (typeof window !== "undefined") {
			const token = localStorage.getItem("token");
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
