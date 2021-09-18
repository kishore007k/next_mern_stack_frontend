import PostGrid from "./components/PostGrid";

const Home = () => {
	return (
		<div>
			<main className="container max-w-screen-lg mx-auto flex flex-col justify-between items-center pt-20 h-full">
				<h1 className="font-rampart font-bold text-5xl text-gray-700">Posts</h1>
				<PostGrid />
			</main>
		</div>
	);
};

export default Home;
