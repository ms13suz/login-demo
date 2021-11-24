export interface DefaultActionListType {
	type: string;
	payload: { [key: string]: any }[];
}

export interface LoginReducerListType {
	loading: boolean;
	error: boolean;
	isLoggedIn: boolean;
	token: string;
	data: { [key: string]: any };
}
