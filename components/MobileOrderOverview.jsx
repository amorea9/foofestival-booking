import React from "react";

function OrderOverview(props) {
  // drop down functionality
  const toggleOrderOverview = () => {
    document.querySelector(".order-overview").classList.toggle("hidden");
  };
  let totalVIP = 1299 * props.orderInfo.vipTickets;
  let totalReg = 799 * props.orderInfo.regTickets;
  let grandTotal = totalVIP + totalReg + 99;
  return (
    <div className="mobile-order-overview">
      <div className="order-overview-dropdown" onClick={toggleOrderOverview}>
        <h4>Your order</h4>
        <h4 className="orange">
          {" "}
          Total
          {props.orderInfo.greenCamping === true && props.orderInfo.tentService === true ? (
            <span> {grandTotal + props.tentPrice + props.setUpPrice},-</span>
          ) : props.orderInfo.greenCamping === true ? (
            <span> {grandTotal + props.tentPrice},-</span>
          ) : props.orderInfo.tentService === true ? (
            <span> {grandTotal + props.setUpPrice},-</span>
          ) : (
            <span> {grandTotal},-</span>
          )}
        </h4>
        <h4 className="dropdown-arrow">‹</h4>
      </div>

      <div className="order-overview hidden">
        <h5>Your tickets are reserved for 5 minutes.</h5>

        {/* SELECTED TICKETS */}

        {props.orderInfo.vipTickets > 0 ? (
          <section className="order-overview-tickets">
            <div className="overview-item ticket">
              <h4>{props.orderInfo.vipTickets > 1 ? "VIP tickets" : "VIP ticket"}</h4>
              <h4>X{props.orderInfo.vipTickets}</h4>
              <h4>{totalVIP},-</h4>
            </div>
          </section>
        ) : null}
        {props.orderInfo.regTickets > 0 ? (
          <section className="order-overview-tickets">
            <div className="overview-item ticket">
              <h4>{props.orderInfo.regTickets > 1 ? "Regular tickets" : "Regular ticket"}</h4>
              <h4>X{props.orderInfo.regTickets}</h4>
              <h4>{totalReg},- </h4>
            </div>
          </section>
        ) : null}

        {/* SELECTED CAMP AREA */}
        {props.orderInfo.selectedArea != "" && (
          <section className="order-overview-camp overview-item">
            <h4>{props.orderInfo.selectedArea}</h4>
          </section>
        )}

        {/* SELECTED ADD-ONS */}
        {props.orderInfo.tentService === true && (
          <section className="order-overview-addons">
            <div className="overview-item">
              <h4>Tent set up</h4>
              <h4>{props.setUpPrice},-</h4>
            </div>
          </section>
        )}

        {props.orderInfo.greenCamping === true && (
          <section className="order-overview-addons">
            <div className="overview-item">
              <h4>Green camping</h4>
              <h4>{props.tentPrice},-</h4>
            </div>
          </section>
        )}

        {/* make this show in step 2? */}
        <section className="order-overview-fee overview-item">
          <h4>Booking fee</h4>
          <h4>x1</h4>
          <h4>99,-</h4>
        </section>

        {/* insert calculation for this */}
        <section className="order-overview-total overview-item">
          <h4>Total</h4>

          {props.orderInfo.greenCamping === true && props.orderInfo.tentService === true ? (
            <h4>{grandTotal + props.tentPrice + props.setUpPrice},-</h4>
          ) : props.orderInfo.greenCamping === true ? (
            <h4>{grandTotal + props.tentPrice},-</h4>
          ) : props.orderInfo.tentService === true ? (
            <h4>{grandTotal + props.setUpPrice},-</h4>
          ) : (
            <h4>{grandTotal},-</h4>
          )}
        </section>
      </div>
    </div>
  );
}

export default OrderOverview;
