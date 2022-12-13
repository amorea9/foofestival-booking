import React from "react";

function InputDrop(props) {
  return (
    <div className="drop-box">
      <select name="select" id="select">
        <option value={props.optionOne}>{props.optionOne}</option>
        <option value={props.optionTwo}>{props.optionTwo}</option>
      </select>
    </div>
  );
}

export default InputDrop;
