import { useRef } from "react";

const Input = () => {
  let usernameRef = useRef(null);
  let handleFocus = () => {
    usernameRef.current.focus();
  };
  console.log("Hii this is Amar");
  return (
    <div>
      <label htmlFor="username">Enter Username</label>
      <input type="text" ref={usernameRef} name="username" id="username" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default Input;
