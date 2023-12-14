import React from "react";
import AcademyVideosCards from "./Academy/AcademyVideosCards";
import AcademyWorkbooksCards from "./Academy/AcademyWorkbooksCards";
import SchoolVideosCards from "./School/SchoolVideosCards";
import SchoolWorkbooksCards from "./School/SchoolWorkbooksCards";

function ProgramCards({ programa, tipoArchivo }) {
  console.log(programa , tipoArchivo);
  if (programa === "academy" && tipoArchivo === "videos") {
    return <AcademyVideosCards />;
  } else if (programa === "academy" && tipoArchivo === "workbooks") {
    return <AcademyWorkbooksCards />;
  } else if (programa === "school" && tipoArchivo === "videos") {
    return <SchoolVideosCards />;
  } else if (programa === "school" && tipoArchivo === "workbooks") {
    return <SchoolWorkbooksCards />;
  }
  return null;
}

export default ProgramCards;
