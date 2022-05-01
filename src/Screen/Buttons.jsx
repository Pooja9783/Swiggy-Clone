import React, { useState } from "react";
import "./Buttons.css";
const Buttons = (props) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
    <div>
      <button className={`btn-${variant} btn-${size}`} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Buttons;
