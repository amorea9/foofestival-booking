import { useRouter } from "next/router";

function Button(props) {
  const router = useRouter();

  function passOrNot() {
    console.log(props.orderInfo.validates);
    if (props.orderInfo.validates === true || props.orderInfo.validates === undefined) {
      console.log("you go girl");
      router.push(props.href);
    }
    if (props.orderInfo.validates === false) {
      console.log("you shall not pass");
    }
  }

  return (
    <>
      <button className={props.buttonType} onMouseEnter={props.action} onClick={passOrNot}>
        {props.buttonText}
      </button>

      {/* <Link href={href} className={buttonType} onMouseEnter={action}>
        {buttonText}
      </Link> */}
    </>
  );
}

export default Button;
