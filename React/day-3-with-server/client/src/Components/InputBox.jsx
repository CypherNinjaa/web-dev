import React from "react";

const InputBox = ({ inputname, customtype, change, customvalue }) => {
	return (
		<div>
			<input
				type={customtype}
				placeholder={`Enter your ${inputname}`}
				value={customvalue}
				onChange={change}
			/>
		</div>
	);
};

export default InputBox;
