import React from "react";

function OrderOverview() {
  return (
    <div className="order-overview">
      <h3>Your order</h3>
      <h5>Your tickets are reserved for 5 minutes.</h5>
      <section className="order-overview-tickets">
        <div className="overview-item ticket">
          <h4>Regular ticket</h4>
          <h4>Amount</h4>
          <h4>Price</h4>
        </div>
        <div className="overview-item ticket">
          <h4>Regular ticket</h4>
          <h4>Amount</h4>
          <h4>Price</h4>
        </div>
      </section>
      <section className="order-overview-camp overview-item">
        <h4>Camp name</h4>
      </section>
      <section className="order-overview-addons">
        <div className="overview-item">
          <h4>Tent set up</h4>
          <h4>Price</h4>
        </div>
        <div className="overview-item">
          <h4>Green camping</h4>
          <h4>Price</h4>
        </div>
      </section>
      <section className="order-overview-fee overview-item">
        <h4>Booking fee</h4>
        <h4>x1</h4>
        <h4>99,-</h4>
      </section>
      <section className="order-overview-total overview-item">
        <h4>Total</h4>
        <h4>XXX,-</h4>
      </section>
    </div>
  );
}

export default OrderOverview;
