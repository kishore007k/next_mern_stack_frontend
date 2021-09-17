import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/actions";

const PostGrid = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state?.posts?.posts);

	useEffect(() => {
		const res = axios
			.get("/api/posts")
			.then((res) => {
				dispatch(getAllPosts(res.data.data));
			})
			.catch((err) => console.log(err));
		return res;
	}, [dispatch]);

	return (
		<div>
			{posts === [] ? (
				<div>Loading...</div>
			) : (
				posts.map((post) => (
					<div key={post._id}>
						<h1 className="font-inter text-2xl text-gray-700 font-semibold">
							{post.title}
						</h1>
					</div>
				))
			)}
		</div>
	);
};

export default PostGrid;
