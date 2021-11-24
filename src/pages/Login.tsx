import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginComponentState } from "./interface";
import { TextBox } from "../components";
import { RootReducerState } from "src/redux/rootReducers";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "src/redux/actions/loginAction";

const Login: React.FunctionComponent = (): JSX.Element => {
	const dispatch: any = useDispatch();
	const navigate: any = useNavigate();
	const methods = useForm<LoginComponentState>({
		mode: "all",
	});

	const { loading, isLoggedIn, error } = useSelector(
		({ loginReducer }: RootReducerState) => ({
			error: loginReducer.error,
			loading: loginReducer.loading,
			isLoggedIn: loginReducer.isLoggedIn,
		}),
		shallowEqual
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = (data: any) => {
		dispatch(login(data));
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigate(`/dashboard`);
		}
	}, [isLoggedIn]);

	return (
		<div className="container">
			<div className="card m-3 p-3">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<TextBox
							type="email"
							className="form-control"
							placeholder="Email"
							{...register("email", {
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email",
								},
							})}
							error={errors?.email}
						/>
					</div>
					<div className="mb-3">
						<TextBox
							className="form-control"
							type="password"
							placeholder="Password"
							{...register("password", {
								required: true,
								minLength: {
									value: 6,
									message: "Password must have at least 6 characters",
								},
							})}
							error={errors?.password}
						/>
					</div>
					<div className="mb-4">
						<button
							type="submit"
							className="btn w-100 btn-dark d-block btn-login"
						>
							login{" "}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
