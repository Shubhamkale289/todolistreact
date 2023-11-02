import React, {useState} from "react";


export function States1() {
    const [count, setCount] = useState(10);

    function decreaseValue() {
        setCount(count-1);
    }
    function increaseValue() {
        setCount(count+1);
    }
    function resetValue0() {
        setCount(0);
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={decreaseValue}>-</button>
            <button onClick={resetValue0}>Reset</button>
            <button onClick={increaseValue}>+</button>
        </div>
    )
}