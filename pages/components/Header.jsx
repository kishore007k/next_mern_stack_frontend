/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

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
		var jsonStr = Cookies.get("userData");
		var user = new Function("return " + jsonStr)();
		setUser(user);
		setOpen(false);
	}, [token, userToken]);

	return (
		<>
			{/* Desktop View */}
			<nav
				className={`${
					isLoggedIn ? "py-2" : "py-5"
				} border-b border-lightBorder flex items-center filter bg-white/70 fixed w-screen z-10 backdrop-filter backdrop-blur-md backdrop-saturate-200`}
			>
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
								<div className="dropdown inline-block relative mt-1">
									<button className="cursor-pointer relative">
										<div className="w-[50px] h-[50px]">
											<img
												src={user?.userImage}
												alt={user?.userName}
												className="object-cover w-full h-full rounded-full drop-shadow-sm p-1 transition-all hover:bg-activeColor"
											/>
										</div>
										<div className="hidden w-[180px] flex-col dropdown-menu absolute top-15 right-0 bg-white font-klee font-semibold text-lg py-3 px-1 drop-shadow-lg h-auto space-y-2">
											<div className="flex flex-col items-center space-y-2">
												<Link href="/profile">
													<a className="textHover w-full hover:bg-gray-50 py-2">Profile</a>
												</Link>
												<Link href="/dashboard">
													<a className="textHover w-full hover:bg-gray-50 py-2">Dashboard</a>
												</Link>
											</div>
											<button
												className="inline-flex items-center justify-center font-klee font-semibold text-lg textHover w-full hover:bg-gray-50 py-2"
												onClick={handleLogOut}
											>
												Logout
												<FiLogOut className="ml-2 mt-1 align-middle" />
											</button>
										</div>
									</button>
								</div>
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
					} fixed right-2 bg-blue-100 active:bg-activeColor p-2 rounded-full z-50 drop-shadow-lg`}
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<IoClose className="w-8 h-8 text-blue-500 active:text-activeColor fill-current object-fill" />
					) : (
						<HiMenuAlt3 className="w-8 h-8 text-blue-500 active:text-activeColor fill-current object-fill" />
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

{
	/* <div class="p-10">

<div class="dropdown inline-block relative">
	<button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
		<span class="mr-1">Dropdown</span>
		<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
	</button>
	<ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
		<li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
		<li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
		<li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
	</ul>
</div>

</div> */
}
