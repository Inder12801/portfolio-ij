import React from "react";
import bg1 from "../img/bg1.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const str = "Hi, I am \nInderjeet";
  return (
    <div className="homepage" id="home">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <nav className="navbar">
        <div className="logo">Inderjeet</div>

        <ul className="navlinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutName">About</a>
          </li>
          <li>
            <a href="#myServices">Services</a>
          </li>
          <li>
            <a href="#myWork">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* < 			<i className="fa-sharp fa-solid fa-bars"></i> */}
        <span className="menu-bar">
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </nav>
      <div className="main">
        <div className="intro">
          <p className="intro-job">Web Developer</p>
          <p className="intro-content">
            <TypeAnimation
              speed={20}
              deletionSpeed={20}
              sequence={[
                str,
                1000,
                "",
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
            />
            {/* Hi, I am <br /> <span>Inderjeet</span> */}
          </p>
          <button id="download" className="btn">
            Download CV
          </button>
        </div>
        <img src={bg1} alt="image" />
      </div>
    </div>
  );
};

export default Home;
