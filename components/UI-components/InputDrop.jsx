import React from "react";

function InputDrop(props) {
  return (
    <div className="drop-box">
      <select onChange={props.selectArea} name="select" id="select">
        <option value="choose" defaultValue>
          Choose your area
        </option>
        <option value={props.optionOne}>{props.optionOne}</option>
        <option value={props.optionTwo}>{props.optionTwo}</option>
        <option value={props.optionThree}>{props.optionThree}</option>
        <option value={props.optionFour}>{props.optionFour}</option>
        <option value={props.optionFive}>{props.optionFive}</option>
      </select>
    </div>
  );
}

export default InputDrop;
