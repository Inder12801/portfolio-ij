import React from "react";

const ContactMe = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="formSection">
          <form action="https://formspree.io/f/mnqrljll" method="POST">
            <input
              name="username"
              type="text"
              placeholder="Enter Your Name"
              required
              autoComplete="off"
            />
            <input
              name="mail"
              type="email"
              placeholder="Enter Your Email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button id="submit" className="btn" value={"send"}>
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
            {/* <i className="fa-brands fa-facebook"></i> */}
            <a
              href="https://twitter.com/Inder12801?t=55lE8AMbouzVORjl7PAPug&s=09"
              target="_blanc"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/ij.singh_/?hl=en"
              target="_blanc"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/inderjeet-singh-613a44203/"
              target="_blanc"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Inder12801" target="_blanc">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
