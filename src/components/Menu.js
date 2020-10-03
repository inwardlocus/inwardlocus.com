import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";



function Menu() {
  return (
    <ul
      css={`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0rem 0;
        float: right;  
      `}
    >
      <li>

        <Link
          css={`
            // background: red;
            // line-height: 1.5;
            padding: 5px 30px;
            // margin: 5px;
            // font-weight: bold;
            color: #2c99d1;
            box-shadow: none;
            font-family: 'Major Mono Display', monospace;

            // border: solid red;

            :hover {
              color: #2c99d1;
              background: white;
            }
          `}
          to="/"
        >
          <span class="Japs">#</span>
          Home
        </Link>
        <Link
          css={`
            // background: red;
            // line-height: 1.5;
            padding: 5px 30px;
            // margin: 5px;
            // font-weight: bold;
            color: #2c99d1;
            box-shadow: none;
            font-family: 'Major Mono Display', monospace;

            // border: solid red;

            :hover {
              color: #2c99d1;
              background: white;
            }
          `}
          to="/allposts"
        >
          <span class="Japs">#</span>Posts
        </Link>
      </li>
      <li>
        <Link
          css={`
            // background: red;
            // line-height: 1.5;
            padding: 5px 30px;
            // margin: 5px;
            // font-weight: bold;
            color: #2c99d1;
            box-shadow: none;
            font-family: 'Major Mono Display', monospace;

            // border: solid red;

            :hover {
              color: #2c99d1;
              background: white;
            }
          `}
          to="/tags"
        >
          <span class="Japs">#</span>Tags
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
            font-family: 'Major Mono Display', monospace;
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
