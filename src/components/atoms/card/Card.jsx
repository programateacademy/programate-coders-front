import React from "react";

function Card({ title, image, onclick }) {
  return (
    <div class="card-container" onClick={onclick}>
      <div class="card-header">
        <img
          src={
            new URL(
              `../../../../src/assets/Imagenes/Cards/Programate/` + image,
              import.meta.url
            ).href
          }
          alt="img-card"
        />
      </div>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
