/* eslint-disable @next/next/no-img-element */
import withAuth from "../../auth/withAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import fetchUser from "../../auth/fetchUser";
import Loader from "../components/Loader";
import Link from "next/link";
import FileBase from "react-file-base64";
import axios from "axios";
import { updateUser } from "../../redux/actions";
import router from "next/router";

const Edit = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state?.users?.user);

	const [loading, setLoading] = useState(true);
	const [userName, setUserName] = useState(user?.userName);
	const [email, setEmail] = useState(user?.email);
	const [name, setName] = useState(user?.name ? user?.name : "");
	const [userImage, setUserImage] = useState(
		user?.userImage ? user?.userImage : ""
	);

	const [websiteLink, setWebsiteLink] = useState(
		user?.websiteLink ? user?.websiteLink : ""
	);
	const [location, setLocation] = useState(user?.location ? user?.location : "");
	const [bio, setBio] = useState(user?.bio ? user?.bio : "");

	const [work, setWork] = useState(user?.work ? user?.work : "");
	const [education, setEducation] = useState(
		user?.education ? user?.education : ""
	);

	const updateUserDetails = async (e) => {
		e.preventDefault();
		const res = await axios
			.put("/api/users", {
				userId: user._id,
				updatedData: {
					name,
					email,
					userName,
					userImage,
					websiteLink,
					location,
					bio,
					work,
					education,
				},
			})
			.then((res) => {
				dispatch(updateUser(res.data.message));
				router.push("/profile");
			})
			.catch((err) => console.error(err));
		return res;
	};

	useEffect(() => {
		var jsonStr = localStorage.getItem("userData");
		var localUser = new Function("return " + jsonStr)();
		fetchUser({ id: localUser._id, setLoading, dispatch });
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="px-5 xl:px-0">
					<h1 className="font-sourceCodePro font-semibold text-xl xl:text-2xl py-10 text-gray-700 text-center xl:text-left">
						Settings for{" "}
						<Link href="/profile">
							<a className="text-blue-400 transition-all hover:underline hover:text-blue-500">
								@{user.userName}
							</a>
						</Link>
					</h1>
					<div className="flex flex-col">
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
							{/* Left Side */}
							<div className="hidden lg:block col-span-1 bg-white border-[1px] border-border rounded-lg drop-shadow-sm px-3 py-5 space-y-5">
								<div>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
													fill="#FFCC4D"
												></path>
												<path
													d="M7.842 15.123c.025.1.649 2.433 4.158 2.433 3.51 0 4.133-2.333 4.158-2.433a.277.277 0 00-.464-.265c-.011.01-1.086 1.03-3.695 1.03-2.607 0-3.683-1.02-3.692-1.03a.28.28 0 00-.452.087.278.278 0 00-.014.178zM10.056 9.5c0 1.074-.622 1.944-1.39 1.944-.767 0-1.388-.87-1.388-1.944 0-1.074.621-1.944 1.389-1.944.767 0 1.389.87 1.389 1.944zm6.666 0c0 1.074-.621 1.944-1.389 1.944-.767 0-1.389-.87-1.389-1.944 0-1.074.622-1.944 1.39-1.944.767 0 1.388.87 1.388 1.944z"
													fill="#664500"
												></path>
											</svg>{" "}
											<span>Profile</span>
										</a>
									</Link>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M12 16.444a4.444 4.444 0 110-8.889 4.444 4.444 0 010 8.89zm8.889-6.11H19.02a7.16 7.16 0 00-.879-2.12l1.322-1.32a1.112 1.112 0 000-1.572l-.786-.786a1.11 1.11 0 00-1.571 0l-1.321 1.322a7.167 7.167 0 00-2.12-.88V3.112A1.111 1.111 0 0012.557 2h-1.112a1.11 1.11 0 00-1.11 1.111V4.98a7.167 7.167 0 00-2.12.879l-1.32-1.322a1.111 1.111 0 00-1.572 0l-.786.786a1.112 1.112 0 000 1.571l1.322 1.321a7.172 7.172 0 00-.88 2.12H3.112A1.111 1.111 0 002 11.443v1.112a1.11 1.11 0 001.111 1.11H4.98c.18.76.48 1.473.879 2.119l-1.322 1.322a1.112 1.112 0 000 1.571l.786.786a1.113 1.113 0 001.571 0l1.321-1.322c.655.405 1.37.702 2.12.88v1.867A1.111 1.111 0 0011.443 22h1.112a1.111 1.111 0 001.11-1.111V19.02c.76-.18 1.473-.48 2.119-.879l1.322 1.322a1.108 1.108 0 001.571 0l.786-.786a1.111 1.111 0 000-1.571l-1.322-1.321a7.16 7.16 0 00.88-2.12h1.867A1.111 1.111 0 0022 12.557v-1.112a1.111 1.111 0 00-1.111-1.11z"
													fill="#66757F"
												></path>
											</svg>{" "}
											<span>Customization</span>
										</a>
									</Link>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M14.222 20.333c0 1.228-4.444 1.228-4.444 0v-5.555a2.222 2.222 0 114.444 0v5.555z"
													fill="#C1694F"
												></path>
												<path
													d="M16.444 3.667H7.556v11.11h13.333V8.112a4.444 4.444 0 00-4.445-4.444z"
													fill="#99AAB5"
												></path>
												<path
													d="M7.556 3.667A4.444 4.444 0 003.11 8.11v6.667H12V8.11a4.445 4.445 0 00-4.444-4.444"
													fill="#292F33"
												></path>
												<path
													d="M20.889 9.222h-6.667a1.111 1.111 0 000 2.222h4.445v1.112a1.11 1.11 0 001.11 1.11h1.112A1.111 1.111 0 0022 12.557v-2.223a1.111 1.111 0 00-1.111-1.11z"
													fill="#DD2E44"
												></path>
											</svg>{" "}
											<span>Notifications</span>
										</a>
									</Link>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M14.728 9.999a9.75 9.75 0 00-1.6 1.345c-.07-2.358-.637-5.408-3.762-6.901-.618-3.364-7.83-1.655-7.183-1.329 1.285.65 1.97 2.305 2.796 3.175 1.474 1.552 3.113 1.647 3.928.433 1.927 1.252 2.054 3.627 1.995 6.166-.006.28-.013.542-.013.78v7.776c0 .614 2.223.614 2.223 0v-6.383c.3-.53 1.179-1.947 2.46-2.941.881.774 2.301.527 3.59-.83.829-.871 1.275-2.525 2.56-3.176.68-.342-7.11-2.218-6.993 1.885"
													fill="#77B255"
												></path>
											</svg>{" "}
											<span>Account</span>
										</a>
									</Link>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M4.222 4.778A2.222 2.222 0 002 7v10a2.222 2.222 0 002.222 2.222h15.556A2.222 2.222 0 0022 17V7s0-2.222-2.222-2.222H4.222z"
													fill="#FFAC33"
												></path>
												<path d="M22 10.333H2V7.556h20v2.777z" fill="#292F33"></path>
												<path
													d="M19.778 15.889H4.222v-3.333h15.556v3.333z"
													fill="#F4F7F9"
												></path>
												<path
													d="M12.556 15.333c-.947 0-1.301-.672-1.372-1-.304.023-.6.168-1.002.424-.426.27-.908.576-1.515.576-.665 0-1.07-.375-1.111-1.11-.002-.032.02-.105.011-.105-1.032 0-1.779.978-1.786.989a.555.555 0 11-.895-.658c.042-.058 1.064-1.338 2.67-1.338 1.076 0 1.137.764 1.154 1.049l.003.06c.27-.018.55-.196.873-.401.533-.339 1.196-.762 2.083-.535.484.124.56.574.588.743a.764.764 0 00.027.125c.005 0 .082.05.321.073.456.041.957-.155 1.486-.363.549-.216 1.117-.439 1.728-.439 1.883 0 2.649.909 2.73 1.013a.556.556 0 01-.876.684c-.013-.015-.516-.585-1.854-.585-.401 0-.848.175-1.322.36-.56.22-1.351.438-1.941.438z"
													fill="#8899A6"
												></path>
											</svg>{" "}
											<span>Billing</span>
										</a>
									</Link>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M20.889 9.222a1.111 1.111 0 01-1.111 1.111h-3.334a1.111 1.111 0 01-1.11-1.11V8.11A1.111 1.111 0 0116.443 7h3.334a1.11 1.11 0 011.11 1.111v1.111zm-12.222 0a1.111 1.111 0 01-1.111 1.111H4.222a1.111 1.111 0 01-1.11-1.11V8.11A1.111 1.111 0 014.221 7h3.334a1.111 1.111 0 011.11 1.111v1.111z"
													fill="#DAC8B1"
												></path>
												<path
													d="M22 20.889A1.111 1.111 0 0120.889 22H3.11A1.111 1.111 0 012 20.889V9.222a1.111 1.111 0 011.111-1.11H20.89A1.111 1.111 0 0122 9.221V20.89z"
													fill="#F1DCC1"
												></path>
												<path
													d="M14.222 7V5.889c0-.41-.224-.765-.555-.957v-.154a1.111 1.111 0 00-1.111-1.111h-1.112a1.11 1.11 0 00-1.11 1.11v.155a1.106 1.106 0 00-.556.957V7h-.556v15h5.556V7h-.556z"
													fill="#DAC8B1"
												></path>
												<path
													d="M10.889 7H9.778V5.889h1.11V7zm2.222 0h1.111V5.889h-1.11V7zm-.555 0h-1.112V5.889h1.112V7z"
													fill="#55ACEE"
												></path>
												<path
													d="M11.444 18.111h-1.11v-7.778h1.11v7.778zm2.223 0h-1.111v-7.778h1.11v7.778z"
													fill="#3B88C3"
												></path>
												<path
													d="M16.444 18.111h-1.11v-6.667h1.11v6.667zm2.223 0h-1.111v-6.667h1.11v6.667zm2.222 0h-1.111v-6.667h1.11v6.667zm-16.667 0h-1.11v-6.667h1.11v6.667zm2.222 0h-1.11v-6.667h1.11v6.667zm2.223 0H7.556v-6.667h1.11v6.667zm-4.445 1.667h-1.11v-1.111h1.11v1.11zm2.222 0h-1.11v-1.111h1.11v1.11zm2.223 0H7.556v-1.111h1.11v1.11z"
													fill="#55ACEE"
												></path>
												<path
													d="M11.444 19.778h-1.11v-1.111h1.11v1.11zm2.223 0h-1.111v-1.111h1.11v1.11z"
													fill="#3B88C3"
												></path>
												<path
													d="M16.444 19.778h-1.11v-1.111h1.11v1.11zm2.223 0h-1.111v-1.111h1.11v1.11zm2.222 0h-1.111v-1.111h1.11v1.11z"
													fill="#55ACEE"
												></path>
												<path
													d="M4.222 22h-1.11v-1.667h1.11V22zm2.222 0h-1.11v-1.667h1.11V22zm2.223 0H7.556v-1.667h1.11V22zm2.777 0h-1.11v-1.667h1.11V22zm2.223 0h-1.111v-1.667h1.11V22zm2.777 0h-1.11v-1.667h1.11V22zm1.112 0h1.11v-1.667h-1.11V22zm3.333 0h-1.111v-1.667h1.11V22z"
													fill="#66757F"
												></path>
											</svg>{" "}
											<span>Organization</span>
										</a>
									</Link>
									<Link href="/">
										<a className="flex space-x-2 items-center text-gray-700 font-klee font-semibold text-lg px-2 py-3 rounded-md hover:bg-red-50 hover:text-red-500 transition-all">
											<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
												<path
													d="M7.556 22a.554.554 0 01-.494-.81l3.87-7.523h-6.71a.556.556 0 01-.363-.976L16.082 2.135a.555.555 0 01.857.675l-3.87 7.523h6.709a.556.556 0 01.363.976L7.919 21.865a.555.555 0 01-.363.135"
													fill="#FFAC33"
												></path>
											</svg>{" "}
											<span>Extensions</span>
										</a>
									</Link>
								</div>
							</div>
							{/* Right Side */}
							<div className="col-span-3 flex flex-col space-y-10 row-span-2">
								<div className="border-[1px] border-border p-5 xl:p-7 rounded-lg drop-shadow-sm bg-white font-inter text-gray-700">
									<h1 className="font-inter text-xl xl:text-2xl font-semibold text-gray-700 mb-5 xl:mb-10">
										User
									</h1>
									<div className="space-y-8">
										<div className="flex flex-col space-y-3">
											<label htmlFor="name" className="text-base xl:text-lg">
												Name
											</label>
											<input
												type="text"
												id="name"
												value={name}
												onChange={(e) => setName(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="Full Name of the user..."
											/>
										</div>
										<div className="flex flex-col space-y-3">
											<label htmlFor="email" className="text-base xl:text-lg">
												Email
											</label>
											<input
												type="email"
												id="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="User email address..."
											/>
										</div>
										<div className="flex flex-col space-y-3">
											<label htmlFor="userName" className="text-base xl:text-lg">
												UserName
											</label>
											<input
												type="userName"
												id="userName"
												value={userName}
												onChange={(e) => setUserName(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="username"
											/>
										</div>
										<div className="flex flex-col space-y-3">
											<label className="text-base xl:text-lg">Profile Image</label>
											<div className="flex items-center space-x-3">
												<div className="w-16 h-16">
													<img
														src={userImage}
														alt={userName}
														className="object-cover w-full h-full rounded-full"
													/>
												</div>
												<div className="imageUpload flex items-center">
													<label className="relative inline-block bg-gray-500 px-5 py-3 font-inter font-medium text-sm xl:text-base text-white rounded-md drop-shadow-sm cursor-pointer hover:drop-shadow-md transition-all hover:bg-gray-600">
														Add a Cover Image
														<FileBase
															type="file"
															multiple={false}
															onDone={({ base64 }) => setUserImage(base64)}
														/>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="border-[1px] border-border p-7 rounded-lg drop-shadow-sm bg-white font-inter text-gray-700">
									<h1 className="font-inter text-xl xl:text-2xl font-semibold text-gray-700 mb-5 xl:mb-10">
										Basic
									</h1>
									<div className="space-y-8">
										<div className="flex flex-col space-y-3">
											<label htmlFor="website" className="text-base xl:text-lg">
												Website URL
											</label>
											<input
												type="text"
												id="website"
												value={websiteLink}
												onChange={(e) => setWebsiteLink(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="e.q https://kishore.netlify.app/"
											/>
										</div>
										<div className="flex flex-col space-y-3">
											<label htmlFor="location" className="text-base xl:text-lg">
												Location
											</label>
											<input
												type="text"
												id="location"
												value={location}
												onChange={(e) => setLocation(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="Please provide your current location..."
											/>
										</div>
										<div className="flex flex-col space-y-3">
											<label htmlFor="bio" className="text-base xl:text-lg">
												Bio
											</label>
											<textarea
												name="bio"
												id="bio"
												value={bio}
												onChange={(e) => setBio(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md min-h-[150px]"
												placeholder="Write something about you here..."
											></textarea>
										</div>
									</div>
								</div>
								<div className="border-[1px] border-border p-7 rounded-lg drop-shadow-sm bg-white font-inter text-gray-700">
									<h1 className="font-inter text-xl xl:text-2xl font-semibold text-gray-700 mb-5 xl:mb-10">
										Work
									</h1>
									<div className="space-y-8">
										<div className="flex flex-col space-y-3">
											<label htmlFor="work" className="text-base xl:text-lg">
												Work
											</label>
											<input
												type="text"
												id="work"
												value={work}
												onChange={(e) => setWork(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="Work"
											/>
										</div>
										<div className="flex flex-col space-y-3">
											<label htmlFor="education" className="text-base xl:text-lg">
												Education
											</label>
											<input
												type="text"
												id="education"
												value={education}
												onChange={(e) => setEducation(e.target.value)}
												className="border-2 border-gray-400 bg-white text-base xl:text-lg placeholder-gray-400 p-[5px] rounded-md"
												placeholder="Education"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center w-full">
						<button
							onClick={updateUserDetails}
							className="my-20 py-2 xl:py-4 px-5 xl:px-10 bg-blue-50 text-blue-400 font-inter text-base xl:text-xl font-semibold rounded-md drop-shadow-lg transition-all hover:drop-shadow-xl hover:text-blue-500"
						>
							Save Profile Information
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default withAuth(Edit);
