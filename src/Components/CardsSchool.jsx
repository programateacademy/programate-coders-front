import React from "react";
import "../Styles/CardsSchool.css";

const Card = ({ iconSrc, title, btnText, onClick }) => {
  return (
    <div className="card-wrap" onClick={onClick}>
      <div className="card-header">
        <img src={iconSrc} height="50px" width="50px" alt="" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
      </div>
    </div>
  );
};

const CardsSchool = ({data, onCardClick}) => {
  return (
    <div className="card-container">
      {data.map(course => (
        <Card
          key={course.item}
          iconSrc={course.image}
          title={course.name}
          onClick={() => onCardClick(course.levels, course.name) }
        />
      ))}
    </div>
  );
};

export default CardsSchool;