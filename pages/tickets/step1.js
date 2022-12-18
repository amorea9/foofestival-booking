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
  // // update tickets in order overview based on user input
  // function updateTickets(event) {
  //   let tick = event.target.value;
  //   setTickets(tick);
  //   console.log(tick);
  // }

  // function setTickets(ticketAmount, vipAmount, regAmount)

  // fetched area data
  const areaArray = props.areaData;
  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");

  // validate - compare selected amount of tickets to area space
  function validateArea() {
    // filtering to find chosen area
    // let areaNames = ["Svartheim", "Nilfheim", "Helheim", "Muspelheim", "Alfheim"];
    // let chosenArea = areaNames.filter(areaFilter);
    // function areaFilter(area) {
    //   if (props.orderInfo.selectedArea == area) {
    //     return true;
    //   }
    //   return false;
    // }
    // console.log(chosenArea);

    if (props.orderInfo.selectedArea == "Svartheim") {
      if (props.orderInfo.totalTickets <= areaArray[0].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true });
        console.log("all good");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Nilfheim") {
      if (props.orderInfo.totalTickets <= areaArray[1].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true });
        console.log("all good");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Helheim") {
      if (props.orderInfo.totalTickets <= areaArray[2].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true });
        console.log("all good");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Muspelheim") {
      if (props.orderInfo.totalTickets <= areaArray[3].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true });
        console.log("all good");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Alfheim") {
      if (props.orderInfo.totalTickets <= areaArray[4].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true });
        console.log("all good");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("no bueno");
      }
    }
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
        <Button buttonType={"secondary"} buttonText={"Cancel"} href={"/"} orderInfo={props.orderInfo} />
        {/* <Button buttonType={"primary"} buttonText={"Select camp options →"} action={validateArea} /> */}
        <Button buttonType={"primary"} buttonText={"Select camp options →"} href={"/tickets/step2"} action={validateArea} orderInfo={props.orderInfo} />
      </div>
      {/* <button onClick={validateArea}>Validate area</button> */}
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
