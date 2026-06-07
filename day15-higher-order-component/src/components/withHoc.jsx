import { useState } from "react";

export const withHoc = (WrappedComponent) => {
  const NewComponent = () => {
    let [count, setCount] = useState(0);
    let handleIncre = () => setCount(count + 1);
    return <WrappedComponent data={{ count, handleIncre }}></WrappedComponent>;
  };
  return NewComponent;
};
