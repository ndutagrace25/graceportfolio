import React from "react";

const ContactMe = ({ contactDivRef, scrollToDiv }) => {
  return (
    <div className="bg-dark p-5 project-card contact-card" ref={contactDivRef}>
      <div className="container rounded bg-white p-5">
        <h6 className="primary-text-color fw-bold about-header text-uppercase">
          Like What You See?
        </h6>
        <div className="my-3">
          <h1 className="text-black fw-bold skill-header">
            Lets Work Together
          </h1>
        </div>
        <div className="d-flex justify-content-between flex-wrap ">
          <div className="col-md-5 mt-3">
            <p>
              I'm currently available for work, so if you'd like to discuss any
              projects or potential collaborations, you can reach me through any
              of the available contact information.
            </p>
          </div>
          <div className="col-md-5 mt-3">
            <a
              className="d-flex flex-row align-items-center"
              style={{ cursor: "pointer" }}
              href="mailto: ndutagrace25@gmail.com"
            >
              <i className="fa-regular fa-envelope fa-lg primary-text-color"></i>
              <div className="ps-3 fw-bold">ndutagrace25@gmail.com</div>
            </a>
            <a
              className="d-flex flex-row align-items-center py-3"
              style={{ cursor: "pointer" }}
              href="tel:+2547088807403"
            >
              <i className="fa-regular fa-message fa-lg primary-text-color"></i>
              <div className="ps-3 fw-bold">+254 708 807 403</div>
            </a>
            <a
              className="d-flex flex-row align-items-center pb-3"
              style={{ cursor: "pointer" }}
              href="https://www.linkedin.com/in/grace-kigaa-2705b212b"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-lg primary-text-color"></i>
              <div className="ps-3 fw-bold">Linkedin</div>
            </a>
            <a
              className="d-flex flex-row align-items-center"
              style={{ cursor: "pointer" }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ndutagrace25"
            >
              <i className="fa-brands fa-square-github fa-lg primary-text-color"></i>
              <div className="ps-3 fw-bold">Github</div>
            </a>
          </div>
        </div>
      </div>
      <div className="text-uppercase text-white fw-bold flex-row d-flex justify-content-center my-5 footer-menu">
        <div
          style={{ cursor: "pointer" }}
          className="px-3"
          onClick={() => scrollToDiv("skills")}
        >
          SKILLS
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="px-3"
          onClick={() => scrollToDiv("projects")}
        >
          Projects
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="px-3"
          onClick={() => scrollToDiv("about")}
        >
          About Me
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="px-3"
          onClick={() => scrollToDiv("contact")}
        >
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
