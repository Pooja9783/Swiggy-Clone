import React, { useState } from "react";
import "./Heading.css";
const Headings = (props) => {
  const [variant] = useState(props.variant);
  const [size] = useState(props.size);
  return (
    <>
      <h1 className={`h1-${variant} h1-${size}`}>{props.children}</h1>;
      <h2 className={`h2-${variant} h2-${size}`}>{props.children}</h2>;
    </>
  );
};

export default Headings;
