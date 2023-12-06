import React from "react";

function Card({ tittle, image }) {
  return (
    <div class="card-container">
      <div class="card-header">
        <img src={image} alt="image" />
      </div>
      <div class="card-body">
        <h2 class="card-title">{tittle}</h2>
      </div>
    </div>
  );
}

export default Card;
