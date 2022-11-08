import React, { useRef, useState } from "react";
import bg1 from "../img/bg1.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  // const [navlinks] = useRef();
  const [state, setState] = useState(false);
  const handleMenu = () => {
    if (state) {
      setTimeout(() => {
        setState(!state);
      }, 600);
    } else {
      setTimeout(() => {}, 150);
      setState(!state);
    }
  };
  const str = "Hi, I am \nInderjeet";
  return (
    <div className="homepage" id="home">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <nav className="navbar">
        <div className="logo">
          Inderjeet
          <div className="line"></div>
        </div>

        <ul
          style={{
            transform: `${state ? "translateY(100%)" : "translateY(-100%)"}`,
          }}
          className="navlinks"
        >
          <li className="pulser">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutName">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#myWork">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* < 			<i className="fa-sharp fa-solid fa-bars"></i> */}
        <span className="menu-bar" onClick={handleMenu}>
          {state ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
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
            <a
              href="/src/assets/Training Guidelines - CSE Department .pdf"
              download={"Resume.pdf"}
            >
              Download CV
            </a>
          </button>
        </div>
        <div className="imageDiv">
          <img src={bg1} alt="image" />
          <div></div>
        </div>
      </div>
      <a href="#home">
        <button className="toTop">
          <i class="fa-solid fa-caret-up"></i>
        </button>
      </a>
    </div>
  );
};

export default Home;
