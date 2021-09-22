import { useSelector } from "react-redux";
import Card from "./Card";

const PostGrid = () => {
	const posts = useSelector((state) => state?.posts?.posts);

	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-10">
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
