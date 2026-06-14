import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/help"}>Help</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};
