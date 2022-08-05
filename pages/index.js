import PostGrid from "../components/PostGrid";
import axios from "axios";
// import { supabase } from "../utils/supabase";

export const getStaticProps = async () => {
	// const { data: posts } = await supabase.from("post").select("*");
	const { data: posts } = await axios.get(
		`${
			process.env.NODE_ENV === "production"
				? process.env.BACKEND_URL_PROD
				: process.env.BACKEND_URL_DEV
		}/api/posts`,
		{
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
		}
	);
	return {
		props: {
			posts: posts.data,
		},
	};
};

export default function Home({ posts }) {
	return (
		<main className="container max-w-screen-xl mx-auto flex flex-col justify-between items-center pt-10 xl:pt-20 h-full px-2 lg:px-5 xl:px-0">
			<h1 className="font-rampart font-bold text-3xl lg:text-5xl text-gray-700">
				Posts
			</h1>
			<PostGrid posts={posts} />
		</main>
	);
}
