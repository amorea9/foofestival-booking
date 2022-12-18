import React from "react";

function OrderOverview(props) {
  // console.log("from orderOverview", props.orderInfo.regTickets);
  let totalVIP = 1299 * props.orderInfo.vipTickets;
  let totalReg = 799 * props.orderInfo.regTickets;
  let greenPrice = 249;
  let grandTotal = totalVIP + totalReg + 99;

  return (
    <div className="order-overview">
      <h3>Your order</h3>
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
  );
}

export default OrderOverview;
