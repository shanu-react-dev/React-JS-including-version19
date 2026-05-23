import React from "react";
import ParentComp from "./ParentComp";

const GrandParentComp = () => {
//   console.log(props.data);
  return (
    <div>
      GrandParentComp
      {/* <ParentComp datafromGP={props.data}></ParentComp> */}
    </div>
  );
};

export default GrandParentComp;
