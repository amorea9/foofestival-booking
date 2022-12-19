import React from "react";
import InputPaymentInfo from "../../components/UI-components/InputPaymentInfo";
import StepIndicator from "../../components/UI-components/StepIndicator";
import OrderOverview from "../../components/OrderOverview";
import MobileOrderOverview from "../../components/MobileOrderOverview";
import { useMediaQuery } from "usehooks-ts";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";

let cardFlag = false;
let expiryFlag = false;
let cvcFlag = false;
let submitFlag = false;

function step4(props) {
  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");
  // routing
  const router = useRouter();

  // BUTTONS - decide whether to reroute or not
  function confirm() {
    router.push("/tickets/confirmation");
  }

  // BUTTONS - go to back previous page
  function goBack() {
    router.push("/tickets/step3");
  }

  // ---------- GARETH'S VERIFICATION ----------
  // function verify(event) {
  //   console.log("verification", "cardFlag: ", cardFlag, "expiryFlag: ", expiryFlag, "cvcFlag: ", cvcFlag, "submitFlag: ", submitFlag);

  //   if (event.target.name === "cardNo") {
  //     if (event.target.value.match(/^[0-9]{12}?$/)) {
  //       cardFlag = true;
  //     } else {
  //       console.log("verification of card number failed: ", event.target.value);
  //     }
  //   } else if (event.target.name === "expiry") {
  //     if (event.target.value.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
  //       expiryFlag = true;
  //     } else {
  //       console.log("verification of expiry failed: ", event.target.value);
  //     }
  //   } else if (event.target.name === "cvc") {
  //     if (event.target.value.match(/^[0-9]{3,4}$/)) {
  //       cvcFlag = true;
  //     } else {
  //       console.log("verification of cvc failed: ", event.target.value);
  //     }
  //   }
  // }

  // function shallPass(event) {
  //   event.preventDefault();
  //   console.log("shallPass function run");
  //   if (cardFlag && expiryFlag && cvcFlag) {
  //     submitFlag = true;
  //     console.log("passed");
  //     console.log(submitFlag);
  //   } else {
  //     console.log("failed");
  //   }
  // }

  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={4} />
        <h2>Payment information</h2>
        <h5>Please enter your payment information.</h5>
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
                <textarea required name="address" id="form-address" placeholder="Pearstreet 72, 2020 London" />
              </label>
            </div>
            {/* <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step3"} /> */}
            {/* please style me!! */}
            {/* <Button buttonType={"primary"} buttonText={"Submit"} onClick={props.shallPass} href={"#"} /> */}
          </form>
        </div>
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview orderInfo={props.orderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />}
      {/* <div className="booking-steps-buttons"> */}
      {/* <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step3"} orderInfo={props.orderInfo} /> */}
      {/* {submitFlag && <Button buttonType={"primary"} buttonText={"Confirm & pay →"} href={"/tickets/confirmation"} orderInfo={props.orderInfo} />} */}
      {/* </div> */}
      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Back
        </button>
        <button className="primary" onClick={confirm}>
          Continue to payment →
        </button>
      </div>
    </div>
  );
}

export default step4;
