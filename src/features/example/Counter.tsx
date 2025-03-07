import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "./exampleSlice";
import { RootState } from "../../app/store";

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.example.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    )
}

export default Counter;