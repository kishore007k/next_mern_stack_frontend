import PostGrid from "./components/PostGrid";

const Home = () => {
	return (
		<div>
			<main className="container max-w-screen-xl mx-auto flex flex-col justify-between items-center pt-10 xl:pt-20 h-full px-2 lg:px-5 xl:px-0">
				<h1 className="font-rampart font-bold text-3xl lg:text-5xl text-gray-700">
					Posts
				</h1>
				<PostGrid />
			</main>
		</div>
	);
};

export default Home;
