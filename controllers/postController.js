import PostModel from "../models/postModel";
import UserModel from "../models/userModel";

export const createPost = async (req, res) => {
	try {
		const newPost = await new PostModel({
			...req.body,
		});
		await newPost.save();
		const user = await UserModel.findByIdAndUpdate(
			{ _id: req.body.pAuthor },
			{
				$push: { userPosts: newPost._id },
			}
		);
		await user.save();
		if (!user || !newPost) {
			return res
				.status(400)
				.send({ message: "Something wrong with user or posts" });
		}
		return res.status(201).send({ data: newPost });
	} catch (error) {
		return res.status(400).send({ error: "Something went Wrong" });
	}
};

export const getAllPosts = async (req, res) => {
	try {
		const posts = await PostModel.find({}).populate(
			"pAuthor",
			"userName email userImage"
		);
		if (!posts) {
			return res.status(400).send({ message: "Can not fetch the posts" });
		}
		return res.status(200).send({ data: posts });
	} catch (error) {
		return res.status(401).send({ error });
	}
};

export const getPost = async (req, res) => {
	try {
		const postSlug = req.query.postSlug;
		const post = await PostModel.findOne({ slug: postSlug });
		if (!post) {
			return res.status(400).send({ message: "No Post" });
		}
		return res.status(200).send({ data: post });
	} catch (error) {
		return res.status(401).send({ error });
	}
};
