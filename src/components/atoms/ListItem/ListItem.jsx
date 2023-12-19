import React from "react";
import { PropTypes } from "prop-types";
import { programateStore } from "../../../store/programateStore";
function ListItem({children, className,setSelectedResource}) {
  const ListItemClass = `button ${className || ""}`;
  return <li className={ListItemClass} onClick={setSelectedResource}>{children}</li>;
}
ListItem.propTypes = {
  //gjhkgkhj
    /**
   * texto del recurso
   */
  children: PropTypes.string.isRequired,
    /**
   * Is this the principal call to action on the page?
   */
  className: PropTypes.string,
    /**
   * funcion para seleccionar recurso
   */
    setSelectedResource: PropTypes.func,
};

export default ListItem;
