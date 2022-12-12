import React from "react";

function InputSelect(props) {
  return (
    <>
      <select name="select" id="select">
        <option value={props.optionOne}>{props.optionOne}</option>
        <option value={props.optionTwo}>{props.optionTwo}</option>
      </select>
    </>
  );
}

export default InputSelect;
