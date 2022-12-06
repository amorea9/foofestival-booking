import React from "react";
import Button from "./UI-components/Button";

function Nav() {
  return (
    <nav>
      <div>Logo</div>
      <Button buttonType={"primary"} buttonText={"Get tickets"}></Button>
    </nav>
  );
}

export default Nav;
