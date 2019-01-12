import React from "react";
// on click pass props
export default ({ name, root, on }) => (
  <div
    style={{
      borderRadius: "50%",
      width: 30,
      height: 30,
      backgroundColor: root === name ? "red" : "green",
      padding: "5px"
    }}
  >
    {name}
  </div>
);
