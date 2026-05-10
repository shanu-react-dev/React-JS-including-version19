import { useState } from "react";
import { useRef } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let data = useRef(0);
  console.log(data);
  let handleClick = () => {
    data.current = data.current + 1;
    console.log(data);
  };
  console.log("Hii this is Shanu", count);
  return (
    <div>
      <h1>{count} from state</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1 onClick={handleClick}>Data from useRef hook {data.current}</h1>
    </div>
  );
}

export default Counter;
