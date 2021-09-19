import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState("");

	const router = useRouter();
	const userToken = useSelector((state) => state?.users?.token);

	const handleLogOut = () => {
		setIsLoggedIn(false);
		Cookies.remove("userData");
		Cookies.remove("token");
		router.push("/");
	};

	useEffect(() => {
		const lToken = Cookies.get("token");
		if (lToken || userToken) {
			setIsLoggedIn(true);
			setToken(lToken);
		}
	}, [token, userToken]);

	return (
		<nav className="py-5 border-b border-lightBorder filter bg-white bg-opacity-70 fixed w-screen z-10 backdrop-filter backdrop-blur-md backdrop-saturate-150">
			<div className="container mx-auto max-w-screen-xl flex justify-between items-center">
				<div className="mx-auto lg:mx-0">
					<Link href="/">
						<a className="font-rampart font-bold lg:text-2xl text-3xl">K-Blog📝</a>
					</Link>
				</div>
				<div className="lg:flex items-center hidden">
					<ul className="flex justify-center space-x-10 mr-12 font-semibold text-skin-base text-lg cursor-pointer relative">
						<Link href="/">
							<a className="hoverEffect font-klee">Services</a>
						</Link>
						<Link href="/create/posts">
							<a className="hoverEffect font-klee">Work</a>
						</Link>
						<Link href="/">
							<a className="hoverEffect font-klee">Blog</a>
						</Link>
						<Link href="/">
							<a className="hoverEffect font-klee">About</a>
						</Link>
					</ul>
					<div>
						{isLoggedIn ? (
							<button
								onClick={handleLogOut}
								className="font-klee font-bold text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-500"
							>
								Log Out
							</button>
						) : (
							<Link href="/auth">
								<a className="font-klee font-bold text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-500">
									Login
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
