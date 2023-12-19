import React from "react";
import { PropTypes } from "prop-types";
/**
 * Primary UI component for user interaction
 */
function Button({ children, className, onClick }) {
  const buttonClass = `button ${className || ""}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  //gjhkgkhj
    /**
   * Is this the principal call to action on the page?
   */
  children: PropTypes.string.isRequired,
    /**
   * Is this the principal call to action on the page?
   */
  className: PropTypes.string,
    /**
   * Is this the principal call to action on the page?
   */
  onClick: PropTypes.func,
};
export default Button;
