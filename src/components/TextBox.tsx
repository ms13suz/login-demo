import React, { memo } from "react";
import { FormErrorMessage } from "./FormErrorMessage";
interface Props {
	type?: string;
	label?: any;
	containerclassname?: string;
	name?: string;
	error?: any;
	required?: boolean;
	patternRules?: string;
	tooltipText?: string;
}

export const TextBox = memo(
	React.forwardRef<HTMLInputElement, Props & React.HTMLProps<HTMLInputElement>>(
		(props, ref) => {
			const {
				label,
				containerclassname,
				patternRules,
				tooltipText,
				error,
				type,
				required,
				...rest
			} = props;

			return (
				<div className={`${containerclassname ?? "form-group"}`}>
					{label && <label className="form-label fw-bold">{label} </label>}

					<input
						type={type}
						className="form-control"
						ref={ref}
						{...rest}
						onKeyDown={(e: any) => {
							if (patternRules) {
								let regrexPattern = new RegExp(patternRules);
								let val = e.target.value + e.key;
								if (regrexPattern.test(val) || e.keyCode === 8) {
									return true;
								} else {
									e.preventDefault();
									return false;
								}
							} else {
								return true;
							}
						}}
					/>

					{/* error message */}
					<FormErrorMessage error={error} />
				</div>
			);
		}
	)
) as any;

TextBox.defaultProps = {
	type: "text",
};

export default TextBox;
