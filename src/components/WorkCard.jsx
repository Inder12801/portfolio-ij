import React from "react";

const WorkCard = ({ name, link, description, image }) => {
  return (
    <div
      className="work-card"
      style={{
        background: `${image}`,
      }}
    >
      <div className="work-card-content">
        <h4>{name}</h4>
        <p>{description}</p>
        <a href={link} target="_blanc">
          {/* <i className="fa-solid fa-arrow-up-right-from-square"></i> */}
          <button className="btn">Go to</button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
