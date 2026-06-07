import React, { useReducer } from "react";
import { reducer } from "../utilities/reducer";
import { initialVal } from "../utilities/initialVal";

const Login = () => {
  let [state, dispatch] = useReducer(reducer, initialVal);
  console.log(state);

  let handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ name, value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="usernameBox">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <label htmlFor="username">Enter Username</label>
        </div>
        <div className="passwordBox">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <label htmlFor="password">Enter Password</label>
        </div>
        <input type="submit" value="Login Now" />
      </form>
    </div>
  );
};

export default Login;
