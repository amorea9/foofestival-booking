import React from "react";
import NumericInput from "react-numeric-input";

function InputCounter(props) {
  return (
    <div className="input-box box">
      <div className="ticket-details">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>
      <div className="price-input">
        <h3>{props.price}</h3>

        {props.title === "Regular" && <NumericInput className="number-input" min={0} max={5} step={1} defaultValue={0} mobile onChange={props.updateRegTickets} />}

        {props.title === "VIP" && <NumericInput className="number-input" min={0} max={5} step={1} defaultValue={0} mobile onChange={props.updateVIPTickets} />}
      </div>
    </div>
  );
}
export default InputCounter;
