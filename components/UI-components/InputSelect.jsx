import React from "react";

function InputSelect(props) {
  return (
    <>
      <select name="select" id="select">
        <option value={props.option1Value}>{props.option1Name}</option>
        <option value={props.option2Value}>{props.option2Name}</option>
      </select>
    </>
  );
}

export default InputSelect;
