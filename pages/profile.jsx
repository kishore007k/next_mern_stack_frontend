/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IoLocationSharp } from "react-icons/io5";
import { HiCake } from "react-icons/hi";
import { CgLink } from "react-icons/cg";
import { GoMarkGithub } from "react-icons/go";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSingleUser } from "../redux/actions";
import { FaUserEdit } from "react-icons/fa";
import Loader from "./components/Loader";
import PostCard from "./components/PostCard";

const Profile = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state?.users?.user);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		var jsonStr = Cookies.get("userData");
		var localUser = new Function("return " + jsonStr)();
		const fetchUser = async ({ id }) => {
			const res = await axios
				.get(`/api/users/${id}`)
				.then((res) => {
					dispatch(getSingleUser(res.data));
					setLoading(false);
				})
				.catch((err) => console.error(err));
			return res;
		};
		fetchUser({ id: localUser._id });
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Head>
						<title>User Profile</title>
					</Head>
					{/* Container */}
					<div className="mb-40 container max-w-screen-xl mx-auto overflow-hidden lg:px-5 xl:px-0">
						{/* Gradient */}
						<div className="absolute top-0 right-0 left-0 bg-blue-500 h-80 drop-shadow-sm" />

						{/* Card */}
						<div className="relative bg-white border-[1px] border-border lg:rounded-lg drop-shadow-sm top-32 mb-40 px-2 pb-10">
							<div className="w-[170px] h-[170px] mx-auto -translate-y-2/4">
								<img
									src={user?.userImage}
									alt={user?.userName}
									className="object-cover w-full h-full rounded-full p-2 bg-blue-500"
								/>
							</div>
							{/* White Div */}
							<div>
								<button className="absolute hidden lg:block top-5 right-5 bg-blue-400 px-3 py-2 rounded-sm drop-shadow-md transition-all hover:bg-blue-500 hover:drop-shadow-lg text-white">
									Edit Profile
								</button>
								<button className="absolute block lg:hidden top-5 right-5 bg-blue-400 px-3 py-2 rounded-sm drop-shadow-md transition-all hover:bg-blue-500 hover:drop-shadow-lg text-white">
									<FaUserEdit className="w-5 h-5" />
								</button>
								<div className="flex flex-col justify-center items-center space-y-5">
									<h3 className="font-inter text-xl text-gray-700 font-bold tracking-wider pb-5">
										Kishore Kumar
									</h3>
									<p className="lg:w-3/5 w-full text-center font-sourceCodePro font-semibold text-base text-gray-600 leading-9 pb-5">
										I&apos;m An Engineering Student currently pusuing my B.E degree in
										Mechanical Engineering at Panimalar Engineering College.
									</p>
									<div className="lg:flex justify-evenly w-full items-center text-gray-700 font-medium font-inter tracking-widest space-y-5 lg:space-y-0">
										<div className="flex items-center space-x-1">
											<IoLocationSharp className="w-7 h-7" />
											<span>Chennai</span>
										</div>
										<div className="flex items-center space-x-1">
											<HiCake className="w-7 h-7" />
											<span>Joined on Aug 1, 2020</span>
										</div>
										<div>
											<a
												href="https://kishore.netlify.app/"
												className="flex items-center space-x-1 transition-all hover:text-red-500"
											>
												<CgLink className="w-7 h-7" />
												<span>https://kishore.netlify.app/</span>
											</a>
										</div>
										<div>
											<a
												href="https://github.com/kishore007k"
												rel="noreferrer"
												target="_blank"
											>
												<GoMarkGithub className="w-7 h-7 hover:text-red-500 cursor-pointer" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* User's Posts */}
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
							{/* Left Side */}
							<div className="hidden lg:block col-span-1 bg-white border-[1px] border-border rounded-lg drop-shadow-sm px-3 py-5 space-y-5">
								<div>
									<div className="flex space-x-5 py-3 cursor-default hover:bg-gray-50 px-2 items-center">
										<svg
											className="w-8 h-8 text-gray-700 fill-current"
											viewBox="0 0 24 24"
										>
											<path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
										</svg>
										<span className="font-sourceCodePro text-base font-semibold text-gray-800">
											6 Posts Published
										</span>
									</div>
									<div className="w-full h-[1px] bg-gray-200 mt-2"></div>
								</div>
								<div>
									<div className="space-x-2 px-2">
										<div className="flex space-x-5 mb-5 items-center">
											<svg
												className="w-8 h-8 text-gray-700 fill-current"
												viewBox="0 0 24 24"
											>
												<path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z" />
											</svg>
											<span className="font-sourceCodePro text-base font-semibold text-gray-800">
												6 Categories
											</span>
										</div>
										<div className="flex flex-col space-y-3 font-sourceCodePro font-medium text-gray-700 text-sm tracking-wider">
											<a href="" className="hover:bg-gray-50 hover:text-red-400 px-2 py-3">
												Romance
											</a>
											<a href="" className="hover:bg-gray-50 hover:text-red-400 px-2 py-3">
												Action
											</a>
											<a href="" className="hover:bg-gray-50 hover:text-red-400 px-2 py-3">
												Adventure
											</a>
										</div>
									</div>
									<div className="w-full h-[1px] bg-gray-200 mt-2"></div>
								</div>
								<div>
									<div className="flex space-x-5 items-center px-2 py-3">
										<svg
											className="w-6 h-6 text-gray-700 fill-current"
											viewBox="0 0 24 24"
										>
											<path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z" />
										</svg>
										<span className="font-sourceCodePro text-base font-semibold text-gray-800">
											6 Tags
										</span>
									</div>
									<div className="flex flex-col space-y-3 font-sourceCodePro font-medium text-gray-700 text-sm tracking-wider">
										<a href="" className="hover:bg-gray-50 hover:text-red-400 px-2 py-3">
											Beauty
										</a>
										<a href="" className="hover:bg-gray-50 hover:text-red-400 px-2 py-3">
											Markdown
										</a>
										<a href="" className="hover:bg-gray-50 hover:text-red-400 px-2 py-3">
											Nextjs
										</a>
									</div>
								</div>
							</div>

							{/* Right Side */}
							{user?.userPosts === [] ? (
								<></>
							) : (
								<div className="col-span-3 flex flex-col space-y-10">
									{user.userPosts.map((post) => (
										<PostCard key={post._id} post={post} user={user} />
									))}
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Profile;
