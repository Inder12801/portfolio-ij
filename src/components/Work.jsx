import React from "react";

import { workData } from "../data";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work" id="myWork">
      <h1>My Work</h1>
      <div className="work-cards">
        {workData.map((item) => (
          <WorkCard
            name={item.name}
            image={item.image}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
      <button className="btn" id="submit">
        See More
      </button>
    </div>
  );
};

export default Work;
