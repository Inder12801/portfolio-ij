import React from "react";
import coinbash from "../img/coinbash.jpg";

const WorkCard = ({ name, link, description, image }) => {
  return (
    <div
      className="work-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="work-card-content">
        <h4>{name}</h4>
        <p>{description}</p>
        <a href={link} target="_blanc">
          <button className="btn">Go to</button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
