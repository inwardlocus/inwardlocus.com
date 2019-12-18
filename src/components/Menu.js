import React from "react";
import { Link } from "gatsby";
import "./Menu.css";

function Menu(props) {
  return (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
    </ul>
  );
}

export default Menu;
