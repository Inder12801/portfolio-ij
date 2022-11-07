import React from "react";

const ContactMe = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="formSection">
          <form action="">
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Your Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>
            <button id="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div className="detailsBox">
          <div id="mail" className="details">
            <i className="fa-solid fa-envelope"></i>
            <span>official.inderjeet12@gmail.com</span>
          </div>
          <div id="phone" className="details">
            <i className="fa-solid fa-phone"></i>
            <span>+91-8700649024</span>
          </div>
          <div id="socioLinks">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
