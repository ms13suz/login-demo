import { combineReducers } from "redux";

import { LoginReducerListType } from "../utils/types";

import { loginReducer } from "./reducers/loginReducer";

export type RootReducerState = {
	loginReducer: LoginReducerListType;
};

export const rootReducers = combineReducers<RootReducerState>({
	loginReducer,
});
