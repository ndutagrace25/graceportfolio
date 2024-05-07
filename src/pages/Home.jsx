import React, { useState, useRef, useLayoutEffect } from "react";
import {
  Navbar,
  Intro,
  Skills,
  Projects,
  AboutMe,
  ContactMe,
} from "../components";
import { Menu } from ".";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [activeDiv, setActiveDiv] = useState(null);
  const skillsDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const aboutDivRef = useRef(null);
  const contactDivRef = useRef(null);

  const scrollToDiv = (active_div) => {
    setActiveDiv(active_div);
    setCurrentPage(null);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    console.log(activeDiv, "activeDivactiveDiv");
    if (skillsDivRef.current && activeDiv === "skills") {
      if (!currentPage) {
        skillsDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (projectsDivRef.current && activeDiv === "projects") {
      if (!currentPage) {
        projectsDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (aboutDivRef.current && activeDiv === "about") {
      if (!currentPage) {
        aboutDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (contactDivRef.current && activeDiv === "contact") {
      if (!currentPage) {
        contactDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentPage, activeDiv]);

  return (
    <div className="main-container">
      {currentPage === "Menu" ? (
        <Fade top delay={255}>
          <div className="menu-page-bg primary-color">
            <div className="container-fluid">
              <Navbar
                setCurrentPage={() => setCurrentPage("Home")}
                icon="fa-sharp fa-regular fa-xmark"
                name_bg="bg-white shadow-sm"
                menu_bg="bg-secondary"
              />
              <div className="d-flex justify-content-center mt-4">
                <Menu scrollToDiv={scrollToDiv} />
              </div>
            </div>
          </div>
        </Fade>
      ) : (
        <div>
          <div className="container-fluid">
            <Navbar
              setCurrentPage={() => setCurrentPage("Menu")}
              icon="fas fa-bars"
              name_bg="yellow-bg"
              menu_bg="primary-color"
            />
            <Intro />
          </div>
          <Skills skillsDivRef={skillsDivRef} />
          <Projects projectsDivRef={projectsDivRef} />
          <AboutMe aboutDivRef={aboutDivRef} />
          <ContactMe contactDivRef={contactDivRef} scrollToDiv={scrollToDiv} />
        </div>
      )}
    </div>
  );
};

export default Home;
