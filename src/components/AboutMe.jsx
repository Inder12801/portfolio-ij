import React from "react";
import bg2 from "../img/bg2.png";

const AboutMe = () => {
  return (
    <div className="about" id="aboutName">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {/* <div className="img-div">
        <img src={bg2}></img>
      </div> */}
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-avatar">
          <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
        </div>
        <p className="about-content-desc">
          Hi, my name is Aayush . I am a undergraduate Btech(IT) student. I am a
          front-end developer who loves to work on ReactJS-based projects. I am
          a learner that values growth and determination. I have mentioned below
          my skills learnt till now. I have also made some projects using my
          skills out which the best ones are showcased below. I am interested
          and open to interview as a Front-end developer.
        </p>

        {/* <div className="SEE-section">
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
          </div> */}

        {/*  <div className = "education details">
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
				</div>  */}
      </div>
    </div>
  );
};

export default AboutMe;
