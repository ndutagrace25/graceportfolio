import React from "react";
import obscura from "../images/obscura.jpg";
import environmental from "../images/environmental.jpg";
import powwater from "../images/powwater.jpg";
import Fade from "react-reveal/Fade";

const Projects = ({ projectsDivRef }) => {
  return (
    <div ref={projectsDivRef} className="bg-light py-5">
      <div className="container">
        <h5 className="text-uppercase fw-bold primary-text-color">
          Featured Projects
        </h5>
        <h3 className="fw-bold text-capitalize mt-3 mb-5">
          My Recent Projects
        </h3>
        <div className="">
          <Fade delay={520} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card p-3 bg-white rounded shadow-sm">
              <a
                className="bg-maroon p-3 col-md-6 image-card"
                href="https://master--brilliant-hotteok-f20887.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="project"
                  src={obscura}
                  className="img-fluid project-image rounded"
                  height={100}
                />
              </a>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">#REACT</div>
                <h5 className="fw-bold">Obscura Media Limited</h5>
                <p>
                  Obscura Media Limited is a Kenyan based communications firm
                  with decades of global experience. Obsura specialize in all
                  aspects of media, communications, and public relations
                  including film, photography, design, printing, and campaign
                  and communications consulting.
                </p>
                <div className="my-2">
                  <i className="fab fa-react fa-lg text-info"></i>
                </div>
                <a
                  className="fw-bold text-uppercase"
                  href="https://master--brilliant-hotteok-f20887.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-external-link"></i>
                  <span className="mx-3">View live Website</span>
                </a>
              </div>
            </div>
          </Fade>

          <Fade delay={540} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card my-5 p-3 bg-white rounded shadow-sm">
              <a
                className="bg-pink p-3 col-md-6 image-card"
                href="https://master--statuesque-semolina-0016f3.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="project"
                  src={environmental}
                  className="img-fluid project-image rounded"
                  height={100}
                />
              </a>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">#REACT</div>
                <h5 className="fw-bold text-capitalize">
                  open institute environmental club
                </h5>
                <p>
                  Environmental Club offers events and activities of all kinds
                  for students interested in breading their horizons, creating
                  amazing memories and learning more about environment.
                </p>
                <div className="my-2">
                  <i className="fab fa-react fa-lg text-info"></i>
                </div>
                <a
                  className="fw-bold text-uppercase"
                  href="https://master--statuesque-semolina-0016f3.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-external-link"></i>
                  <span className="mx-3">View live Website</span>
                </a>
              </div>
            </div>
          </Fade>

          <Fade delay={560} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card my-5 p-3 bg-white rounded shadow-sm">
              <a
                className="bg-secondary p-3 col-md-6 image-card"
                href="https://play.google.com/store/apps/details?id=com.powwater.customer&hl=en&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="project"
                  src={powwater}
                  className="img-fluid project-image rounded"
                  height={100}
                />
              </a>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">
                  #REACT NATIVE
                </div>
                <h5 className="fw-bold text-capitalize">PowWater Mobile App</h5>
                <p>
                  Powwater mobile app helps people in Kenya to order bowser
                  water at the comfort of their homes.
                </p>
                <div className="my-2">
                  <i className="fab fa-react fa-lg text-info"></i>
                </div>
                <a
                  className="fw-bold text-uppercase"
                  href="https://play.google.com/store/apps/details?id=com.powwater.customer&hl=en&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-external-link"></i>
                  <span className="mx-3">Download The App</span>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
