import React from "react";
import Button from "./UI-components/Button";

function Nav() {
  return (
    <nav>
      <div>Logo</div>
      <Button href={"/tickets/step1"} buttonType={"primary"} buttonText={"Get tickets"}></Button>
    </nav>
  );
}

export default Nav;
