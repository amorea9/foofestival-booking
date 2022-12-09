import React from "react";

// we need TWO types of input boxes:
// 1. AMOUNT - number or range input (?) for tickets
// 2. CHECKBOX - checkboxes for add-on purchases

function InputBox(props) {
  return (
    <div className="input-box">
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>
      <div>
        <h3>{props.price}</h3>
        {/* insert input type depending on props.type */}
      </div>
    </div>
  );
}

// example of inputbox being used
//       <InputBox type={"amount"} boxContent={((title = "Regular"), (subtitle = "All days"), (description = "Access to concerts and vendors."), (price = "799,-"))} />

export default InputBox;
