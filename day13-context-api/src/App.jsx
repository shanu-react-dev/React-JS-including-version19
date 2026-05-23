import React from "react";
import GreatGrandParent from "./components/GreatGrandParent";
import GlobalData from "./Context/GlobalData";
import GrandParentComp from "./components/GrandParentComp";
import ParentComp from "./components/ParentComp";
import ChildComp from "./components/ChildComp";

const App = () => {
  return (
    <div>
      <GreatGrandParent></GreatGrandParent>
      <GrandParentComp></GrandParentComp>
      <GlobalData>
        <ParentComp></ParentComp>
        <ChildComp></ChildComp>
      </GlobalData>
    </div>
  );
};

export default App;
