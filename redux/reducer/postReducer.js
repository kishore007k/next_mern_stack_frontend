import { createSlice } from "@reduxjs/toolkit";

const postsInitialState = {
	posts: [],
	post: {},
	message: "",
	isLoading: false,
	status: "STATIC",
};

export const postsSlice = createSlice({
	name: "posts",
	initialState: postsInitialState,
	reducers: {
		createPostStart: (state) => {
			state.isLoading = true;
		},
		createPostSuccess: (state, action) => {
			state.posts.push(action.payload);
			state.isLoading = false;
			state.message = "";
		},
		createPostFailure: (state, action) => {
			state.message = action.payload;
			state.isLoading = false;
		},

		updatePostStart: (state) => {
			state.isLoading = true;
		},
		updatePostSuccess: (state, action) => {
			state.post = action.payload;
			state.isLoading = false;
			state.message = "";
		},
		updatePostFailure: (state, action) => {
			state.message = action.payload;
			state.isLoading = false;
		},

		deletePostStart: (state) => {
			state.isLoading = true;
		},
		deletePostSuccess: (state, action) => {
			state.post = action.payload;
			state.isLoading = false;
			state.message = "";
		},
		deletePostFailure: (state, action) => {
			state.message = action.payload;
			state.isLoading = false;
		},
	},
});

export const {
	fetchAllPostsStart,
	fetchAllPostsSuccess,
	fetchAllPostsFailure,
	fetchPostStart,
	fetchPostSuccess,
	fetchPostFailure,
	createPostStart,
	createPostSuccess,
	createPostFailure,
	updatePostStart,
	updatePostSuccess,
	updatePostFailure,
	deletePostStart,
	deletePostSuccess,
	deletePostFailure,
} = postsSlice.actions;

export default postsSlice.reducer;
