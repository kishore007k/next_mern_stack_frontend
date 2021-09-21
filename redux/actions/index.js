import ActionTypes from "../constants";

export const createUser = (data) => {
	return {
		type: ActionTypes.USER_SIGN_UP,
		payload: data,
	};
};

export const signInUser = (data) => {
	return {
		type: ActionTypes.USER_SIGN_IN,
		payload: data,
	};
};

export const getAllPosts = (data) => {
	return {
		type: ActionTypes.GET_ALL_POSTS,
		payload: data,
	};
};

export const getPost = (data) => {
	return {
		type: ActionTypes.GET_POST,
		payload: data,
	};
};

export const createPost = (data) => {
	return {
		type: ActionTypes.CREATE_POST,
		payload: data,
	};
};

export const getSingleUser = (data) => {
	return {
		type: ActionTypes.GET_SINGLE_USER,
		payload: data,
	};
};

export const getAllUsers = (data) => {
	return {
		type: ActionTypes.GET_ALL_USERS,
		payload: data,
	};
};
