import React from "react";
import coinbash from "../img/coinbash.jpg";

const WorkCard = ({ name, link, description, image, gitLink }) => {
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
          <button className="btn">Website</button>
        </a>
        <a href={gitLink} target="_blanc">
          <i class="fa-brands fa-github" style={{ fontSize: "25px" }}></i>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
