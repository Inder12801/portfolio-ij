import React from "react";

const Services = () => {
  return (
    <div className="services" id="myServices">
      <h1 className="service-heading">My Services</h1>
      <div className="service-cards">
        <div className="service-card">
          <i className="fa-solid fa-code-fork"></i>
          <h4>Web Development</h4>
          <p className="servive">Lorem ipsum dolor sit amet amet.amet..</p>
        </div>
        <div className="service-card">
          <i className="fa-solid fa-code"></i>
          <h4>Competetive Programming</h4>
          <p style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet amet.amet..
          </p>
        </div>
        <div className="service-card">
          <i className="fa-brands fa-app-store"></i>
          <h4>App Development</h4>
          <p>Lorem ipsum dolor sit amet amet.amet..</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
