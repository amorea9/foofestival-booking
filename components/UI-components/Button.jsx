import React from "react";
import Link from "next/link";

function Button({ buttonType, buttonText, href, action }) {
  return (
    <>
      {action === undefined ? (
        <Link href={href} className={buttonType}>
          {buttonText}
        </Link>
      ) : (
        <button onClick={action} className={buttonType}>
          {buttonText}
        </button>
      )}
    </>
  );
}

export default Button;
