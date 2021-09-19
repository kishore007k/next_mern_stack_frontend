import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/actions";
import Card from "./Card";

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
		<>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
				{posts ? (
					posts.map((post) => (
						<Card
							key={post._id}
							title={post.title}
							desc={post.desc}
							image={post.pImage}
							category={post.category}
							slug={post.slug}
							id={post._id}
						/>
					))
				) : (
					<div className="grid grid-cols-1 pb-20">Loading...</div>
				)}
			</div>
		</>
	);
};

export default PostGrid;
