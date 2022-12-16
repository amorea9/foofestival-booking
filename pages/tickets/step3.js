import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import Button from "../../components/UI-components/Button";
import InputPersonalInfo from "../../components/UI-components/InputPersonalInfo";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";

function step3(props) {
  // const ticketAmount = amount of requested tickets from previous step
  // number of <InputPersonalInfo/> fields based on number of tickets
  // const setupPrice = base fee + fee for each additional person
  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");

  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={3} />
        <h2>Personal information</h2>
        <h5>We need some details about each person for the tickets.</h5>
        <InputPersonalInfo orderInfo={props.orderInfo}/>
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview />}
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step2"} />
        <Button buttonType={"primary"} buttonText={"Continue to payment →"} href={"/tickets/step4"} />
      </div>
    </div>
  );
}

export default step3;
