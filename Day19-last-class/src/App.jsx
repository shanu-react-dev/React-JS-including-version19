import React from "react";
import { useReducer } from "react";
import { Reducer } from "./reducer";
import Axios from "./Axios";

const App = () => {
  let [state, dispatch] = useReducer(Reducer, 0);
  return (
    <div>
      {/* <h1>App</h1>
      <h1>{state}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button> */}

      <Axios></Axios>
    </div>
  );
};

export default App;
