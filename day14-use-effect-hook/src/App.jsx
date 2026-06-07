import { useEffect, useState } from "react";

const App = () => {
  let [apidata, setData] = useState();
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Shanu");
  async function FetchData() {
    let data = await fetch("https://api.github.com/users");
    console.log(data);
    let finalData = await data.json();
    console.log(finalData);
    setData(finalData);
  }
  //   FetchData();
  // ! Without Dependency
  //   useEffect(() => {
  //     FetchData();
  //     return () => {
  //       console.log("Cleanup Function");
  //     };
  //   });

  //!   empty Dependency
  // useEffect(() => {
  //   FetchData();
  //   return () => {
  //     console.log("Cleanup Function");
  //   };
  // }, []);
  //!   With Dependency
  useEffect(() => {
    FetchData();
    return () => {
      console.log("Cleanup Function");
    };
  }, [count, name]);
  return (
    <div>
      <h1>Hii this is App component</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h2>{name}</h2>
      <button onClick={() => setName("Sundari")}>Change name</button>

      <hr />

      {apidata?.map((ele, index) => {
        return (
          <div key={index}>
            <img src={ele.avatar_url} alt="" height="200px" width="200px" />
            <h4>{ele.login}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default App;
