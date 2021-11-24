import { AnyAction, Dispatch } from "redux";
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_START,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
} from "../actionTypes";
import { toast } from "react-toastify";

import { TOKEN } from "../reducers/loginReducer";

export const login = (data: { email: string; password: string }) => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: LOGIN_START });
		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});
		toast.success("Login successfully!");
		localStorage.setItem(TOKEN, "valid-token");
	};
};

export const logout = () => {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch({ type: LOGOUT_START });
		dispatch({
			type: LOGOUT_SUCCESS,
		});
		toast.success("Logout successfully!");
		localStorage.setItem(TOKEN, "");
	};
};
