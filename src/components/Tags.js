import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

// tags {
//   fieldValue
//   totalCount
// }

function Tags({ tags }) {
  return (
    <ul
      css={`
        display: flex;
        flex-wrap: wrap;
        justify-content:flex-start;
        list-style: none;
        margin: 1rem 0;
             
      
      `}
    >
      {tags.map(tag => (
        <li
          css={`
            background: white;
            line-height: 1;
            padding: 5px 5px;
            margin: 2px;
            font-weight: bold;
            border-left: solid black;
            // border-top-left-radius: 4em 7em;
            // border-bottom: solid black;
            // border-bottom-right-radius: 6em 8em;
            // border-bottom-left-radius:  6em 8em;
            box-shadow: 0px 0px 1px #2c99d1 ;
            
                `}
          key={tag.fieldValue}
        >
          <Link
            css={`
              color: #2c99d1;
              box-shadow: none;
              font-family: 'Exo', sans-serif;

              :hover {
                color: red;
                font-family: 'Exo', sans-serif;
              }
            `}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            {tag.fieldValue.toLowerCase()}{" "}
            {tag.totalCount && <span>({tag.totalCount})</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
