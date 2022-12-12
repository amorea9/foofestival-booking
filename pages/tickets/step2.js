import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCheck from "../../components/UI-components/InputCheck";
import Button from "../../components/UI-components/Button";

let setUpPrice

function step2(props) {
  // const ticketAmount = amount of requested tickets from previous step
const tickets = props.totalTickets;
  // Optional, pay to have the crew set up X tents for you.
// 2 person tent (including the tent) 299,-
// 3 person tent (including the tent) 399,-
// The number of tents must match the number of people in the group (number of tickets).
if (tickets <= 2) {
  setUpPrice = 299
} else if (tickets === 3) {
  setUpPrice = 399
} else if (tickets === 4) {
  setUpPrice = 598
} else if (tickets === 5) {
  setUpPrice = 798;
} else {
  setUpPrice = 299;
}

  
  

  return (
    <>
      <section className="order-interface">
        <StepIndicator step={2}/>
        <h2>Tent options</h2>
        <h5>These are optional add-ons to improve your festival experience.</h5>
        <InputCheck title={"We can set up your tent(s)"} name={"TentSetup"} subtitle={props.totalTickets} description={"Tents are included in price."} price={setUpPrice} />
        <InputCheck title={"Green camping"} name={"TentGreen"} subtitle={"Sustainable tent(s)"} description={"Tent made from recycled materials."} price={249}/>
        <p>
          <strong>NOTE:</strong> A mandatory booking fee of 99,- applies for each order.
        </p>
      </section>
      <OrderOverview />
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step1"} />
        <Button buttonType={"primary"} buttonText={"Continue to details"} href={"/tickets/step3"} />
      </div>
    </>
  );
}

export default step2;
