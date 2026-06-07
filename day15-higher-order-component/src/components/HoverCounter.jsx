import { useState } from "react";
import { withHoc } from "./withHoc";

const HoverCounter = (props) => {
  let { count, handleIncre } = props.data;
  return (
    <div>
      <h1 onMouseOver={handleIncre}>{count}</h1>
    </div>
  );
};

export default withHoc(HoverCounter);
