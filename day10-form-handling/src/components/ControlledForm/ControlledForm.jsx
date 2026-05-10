import { useState } from "react";

const ControlledForm = () => {
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  let handleFullName = (e) => {
    console.log(e.target.value);
    setFullName(e.target.value);
  };

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Fullname: ${fullName}`);
    console.log(`Password: ${password}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div>
      <h3>Register Here</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          name="fullName"
          id="fullName"
          onChange={handleFullName}
        />

        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          id="email"
          onChange={handleEmail}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          id="password"
          onChange={handlePassword}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
