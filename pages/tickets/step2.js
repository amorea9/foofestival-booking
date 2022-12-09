import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputBox from "../../components/UI-components/InputBox";
import Button from "../../components/UI-components/Button";

function step2() {
  // const ticketAmount = amount of requested tickets from previous step
  // const setupPrice = base fee + fee for each additional person

  return (
    <>
      <div className="order-interface">
        <StepIndicator />
        <h2>Tent options</h2>
        <h5>These are optional add-ons to improve your festival experience.</h5>
        <InputBox type={"checkbox"} title={"We can set up your tent"} subtitle={ticketAmount} description={"Tent is included in price."} price={setupPrice} />
        <InputBox type={"checkbox"} title={"Green camping"} subtitle={"Sustainable tent"} description={"Tent made from recycled materials."} price={"299,-"} />
        <p>
          <strong>NOTE:</strong> A mandatory booking fee of 99,- applies for each order.
        </p>
      </div>
      <OrderOverview />
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step1"} />
        <Button buttonType={"primary"} buttonText={"Continue to details"} href={"/tickets/step3"} />
      </div>
    </>
  );
}

export default step2;
