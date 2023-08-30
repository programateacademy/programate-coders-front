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

const CardsSchool = ({data}) => {
  return (
    <div className="card-container">
      {data.map(course => (
        <Card
          key={course.item}
          iconSrc={course.image}
          title={course.name}
          btnText="CURSO"
        />
      ))}
    </div>
  );
};

export default CardsSchool;