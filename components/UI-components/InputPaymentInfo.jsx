import React from "react";

// npm install something for this?

function InputPaymentInfo() {
  return (
    <div>
      <h2>Credit card details</h2>
      <div>
        <label>
          Name on card
          <input type="text" name="nameOnCard" placeholder="John Doe Applebaum" />
        </label>
      </div>
    </div>
  );
}

export default InputPaymentInfo;
