import React from 'react'
import NumericInput from 'react-numeric-input';

function InputCounter(props) {
    function handleChange(event) {
        console.log("changed");
        console.log("amount is: ", event, "and name of value is: ", props.name);
        //set basket to new ticket values
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
            <NumericInput min="0" max="5" step="1" value="0" mobile onChange={handleChange} 
            style={{
              btnUp: {backgroundColor: 'rgba(255,255,255,1)'},
              "&hover": {backgroundColor: 'rgba(255,255,255,1)'},
            }}/>

            {/* default value of input must be value={basket.ticketamount} or something} */}
          </div>
        </div>
      )
}

export default InputCounter