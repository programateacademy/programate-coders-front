import React from "react";
import Card from "../../../atoms/card/Card";
import HtmlIcon from "../../../../assets/Imagenes/Cards/html.svg";
import CssIcon from "../../../../assets/Imagenes/Cards/css.svg";
import JsIcon from "../../../../assets/Imagenes/Cards/javascript.svg";
import ReactIcon from "../../../../assets/Imagenes/Cards/react.svg";

function programCards() {
  return (
    <div className="program-cards">
      <Card tittle={"HTML"} image={HtmlIcon} />
      <Card tittle={"CSS"} image={CssIcon} />
      <Card tittle={"JS"} image={JsIcon} />
      <Card tittle={"React"} image={ReactIcon} />
    </div>
  );
}

export default programCards;
