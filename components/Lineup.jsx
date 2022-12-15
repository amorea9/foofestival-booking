import React from "react";
import LineupMenu from "./UI-components/LineupMenu";
import LineupCard from "./UI-components/LineupCard";

function Lineup() {
  return (
    <section className="lineup">
      <LineupMenu />
      <section className="lineup-list">
        <div className="lineup-showing">
          <h4>Bands</h4>
          <h5>Showing all</h5>
        </div>
        <LineupCard />
        <LineupCard />
        <LineupCard />
        <LineupCard />
      </section>
    </section>
  );
}

export default Lineup;
