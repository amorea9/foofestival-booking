import React from "react";

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
            <input name={props.name} type="checkbox" className="hidden" id="checkbox" onChange={props.tentSetUp} />
            <label htmlFor="checkbox" className="checkbox-label"></label>
          </div>
        ) : (
          <div className="checkbox-container">
            <input type="checkbox" className="hidden" id="checkbox2" onChange={props.tentGreen} />
            <label htmlFor="checkbox2" className="checkbox-label"></label>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCheck;
