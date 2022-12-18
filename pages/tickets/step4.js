import React from "react";
import InputPaymentInfo from "../../components/UI-components/InputPaymentInfo";
import StepIndicator from "../../components/UI-components/StepIndicator";
import OrderOverview from "../../components/OrderOverview";
import Button from "../../components/UI-components/Button";
// import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";

let cardFlag = false;
let expiryFlag = false;
let cvcFlag = false;
let submitFlag = false;

function step4() {
  function verify(event) {
    console.log("verification","cardFlag: ", cardFlag, "expiryFlag: ", expiryFlag,"cvcFlag: ", cvcFlag, "submitFlag: ", submitFlag )
    
    if (event.target.name === "cardNo") {
      if (event.target.value.match(/^[0-9]{12}?$/)){
        cardFlag = true;
      } else {
        console.log("verification of card number failed: ", event.target.value)
      }

    } else if (event.target.name === "expiry") {
      if (event.target.value.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)){
        expiryFlag = true;
      } else {
        console.log("verification of expiry failed: ", event.target.value)
      }

    } else if (event.target.name === "cvc") {
      if (event.target.value.match(/^[0-9]{3,4}$/)){
        cvcFlag = true;
      } else {
        console.log("verification of cvc failed: ", event.target.value)
      }
    }
  }

  function shallPass(event) {
    event.preventDefault()
    console.log("shallPass function run")
    if (cardFlag && expiryFlag && cvcFlag){
      submitFlag = true;
      console.log("passed")
      console.log(submitFlag)
    } else {
      console.log("failed")
    }
  }
  // order overview responsiveness
  // const matches = useMediaQuery("(min-width: 1100px)");
  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={4} />
        <h2>Payment information</h2>
        <h5>Please enter your payment information.</h5>
        <InputPaymentInfo verify={verify} shallPass={shallPass}/>
      </section>
      {/* {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview orderInfo={props.orderInfo} />} */}
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step3"} />
        {submitFlag && <Button buttonType={"primary"} buttonText={"Confirm & pay →"} href={"/tickets/confirmation"} />}
      </div>
    </div>
  );
}

export default step4;
