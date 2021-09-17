/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Card = ({ title, image, desc, slug }) => {
	return (
		<div className="mt-20">
			<Link href={`/posts/${encodeURIComponent(slug)}`}>
				<a>
					<div className="w-full h-52 mb-5">
						<img
							src={image}
							className="object-cover w-full h-full scale-100 hover:scale-105 transition duration-300 ease-in-out"
							alt="image"
						/>
					</div>
					<div className="space-y-3">
						<span className="capitalize font-inter font-medium text-skin-base text-sm">
							Category
						</span>
						<h3 className="font-inter text-2xl font-bold capitalize transition duration-300 ease-in-out hover:text-red-400">
							{title}
						</h3>
						<p className="font-inter text-base">{desc}</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Card;
