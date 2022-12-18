import React from "react";

function InputDrop(props) {
  return (
    <div className="drop-box">
      <select onChange={props.selectArea} name="select" id="select">
        <option value="choose" defaultValue>
          Choose your area
        </option>
        <option value={props.optionOne}>
          {props.optionOne} ({props.optionOneSpace} available)
        </option>
        <option value={props.optionTwo}>
          {props.optionTwo} ({props.optionTwoSpace} available)
        </option>
        <option value={props.optionThree}>
          {props.optionThree} ({props.optionThreeSpace} available)
        </option>
        <option value={props.optionFour}>
          {props.optionFour} ({props.optionFourSpace} available)
        </option>
        <option value={props.optionFive}>
          {props.optionFive} ({props.optionFiveSpace} available)
        </option>
      </select>
    </div>
  );
}

export default InputDrop;
