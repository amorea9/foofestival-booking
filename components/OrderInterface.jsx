import React from "react";
import InputBox from "./UI-components/InputBox";
import InputSelect from "./UI-components/InputSelect";
import StepIndicator from "./UI-components/StepIndicator";

function BookingWindow() {
  return (
    <div>
      <StepIndicator />
      <div>
        <h2>Select your tickets</h2>
        <h5>Note: There is a limit of 5 tickets per customer.</h5>
        <InputBox type={"amount"} boxContent={((title = "Regular"), (subtitle = "All days"), (description = "Access to concerts and vendors."), (price = "799,-"))} />
        <InputBox type={"amount"} boxContent={((title = "VIP"), (subtitle = "All days"), (description = "Includes food & drink discounts and early access to stages."), (price = "1299,-"))} />
      </div>
      <div>
        <h2>Select your camp area</h2>
        <h5>Each ticket counts for one space in a camp area.</h5>
        <InputSelect options={((one = "Area 1"), (two = "Area 2"))} />
      </div>
    </div>
  );
}

export default BookingWindow;
