import React from "react";
import OrderOverview from "../../components/OrderOverview";
import StepIndicator from "../../components/UI-components/StepIndicator";
import Button from "../../components/UI-components/Button";
import InputPersonalInfo from "../../components/UI-components/InputPersonalInfo";
import { useMediaQuery } from "usehooks-ts";
import MobileOrderOverview from "../../components/MobileOrderOverview";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { useRef } from "react";

function step3(props) {
  const theForm = useRef(null);
  const ticketHolders = [];
  const guestsArray = [...Array(props.orderInfo.totalTickets)];

  async function submit(e) {
    e.preventDefault();
    if (props.orderInfo.totalTickets === 1) {
      const guest = {
        first: theForm.current.elements.firstName.value,
        last: theForm.current.elements.lastName.value,
        telephone: theForm.current.elements.telephone.value,
        birthDate: theForm.current.elements.birthDate.value,
      };
      ticketHolders.push(guest);
      const response = await props.setOrderInfo({ ...props.orderInfo, guests: ticketHolders });
    } else {
      for (let i = 0; i < props.orderInfo.totalTickets; i++) {
        const guest = {
          first: theForm.current.elements.firstName[i].value,
          last: theForm.current.elements.lastName[i].value,
          telephone: theForm.current.elements.telephone[i].value,
          birthDate: theForm.current.elements.birthDate[i].value,
        };
        ticketHolders.push(guest);
      }
      const response = await props.setOrderInfo({ ...props.orderInfo, guests: ticketHolders });
    }
    console.log("ticketHolders array", ticketHolders);
  }
  // console.log("ticketHolders in info order", props.orderInfo.guests);

  // const ticketAmount = amount of requested tickets from previous step
  // number of <InputPersonalInfo/> fields based on number of tickets
  // const setupPrice = base fee + fee for each additional person

  // order overview responsiveness
  const matches = useMediaQuery("(min-width: 1100px)");

  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="order-container">
        <section className="order-interface">
          <StepIndicator step={3} />
          <h2>Personal information</h2>
          <h5>We need some details about each person for the tickets.</h5>

          {guestsArray.map((_, i) => (
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {/* insert name from firstName input */}
                    <h3 className="white">Person {i + 1}</h3>
                    <div className="dropdown">
                      <h3>Regular ticket</h3>
                      <h4 className="dropdown-arrow">‹</h4>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accordion-field">
                    <label>
                      First name
                      <input type="text" name="firstName" placeholder="John" />
                    </label>
                    <label>
                      Last name
                      <input type="text" name="lastName" placeholder="Applebaum" />
                    </label>
                    <label>
                      Phone Number
                      <input type="text" name="telephone" placeholder="+45 12345678" />
                    </label>
                    <label>
                      Date of Birth
                      <input type="date" name="birthDate" />
                    </label>
                    {/* NPM INSTALL SOMETHING FOR PHONE AND BIRTH DATE? */}
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </section>
        {matches ? (
          <OrderOverview orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
        ) : (
          <MobileOrderOverview orderInfo={props.orderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />
        )}
        <div className="booking-steps-buttons">
          <Button buttonType={"secondary"} buttonText={"Back"} href={"/tickets/step2"} orderInfo={props.orderInfo} />
          <Button buttonType={"primary"} buttonText={"Continue to payment →"} href={"/tickets/step4"} action={submit} orderInfo={props.orderInfo} />
        </div>
      </div>
    </form>
  );
}

export default step3;
