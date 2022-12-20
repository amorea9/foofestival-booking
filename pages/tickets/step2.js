import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import InputCheck from "../../components/UI-components/InputCheck";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";
import { useRouter } from "next/router";

function step2(props) {
  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");
  // routing
  const router = useRouter();

  // BUTTONS - go to next page
  function nextStep() {
    router.push("/tickets/step3");
  }

  // BUTTONS - go to back previous page
  function goBack() {
    router.push("/tickets/step1");
  }

  return (
    <div className="order-container">
      <section className="order-interface">
        <StepIndicator step={2} />
        <h2>Tent options</h2>
        <h5>These are optional add-ons to improve your festival experience.</h5>

        <InputCheck tentSetUp={props.tentSetUp} title={"We can set up your tent(s)"} name={"TentSetup"} subtitle={props.tentSize} description={"Tents are included in price."} price={`${props.setUpPrice},-`} />

        <InputCheck tentGreen={props.tentGreen} title={"Green camping"} name={"TentGreen"} subtitle={"Sustainable tents"} description={"Tent made from recycled materials."} price={`${props.tentPrice},-`} />

        <p className="bookingfee">
          <strong>NOTE:</strong> A mandatory booking fee of 99,- applies for each order.
        </p>
      </section>
      {matches ? (
        <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      ) : (
        <MobileOrderOverview orderInfo={props.orderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
      )}
      <div className="booking-steps-buttons">
        <button className="secondary" onClick={goBack}>
          Back
        </button>
        <button className="primary" onClick={nextStep}>
          Continue to details →
        </button>
      </div>
    </div>
  );
}

export default step2;
