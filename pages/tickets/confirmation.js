import React from "react";
import Link from "next/link";

function confirmation() {
  return (
    <div className="center-container">
      <div className="center-content">
        <h2>Thank you for your purchase</h2>
        <p>You'll receive your tickets via email.</p>
        <p>View your tickets and find the full festival schedule in our app.</p>
        <Link href={"https://foofest-app.netlify.app/"} target={"_blank"} className={"primary"}>
          Download app
        </Link>
      </div>
    </div>
  );
}

export default confirmation;
