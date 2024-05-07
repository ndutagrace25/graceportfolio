import React from "react";
import Fade from "react-reveal/Fade";

const Navbar = ({ setCurrentPage, icon, name_bg, menu_bg }) => {
  return (
    <div className="px-5 pt-4 d-flex justify-content-between nav-section">
      <div className="d-flex justify-content-start">
        <Fade bottom delay={255}>
          <span
            className={
              "primary-text-color p-3 rounded text-align-center fw-bold fs-5 nav-icon " +
              name_bg +
              " "
            }
          >
            G.N.K
          </span>
        </Fade>
      </div>
      <div className="pe-3">
        <div
          className={"primary-color p-3 rounded nav-icon fixed-icon " + menu_bg}
          style={{ cursor: "pointer" }}
          onClick={setCurrentPage}
        >
          <i className={"fas fa-bars fa-2xl text-white icon-size " + icon}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
