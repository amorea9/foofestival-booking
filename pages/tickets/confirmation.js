import React from "react";
import Button from "../../components/UI-components/Button";

function confirmation() {
  return (
    <div className="confirmation">
      <div>
      <h2>Thank you for your purchase</h2>
      <p>You'll receive your tickets via email.</p>
      <p>View your tickets and find the full festival schedule in our app.</p>
      <Button buttonType={"primary"} buttonText={"Download app"} href={"/"} />
      </div>
    </div>
  );
}

export default confirmation;
