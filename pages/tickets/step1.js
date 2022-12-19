import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCounter from "../../components/UI-components/InputCounter";
import InputDrop from "../../components/UI-components/InputDrop";
import Button from "../../components/UI-components/Button";
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

  async function validateAndReserve() {
    await reserveSpot(props.orderInfo.selectedArea, props.orderInfo.totalTickets);
    validateArea();
    passOrNot();
  }

  // validate - compare selected amount of tickets to area space
  function validateArea() {
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

  // PUT request - booking reservation
  async function reserveSpot(chosenArea, chosenAmount) {
    const request = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ area: chosenArea, amount: chosenAmount }),
    });

    const response = await request.json();
    const id = response.id;
    console.log("id:", id);
    // update orderID in state
    setOrderID(id);
  }

  // ORDER ID
  function setOrderID(id) {
    // console.log(id);
    props.setOrderInfo({ ...props.orderInfo, orderID: id });
    console.log("orderID is set to:", props.orderInfo.orderID);
  }

  // BUTTONS - decide whether to reroute or not
  function passOrNot() {
    // console.log(props.orderInfo.validates);
    if (props.orderInfo.validates === true || props.orderInfo.validates === undefined) {
      console.log("you go girl");
      router.push("/tickets/step2");
    }
    if (props.orderInfo.validates === false) {
      console.log("you shall not pass");
    }
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
      </section>
      {matches ? <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} /> : <MobileOrderOverview orderInfo={props.orderInfo} />}
      {/* <div className="booking-steps-buttons">
        <Button buttonType={"secondary"} buttonText={"Cancel"} href={"/"} orderInfo={props.orderInfo} />
        <Button buttonType={"primary"} buttonText={"Select camp options →"} href={"/tickets/step2"} action={validateArea} orderInfo={props.orderInfo} />
      </div> */}
      {/* <button onClick={validateArea}>Validate area</button> */}

      {/* TRYING BUTTONS IN ANOTHER WAY */}
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
  const res = await fetch("http://localhost:8080/available-spots");
  const areaData = await res.json();
  return {
    props: { areaData },
  };
}
