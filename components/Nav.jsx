import React from "react";
import Button from "./UI-components/Button";
import Logo from "../assets/foofest-logo.png";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <Link href={"/"}>
        <Image src={Logo} alt="Foofest logo" className="logo" />
      </Link>
      <Button href={"/tickets/step1"} buttonType={"primary"} buttonText={"Get tickets"}></Button>
    </nav>
  );
}

export default Nav;
