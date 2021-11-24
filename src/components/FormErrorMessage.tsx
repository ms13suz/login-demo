import React from "react";

interface Props {
	error: any;
}

function errorMessage(error: any) {
	switch (error.type) {
		case "required":
			return error.message || "Required";
		default:
			return error.message;
	}
}

const FormErrorMessage = React.memo(({ error }: Props) => {
	return (
		<div>
			{error ? (
				<span className="text-danger d-block mt-1 requiredMsg">
					<i className="fa fa-exclamation-circle"></i> {errorMessage(error)}
				</span>
			) : null}
		</div>
	);
});

export { FormErrorMessage };
