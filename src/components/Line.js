import React from "react";
function Line() {
  return (
    <hr
      css={`
        border: 0;
        height: 2px;
        background-image: linear-gradient(to right, blue, red, blue);
      `}
    ></hr>
  );
}
export default Line;
