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
            background: blue;
            line-height: 1.5;
            padding: 5px 10px;
            margin: 5px;
            font-weight: bold;
          `}
          key={tag.fieldValue}
        >
          <Link
            css={`
              color: white;
              box-shadow: none;
              font-family: "Georgia";

              :hover {
                color: white;
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
