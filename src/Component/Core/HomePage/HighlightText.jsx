import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-blue-700 via-caribbeangreen-200 to-richblue-100 text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
