import React from "react";
import NumericInput from "react-numeric-input";

function InputCounter(props) {
  return (
    <div className="input-box box">
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>
      <div>
        <h3>{props.price}</h3>
        {props.title === "Regular" && <NumericInput className="number-input" min={0} max={5} step={1} defaultValue={0} mobile onChange={props.updateRegTickets} />}

        {props.title === "VIP" && <NumericInput className="number-input" min={0} max={5} step={1} defaultValue={0} mobile onChange={props.updateVIPTickets} />}

        {/* default value of input must be value={basket.ticketamount} or something} */}
      </div>
    </div>
  );
}
export default InputCounter;
