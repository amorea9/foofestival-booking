import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputBox from "../../components/UI-components/InputBox";
import InputSelect from "../../components/UI-components/InputSelect";
import Button from "../../components/UI-components/Button";

// 1. fetch area data (how many spaces there are)
// 2. compare selected amount of tickets to area space - show area with enough space, if none have enough space, show feedback

function step1() {
  return (
    <>
      <section className="order-interface">
        <StepIndicator />
        <h2>Select your tickets</h2>
        <h5>Note: There is a limit of 5 tickets per customer.</h5>
        <InputBox type={"amount"} title={"Regular"} subtitle={"All days"} description={"Access to concerts and vendors."} price={"799,-"} />
        <InputBox type={"amount"} title={"VIP"} subtitle={"All days"} description={"Includes food & drink discounts and early access to stages."} price={"1299,-"} />
        <h2>Select your camp area</h2>
        <h5>Each ticket counts for one space in a camp area.</h5>
        <InputSelect optionOne={"Area 1"} optionTwo={"Area 2"} />
      </section>
      <OrderOverview />
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Cancel"} href={"/"} />
        <Button buttonType={"primary"} buttonText={"Select camp options"} href={"/tickets/step2"} />
      </div>
    </>
  );
}

export default step1;
