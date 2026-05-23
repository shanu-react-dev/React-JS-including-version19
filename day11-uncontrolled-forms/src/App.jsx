import React from "react";
import { useRef } from "react";
import "./style.css";

const App = () => {
  let userNameRef = useRef("");
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let birthRef = useRef("");

  //   console.log(userNameRef);
  //   console.log(emailRef);
  //   console.log(passwordRef);
  //   console.log(birthRef);

  let handleSubmit = (e) => {
    e.preventDefault();
    let userName = userNameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let DOB = birthRef.current.value;
    console.log({ userName, email, password, DOB });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Signup here</h3>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          id="username"
          ref={userNameRef}
        />

        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          ref={emailRef}
        />

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
          ref={passwordRef}
        />

        <label htmlFor="dob">Select Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="dob"
          ref={birthRef}
          min={"2026-01-01"}
          max={new Date().toISOString().split("T")[0]}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
