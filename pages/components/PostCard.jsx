/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const PostCard = ({ user, post }) => {
	const date = new Date(post?.createdAt);

	Date.prototype.getMonthName = function () {
		return [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		][this.getMonth()];
	};

	const newDate = date.getDate();
	const year = date.getFullYear();
	const month = date.getMonthName();

	return (
		<div className="bg-white border-[1px] border-border rounded-lg drop-shadow-sm p-5">
			<div className="flex space-x-5 items-center pb-2">
				<div className="w-10 h-10">
					<img
						src={user?.userImage}
						alt={user?.UserName}
						className="object-cover w-full h-full rounded-full"
					/>
				</div>
				<div>
					<h2 className="font-inter text-base font-medium text-gray-600">
						{user?.userName}
					</h2>
					<p className="font-inter text-gray-600 font-normal text-sm">
						{month} {newDate} {year}
					</p>
				</div>
			</div>
			<div className="lg:pl-14 space-y-2">
				<h1 className="font-inter font-semibold lg:text-2xl text-xl text-gray-800 pb-2 lg:pb-0">
					<Link href={`/posts/${post?.slug}`}>
						<a className="transition-all hover:text-red-400">{post?.title}</a>
					</Link>
				</h1>
				<div className="space-x-5">
					<code className=" text-sm transition-all text-gray-900 font-extrabold font-klee bg-green-100 hover:bg-green-200 px-1 py-[2px] rounded drop-shadow-sm">
						#showdev
					</code>
					<code className=" text-sm transition-all text-gray-900 font-extrabold font-klee bg-red-100 hover:bg-red-200 px-1 py-[2px] rounded drop-shadow-sm">
						#react
					</code>
					<code className=" text-sm transition-all text-gray-900 font-extrabold font-klee bg-purple-100 hover:bg-purple-200 px-1 py-[2px] rounded drop-shadow-sm">
						#next
					</code>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
