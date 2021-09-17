import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			maxlength: 32,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			index: { unique: true },
			match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
		},
		password: {
			type: String,
			required: true,
		},
		cPassword: {
			type: String,
		},
		secretKey: {
			type: String,
			default: "",
		},
		userImage: {
			type: String,
			default: "userImage.png",
		},
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "posts",
			},
		],
	},
	{
		timestamps: true,
	}
);

mongoose.models = {};

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
