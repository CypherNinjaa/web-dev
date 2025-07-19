import React, { useEffect, useState } from "react";

const Counter = () => {
    // Initialize count state with a default value
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);


useEffect(() => {
    const addcount = () => {
        setSum(count  + 4);
    };
    addcount();
},[count])

    const increment = () => {
        setCount(count + 6);
    }

    // const decrement = () => {
    //     setCount(count - 1);
    // };

    return (
        <div>
          

            <h1>Counter: {count}</h1>
            <button onClick={increment} className="btn btn-primary">Click me</button>
            {/* <button onClick={decrement}>Decrement</button> */}
            <h2>dynamically changes: {sum}</h2>

        </div>
    );
};

export default Counter;
