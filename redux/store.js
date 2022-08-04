import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import postReducer from "./reducer/postReducer";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	userReducer,
	postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [createLogger()];

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middlewares,
});

export const persistor = persistStore(store);
