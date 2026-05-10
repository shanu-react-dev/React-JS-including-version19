import { useState } from "react";

let userObj = {
  fullName: "",
  email: "",
  password: "",
};
const OptimizedForm = () => {
  let [formData, setFormData] = useState(userObj);

  let { fullName, email, password } = formData;

  let handleChange = (e) => {
    // console.log(e.target.name);
    let { name, value } = e.target;
    //! this will update formdata directly with email value
    /* if (e.target.name === "email") {
      setFormData((userObj.email = e.target.value));
    }*/

    //! array symbol for name used to fetch the object key dynamically
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      password: "",
      email: "",
    });
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
          onChange={handleChange}
          value={fullName}
        />

        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default OptimizedForm;
