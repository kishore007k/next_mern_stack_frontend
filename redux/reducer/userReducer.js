import ActionTypes from "../constants";

const INITIAL_STATE = {
	users: {},
	token: "",
};

const UserReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.USER_SIGN_UP:
			return { ...state, users: payload.data };

		case ActionTypes.USER_SIGN_IN:
			return { ...state, users: payload.data, token: payload.token };

		default:
			return state;
	}
};

export default UserReducer;
