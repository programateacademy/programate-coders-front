import React from "react";
import Card from "../../../atoms/card/Card";
import HtmlIcon from "../../../../assets/Imagenes/Cards/html.svg";
import CssIcon from "../../../../assets/Imagenes/Cards/css.svg";
import JsIcon from "../../../../assets/Imagenes/Cards/javascript.svg";
import ReactIcon from "../../../../assets/Imagenes/Cards/react.svg";
import { programateAcademyStore } from "../../../../store/programateAcademyStore";
const Languages={
  Html:"Html",
  CSS:"CSS",
  JavaScript:"JavaScript",
  React:"React"
}
function programCards() {
  const{setLanguage,language}= programateAcademyStore()
  console.log(language)
  return (
    <div className="program-cards">
      <Card tittle={"HTML"} image={HtmlIcon} onclick={()=>setLanguage(Languages.Html)}/>
      <Card tittle={"CSS"} image={CssIcon}onclick={()=>setLanguage(Languages.CSS)}/>
      <Card tittle={"JS"} image={JsIcon} onclick={()=>setLanguage(Languages.JavaScript)}/>
      <Card tittle={"React"} image={ReactIcon} onclick={()=>setLanguage(Languages.React)}/>
    </div>
  );
}

export default programCards;
