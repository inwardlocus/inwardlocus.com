import React from "react";
import { Link } from "gatsby";

function Menu() {
  return (
    <ul
      css={`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 1rem 0;
      `}
    >
      <li>
        <Link
          css={`
            background: midnightblue;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Georgia";

            :hover {
              color: white;
            }
          `}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          css={`
            background: midnightblue;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Georgia";

            :hover {
              color: white;
            }
          `}
          to="/tags"
        >
          All Tags
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
