import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import Button from "../../components/UI-components/Button";
import InputPersonalInfo from "../../components/UI-components/InputPersonalInfo";

function step3() {
  // const ticketAmount = amount of requested tickets from previous step
  // const setupPrice = base fee + fee for each additional person

  return (
    <>
      <section className="order-interface">
        <StepIndicator />
        <h2>Personal information</h2>
        <h5>We need some details about each person for the tickets.</h5>
        <InputPersonalInfo />
        <InputPersonalInfo />
      </section>
      <OrderOverview />
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step2"} />
        <Button buttonType={"primary"} buttonText={"Continue to payment"} href={"/tickets/step4"} />
      </div>
    </>
  );
}

export default step3;
