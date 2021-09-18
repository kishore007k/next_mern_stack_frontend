import ActionTypes from "../constants";

const INITIAL_STATE = {
	posts: [],
	post: {},
};

const PostReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.GET_ALL_POSTS:
			return { ...state, posts: payload };

		case ActionTypes.GET_POST:
			return { ...state, post: payload };

		case ActionTypes.CREATE_POST:
			return { ...state, post: payload };

		default:
			return state;
	}
};

export default PostReducer;
