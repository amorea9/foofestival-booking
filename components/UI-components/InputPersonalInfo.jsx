import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

// TICKETINFO - personal info form for each person's ticket
// check which type is being requested and return based on this

// NPM INSTALL ACCORDION?

function InputPersonalInfo(props) {
  function onChange(event) {
    console.log(event.target.name, "was changed to: ", event.target.value);
  }

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3 className="white">Person #</h3>
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
              <input type="text" name="firstName" placeholder="John" onBlur={onChange} />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" placeholder="Applebaum" onBlur={onChange} />
            </label>
            <label>
              Phone Number
              <input type="text" name="telephone" placeholder="+45 12542345" onBlur={onChange} />
            </label>
            <label>
              Date of Birth
              <input type="date" name="birthDate" onBlur={onChange} />
            </label>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default InputPersonalInfo;
