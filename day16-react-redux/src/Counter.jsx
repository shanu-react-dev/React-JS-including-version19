import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/slicer";

export const Counter = () => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
