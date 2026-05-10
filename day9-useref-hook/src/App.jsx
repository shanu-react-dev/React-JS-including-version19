// import { useRef } from "react";
// import Counter from "./counter";
// import Input from "./Input";

// const App = () => {
//   //   console.log(useRef("Sundari"));
//   return (
//     <div>
//       <Counter></Counter>
//       <h1>Hii this is App Component</h1>
//       <Input></Input>
//     </div>
//   );
// };
// export default App;

import { useRef } from "react";

export default function App() {
  const countRef = useRef(0);
  const genderRef = useRef(true);

  function Increment() {
    countRef.current++;
    console.log("Count ref:", countRef);
  }

  function handleCheck() {
    if (genderRef.current == true) {
      genderRef.current.checked = false;
    } else {
      genderRef.current.checked = true;
    }
  }

  return (
    <div className="App">
      <p>CountRef is: {countRef.current}</p>
      <button onClick={Increment}>Increment</button>

      <input type="radio" ref={genderRef} name="gender" id="male" />
      <label htmlFor="male">Male</label>
      <button onClick={handleCheck}>Check the gender</button>
    </div>
  );
}
