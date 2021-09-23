import Link from "next/link";
import { ImHeart } from "react-icons/im";
import { FaComment, FaRegEye } from "react-icons/fa";

// const posts = [
// 	{
// 		title: "Make it easy! &apos;React useContext&apos;",
// 		createdAt: "Oct 22, 2020",
// 		updatedAt: "Oct 24, 2020",
// 		slug: "make-it-easy-react-usecontext",
// 		likes: 25,
// 		comments: 4,
// 		views: 2546,
// 	},
// 	{
// 		title: "Map API 🌏",
// 		createdAt: "Aug 9, 2020",
// 		updatedAt: "",
// 		slug: "map-api",
// 		likes: 25,
// 		comments: 4,
// 		views: 2546,
// 	},
// ];

const Dashboard = () => {
	return (
		<div>
			<h1 className="font-rampart text-3xl text-gray-700 font-semibold py-10">
				Dashboard
			</h1>

			{/* Top Div Cards */}
			<div className="grid grid-cols-4 gap-5 mb-12">
				<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
					<h2 className="font-inter text-2xl font-medium mb-2">31</h2>
					<p className="font-inter text-sm font-normal">Total post reactions</p>
				</div>
				<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
					<h2 className="font-inter text-2xl font-medium mb-2">2,712</h2>
					<p className="font-inter text-sm font-normal">Total post views</p>
				</div>
				<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
					<h2 className="font-inter text-2xl font-medium mb-2">10</h2>
					<p className="font-inter text-sm font-normal">Listings created</p>
				</div>
				<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
					<h2 className="font-inter text-2xl font-medium mb-2">5</h2>
					<p className="font-inter text-sm font-normal">Credits available</p>
				</div>
			</div>

			{/* Posts */}
			<div className="grid grid-cols-4 gap-5">
				{/* Left Side */}
				<div className="col-span-1 space-y-5 bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md">
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Posts</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">2</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Series</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">0</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Followers</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">152</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Following tags</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">12</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Following users</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">54</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">
								Following organizations
							</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">15</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Following podcasts</a>
						</Link>
						<div className="p-1 bg-gray-100 rounded-full">10</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Listings</a>
						</Link>
						<div>Icon</div>
					</div>
					<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
						<Link href="/dashboard">
							<a className="font-inter text-base font-normal">Analytics</a>
						</Link>
					</div>
				</div>

				{/* Right Side */}
				<div className="col-span-3 row-span-2 space-y-5">
					<h1 className="font-inter text-2xl text-gray-700 font-semibold mb-5">
						Posts
					</h1>
					<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md text-gray-800 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500">
						<Link href="/">
							<a className="flex justify-between items-center">
								<div>
									<h1 className="font-inter text-2xl mb-5 font-semibold">
										Make it easy! &apos;React useContext&apos;
									</h1>
									<div className="flex items-center text-gray-700 space-x-5 font-medium text-base">
										<p>
											Published: <span className="font-normal">Oct 24, 2020</span>
										</p>
										<p>
											Edited: <span className="font-normal">Oct 22, 2020</span>
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="flex items-center space-x-1">
										<div>
											<ImHeart className="w-6 h-6 fill-current text-gray-800" />
										</div>
										<span className="font-semibold text-gray-800">25</span>
									</div>
									<div className="flex items-center space-x-1">
										<div>
											<FaComment className="w-6 h-6 fill-current text-gray-800" />
										</div>
										<span className="font-semibold text-gray-800">4</span>
									</div>
									<div className="flex items-center space-x-1">
										<div>
											<FaRegEye className="w-6 h-6 fill-current text-gray-800" />
										</div>
										<span className="font-semibold text-gray-800">2564</span>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<button className="text-gray-700 font-medium text-lg capitalize px-3 py-1 transition-all rounded-md hover:drop-shadow-sm hover:bg-red-200">
										manage
									</button>
									<button className="text-gray-700 font-medium text-lg capitalize px-5 py-1 transition-all rounded-md hover:drop-shadow-sm hover:bg-red-200">
										edit
									</button>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
