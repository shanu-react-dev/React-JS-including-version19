import { useFormik } from "formik";
import { formSchema } from "./formSchema";
import "./style.css";

let initialState = {
  username: "",
  password: "",
};
function App() {
  let {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    touched,
  } = useFormik({
    initialValues: initialState,
    validationSchema: formSchema,
    onSubmit: (data) => {
      console.log(data);
      resetForm();
    },
  });
  console.log(values);
  // console.log(formSchema);
  console.log(errors);
  return (
    <div className="formContainer">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />

        <p>{errors.username && touched.username ? errors.username : ""}</p>

        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <p>{errors.password && touched.password ? errors.password : ""}</p>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
