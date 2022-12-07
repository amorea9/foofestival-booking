import React from "react";
import HeadlinersCard from "./UI-components/HeadlinersCard.jsx";

function Headliners() {
  return (
    <>
      <h2>Headliners</h2>
      <div>
        <HeadlinersCard />
        <HeadlinersCard />
        <HeadlinersCard />
      </div>
    </>
  );
}

export default Headliners;
