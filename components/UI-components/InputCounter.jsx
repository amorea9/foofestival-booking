import React from "react";

function InputCounter(props) {
  function handleChange(event) {
    console.log("changed");
    console.log("amount is: ", event.target.value, "and name of value is: ", props.name);
    //set basket to new ticket values
  }

  // update tickets in order overview based on user input
  function updateTickets(event) {
    let tick = event.target.value;
    props.setTickets(tick);
    console.log(tick);
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
        <input type="number" min="0" max="10" step="1" onChange={updateTickets} />
        {/* default value of input must be value={basket.ticketamount} or something} */}
      </div>
    </div>
  );
}

export default InputCounter;
