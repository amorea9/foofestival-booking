import React from "react";
import Link from "next/link";

function timeout() {
  return (
    <div className="center-container">
      <div className="center-content">
        <h2>Your session timed out</h2>
        <p>To ensure that everyone has a fair chance at rocking out at FOOFEST, we only reserve tickets for 5 minutes.</p>
        <p>We’re sorry for the inconvenience. Please try again.</p>
        <Link href={"/tickets/step1"} className={"primary"}>
          Back to booking
        </Link>
      </div>
    </div>
  );
}

export default timeout;
