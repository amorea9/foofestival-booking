import React from "react";

function StepIndicator(props) {
  return (
    <div className="step-indicator">
      <h3>Step {props.step} of 4 - Tickets & Area</h3>
      <div>Step indicator graphic goes here</div>
    </div>
  );
}

export default StepIndicator;
