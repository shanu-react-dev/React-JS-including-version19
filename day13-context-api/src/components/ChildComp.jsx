import React from "react";
import { useContext } from "react";
import { context } from "../Context/GlobalData";

const ChildComp = () => {
  const data = useContext(context);
  console.log(data);
  //   console.log(props);
  return (
    <div>
      ChildComp
      <h1>Username from Parent: </h1>
      <h1>Age from Parent: </h1>
    </div>
  );
};

export default ChildComp;
