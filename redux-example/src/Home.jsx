import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./CounterSlice";
export const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter example:</h1>
      <hr />
      <div>counter: {count}</div>
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(incrementByValue(5))}>➕ +5</button>
    </div>
  );
};
  