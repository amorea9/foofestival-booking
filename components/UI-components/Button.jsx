import React from "react";

function Button(props) {
  return <div className={props.buttonType}>{props.buttonText}</div>;
}

export default Button;
