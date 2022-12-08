import React from "react";
import Button from "./UI-components/Button";
import Logo from "../assets/foofest-logo.png";
import Image from "next/image";

function Nav() {
  return (
    <nav>
      <Image src={Logo} alt="Foofest logo" className="logo" />
      <Button href={"/tickets/step1"} buttonType={"primary"} buttonText={"Get tickets"}></Button>
    </nav>
  );
}

export default Nav;
