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
        list-style: none;
        margin: 1rem 0;
      `}
    >
      {tags.map(tag => (
        <li
          css={`
            // background: white;
            line-height: 0.5;
            padding: 5px 5px;
            margin: 2px;
            font-weight: bold;
            border: solid blue;
            :hover {
              // background: blue;
              
            }
          `}
          key={tag.fieldValue}
        >
          <Link
            css={`
              color: blue;
              box-shadow: none;
              font-family: 'Courier Prime', monospace;

              :hover {
                color: red;
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
