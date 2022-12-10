import React from "react";
import InputPaymentInfo from "../../components/UI-components/InputPaymentInfo";
import StepIndicator from "../../components/UI-components/StepIndicator";

function step4() {
  return (
    <>
      <div className="order-interface">
        <StepIndicator />
        <h2>Payment information</h2>
        <h5>Please enter your payment information.</h5>
        <InputPaymentInfo />
      </div>
      <OrderOverview />
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step3"} />
        <Button buttonType={"primary"} buttonText={"Confirm & pay"} href={"/tickets/confirmation"} />
      </div>
    </>
  );
}

export default step4;
