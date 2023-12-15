import React from "react";
import { programateStore } from "../../../store/programateStore";
function ListItem({children, className,setSelectedResource}) {
  const ListItemClass = `button ${className || ""}`;
  return <li className={ListItemClass} onClick={setSelectedResource}>{children}</li>;
}

export default ListItem;
