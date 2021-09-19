/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import axios from "axios";
import withAuth from "../auth/withAuth";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import router from "next/router";
import Cookies from "js-cookie";
import FileBase from "react-file-base64";
import MarkdownViewer from "../components/MarkdownViewer";

const CreatePosts = () => {
	const [cover, setCover] = useState("");
	const [title, setTitle] = useState("");
	const [pBody, setPBody] = useState("");
	const [slug, setSlug] = useState("");
	const [desc, setDesc] = useState("");

	const [editMode, setEditMode] = useState(true);
	const [user, setUser] = useState({});

	const dispatch = useDispatch();

	useEffect(() => {
		var jsonStr = Cookies.get("userData");
		var userData = new Function("return " + jsonStr)();
		setUser(userData);
	}, []);

	const sendData = async (e) => {
		e.preventDefault();
		const res = await axios
			.post("/api/posts", {
				title,
				slug,
				desc,
				pImage: cover,
				pBody,
				pAuthor: user._id,
			})
			.then((res) => {
				dispatch(createPost(res.data.data));
				router.push("/");
			})
			.catch((err) => console.log(err));
		return res;
	};

	return (
		<>
			<div className="container mx-auto max-w-screen-lg pt-40 mb-10 flex">
				<div className="flex justify-end items-center w-full ml-auto space-x-5">
					<button
						onClick={() => setEditMode(true)}
						className={`px-5 py-2 font-sourceCodePro outline-none font-semibold transition-all ${
							editMode ? "text-blue-500" : "text-gray-800"
						} text-lg rounded-md hover:bg-blue-100 hover:text-blue-400`}
					>
						Edit
					</button>
					<button
						onClick={() => setEditMode(false)}
						className={`px-5 py-2 font-sourceCodePro outline-none font-semibold transition-all ${
							editMode ? "text-gray-800" : "text-blue-500"
						} text-lg rounded-md hover:bg-blue-100 hover:text-blue-400`}
					>
						Preview
					</button>
				</div>
			</div>

			<div>
				{/* Editing div */}
				<div
					className={`${
						editMode ? "" : "hidden"
					} container mx-auto w-full h-full max-w-screen-xl mb-40`}
				>
					<div className="flex flex-col w-full h-full bg-gray-50 rounded-lg drop-shadow-md">
						<div className="w-full h-full">
							<h1 className="text-center text-5xl font-inter font-bold text-skin-base mb-20 pt-10">
								Create a Post!
							</h1>
							<div className="p-8">
								{cover !== "" ? (
									<div className="flex items-center">
										<div className="w-[500px] h-[300px]">
											<img
												alt="image"
												src={cover}
												className="w-full h-full object-cover object-center rounded-md"
											/>
										</div>
										<div className="flex ml-10 space-x-5">
											<button
												onClick={() => setCover("")}
												className="border border-blue-500 px-4 py-2 font-sourceCodePro font-medium text-base rounded-md text-blue-500 transition-all duration-300 hover:bg-blue-300 hover:text-white"
											>
												Change
											</button>
											<button
												onClick={() => setCover("")}
												className="border border-red-500 px-4 py-2 font-sourceCodePro font-medium text-base rounded-md text-red-500 transition-all duration-300 hover:bg-red-300 hover:text-white"
											>
												Remove
											</button>
										</div>
									</div>
								) : (
									<div className="imageUpload flex items-center">
										<label className="relative inline-block bg-green-400 px-5 py-3 font-sourceCodePro font-semibold text-lg text-white align-middle rounded-md drop-shadow-lg cursor-pointer transition-shadow hover:drop-shadow-xl">
											Add a Cover Image
											<FileBase
												type="file"
												multiple={false}
												onDone={({ base64 }) => setCover(base64)}
											/>
										</label>
									</div>
								)}
							</div>
							<div className="flex justify-center px-8">
								<input
									type="text"
									placeholder="Type your Slug here..."
									className="text-2xl w-full font-inter text-skin-base tracking-wider outline-none placeholder-gray-400 mt-10 px-3 py-2 bg-gray-50"
									onChange={(e) => setSlug(e.target.value)}
									value={slug}
								/>
								{/* <input
									type="text"
									placeholder="Category"
									className="text-2xl w-full font-inter text-skin-base tracking-wider outline-none placeholder-gray-400 mt-10 px-3 py-2 bg-gray-50 lowercase"
									onChange={(e) => setCategory(e.target.value.toUpperCase())}
									value={category}
								/>
								<input
									type="text"
									placeholder="Tag"
									className="text-2xl w-full font-inter text-skin-base tracking-wider outline-none placeholder-gray-400 mt-10 px-3 py-2 bg-gray-50 lowercase"
									onChange={(e) => setTag(e.target.value.toUpperCase())}
									value={tag}
								/> */}
							</div>
							<div className="p-8 w-full">
								<input
									type="text"
									placeholder="New post title here..."
									className="text-2xl w-full font-inter text-skin-base tracking-wider outline-none placeholder-gray-400 mt-10 px-3 py-2 bg-gray-50"
									onChange={(e) => setTitle(e.target.value)}
									value={title}
								/>
							</div>
							<div className="px-8 py-5 w-full">
								<input
									type="text"
									placeholder="Type the description of the post here..."
									className="text-2xl w-full font-inter text-skin-base tracking-wider outline-none placeholder-gray-400 mt-10 px-3 py-2 bg-gray-50"
									onChange={(e) => setDesc(e.target.value)}
									value={desc}
								/>
							</div>
							<div className="block w-full h-10 bg-gray-200 my-5" />
						</div>

						{/* Text Area Input */}
						<div className="w-full h-[1500px] mt-10 pb-10">
							<textarea
								name="postBody"
								id="postBody"
								className="w-full h-full px-10 bg-gray-50 font-inter font-normal outline-none text-xl scrollbar scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent resize-none"
								placeholder="Write your post content here..."
								onChange={(e) => setPBody(e.target.value)}
								value={pBody}
							></textarea>
						</div>
					</div>
				</div>

				{/* Preview Div */}
				<div
					className={`${
						editMode ? "hidden" : "block"
					} py-10 px-5 container mx-auto max-w-screen-xl w-full h-full bg-gray-100 rounded-md drop-shadow-md mb-40`}
				>
					<div className="w-full h-full flex flex-col">
						<div className="flex flex-col items-center w-full h-full">
							{cover !== "" ? (
								<div className="w-11/12 max-h-[300] h-96">
									<img
										alt="image"
										src={cover}
										className="object-cover object-center w-full h-full rounded-md"
									/>
								</div>
							) : (
								<></>
							)}
							{title !== "" ? (
								<div className="text-center mt-20">
									<h1 className="text-black font-inter capitalize font-bold text-5xl mb-10">
										{title}
									</h1>
								</div>
							) : (
								<></>
							)}
						</div>

						<div className="flex flex-col min-w-full w-full h-full prose lg:prose-xl">
							<MarkdownViewer pBody={pBody} />
						</div>
					</div>
				</div>
			</div>

			{/* Save Btn */}
			<div className="fixed top-28 right-40">
				<button
					className="px-5 py-2 bg-blue-50 rounded-sm text-xl font-inter justify-end text-blue-500 drop-shadow-md transition-all duration-200 hover:drop-shadow-lg hover:bg-blue-500 hover:text-white"
					onClick={sendData}
				>
					Save
				</button>
			</div>
		</>
	);
};

export default withAuth(CreatePosts);
