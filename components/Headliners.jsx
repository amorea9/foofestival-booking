import React from "react";
import HeadlinersCard from "./UI-components/HeadlinersCard.jsx";
import MetallicaImg from "../assets/headliners/metallica.webp";
import ToolImg from "../assets/headliners/tool.webp";
import ACDCImg from "../assets/headliners/acdc.webp";

function Headliners() {
  return (
    <section className="headliners">
      <h2>Headliners</h2>
      <div className="headliners-container">
        <HeadlinersCard src={MetallicaImg} alt={"Metallica"} bandName={"Metallica"} day={"Day 7"} descr={"After releasing their new single “Lux Æterna”, the iconic metal band is back."} />
        <HeadlinersCard src={ToolImg} alt={"Tool"} bandName={"Tool"} day={"Day 2"} descr={"Returning with their latest album “Fear Inoculum”, Tool will take the stage."} />
        <HeadlinersCard src={ACDCImg} alt={"AC/DC"} bandName={"AC/DC"} day={"Day 5"} descr="The rock legends are back again after their 2020 revival with their album “POWER UP”." />
      </div>
    </section>
  );
}

export default Headliners;
