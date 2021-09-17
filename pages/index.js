import PostGrid from "./components/PostGrid";

const Home = () => {
	return (
		<div>
			<main className="container max-w-screen-lg mx-auto flex flex-col justify-between items-center pt-40 min-h-screen h-full">
				<PostGrid />
			</main>
		</div>
	);
};

export default Home;
