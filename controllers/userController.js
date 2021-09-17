import bcrypt from "bcryptjs";
import UserModel from "../models/userModel";

export const addUser = async (req, res) => {
	try {
		const { password, cPassword } = req.body;
		if (password !== cPassword) {
			return res.send({ message: "Passwords doesn't match" });
		}
		const hashed = bcrypt.hashSync(password, 10);
		const newUser = new UserModel({
			...req.body,
			password: hashed,
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
		const user = await UserModel.findById(userId);
		if (!user) return res.status(404).send({ message: "No user found!" });
		return res.status(200).send({ data: user });
	} catch (error) {
		return res.status(400).send({ error });
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await UserModel.find({});
		return res.status(200).send({ data: users });
	} catch (error) {
		return res.status(400).send({ error: error });
	}
};
