import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCheck from "../../components/UI-components/InputCheck";
import Button from "../../components/UI-components/Button";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";

function step2(props) {
  // const ticketAmount = amount of requested tickets from previous step

  const tickets = props.orderInfo.totalTickets;
  console.log("step 2 tot tickets", props.orderInfo.totalTickets);

  // Optional, pay to have the crew set up X tents for you.
  // 2 person tent (including the tent) 299,-
  // 3 person tent (including the tent) 399,-
  // The number of tents must match the number of people in the group (number of tickets).


  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");


  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={2} />
        <h2>Tent options</h2>
        <h5>These are optional add-ons to improve your festival experience.</h5>


        <InputCheck tentSetUp={props.tentSetUp} title={"We can set up your tent(s)"} name={"TentSetup"} subtitle={props.tentSize} description={"Tents are included in price."} price={`${props.setUpPrice},-`} />

        <InputCheck tentGreen={props.tentGreen} title={"Green camping"} name={"TentGreen"} subtitle={"Sustainable tents"} description={"Tent made from recycled materials."} price={`${props.tentPrice},-`} />

        <p>
          <strong>NOTE:</strong> A mandatory booking fee of 99,- applies for each order.
        </p>
      </section>
      {matches ? (
        <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      ) : (
        <MobileOrderOverview orderInfo={props.orderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      )}
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step1"} />
        <Button buttonType={"primary"} buttonText={"Continue to details →"} href={"/tickets/step3"} />
      </div>
    </div>
  );
}

export default step2;
