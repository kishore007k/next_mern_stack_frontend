import Card from "./Card";

export default function PostGrid({ posts }) {
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
					<div className="mt-5 mx-auto">
						<h1 className="text-center font-bold text-4xl">No posts yet</h1>
					</div>
				)}
			</div>
		</>
	);
}
