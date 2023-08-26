import React from "react";
import "../Styles/CardsSchool.css";

const Card = ({ iconSrc, title, btnText }) => {
  return (
    <div className="card-wrap">
      <div className="card-header">
        <img src={iconSrc} height="50px" width="50px" alt="" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <button className="card-btn">{btnText}</button>
      </div>
    </div>
  );
};

const CardsSchool = (data) => {
  return (
    <div className="card-container">
      <Card iconSrc="" title="FUNDAMENTOS" btnText="CURSO" />
      <Card iconSrc="" title="DISEÑO" btnText="CURSO" />
      <Card iconSrc="imagenes/html.svg" title="HTML" btnText="CURSO" />
      <Card iconSrc="imagenes/css3.svg" title="CSS" btnText="CURSO" />
      <Card iconSrc="imagenes/js.svg" title="JAVASCRIPT" btnText="CURSO" />
      <Card iconSrc="imagenes/github.svg" title="GITHUB" btnText="CURSO" />
      <Card iconSrc="imagenes/python.svg" title="PYTHON" btnText="CURSO" />
      <Card iconSrc="" title="UX-I" btnText="CURSO" />
      <Card iconSrc="" title="EXTRA" btnText="CURSO" />
    </div>
  );
};

export default CardsSchool;
