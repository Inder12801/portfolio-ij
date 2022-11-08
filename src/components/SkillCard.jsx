import React from "react";
import html from "../img/html.png";
const SkillCard = ({ image, name }) => {
  return (
    <div className="skill-card">
      <img src={image} />
      <h4>{name}</h4>
    </div>
  );
};

export default SkillCard;
