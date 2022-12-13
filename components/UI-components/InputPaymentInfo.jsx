import React from "react";

// npm install something for this?

function InputPaymentInfo() {
  function submit() {
    console.log("submitted")
  }
  return (
    <div className="payment-field">
        <h3>Credit Card Details</h3>
     <form onSubmit={submit}>
        <div>
            <label htmlFor="form-name">Name On Card
            <input required type="text" name="name" id="form-name" />
            </label>
        </div>
        <div>
            <label htmlFor="form-card">Card Number
            <input required type="text" name="cardNo" id="form-cardno" />
            </label>

            <label htmlFor="form-expiry">Expiry Date
            <input required type="text" name="expiry" id="form-expiry" />
            </label>

            <label htmlFor="form-cvr">CSC Number
            <input required type="text" name="expiry" id="form-expiry" />
            </label>
        </div>
        <div>
            <label htmlFor="form-email">Email
            <input required type="email" name="email" id="form-email" />
            </label>

            <label htmlFor="form-email">Telephone
            <input required type="text" name="phone" id="form-phone" />
            </label>
        </div>
        <div>
            <label htmlFor="form-address">Billing Address
            <textarea required  name="address" id="form-address" />
            </label>
            </div>
    </form>
    </div>
  );
}

export default InputPaymentInfo;
