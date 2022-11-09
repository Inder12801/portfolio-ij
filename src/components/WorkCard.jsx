import React from "react";
import coinbash from "../img/coinbash.jpg";

// const wordCardStyle = {

//   border: "none",
//   borderRadius: "30px",
//   width: "20vmax",
//   height: "20vmax",
//   margin: "30px",
//   boxShadow: "0px 2px 5px 1px #000000a6",
//   transition: "0.5s ease",
// };

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
          {/* <i className="fa-solid fa-arrow-up-right-from-square"></i> */}
          <button className="btn">Go to</button>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
