import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
	users: [],
	user: {},
	token: "",
	message: "",
	isLoading: false,
	status: "STATIC",
};

export const usersSlice = createSlice({
	name: "users",
	initialState: usersInitialState,
	reducers: {
		signUpRequest: (state) => {
			state.isLoading = true;
			state.status = "LOADING";
		},
		signUpSuccess: (state, action) => {
			state.user = action.payload.data;
			state.isLoading = false;
			state.status = "SUCCESS";
			state.message = "";
			state.token = "";
		},
		signUpFailure: (state, action) => {
			state.message = action.payload.message;
			state.isLoading = false;
			state.status = "FAILURE";
			state.user = {};
		},

		signInRequest: (state) => {
			state.isLoading = true;
			state.status = "LOADING";
		},
		signInSuccess: (state, action) => {
			state.user = action.payload.data;
			state.token = action.payload.token;
			state.isLoading = false;
			state.status = "SUCCESS";
			state.message = "";
		},
		signInFailure: (state, action) => {
			state.message = action.payload.message;
			state.isLoading = false;
			state.status = "FAILURE";
			state.user = {};
		},

		getAllUsersRequest: (state) => {
			state.isLoading = true;
			state.status = "LOADING";
		},
		getAllUsersSuccess: (state, action) => {
			state.users = action.payload.data;
			state.isLoading = false;
			state.status = "SUCCESS";
			state.message = "";
		},
		getAllUsersFailure: (state, action) => {
			state.message = action.payload.message;
			state.isLoading = false;
			state.status = "FAILURE";
			state.users = [];
		},

		getSingleUserRequest: (state) => {
			state.isLoading = true;
			state.status = "LOADING";
		},
		getSingleUserSuccess: (state, action) => {
			state.user = action.payload.data;
			state.isLoading = false;
			state.status = "SUCCESS";
			state.message = "";
		},
		getSingleUserFailure: (state, action) => {
			state.message = action.payload.message;
			state.isLoading = false;
			state.status = "FAILURE";
			state.user = {};
		},

		updateUserRequest: (state) => {
			state.isLoading = true;
			state.status = "LOADING";
		},
		updateUserSuccess: (state, action) => {
			state.message = action.payload.message;
			state.isLoading = false;
			state.status = "SUCCESS";
		},
		updateUserFailure: (state, action) => {
			state.message = action.payload.message;
			state.isLoading = false;
			state.status = "FAILURE";
			state.user = {};
		},
	},
});

export const {
	signUpRequest,
	signUpSuccess,
	signUpFailure,
	signInRequest,
	signInSuccess,
	signInFailure,
	getAllUsersRequest,
	getAllUsersSuccess,
	getAllUsersFailure,
	getSingleUserRequest,
	getSingleUserSuccess,
	getSingleUserFailure,
	updateUserRequest,
	updateUserSuccess,
	updateUserFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
