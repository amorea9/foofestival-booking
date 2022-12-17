import React from "react";
import Button from "./Button"

function InputPaymentInfo(props) {


  return (
    <div className="payment-field">
      <h3>Credit Card Details</h3>
      <form>
        <div>
          <label htmlFor="form-name">
            Name On Card
            <input required type="text" name="name" id="form-name" />
          </label>
        </div>
        <div>
          <label htmlFor="form-card">
            Card Number
            <input required type="text" name="cardNo" id="form-cardno" inputmode="numeric" maxlength="16" onBlur={props.verify}/>
          </label>

          <label htmlFor="form-expiry">
            Expiry Date
            <input required type="text" name="expiry" id="form-expiry" inputmode="numeric" maxlength="4" onBlur={props.verify}/>
            <span>/</span>
          </label>

          <label htmlFor="form-cvc">
            CVC Number
            <input required type="text" name="cvc" id="form-cvc" inputmode="numeric" maxlength="3" onBlur={props.verify}/>
          </label>
        </div>
        <div>
          <label htmlFor="form-email">
            Email
            <input required type="email" name="email" id="form-email" onBlur={props.verify}/>
          </label>

          <label htmlFor="form-phone">
            Phone number
            <input required type="text" name="phone" id="form-phone" onBlur={props.verify}/>
          </label>
        </div>
        <div>
          <label htmlFor="form-address">
            Billing Address
            <textarea required name="address" id="form-address" />
          </label>
        </div>
        {/* <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step3"} /> */}
      {/* please style me!! */}
      <button  onClick={props.shallPass}>Submit</button>
      </form>
    </div>
  );
}

export default InputPaymentInfo;
