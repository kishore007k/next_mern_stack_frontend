import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			maxlength: 150,
		},
		pImage: {
			type: String,
		},
		pBody: {
			type: String,
		},
		pAuthor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	},
	{ timestamps: true }
);

mongoose.models = {};

const PostModel = mongoose.model("posts", postSchema);

export default PostModel;
