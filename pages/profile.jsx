/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IoLocationSharp } from "react-icons/io5";
import { HiCake } from "react-icons/hi";
import { CgLink } from "react-icons/cg";
import { GoMarkGithub } from "react-icons/go";

const Profile = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		var jsonStr = Cookies.get("userData");
		var user = new Function("return " + jsonStr)();
		setUser(user);
	}, []);

	return (
		<>
			<Head>
				<title>User Profile</title>
			</Head>
			{/* Gradient */}
			<div className="mt-10">
				<div className="absolute top-0 right-0 left-0 bg-blue-500 w-screen h-80 drop-shadow-sm" />
				<div className="relative container max-w-screen-xl mx-auto bg-white border-[1px] border-border rounded-lg drop-shadow-sm top-32 mb-40 px-2 pb-10">
					<div className="w-[170px] h-[170px] mx-auto -translate-y-2/4">
						<img
							src={user?.userImage}
							alt={user?.userName}
							className="object-cover w-full h-full rounded-full p-2 bg-blue-500"
						/>
					</div>
					{/* White Div */}
					<div>
						<button className="absolute top-5 right-5 bg-blue-400 px-3 py-2 rounded-sm drop-shadow-md transition-all hover:bg-blue-500 hover:drop-shadow-lg text-white">
							Edit Profile
						</button>
						<div className="flex flex-col justify-center items-center space-y-5">
							<h3 className="font-inter text-xl text-gray-700 font-bold tracking-wider pb-5">
								Kishore Kumar
							</h3>
							<p className="w-3/5 text-center font-sourceCodePro font-semibold text-base text-gray-600 leading-9 pb-5">
								I&apos;m An Engineering Student currently pusuing my B.E degree in
								Mechanical Engineering at Panimalar Engineering College.
							</p>
							<div className="flex justify-evenly w-full items-center text-gray-700 font-medium font-inter tracking-widest">
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
				<div className="grid grid-cols-4 gap-5">
					<div className="col-span-1 bg-white border-[1px] border-border rounded-lg drop-shadow-sm">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
							</svg>
							<span>6 Posts Published</span>
						</div>
						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm0-19l8.032 4.685-8.032 4.685-8.029-4.685 8.029-4.685zm0-2.315l-11.998 7 11.998 7 12.002-7-12.002-7z" />
								</svg>
								<span>6 Categories</span>
							</div>
							<div>
								<a href="">Romance</a>
								<a href="">Action</a>
								<a href="">Adventure</a>
							</div>
						</div>
						<div>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z" />
								</svg>
								<span>6 Tags</span>
							</div>
							<div>
								<a href="">Beauty</a>
								<a href="">Markdown</a>
								<a href="">Nextjs</a>
							</div>
						</div>
					</div>
					<div className="col-span-3 bg-white border-[1px] border-border rounded-lg drop-shadow-sm">
						Post Card
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
