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
