import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
  let [state, setState] = useState();
  useEffect(() => {
    async function fetchData() {
      //   let data = await fetch("https://api.github.com/users");
      //   let finalData = await data.json();
      //   console.log(finalData);
      //! Axios is a third party library and it is used to handle the HTTP request. It simplifies the http request no need to convert response into JSON manually.
      let data = await axios.get("https://api.github.com/users");
      console.log(data.data);
    }
    fetchData();
  }, []);
  return <div>Axios</div>;
};

export default Axios;
