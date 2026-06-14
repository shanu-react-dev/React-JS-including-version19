import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  let [state, setState] = useState();
  async function fetchData() {
    // let data = await fetch("https://api.github.com/users");
    // let finaldata = await data.json();
    // console.log(finaldata);
    // setState(finaldata);

    let data = await axios.get("https://api.github.com/users");
    // console.log(data.data);
    setState(data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <table className="border w-[100%]">
        <thead className="bg-red-200">
          <tr>
            <th className="border-2">sl.no.</th>
            <th className="border-2">name</th>
            <th className="border-2">image</th>
          </tr>
        </thead>

        <tbody>
          {state?.map((ele, index) => {
            console.log(ele);
            return (
              <tr key={index} className="border-2">
                <td className="border-3">{ele.id}</td>
                <td className="border-3">{ele.login}</td>
                <td className="border-3">
                  <img
                    src={ele.avatar_url}
                    alt=""
                    height={"200px"}
                    width={"200px"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
