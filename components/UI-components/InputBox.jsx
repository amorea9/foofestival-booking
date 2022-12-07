import React from "react";

function InputBox(props) {
  return (
    <div>
      <div>
        <h3>{props.boxContent.title}</h3>
        <h4>{props.boxContent.subtitle}</h4>
        <p>{props.boxContent.description}</p>
      </div>
      <div>
        <h3>{props.boxContent.price}</h3>
        {/* insert input stype depending on props.type */}
      </div>
    </div>
  );
}

//       <InputBox type={"amount"} boxContent={((title = "Regular"), (subtitle = "All days"), (description = "Access to concerts and vendors."), (price = "799,-"))} />

export default InputBox;
