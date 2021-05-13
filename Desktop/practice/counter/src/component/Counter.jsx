import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const countUp = () =>　{
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    return (
        <>
        <div>{count}</div>
        <button onClick={countUp}>+1</button>
        <button onClick={countDown}>-1</button>
        </>
    );
};

export default Counter
