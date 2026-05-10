import { useState } from "react";

function App() {
  let [currValue, updaterFn] = useState(0);
  console.log(currValue);

  function handleClick() {
    // updaterFn(currValue + 1);
    // updaterFn(currValue + 1);
    // updaterFn(currValue + 1);
    // updaterFn(currValue + 1);
    // updaterFn(currValue + 1);
    updaterFn((prev) => prev + 1);
    updaterFn((prev) => prev + 1);
    updaterFn((prev) => prev + 1);
  }
  return (
    <div>
      <h1>App</h1>
      <h1>{currValue}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => updaterFn(currValue - 1)}>Decrement</button>
    </div>
  );
}
export default App;
