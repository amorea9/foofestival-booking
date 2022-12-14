import React from "react";
import Link from "next/link";

function Button({ buttonType, buttonText, href }) {
  return (
    <Link href={href} className={buttonType}>
      {buttonText}
    </Link>
  );
}

export default Button;
