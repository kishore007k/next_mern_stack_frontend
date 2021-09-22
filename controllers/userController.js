import bcrypt from "bcryptjs";
import UserModel from "../models/userModel";
import hexgen from "hex-generator";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
	try {
		const { password, cPassword } = req.body;
		if (password !== cPassword) {
			return res.send({ message: "Passwords doesn't match" });
		}
		const hashed = bcrypt.hashSync(password, 10);
		const { userName, email, userImage } = req.body;
		const secretKey = hexgen(64);
		const newUser = new UserModel({
			userName,
			password: hashed,
			email,
			userImage,
			secretKey,
		});
		const saved = await newUser.save();
		if (saved) return res.send({ data: saved });
	} catch (error) {
		return res.send({ error: error });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const userId = req.query.userId;
		const user = await UserModel.findByIdAndDelete(userId);
		if (!user) {
			return res.status(400).send({ error: "Can not delete the user" });
		}
		return res.status(201).send({ message: "User Deleted Successfully!" });
	} catch (error) {
		return res.status(400).send({ error });
	}
};

export const editUser = async (req, res) => {
	try {
		const { userId, updatedData } = req.body;
		const updatedUser = await UserModel.findByIdAndUpdate(userId, {
			...updatedData,
		});
		if (!updatedUser) {
			return res.status(400).send({ error: "User is not Updated" });
		}
		await updatedUser.save();
		return res.status(200).send({ message: "User Updated Successfully" });
	} catch (error) {
		return res.status(400).send({ error });
	}
};

export const getSingleUser = async (req, res) => {
	try {
		const userId = req.query.userId;
		const user = await UserModel.findById(userId).populate(
			"userPosts",
			"title slug desc pImage pBody createdAt"
		);
		if (!user) return res.status(404).send({ message: "No user found!" });
		return res.status(200).send({ data: user });
	} catch (error) {
		return res.status(400).send({ error: error });
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await UserModel.find({}).populate(
			"userPosts",
			"title slug desc pImage pBody"
		);
		if (!users) {
			return res.status(404).send({ message: "No user found" });
		}
		return res.status(200).send({ data: users });
	} catch (error) {
		return res.status(400).send({ error: error });
	}
};

export const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });
		if (!user) return res.status(404).send({ message: "User not found" });
		const pMatch = bcrypt.compareSync(password, user.password);
		if (!pMatch) return res.status(400).send({ error: "Password doesn't match" });
		const token = jwt.sign({ email }, user.secretKey, { expiresIn: "6h" });
		return res.status(200).send({
			data: {
				userName: user.userName,
				userImage: user.userImage,
				email: user.email,
				userPosts: user.userPosts,
				name: user.name,
				bio: user.bio,
				work: user.work,
				education: user.education,
				location: user.location,
				websiteLink: user.websiteLink,
				_id: user._id,
			},
			token,
		});
	} catch (error) {
		return res.status(400).send({ error: error });
	}
};
