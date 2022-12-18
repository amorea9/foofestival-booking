import React, { useCallback } from "react";
import { useRouter } from "next/router";

function Button({ buttonType, buttonText, href, action, orderInfo }) {
  const router = useRouter();
  function nextPage() {
    router.push(href);
  }

  // const validates = orderInfo.validates;
  // console.log(validates);
  // function passOrNot() {
  //   if (validates === true) {
  //     console.log("validates");
  //     router.push(href);
  //   }
  //   if (validates === false) {
  //     console.log("you shall not pass");
  //   }
  // }

  return (
    <>
      <button className={buttonType} onMouseEnter={action} onClick={nextPage}>
        {buttonText}
      </button>

      {/* <Link href={href} className={buttonType} onMouseEnter={action}>
        {buttonText}
      </Link> */}
    </>
  );
}

export default Button;
