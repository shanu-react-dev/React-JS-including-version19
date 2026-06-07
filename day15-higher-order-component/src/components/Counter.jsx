import { useState } from "react";
import { withHoc } from "./withHoc";

const Counter = (props) => {
  console.log(props);
  let { count, handleIncre } = props.data;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncre}>Increment</button>
    </div>
  );
};

export default withHoc(Counter);
