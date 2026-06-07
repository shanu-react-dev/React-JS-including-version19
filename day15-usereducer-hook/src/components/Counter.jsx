import { useReducer } from "react";
import { reducer } from "./reducer";

let initialVal = 0;
const Counter = () => {
  let [currVal, dispatch] = useReducer(reducer, initialVal);
  return (
    <div>
      <h1>{currVal}</h1>
      <button onClick={() => dispatch({ type: "incre" })}>Incre</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
