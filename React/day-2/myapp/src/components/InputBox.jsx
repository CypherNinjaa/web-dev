import React from "react";

const InputBox = ({ inputname, type, change, value }) => {
	return (
		<div>
			<input
				type={type}
				placeholder={inputname}
				value={value}
				onChange={change}
			/>
		</div>
	);
};

export default InputBox;
