import React from "react";

import { workData } from "../data";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work" id="myWork">
      <h1 className="downline">My Work</h1>
      <div className="work-cards">
        {workData.map((item) => (
          <WorkCard {...item} />
        ))}
      </div>
      {/* <button className="btn" id="submit">
        See More
      </button> */}
    </div>
  );
};

export default Work;
