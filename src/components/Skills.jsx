import React from "react";
import Fade from "react-reveal/Fade";
import ts from "../images/Typescript_logo.png";
import google_cloud from "../images/google_cloud.png";
import sql from "../images/sql.jpg";
import qb from "../images/qb.jpg";
import mpesa from "../images/mpesa.png";

const Skills = ({ skillsDivRef }) => {
  return (
    <div className="primary-color mt-5 p-5 about-section" ref={skillsDivRef}>
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
                  I am a seasoned software developer proficient in a versatile
                  tech stack, including{" "}
                  <span className="yellow-text fw-bold">
                    React.js, Node.js, TypeScript, and React Native
                  </span>
                  . With a passion for innovation and a commitment to
                  excellence, I specialize in crafting dynamic solutions that
                  elevate user experiences across web and mobile platforms. My
                  expertise spans the development of robust web applications,
                  mobile apps, and backend systems.
                </p>
                <p>
                  I have a proven track record of delivering high-quality
                  solutions tailored to meet diverse project requirements.
                  Additionally, I excel in creating intuitive user interfaces,
                  optimizing performance, and integrating third-party services
                  to enhance functionality. My skill set enables me to tackle
                  complex challenges and drive projects from conception to
                  completion with precision and efficiency. Driven by a
                  relentless pursuit of mastery in software development, I
                  continually explore emerging technologies and best practices
                  to stay at the forefront of the industry.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center px-5 skill-cards">
                <div className="d-flex justify-content-between  col-md-10 flex-wrap">
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-node fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">NODE JS</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-react fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">REACT JS</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <img src={ts} alt="TS" width="30" />
                    <span className="ps-3 fw-bold skill-size">TYPESCRIPT</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-react fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size ">
                      REACT NATIVE
                    </span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card ">
                    <i className="fab fa-docker fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">DOCKER</span>
                  </div>

                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <i className="fab fa-js-square fa-2x"></i>
                    <span className="ps-3 fw-bold skill-size">JAVASCRIPT</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <img src={google_cloud} alt="TS" width="30" />
                    <span className="ps-3 fw-bold skill-size">
                      GOOGLE CLOUD PLATFORM
                    </span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <img src={sql} alt="TS" width="30" />
                    <span className="ps-3 fw-bold skill-size">SQL</span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <img src={qb} alt="TS" width="30" />
                    <span className="ps-3 fw-bold skill-size">
                      QUICKBOOKS INTEGRATION
                    </span>
                  </div>
                  <div className="text-uppercase bg-white shadow rounded p-4 col-md-5 mb-3 d-flex align-items-center skill-card">
                    <img src={mpesa} alt="TS" width="40" />
                    <span className="ps-3 fw-bold skill-size">
                      M-PESA INTEGRATION
                    </span>
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
