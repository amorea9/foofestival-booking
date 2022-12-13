import React from "react";

function OrderOverview(props) {
  // drop down functionality
  const toggleOrderOverview = () => {
    document.querySelector(".order-overview").classList.toggle("hidden");
  };

  return (
    <div className="mobile-order-overview">
      <div className="order-overview-dropdown" onClick={toggleOrderOverview}>
        <h4>Your order</h4>
        <h4 className="orange">Total</h4>
        <h4 className="dropdown-arrow">‹</h4>
      </div>

      <div className="order-overview hidden">
        <h5>Your tickets are reserved for 5 minutes.</h5>
        {/* SELECTED TICKETS */}
        {props.totalTickets != 0 && (
          <section className="order-overview-tickets">
            {props.regTickets > 0 && (
              <div className="overview-item ticket">
                <h4>Regular ticket</h4>
                <h4>Amount</h4>
                <h4>Price</h4>
              </div>
            )}
            {props.vipTickets > 0 && (
              <div className="overview-item ticket">
                <h4>Regular ticket</h4>
                <h4>Amount</h4>
                <h4>Price</h4>
              </div>
            )}
          </section>
        )}

        {/* SELECTED CAMP AREA */}
        {props.selectedArea != "" && (
          <section className="order-overview-camp overview-item">
            <h4>{props.selectedArea}</h4>
          </section>
        )}

        {/* SELECTED ADD-ONS */}
        {props.tentService == true ||
          (props.greenCamping == true && (
            <section className="order-overview-addons">
              {props.tentService == true && (
                <div className="overview-item">
                  <h4>Tent set up</h4>
                  <h4>Price</h4>
                </div>
              )}
              {props.greenCamping == true && (
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
    </div>
  );
}

export default OrderOverview;
