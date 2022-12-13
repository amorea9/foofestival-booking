import React from "react";
import NumericInput from "react-numeric-input";

function InputCounter(props) {
  // update tickets in order overview based on user input
  function updateTickets(event) {
    let tick = event;
    console.log(tick);
    // props.setTickets(tick);
  }

  return (
    <div className="input-box box">
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>
      <div>
        <h3>{props.price}</h3>
        <NumericInput className="number-input" min="0" max="5" step="1" value="0" mobile onChange={updateTickets} />

        {/* default value of input must be value={basket.ticketamount} or something} */}
      </div>
    </div>
  );
}
export default InputCounter;
