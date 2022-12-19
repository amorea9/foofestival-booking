import React from "react";
import InputMask from "react-input-mask";
import Button from "./Button";

function InputPaymentInfo(props) {
  return (
    <div className="payment-field">
      <h3>Credit Card Details</h3>
      <form>
        <div>
          <label htmlFor="form-name">
            Name On Card
            <input required type="text" name="name" id="form-name" placeholder="John Appleseed" />
          </label>
        </div>
        <div>
          <label htmlFor="form-card">
            Card Number
            <InputMask required mask="9999 9999 9999 9999" maskChar={null} placeholder={"1234 1234 1234 1234"} name="cardNo" id="form-cardNo" onBlur={props.verify} />
          </label>

          <label htmlFor="form-expiry">
            Expiry Date
            <InputMask required mask="99/99" maskChar={null} placeholder={"12/34"} name="expiry" id="form-expiry" onBlur={props.verify} />
          </label>

          <label htmlFor="form-cvc">
            CVC Number
            <input required type="text" name="cvc" id="form-cvc" inputMode="numeric" maxLength="3" onBlur={props.verify} placeholder={123} />
          </label>
        </div>
        <div>
          <label htmlFor="form-email">
            Email
            <input required type="email" name="email" id="form-email" onBlur={props.verify} placeholder={"beep@boop.com"} />
          </label>

          <label htmlFor="form-phone">
            Phone number
            <InputMask mask="99 99 99 99" maskChar={null} required type="text" name="phone" id="form-phone" placeholder={"12 34 56 78"} />
          </label>
        </div>
        <div>
          <label htmlFor="form-address">
            Billing Address
            <textarea required name="address" id="form-address" placeholder="John's House" />
          </label>
        </div>
        {/* <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step3"} /> */}
        {/* please style me!! */}
        {/* <Button buttonType={"primary"} buttonText={"Submit"} onClick={props.shallPass} href={"#"} /> */}
      </form>
    </div>
  );
}

export default InputPaymentInfo;
