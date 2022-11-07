import React from "react";

const Work = () => {
  return (
    <div className="work" id="myWork">
      <h1>My Work</h1>
      <div className="work-cards">
        <div className="work-card">
          <div className="work-card-content">
            <h4>Tick-Tack-Toe</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://replit.com/@InderjeetSing12/Tic-Tac-Toe-Game">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-card-content">
            <h4>Mole-In-A-Hole</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://replit.com/@InderjeetSing12/Mole-In-A-Hole">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="work-card">
          <div className="work-card-content">
            <h4>To-Do-App</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <a href="https://replit.com/@InderjeetSing12/To-Do-App">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
      <button className="btn" id="submit">
        See More
      </button>
    </div>
  );
};

export default Work;
