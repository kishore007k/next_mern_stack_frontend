/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState("");
	const [user, setUser] = useState({});

	const [open, setOpen] = useState(false);

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
		const user = JSON.parse(Cookies.get("userData"));
		setUser(user);
		setOpen(false);
	}, [token, userToken]);

	return (
		<>
			{/* Desktop View */}
			<nav className="py-5 border-b border-lightBorder filter bg-white/70 fixed w-screen z-10 backdrop-filter backdrop-blur-md backdrop-saturate-200">
				<div className="container mx-auto max-w-screen-xl flex justify-between items-center">
					<div className="mx-auto xl:mx-0">
						<Link href="/">
							<a className="font-rampart font-bold xl:text-2xl lg:text-5xl text-3xl">
								K-Blog📝
							</a>
						</Link>
					</div>
					<div className="xl:flex items-center hidden">
						<ul className="flex justify-center space-x-10 mr-12 font-bold text-skin-base text-lg cursor-pointer relative">
							<Link href="/">
								<a className="hoverEffect font-klee">Home</a>
							</Link>
							<Link href="/create/posts">
								<a className="hoverEffect font-klee">Blogs</a>
							</Link>
							<Link href="/">
								<a className="hoverEffect font-klee">About</a>
							</Link>
							<Link href="/">
								<a className="hoverEffect font-klee">Contact</a>
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

			{/* Mobile View */}
			<div className="block lg:hidden">
				<button
					className={`${
						open ? "top-2" : "bottom-2"
					} fixed right-2 bg-blue-100 active:bg-active p-2 rounded-full z-50 drop-shadow-lg`}
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<IoClose className="w-8 h-8 text-blue-500 active:text-active fill-current object-fill" />
					) : (
						<HiMenuAlt3 className="w-8 h-8 text-blue-500 active:text-active fill-current object-fill" />
					)}
				</button>
				<div
					className={`${
						open ? "flex" : "hidden"
					} fixed inset-0 bg-blue-50 z-40 flex-col items-center`}
				>
					<div className="w-[100px] h-[100px] mx-auto my-10 z-10 userImageNav relative drop-shadow-lg">
						<img
							src={user?.userImage}
							alt={user?.userName}
							className="w-full h-full object-cover rounded-full object-center drop-shadow-md"
						/>
					</div>
					<p className="font-inter font-semibold text-lg text-blue-500 uppercase tracking-wider">
						{user?.userName}
					</p>
					<div className="flex flex-col space-y-10 font-klee font-semibold text-xl text-blue-800 text-center mt-20">
						<Link href="/">
							<a className="focus:hoverEffect">Home</a>
						</Link>
						<Link href="/create/posts">
							<a className="focus:hoverEffect">Blogs</a>
						</Link>
						<Link href="/">
							<a className="focus:hoverEffect">About</a>
						</Link>
						<Link href="/">
							<a className="focus:hoverEffect">Contact</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
