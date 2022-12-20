import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCounter from "../../components/UI-components/InputCounter";
import InputDrop from "../../components/UI-components/InputDrop";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";
import { useRouter } from "next/router";

// 1. fetch area data (how many spaces there are)
// 2. validate - compare selected amount of tickets to area space before allowing user to progress
// 3. if VIP + REGULAR > 5 then block counting function

function step1(props) {
  // fetched area data
  const areaArray = props.areaData;
  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");
  // routing
  const router = useRouter();
  // tickets validation
  let ticketsValid = false;

  if (props.orderInfo.totalTickets > 0) {
    ticketsValid = true;
  }
  if (props.orderInfo.totalTickets === 0) {
    ticketsValid = false;
  }

  async function validateAndReserve() {
    const id = await reserveSpot(props.orderInfo.selectedArea, props.orderInfo.totalTickets);
    await validateArea(id);
  }

  // validate - compare selected amount of tickets to area space
  async function validateArea(id) {
    if (props.orderInfo.selectedArea == "Svartheim") {
      if (props.orderInfo.totalTickets <= areaArray[0].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/step2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Nilfheim") {
      if (props.orderInfo.totalTickets <= areaArray[1].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/step2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Helheim") {
      if (props.orderInfo.totalTickets <= areaArray[2].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/step2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Muspelheim") {
      if (props.orderInfo.totalTickets <= areaArray[3].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/step2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "Alfheim") {
      if (props.orderInfo.totalTickets <= areaArray[4].available) {
        props.setOrderInfo({ ...props.orderInfo, validates: true, orderID: id });
        console.log("area validation: all good");
        router.push("/tickets/step2");
      } else {
        props.setOrderInfo({ ...props.orderInfo, validates: false });
        console.log("area validation: no bueno");
      }
    }
    if (props.orderInfo.selectedArea == "") {
      props.setOrderInfo({ ...props.orderInfo, validates: false });
      console.log("area validation: no bueno");
    }
  }

  // PUT request - booking reservation
  async function reserveSpot(chosenArea, chosenAmount) {
    const request = await fetch("https://morning-mountain-4570.fly.dev/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ area: chosenArea, amount: chosenAmount }),
    });

    const response = await request.json();
    const id = response.id;
    console.log("id:", id);
    return id;
  }

  // BUTTONS - go to back previous page
  function goBack() {
    router.push("/");
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
        {ticketsValid === false && <p className="feedback">Please add at least one ticket to your order.</p>}
        {props.orderInfo.validates === false && <p className="feedback">Please select an area with enough space for the amount of tickets.</p>}
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview orderInfo={props.orderInfo} />}
      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Cancel
        </button>
        <button className="primary" onClick={validateAndReserve}>
          Select camp options →
        </button>
      </div>
    </div>
  );
}

export default step1;

// FETCTHING AREA DATA
export async function getServerSideProps() {
  const res = await fetch("https://morning-mountain-4570.fly.dev/available-spots");
  const areaData = await res.json();
  return {
    props: { areaData },
  };
}
