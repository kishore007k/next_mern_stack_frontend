/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../../redux/actions";
import { useSelector } from "react-redux";
import MarkdownViewer from "../components/MarkdownViewer";

const PostDetails = () => {
	const router = useRouter();
	const postSlug = router.query.postSlug;
	const [loaded, setLoaded] = useState(false);

	const dispatch = useDispatch();
	const post = useSelector((state) => state?.posts?.post);

	useEffect(() => {
		const res = axios
			.get(`/api/posts/${postSlug}`)
			.then((res) => {
				dispatch(getPost(res.data.data));
			})
			.catch((err) => console.log(err));
		return res;
	}, [dispatch, postSlug]);

	setTimeout(() => {
		setLoaded(true);
	}, [1000]);

	return (
		<div>
			{!loaded ? (
				<div>Loading...</div>
			) : (
				<div className="container max-w-screen-xl mx-auto pt-60 flex flex-col items-center space-y-14">
					<h4 className="text-center uppercase font-sourceCodePro font-bold text-lg border-2 border-black px-2 tracking-widest">
						category
					</h4>

					<h1 className="font-inter text-skin-base font-bold text-6xl">
						{post.title}
					</h1>

					<div className="flex items-center">
						<p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
							by{" "}
							<span className="text-gray-900 font-bold">{post.pAuthor.userName}</span>
						</p>
						<span className="px-5 text-gray-500">&#47;</span>
						<p className="uppercase text-sm text-gray-500 tracking-wider">
							{post.createdAt}
						</p>
						<span className="px-5 text-gray-500">&#47;</span>
						<p className="uppercase text-sm text-gray-500 tracking-wider">
							2 min read
						</p>
					</div>

					<MarkdownViewer pBody={post.pBody} />

					<div className="w-full flex flex-col items-center pb-40 space-y-10">
						<div className="flex w-full relative">
							<span className="w-full h-px bg-gray-300 absolute top-1/2" />
							<div className="w-20 h-20 mx-auto bg-white z-10 userImage relative">
								<img
									src={post.pAuthor.userImage}
									alt={post.pAuthor.userName}
									className="w-full h-full object-cover rounded-full object-center"
								/>
							</div>
						</div>

						<div className="space-y-5">
							<h4 className="text-center font-inter text-sm uppercase font-medium tracking-wider text-gray-800">
								{post.pAuthor.userName}
							</h4>
							<p className="text-center capitalize text-sm font-inter font-medium tracking-wider text-gray-500">
								flim maker at red rocks church
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PostDetails;
