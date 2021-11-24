import React, { useEffect } from "react";
import { RootReducerState } from "src/redux/rootReducers";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { logout } from "src/redux/actions/loginAction";

const Dashboard: React.FunctionComponent = (): JSX.Element => {
	const dispatch: any = useDispatch();
	const navigate: any = useNavigate();

	const { isLoggedIn } = useSelector(
		({ loginReducer }: RootReducerState) => ({
			isLoggedIn: loginReducer.isLoggedIn,
		}),
		shallowEqual
	);

	useEffect(() => {
		if (!isLoggedIn) {
			navigate(`/`);
		}
	}, [isLoggedIn]);

	return (
		<div className="container">
			<div className="card m-3 p-3">Welcome to Dashboard</div>
			<button className="btn btn-danger" onClick={() => dispatch(logout())}>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
