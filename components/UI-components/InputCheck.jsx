import React from "react";

let setUp = false;
let green = false;

function InputCheck(props) {
  return (
    <div className="input-box box">
      <div className="input-text">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>

      <div className="price-input">
        <h3>{props.price}</h3>
        {props.name === "TentSetup" ? (
          <div className="checkbox-container">
            <input type="checkbox" className="hidden" id="checkbox" onChange={props.tentSetUp} />
            <label htmlFor="checkbox" className="checkbox-label"></label>
          </div>
        ) : (
          <div className="checkbox-container">
            <input type="checkbox" className="hidden" id="checkbox" onChange={props.tentGreen} />
            <label htmlFor="checkbox" className="checkbox-label"></label>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCheck;
