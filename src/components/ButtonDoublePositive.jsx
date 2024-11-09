import React, { useState } from 'react';

const ButtonDoublePositive = () => {
    // we create a counter to know value of each actions
    const [count, setCount] = useState(0);

    // adding the increment and decrement functions
    const positive = () => {
        setCount(count + 2);
    }
    const negative = () => {
        setCount(count - 2);
    }               

    // returned a button
    return (
        <div>
            <p>{count}</p>
            <button onClick={positive}>++</button>
            <button onClick={negative}>-</button>
            <p>Double Positive</p>

        </div>
    )
    // console.log(count);
    
}

export default ButtonDoublePositive;