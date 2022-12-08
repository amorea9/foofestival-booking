import React from "react";
import HeadlinersCard from "./UI-components/HeadlinersCard.jsx";

function Headliners() {
  return (
    <section className="headliners">
      <h2>Headliners</h2>
      <div>
        <HeadlinersCard />
        <HeadlinersCard />
        <HeadlinersCard />
      </div>
    </section>
  );
}

export default Headliners;
