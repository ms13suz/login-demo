import { DefaultActionListType, LoginReducerListType } from "../../utils/types";
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_START,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
} from "../actionTypes";

export const TOKEN: any = "_token";

const initialState: LoginReducerListType = {
	loading: false,
	error: false,
	data: {},
	isLoggedIn: localStorage.getItem(TOKEN) ? true : false,
	token: localStorage.getItem(TOKEN) ?? "",
};

export const loginReducer = (
	state = initialState,
	action: DefaultActionListType
): LoginReducerListType => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				loading: true,
				isLoggedIn: false,
				token: "",
				error: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				isLoggedIn: true,
				token: "",
				data: action.payload,
			};
		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
				isLoggedIn: false,
				error: true,
				token: "",
			};
		case LOGOUT_START:
			return {
				...state,
				loading: true,
				error: false,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				loading: false,
				isLoggedIn: false,
				token: "",
				data: {},
			};
		case LOGOUT_FAIL:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
