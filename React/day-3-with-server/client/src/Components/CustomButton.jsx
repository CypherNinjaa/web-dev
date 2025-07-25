import React from "react";

const Button = ({ name, Click }) => {
    return (
        <div>
            <button
                placeholder={name}
                onClick={Click}
                className="btn btn-primary btn-lg "
            >
                {name}
            </button>
        </div>
    );
};

export default Button;
