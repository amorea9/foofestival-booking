import React from "react";

function LineupMenu() {
  return (
    <div className="lineup-menu">
      <h2>Lineup</h2>
      <div className="lineup-menu-actions">
        <label htmlFor="filter">Filter</label>
        <select name="filter" id="filter">
          <option value="all">All</option>
          <option value="rock">Rock</option>
          <option value="metal">Metal</option>
          <option value="alternative">Alternative</option>
        </select>
        <label htmlFor="sort">Sort</label>
        <select name="sort" id="sort">
          <option value="alpha">A-Z</option>
          <option value="metal">Z-A</option>
        </select>
      </div>

      <h5>This is a subheading</h5>
      <p>This is a paragraph</p>
    </div>
  );
}

export default LineupMenu;
