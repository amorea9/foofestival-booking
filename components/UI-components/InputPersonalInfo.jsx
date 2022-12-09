import React from "react";

// TICKETINFO - personal info form for each person's ticket
// check which type is being requested and return based on this

// NPM INSTALL ACCORDION?

function InputPersonalInfo(props) {
  return (
    <div>
      <h2>Person 1</h2>
      <h2>Regular ticket</h2>
      <div>
        <label>
          First name
          <input type="text" name="firstName" placeholder="John" />
        </label>
        <label>
          Last name
          <input type="text" name="lastName" placeholder="Applebaum" />
        </label>
        {/* NPM INSTALL SOMETHING FOR PHONE AND BIRTH DATE? */}
      </div>
    </div>
  );
}

export default InputPersonalInfo;
