import Dashboard from "./Dashboard";

function Login() {
  let isLoggedIn = true;
  //   if (isLoggedIn === true) {
  //     return <Dashboard></Dashboard>;
  //   } else {
  //     return (
  //       <div>
  //         <h1>Login Here</h1>
  //       </div>
  //     );
  //   }

  //! Short Circuiting in React
  //? Short circuiting is a way to perform conditional rendering for a component to show the component if that particular variable is true or false. The flow of short circuiting method will be from left to right.
  //   return (
  //     <div>
  //       {isLoggedIn && <Dashboard></Dashboard>}
  //       {!isLoggedIn && <div>Login First</div>}
  //     </div>
  //   );

  //! switch conditional rendering
  // switch (isLoggedIn) {
  //   case false:
  //     return <h1>Please login first then access your account..</h1>;

  //   case true:
  //     return <Dashboard />;
  //   default:
  //     return <h1>Some error ocuured please try again later</h1>;
  // }

  //! Ternary Operator
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard></Dashboard>
      ) : (
        <h1>Hey Dabba login first tehn you can access.</h1>
      )}
    </div>
  );
}

export default Login;
