import React from "react";
import { Link } from "gatsby";

function Menu() {
  return (
    <ul
      css={`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0rem 0;
      `}
    >
      <li>
        <Link
          css={`
            background: red;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Noto Sans", sans-serif;

            border: solid red;

            :hover {
              color: red;
              background: white;
            }
          `}
          to="/"
        >
          Home
        </Link>
        <Link
          css={`
            background: red;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Noto Sans", sans-serif;

            border: solid red;

            :hover {
              color: red;
              background: white;
            }
          `}
          to="/allposts"
        >
          All Posts
        </Link>
      </li>
      <li>
        <Link
          css={`
            background: red;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Noto Sans", sans-serif;

            border: solid red;

            :hover {
              color: red;
              background: white;
            }
          `}
          to="/tags"
        >
          All Tags
        </Link>
      </li>
      {/* <li>
        <a
          css={`
            background: red;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
            color: white;
            box-shadow: none;
            font-family: "Noto Sans", sans-serif;
            border: solid red;

            :hover {
              color: red;
              background: white;
            }
          `}
          href={`https://twitter.com/zappy108`}
        >
          Twitter
        </a>
      </li> */}
    </ul>
  );
}

export default Menu;
