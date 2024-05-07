import React from "react";
import developer from "../images/developer.jpg";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <Fade bottom delay={255}>
      <div className="px-5 mx-5 mt-5 pb-3">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="intro-width">
            <div className="d-flex justify-content-between pt-3">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="text-uppercase primary-text-color">
                  <h6 className="name-itro">Hello there my name is:</h6>
                </div>
                <Zoom bottom delay={320}>
                  <h1 className="py-3 fw-bold actual-name">Joanne Aluka</h1>
                </Zoom>
                <Zoom left delay={425}>
                  <div>
                    <p className="fs-4 intro-info">
                      I am a{" "}
                      <span className="fw-bold">
                        Front-End Software Engineer
                      </span>{" "}
                      with <span className="fw-bold">3+ years</span> of
                      experience in designing & building both web and mobile
                      application
                    </p>
                  </div>
                </Zoom>

                <div className="download-section">
                  <Link
                    className="text-uppercase btn primary-color text-white py-3 fw-bold download-btn"
                    to="/files//Joanne.pdf"
                    target="_blank"
                    download
                  >
                    <span className="btn-font">
                      Download Resume <i className="fas fa-download ps-2"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 mobile-image-hide d-flex justify-content-center">
                <img
                  className="img-fluid rounded"
                  src={developer}
                  alt="developer"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Intro;
