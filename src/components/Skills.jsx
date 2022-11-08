import React from "react";
import SkillCard from "./SkillCard";
import { data } from "../data";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-cards">
        {data.map((item) => {
          return <SkillCard image={item.image} name={item.name} />;
        })}
        {/* <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard /> */}
      </div>
    </div>
  );
};

export default Skills;
