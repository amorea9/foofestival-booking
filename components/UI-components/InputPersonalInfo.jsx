import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { useRef } from "react";

// TICKETINFO - personal info form for each person's ticket
// check which type is being requested and return based on this

// NPM INSTALL ACCORDION?
//DON'T USE THIS COMPONENT, OLD STUFF!
//DON'T USE THIS COMPONENT, OLD STUFF!
//DON'T USE THIS COMPONENT, OLD STUFF!
//DON'T USE THIS COMPONENT, OLD STUFF!
//DON'T USE THIS COMPONENT, OLD STUFF!
//DON'T USE THIS COMPONENT, OLD STUFF!

function InputPersonalInfo(props) {
  const theForm = useRef(null);

  function submit(e) {
    e.preventDefault();

    props.setGuestsDetails([
      ...props.guestsDetails,
      {
        firstName: theForm.current.elements.firstName.value,
        lastName: theForm.current.elements.lastName.value,
        telephone: theForm.current.elements.telephone.value,
        birthDate: theForm.current.elements.birthDate.value,
      },
    ]);
    console.log("from accordion", props.guestsDetails);
    // if (response && response.length) {
    //   setPaymentCompleted(true);
    // }
  }

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h2>Person #</h2>
            <h3>ticket type</h3>
            {/* {props.guests.ticketType} */}
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <form onSubmit={submit} ref={theForm}>
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
          </form>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default InputPersonalInfo;
