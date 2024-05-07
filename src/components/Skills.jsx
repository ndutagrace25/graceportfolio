import React from "react";
import Fade from "react-reveal/Fade";

const Skills = ({ skillsDivRef }) => {
  return (
    <div
      className="primary-color mt-5 p-5 about-section"
      ref={skillsDivRef}
    >
      <Fade bottom delay={500}>
        <div className="container-fluid pt-3 px-5" id="Skills">
          <h6 className="yellow-text fw-bold about-header">
            ABOUT ME & MY WORK
          </h6>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="col-md-6">
              <div>
                <h1 className="text-white fw-bold skill-header">
                  Skills & Experience
                </h1>
              </div>
              <div className="about-info">
                <p>
                  I have a deep passion for my work, fueled by the desire to
                  solve problems and create value. I am a self-motivated and
                  self-driven individual who is always looking for new
                  challenges and opportunities to grow and improve
                </p>
                <p>
                  My experience and expertise as a software engineer is
                  multi-faceted with a keen focus on front-end web development
                  with <span className="yellow-text fw-bold">React</span>. I've
                  also worked on a variety of cross-platform mobile apps built
                  with <span className="yellow-text fw-bold">React Native</span>
                  .
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center px-5 skill-cards">
                <div className="d-flex justify-content-between  col-md-10 flex-wrap">
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-react fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">REACT JS</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-react fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size ">
                      REACT NATIVE
                    </span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-bootstrap fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">Boostrap</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card ">
                    <i className="fab fa-css3 fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">CSS3</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-node fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">NODE JS</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-js-square fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">JAVASCRIPT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
