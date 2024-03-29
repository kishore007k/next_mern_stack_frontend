/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { RiChatSmile3Fill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { useEffect } from "react";

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	const [open, setOpen] = useState(false);

	const router = useRouter();

	const handleLogOut = () => {
		setIsLoggedIn(false);
		setOpen(false);
		localStorage.clear();
		router.push("/");
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("user"));
		setUser(data);
		setIsLoggedIn(data ? true : false);
	}, []);

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
						<ul className="flex items-center space-x-10 mr-12 relative">
							<Link href="/create/posts">
								<a className="font-inter text-red-400 p-3 bg-red-100 rounded-md drop-shadow-sm hover:bg-red-200 font-semibold hover:text-red-500 hover:drop-shadow-lg">
									Create Post
								</a>
							</Link>
							<Link href="#">
								<a className="fill-current text-red-400 transition-all hover:text-red-500">
									<RiChatSmile3Fill className="w-[30px] h-[30px]" />
								</a>
							</Link>
							<Link href="#">
								<a className="fill-current text-red-400 transition-all hover:text-red-500">
									<MdNotificationsActive className="w-[30px] h-[30px]" />
								</a>
							</Link>
						</ul>
						<div>
							{isLoggedIn ? (
								<div className="dropdown inline-block relative mt-1">
									<span className="cursor-pointer relative">
										<div className="w-[50px] h-[50px]">
											<img
												src={user?.userImage}
												alt={user?.userName}
												className="object-cover w-full h-full rounded-full drop-shadow-sm p-1 transition-all hover:bg-activeColor"
											/>
										</div>
										<div className="hidden w-[180px] flex-col justify-center dropdown-menu absolute top-15 right-0 bg-white font-klee font-semibold text-lg py-3 px-2 drop-shadow-lg rounded-md h-auto space-y-2">
											<div className="flex flex-col items-center space-y-2">
												<Link href="/profile">
													<a className="textHover text-center w-full hover:bg-red-50 rounded-md py-2">
														Profile
													</a>
												</Link>
												<Link href="/dashboard">
													<a className="textHover text-center w-full hover:bg-red-50 rounded-md py-2">
														Dashboard
													</a>
												</Link>
											</div>
											<button
												className="inline-flex items-center justify-center font-klee font-semibold text-lg textHover w-full hover:bg-red-50 rounded-md py-2"
												onClick={handleLogOut}
											>
												Logout
												<FiLogOut className="ml-2 mt-1 align-middle" />
											</button>
										</div>
									</span>
								</div>
							) : (
								<Link href="/auth">
									<a className="font-klee font-bold text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-400 rounded-md0">
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
					} fixed right-2 bg-red-100 active:bg-activeColor p-2 rounded-full z-50 drop-shadow-lg`}
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<IoClose className="w-8 h-8 text-red-500 active:text-activeColor fill-current object-fill" />
					) : (
						<HiMenuAlt3 className="w-8 h-8 text-red-500 active:text-activeColor fill-current object-fill" />
					)}
				</button>
				<div
					className={`${
						open ? "flex" : "hidden"
					} fixed inset-0 bg-red-50 z-40 flex-col items-center`}
				>
					<Link href="/profile">
						<a onClick={() => setOpen(false)}>
							<div className="w-[100px] h-[100px] mx-auto my-10 z-10 userImageNav relative drop-shadow-lg">
								<img
									src={user?.userImage}
									alt={user?.userName}
									className="w-full h-full object-cover rounded-full object-center drop-shadow-md"
								/>
							</div>
						</a>
					</Link>
					<p className="font-inter font-semibold text-lg text-red-500 uppercase tracking-wider">
						{user?.userName}
					</p>
					<div className="flex flex-col space-y-10 font-klee font-semibold text-xl text-red-800 text-center mt-20">
						<Link href="/">
							<a onClick={() => setOpen(false)} className="focus:hoverEffect">
								Home
							</a>
						</Link>
						<Link href="/create/posts">
							<a onClick={() => setOpen(false)} className="focus:hoverEffect">
								Blogs
							</a>
						</Link>
						<Link href="/">
							<a onClick={() => setOpen(false)} className="focus:hoverEffect">
								About
							</a>
						</Link>
						<Link href="/">
							<a onClick={() => setOpen(false)} className="focus:hoverEffect">
								Contact
							</a>
						</Link>
						{isLoggedIn ? (
							<button onClick={handleLogOut} className="flex items-center space-x-2">
								<span>Logout</span>
								<FiLogOut className="text-red-800" />
							</button>
						) : (
							<Link href="/auth">
								<a onClick={() => setOpen(false)} className="focus:hoverEffect">
									Login
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
