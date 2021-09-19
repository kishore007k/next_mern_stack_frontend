import { useSelector, useDispatch } from "react-redux";
import Loader from "./components/Loader";
import PostGrid from "./components/PostGrid";
import { getAllPosts } from "../redux/actions";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
	const posts = useSelector((state) => state?.posts?.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		const res = axios
			.get("/api/posts")
			.then((res) => {
				dispatch(getAllPosts(res.data.data));
			})
			.catch((err) => console.log(err));
		return res;
	}, [dispatch]);

	console.log(posts.length);

	return (
		<div>
			{posts.length === 0 ? (
				<Loader />
			) : (
				<main className="container max-w-screen-xl mx-auto flex flex-col justify-between items-center pt-10 xl:pt-20 h-full px-2 lg:px-5 xl:px-0">
					<h1 className="font-rampart font-bold text-3xl lg:text-5xl text-gray-700">
						Posts
					</h1>
					<PostGrid />
				</main>
			)}
		</div>
	);
};

export default Home;
