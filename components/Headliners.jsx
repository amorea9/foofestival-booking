import React from "react";
import HeadlinersMenu from "./UI-components/HeadlinersMenu";
import HeadlinersCard from "./UI-components/HeadlinersCard";

function Headliners() {
  return (
    <section>
      <HeadlinersMenu />
      <div>
        <h3>Bands</h3>
        <h4>Showing all</h4>
        <HeadlinersCard />
        <HeadlinersCard />
        <HeadlinersCard />
      </div>
    </section>
  );
}

export default Headliners;
