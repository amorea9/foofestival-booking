import React from "react";

// we need TWO types of input boxes:
// 1. AMOUNT - number or range input (?) for tickets
// 2. CHECKBOX - checkboxes for add-on purchases

function InputBox(props) {
  if (props.type === "amount") {
    return (
      <div className="input-box box">
        <div>
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>{props.price}</h3>
          <input type="number" min="0" max="5" step="1" value="0" />
        </div>
      </div>
    );
  }
  if (props.type === "checkbox") {
    return (
      <div className="input-box box">
        <div>
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>{props.price}</h3>
          {/* insert input type depending on props.type */}
          <input type="checkbox" />
        </div>
      </div>
    );
  }
}

// example of inputbox being used
//       <InputBox type={"amount"} boxContent={((title = "Regular"), (subtitle = "All days"), (description = "Access to concerts and vendors."), (price = "799,-"))} />

export default InputBox;
