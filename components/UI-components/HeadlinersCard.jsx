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

      {bandName == "Metallica" && (
        <iframe
          // style="border-radius:12px"
          title="Metallica - Nothing Else Matters"
          src="https://open.spotify.com/embed/track/0nLiqZ6A27jJri2VCalIUs?utm_source=generator&theme=0"
          width="90%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
      {bandName == "Tool" && (
        <iframe
          // style="border-radius:12px"
          title="Tool - The Pot"
          src="https://open.spotify.com/embed/track/1lATXTBJDHwawvT1UfxWu3?utm_source=generator&theme=0"
          width="90%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
      {bandName == "AC/DC" && (
        <iframe
          // style="border-radius:12px"
          title="AC/DC - Back In Black"
          src="https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj?utm_source=generator&theme=0"
          width="90%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </article>
  );
}

export default HeadlinersCard;
