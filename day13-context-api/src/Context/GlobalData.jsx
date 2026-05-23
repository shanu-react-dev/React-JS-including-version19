import { createContext } from "react";

export const context = createContext();

let { Provider } = context; // Provider is a component responsible for sending data to the children component

console.log(context);
const GlobalData = ({ children }) => {
  console.log(children);
  return <Provider value={{ username: "Shanu", age: 23 }}>{children}</Provider>;
};
export default GlobalData;
