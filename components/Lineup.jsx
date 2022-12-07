import React from "react";
import LineupMenu from "./UI-components/LineupMenu";
import LineupCard from "./UI-components/LineupCard";

function Lineup() {
  return (
    <section>
      <LineupMenu />
      <div>
        <h3>Bands</h3>
        <h4>Showing all</h4>
        <LineupCard />
        <LineupCard />
        <LineupCard />
      </div>
    </section>
  );
}

export default Lineup;
