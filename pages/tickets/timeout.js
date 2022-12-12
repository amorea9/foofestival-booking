import React from "react";
import Button from "../../components/UI-components/Button";

function timeout() {
  return (
    <div>
      <h2>Your session timed out</h2>
      <p>To ensure that everyone has a fair chance at rocking out at FOOFEST, we only reserve tickets for 5 minutes.</p>
      <p>We’re sorry for the inconvenience. Please try again.</p>
      <Button buttonType={"primary"} buttonText={"Back to booking"} href={"/tickets/step1"} />
    </div>
  );
}

export default timeout;
