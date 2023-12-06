import React from "react";
import { programateAcademyStore } from "../../../store/programateAcademyStore";
function ListItem({children, className,setSelectedVideo}) {
  const ListItemClass = `button ${className || ""}`;
  return <li className={ListItemClass} onClick={setSelectedVideo}>{children}</li>;
}

export default ListItem;
