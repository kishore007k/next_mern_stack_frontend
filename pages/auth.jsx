/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, signInUser } from "../redux/actions";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AuthPage = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const [email, setEmail] = useState("");

	const [signUp, setSignUp] = useState(false);

	const dispatch = useDispatch();
	const router = useRouter();

	const handleCreateUser = (e) => {
		e.preventDefault();
		const res = axios
			.post("/api/users/create", {
				userName,
				password,
				cPassword,
				email,
			})
			.then((res) => {
				dispatch(createUser(res.data));
				setSignUp(true);
			})
			.catch((err) => console.log(err));

		return res;
	};

	const handleSignInUser = (e) => {
		e.preventDefault();
		const res = axios
			.post("/api/users", {
				password,
				email,
			})
			.then((res) => {
				dispatch(signInUser(res.data));
				Cookies.set("userData", JSON.stringify(res.data.data));
				Cookies.set("token", res.data.token);
				router.push("/");
			})
			.catch((err) => console.log(err));

		return res;
	};

	const handleChange = () => {
		setSignUp(!signUp);
		setUserName("");
		setEmail("");
		setPassword("");
		setCPassword("");
	};

	return (
		<div className="pt-40 pb-20 container max-w-screen-xl mx-auto">
			<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-screen lg:overflow-hidden">
				<div className="hidden lg:block xl:col-span-2 h-full">
					<img
						src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
						alt="Silhouette of woman wearing black hat and black coat"
						className="w-full h-full object-cover"
						id="bg"
					/>
				</div>

				<div className="w-full xl:flex xl:flex-col xl:justify-center md:max-w-md lg:max-w-full md:mx-auto h-full px-6 lg:px-16 xl:px-12 py-8 md:py-16 lg:py-20 lg:overflow-auto">
					<span className="text-lg md:text-xl font-bold text-center xl:text-4xl text-gray-800 xl:mb-10 font-rampart">
						K-Blog📝
					</span>

					<div className="pt-12" id="login-panel">
						<h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-700 text-center font-inter">
							{signUp ? "Sign Up" : "Sign In"}
						</h1>

						<form className="mt-6">
							{signUp && (
								<div className="relative mt-10">
									<input
										id="userName"
										name="userName"
										type="text"
										autoComplete="username"
										className="peer h-10 w-full border-b-2 border-red-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-400 pl-2 font-sourceCodePro"
										placeholder="johnDoe"
										onChange={(e) => setUserName(e.target.value)}
										value={userName}
									/>
									<label
										htmlFor="userName"
										className="absolute left-2 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm font-sourceCodePro"
									>
										User Name
									</label>
								</div>
							)}
							<div className="relative mt-10">
								<input
									id="email"
									name="email"
									type="text"
									autoComplete="username"
									className="peer h-10 w-full border-b-2 border-red-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-400 pl-2 font-sourceCodePro"
									placeholder="john@doe.com"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
								<label
									htmlFor="email"
									className="absolute left-2 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm font-sourceCodePro"
								>
									Email address
								</label>
							</div>

							<div className="mt-10 relative">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									className="peer h-10 w-full border-b-2 border-red-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-400 pl-2 font-sourceCodePro"
									placeholder="john@doe.com"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
								<label
									htmlFor="password"
									className="absolute left-2 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm font-sourceCodePro"
								>
									Password
								</label>
							</div>

							{signUp && (
								<div className="mt-10 relative">
									<input
										id="cPassword"
										name="cPassword"
										type="password"
										className="peer h-10 w-full border-b-2 border-red-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-400 pl-2 font-sourceCodePro"
										placeholder="john@doe.com"
										onChange={(e) => setCPassword(e.target.value)}
										value={cPassword}
									/>
									<label
										htmlFor="cPassword"
										className="absolute left-2 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm font-sourceCodePro"
									>
										Confirm Password
									</label>
								</div>
							)}

							{signUp ? (
								<></>
							) : (
								<div className="text-right mt-2">
									<a
										href="#"
										className="text-sm font-semibold font-sourceCodePro text-gray-700"
									>
										Forgot password ?
									</a>
								</div>
							)}

							{signUp ? (
								<button
									type="submit"
									className="w-full block bg-red-400 hover:bg-red-300 focus:bg-red-400 focus:outline-none text-white font-semibold tracking-widest rounded-lg px-4 py-3 mt-6 font-inter"
									onClick={handleCreateUser}
								>
									Sign Up
								</button>
							) : (
								<button
									type="submit"
									className="w-full block bg-red-400 hover:bg-red-300 focus:bg-red-400 focus:outline-none text-white font-semibold tracking-widest rounded-lg px-4 py-3 mt-6 font-inter"
									onClick={handleSignInUser}
								>
									Sign In
								</button>
							)}
						</form>

						<hr className="my-6 border-gray-300 w-full" />

						<button
							type="button"
							className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 mt-4"
						>
							<div className="flex items-center justify-center">
								<svg className="w-7 h-7" viewBox="0 0 42 40" fill="none">
									<g filter="url(#filter0_d)">
										<path
											d="M40.4065 21.6035H39.1982V21.5412H25.6982V27.5412H34.1755C32.9387 31.034 29.6155 33.5412 25.6982 33.5412C20.728 33.5412 16.6982 29.5115 16.6982 24.5412C16.6982 19.571 20.728 15.5412 25.6982 15.5412C27.9925 15.5412 30.0797 16.4067 31.669 17.8205L35.9117 13.5777C33.2327 11.081 29.6492 9.54123 25.6982 9.54123C17.4145 9.54123 10.6982 16.2575 10.6982 24.5412C10.6982 32.825 17.4145 39.5412 25.6982 39.5412C33.982 39.5412 40.6982 32.825 40.6982 24.5412C40.6982 23.5355 40.5947 22.5537 40.4065 21.6035Z"
											fill="#FBC02D"
										/>
										<path
											d="M12.4277 17.5595L17.356 21.1737C18.6895 17.8722 21.919 15.5412 25.6982 15.5412C27.9925 15.5412 30.0797 16.4067 31.669 17.8205L35.9117 13.5777C33.2327 11.081 29.6492 9.54123 25.6982 9.54123C19.9367 9.54123 14.9402 12.794 12.4277 17.5595Z"
											fill="#E53935"
										/>
										<path
											d="M25.6982 39.5412C29.5727 39.5412 33.0932 38.0585 35.755 35.6472L31.1125 31.7187C29.6065 32.8595 27.7345 33.5412 25.6982 33.5412C21.7967 33.5412 18.484 31.0535 17.236 27.5817L12.3445 31.3505C14.827 36.2082 19.8685 39.5412 25.6982 39.5412Z"
											fill="#4CAF50"
										/>
										<path
											d="M40.4065 21.6035L40.3945 21.5412H39.1982H25.6982V27.5412H34.1755C33.5815 29.219 32.5022 30.6657 31.1102 31.7195C31.111 31.7187 31.1117 31.7187 31.1125 31.718L35.755 35.6465C35.4265 35.945 40.6982 32.0412 40.6982 24.5412C40.6982 23.5355 40.5947 22.5537 40.4065 21.6035Z"
											fill="#1565C0"
										/>
									</g>
									<defs>
										<filter
											id="filter0_d"
											x="0.698242"
											y="0.541229"
											width="50"
											height="50"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="1" />
											<feGaussianBlur stdDeviation="5" />
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow"
												result="shape"
											/>
										</filter>
									</defs>
								</svg>

								<span className="ml-4 font-inter text-gray-700">
									{signUp ? "Sign Up" : "Sign In"} with Google
								</span>
							</div>
						</button>

						<p className="mt-8 text-center font-inter tracking-wider">
							Not a member ?
							<button
								className="text-red-400 hover:text-red-500 font-semibold pl-2"
								id="signup-link"
								onClick={handleChange}
							>
								{signUp ? "Sign In" : "Sign Up"} now
							</button>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AuthPage;
