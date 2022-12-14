import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCounter from "../../components/UI-components/InputCounter";
import InputDrop from "../../components/UI-components/InputDrop";
import Button from "../../components/UI-components/Button";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";

// 1. fetch area data (how many spaces there are)
// 2. compare selected amount of tickets to area space - show area with enough space, if none have enough space, show feedback
// 3. if VIP + REGULAR > 5 then block counting function

function step1(props) {
  function setTicketBasket(ticketNumber, ticketType) {
    let regular
    let vip
    if (ticketType === "Regular") {
      regular = ticketNumber

    } else if (ticketType === "VIP") {
      vip = ticketNumber
    }
    props.setTickets(regular, vip)
    // setTickets(tick);
  }

  // function setTickets(ticketAmount, vipAmount, regAmount)

  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");

  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={1} />
        <h2>Select your tickets</h2>
        <h5>Note: There is a limit of 5 tickets per customer.</h5>
        <InputCounter title={"Regular"} name={"RegTicket"} subtitle={"All days"} description={"Access to concerts and vendors."} price={"799,-"} setTicketBasket={setTicketBasket} />
        <InputCounter title={"VIP"} name={"VIPTicket"} subtitle={"All days"} description={"Includes food & drink discounts and early access to stages."} price={"1299,-"} setTicketBasket={setTicketBasket}/>
        <h2>Select your camp area</h2>
        <h5>Each ticket counts for one space in a camp area.</h5>
        <InputDrop optionOne={"Area 1"} optionTwo={"Area 2"} />
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview />}
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Cancel"} href={"/"} />
        <Button buttonType={"primary"} buttonText={"Select camp options →"} href={"/tickets/step2"} />
      </div>
    </div>
  );
}

export default step1;
