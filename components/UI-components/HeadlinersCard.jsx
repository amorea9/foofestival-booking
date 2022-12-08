import React from "react";
import Image from "next/image";

function HeadlinersCard({ src, bandName, day, descr, alt }) {
  return (
    <article className="box headliner-box">
      <Image className="headliner-img" src={src} alt={alt} />
      <div className="headliner-card-titles">
        <h3>{bandName}</h3>
        <h4>{day}</h4>
      </div>
      <p>{descr}</p>
      <div>Spotify embed here</div>
    </article>
  );
}

export default HeadlinersCard;
