import React from "react";
import react from "../../../assets/Imagenes/Cards/Programate/react.svg";

function Card({ title, image, onclick }) {
  return (
    <div class="card-container" onClick={onclick}>
      <div class="card-header">
        <img src={react} alt="img-card" />
      </div>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
