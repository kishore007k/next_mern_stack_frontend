const Footer = () => {
	return (
		<footer className="mb-20">
			<div className="container max-w-screen-xl mx-auto border-t border-gray-300 flex flex-col xl:flex-row justify-between items-center text-center xl:text-left pt-10 xl:py-10">
				<p className="font-inter text-lg font-semibold text-gray-800 tracking-wider mb-5 xl:mb-0">
					Built with Next.js, React Markdown, Tailwind and Vercel
				</p>
				<div className="space-x-5">
					<a
						href=""
						target="_blank"
						className="font-inter text-gray-800 font-medium text-base transition-all hover:text-red-500"
					>
						Gmail
					</a>
					<a
						href=""
						target="_blank"
						className="font-inter text-gray-800 font-medium text-base transition-all hover:text-red-500"
					>
						Instagram
					</a>
					<a
						href=""
						target="_blank"
						className="font-inter text-gray-800 font-medium text-base transition-all hover:text-red-500"
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
