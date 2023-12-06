import React from "react";
import { videosStore } from "../../../store/videosStore";
function ListItem({children, className,setSelectedVideo}) {
  const ListItemClass = `button ${className || ""}`;
  return <li className={ListItemClass} onClick={setSelectedVideo}>{children}</li>;
}

export default ListItem;
