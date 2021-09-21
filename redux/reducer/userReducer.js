import ActionTypes from "../constants";

const INITIAL_STATE = {
	users: [],
	user: {},
	token: "",
};

const UserReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.USER_SIGN_UP:
			return { ...state, user: payload.data };

		case ActionTypes.USER_SIGN_IN:
			return { ...state, user: payload.data, token: payload.token };

		case ActionTypes.GET_SINGLE_USER:
			return { ...state, user: payload.data };

		case ActionTypes.GET_ALL_USERS:
			return { ...state, users: [...payload.data] };

		default:
			return state;
	}
};

export default UserReducer;
