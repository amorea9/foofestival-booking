import React from "react";

let setUp = false
let green = false

function InputCheck(props) {

  return (
    <div className="input-box box">
      <div className="input-text">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>

      </div>
      <div>
        <h3>{props.price}</h3>
        {/* insert input type depending on props.type */}
        {props.name === "TentSetup" ? <input type="checkbox" onChange={props.tentSetUp} /> : <input type="checkbox" onChange={props.tentGreen} />}
      </div>
    </div>
  );
}

export default InputCheck;
