import React from "react";
import { Line } from 'rc-progress';


function StepIndicator(props) {
  const progress = props.step /4 *100

  return (
    <div className="step-indicator">
      <h3>Step {props.step} of 4 - Tickets & Area</h3>
      <Line percent={progress} strokeWidth={1} strokeColor="#6671e3" />
    </div>
  );
}

export default StepIndicator;
