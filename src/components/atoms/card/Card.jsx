import React from "react";
import { PropTypes } from "prop-types";
function Card({ title, image, onclick }) {
  return (
    <div class="card-container" onClick={onclick}>
      <div class="card-header">
        <img src={image} alt="img-card" />
      </div>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
      </div>
    </div>
  );
}
Card.propTypes = {
  //gjhkgkhj
    /**
   * Is this the principal call to action on the page?
   */
    title: PropTypes.string.isRequired,
    /**
   * Is this the principal call to action on the page?
   */
    image: PropTypes.string,
    /**
   * Is this the principal call to action on the page?
   */
    onclick: PropTypes.func,
};

export default Card;
