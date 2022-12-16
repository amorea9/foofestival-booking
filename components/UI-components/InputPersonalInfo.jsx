import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// TICKETINFO - personal info form for each person's ticket
// check which type is being requested and return based on this

// OR
//create AccordionItem * regTickets
//create AccordionItem * vipTickets

// NPM INSTALL ACCORDION?

function InputPersonalInfo(props) {
  function onChange(event) {
    console.log(event.target.name,"was changed to: ", event.target.value);
  }
  
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {/* insert name from firstName input */}
          <h2>Person #</h2>
          
          <h3>Regular ticket</h3>
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
        <div className="accordion-field">
        <label>
          First name
          <input type="text" name="firstName" placeholder="John" onBlur={onChange}/>
        </label>
        <label>
          Last name
          <input type="text" name="lastName" placeholder="Applebaum" onBlur={onChange}/>
        </label>
        <label>
          Phone Number
          <input type="text" name="telephone" placeholder="** ** ** **"onBlur={onChange}/>
        </label>
        <label>
          Date of Birth
          <input type="date" name="birthDate" onBlur={onChange}/>
        </label>
        {/* NPM INSTALL SOMETHING FOR PHONE AND BIRTH DATE? */}
      </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default InputPersonalInfo;
