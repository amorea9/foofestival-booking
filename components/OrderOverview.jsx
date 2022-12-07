import React from "react";

function OrderOverview() {
  return (
    <div>
      <h3>Your order</h3>
      <h5>Your tickets are reserved for 5 minutes.</h5>
      <section>
        <div>
          <h4>Regular ticket</h4>
          <h4>Amount</h4>
          <h4>Price</h4>
        </div>
        <div>
          <h4>Regular ticket</h4>
          <h4>Amount</h4>
          <h4>Price</h4>
        </div>
      </section>
      <section>
        <h4>Camp name</h4>
      </section>
      <section>
        <div>
          <h4>Tent set up</h4>
          <h4>Price</h4>
        </div>
        <div>
          <h4>Green camping</h4>
          <h4>Price</h4>
        </div>
      </section>
      <section>
        <h4>Booking fee</h4>
        <h4>x1</h4>
        <h4>99,-</h4>
      </section>
      <div>
        <h4>Total</h4>
        <h4>XXX,-</h4>
      </div>
    </div>
  );
}

export default OrderOverview;
