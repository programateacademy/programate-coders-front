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
    /**
   * Contenido del boton
   */
  children: PropTypes.string.isRequired,
    /**
   * Clase que va a definir los estilos
   */
  className:PropTypes.oneOf(['button-primary','button-secondary', 'button-slider', 'button-tab ','button-show','button-card']),
    /**
   * Evento onClick opcional 
   */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  className: "button-primary",

  onClick: undefined,
};
export default Button;
