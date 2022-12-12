import React from "react";

// npm install something for this?

function InputPaymentInfo() {
  function submit() {
    console.log("submitted")
  }
  return (
    <>

     <form onSubmit={submit}>
        <div className="form-control">
            <label htmlFor="form-name">Name On Card</label>
            <input required type="text" name="name" id="form-name" />
        </div>
        <div className="form-control">
            <label htmlFor="form-card">Card Number</label>
            <input required type="text" name="cardNo" id="form-cardno" />
        </div>
        <div className="form-control">
            <label htmlFor="form-expiry">Expiry Date</label>
            <input required type="text" name="expiry" id="form-expiry" />
        </div>
        <div className="form-control">
            <label htmlFor="form-cvr">CSC Number</label>
            <input required type="text" name="expiry" id="form-expiry" />
        </div>
        <div className="form-control">
            <label htmlFor="form-email">Email</label>
            <input required type="email" name="email" id="form-email" />
        </div>
        <div className="form-control">
            <label htmlFor="form-email">Telephone</label>
            <input required type="text" name="phone" id="form-phone" />
        </div>
        <div className="form-control">
            <label htmlFor="form-address">Billing Address</label>
            <textarea required  name="address" id="form-address" />
        </div>
    </form>
    </>
  );
}

export default InputPaymentInfo;
