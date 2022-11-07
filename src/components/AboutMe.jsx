import React from "react";
import bg2 from "../img/bg2.png";

const AboutMe = () => {
  return (
    <div className="about" id="aboutName">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="img-div">
        <img src={bg2}></img>
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p className="about-content-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          quidem sapiente
        </p>
        <div className="SEE-section">
          <ul className="">
            <li id="skills">Skills</li>
            <li id="experience">Experience</li>
            <li id="education">Education</li>
          </ul>
        </div>
        <div className="see-deatils">
          <div className="skill details">
            <h3>Web Dev</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h3>competitive programmer</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* <!-- <div className = "education details">
					<h3>2020</h3>
					<p>Lorem ipsum dolor sit amet.</p>
					<h3>2020-Present</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className = "experience details">
					<h3>2021-2022</h3>
					<p>Lorem ipsum dolor sit amet.</p>
					<h3>2022-current</h3>
					<p>Lorem ipsum dolor sit amet.</p>
				</div> --> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
