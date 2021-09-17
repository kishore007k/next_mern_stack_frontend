import PostGrid from "./components/PostGrid";

const Home = () => {
	return (
		<div>

			<main className="container max-w-screen-lg mx-auto flex flex-col justify-between items-center pt-40 h-screen">
				<PostGrid />
			</main>
		</div>
	);
};

export default Home;
