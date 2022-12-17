import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCounter from "../../components/UI-components/InputCounter";
import InputDrop from "../../components/UI-components/InputDrop";
import Button from "../../components/UI-components/Button";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";

// 1. fetch area data (how many spaces there are)
// 2. validate - compare selected amount of tickets to area space before allowing user to progress
// 3. if VIP + REGULAR > 5 then block counting function

function step1(props) {
  // fetched area data
  const areaArray = props.areaData;
  let areaNames = ["Svartheim", "Nilfheim", "Helheim", "Muspelheim", "Alfheim"];
  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");

  // validate - compare selected amount of tickets to area space
  function validateArea() {
    if (props.orderInfo.selectedArea == "Svartheim") {
      if (props.orderInfo.totalTickets <= areaArray[0].available) {
        console.log("all good");
      }
    }

    // neither of these methods are working and i'm tired

    if (props.orderInfo.selectedArea == "Nilfheim") {
      {
        props.orderInfo.totalTickets <= areaArray[1].available ? console.log("all good") : console.log("choose another area");
      }
    }
    if (props.orderInfo.selectedArea == "Helheim") {
      {
        props.orderInfo.totalTickets <= areaArray[2].available ? console.log("all good") : console.log("choose another area");
      }
    }
    if (props.orderInfo.selectedArea == "Muspelheim") {
      {
        props.orderInfo.totalTickets <= areaArray[3].available ? console.log("all good") : console.log("choose another area");
      }
    }
    if (props.orderInfo.selectedArea == "Alfheim") {
      {
        props.orderInfo.totalTickets <= areaArray[4].available ? console.log("all good") : console.log("choose another area");
      }
    }
    // check if ticket amount matches available spaces at selected area
    // console.log("selectedArea:", props.orderInfo.selectedArea);
    // return either true or false
  }

  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={1} />
        <h2>Select your tickets</h2>
        <h5>Note: There is a limit of 5 tickets per customer.</h5>

        <InputCounter updateRegTickets={props.updateRegTickets} title={"Regular"} name={"RegTicket"} subtitle={"All days"} description={"Access to concerts and vendors."} price={"799,-"} setTickets={props.setTickets} />
        <InputCounter updateVIPTickets={props.updateVIPTickets} title={"VIP"} name={"VIPTicket"} subtitle={"All days"} description={"Includes food & drink discounts and early access to stages."} price={"1299,-"} />

        <h2>Select your camp area</h2>
        <h5>Each ticket counts for one space in a camp area.</h5>
        <InputDrop
          selectArea={props.selectArea}
          // pass areas & available spots into select drop down
          optionOne={areaArray[0].area}
          optionOneSpace={areaArray[0].available}
          optionTwo={areaArray[1].area}
          optionTwoSpace={areaArray[1].available}
          optionThree={areaArray[2].area}
          optionThreeSpace={areaArray[2].available}
          optionFour={areaArray[3].area}
          optionFourSpace={areaArray[3].available}
          optionFive={areaArray[4].area}
          optionFiveSpace={areaArray[4].available}
        />
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview orderInfo={props.orderInfo} />}
      <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Cancel"} href={"/"} />
        <Button buttonType={"primary"} buttonText={"Select camp options →"} href={"/tickets/step2"} />
      </div>
      <button onClick={validateArea}>Validate area</button>
    </div>
  );
}

export default step1;

// FETCTHING AREA DATA
export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/available-spots");
  const areaData = await res.json();
  return {
    props: { areaData },
  };
}
