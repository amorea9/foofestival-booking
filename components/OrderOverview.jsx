import React from "react";

/*   // global object for the user's order
  const [orderInfo, setOrderInfo] = useState({
    totalTickets: 0,
    vipTickets: 0,
    regTickets: 0,
    selectedArea: "",
    tentService: false,
    greenCamping: false,
    timedOut: false,
  }); */

function OrderOverview(props) {
  return (
    <div className="order-overview">
      <h3>Your order</h3>
      <h5>Your tickets are reserved for 5 minutes.</h5>

      {/* SELECTED TICKETS */}
      {props.orderInfo.totalTickets != 0 && (
        <section className="order-overview-tickets">
          {" "}
          {props.orderInfo.regTickets > 0 && (
            <div className="overview-item ticket">
              <h4>Regular ticket</h4>
              <h4>Amount</h4>
              <h4>Price</h4>
            </div>
          )}
          {props.orderInfo.vipTickets > 0 && (
            <div className="overview-item ticket">
              <h4>Regular ticket</h4>
              <h4>Amount</h4>
              <h4>Price</h4>
            </div>
          )}
        </section>
      )}

      {/* SELECTED CAMP AREA */}
      {props.orderInfo.selectedArea != "" && (
        <section className="order-overview-camp overview-item">
          <h4>{props.orderInfo.selectedArea}</h4>
        </section>
      )}

      {/* SELECTED ADD-ONS */}
      {props.orderInfo.tentService == true ||
        (props.orderInfo.greenCamping == true && (
          <section className="order-overview-addons">
            {props.orderInfo.tentService == true && (
              <div className="overview-item">
                <h4>Tent set up</h4>
                <h4>Price</h4>
              </div>
            )}
            {props.orderInfo.greenCamping == true && (
              <div className="overview-item">
                <h4>Green camping</h4>
                <h4>Price</h4>
              </div>
            )}
          </section>
        ))}

      {/* make this show in step 2? */}
      <section className="order-overview-fee overview-item">
        <h4>Booking fee</h4>
        <h4>x1</h4>
        <h4>99,-</h4>
      </section>

      {/* insert calculation for this */}
      <section className="order-overview-total overview-item">
        <h4>Total</h4>
        <h4>XXX,-</h4>
      </section>
    </div>
  );
}

export default OrderOverview;
