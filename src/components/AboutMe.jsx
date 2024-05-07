import React, { useState } from "react";

const AboutMe = ({ aboutDivRef }) => {
  const [bgCard, setBgCard] = useState(null);
  const [bgCardTwo, setBgCardTwo] = useState(null);
  return (
    <div className="yellow-bg" ref={aboutDivRef}>
      <div className="container p-5">
        <h6 className="primary-text-color fw-bold about-header">ABOUT ME</h6>
        <div className="my-3">
          <h1 className="text-black fw-bold skill-header">
            Think, Make, Solve
          </h1>
        </div>
        <div className="d-flex justify-content-between mt-5 flex-wrap project-card">
          <div
            className={"border col-md-5 p-5 border-black " + bgCard}
            onMouseEnter={() => setBgCard("bg-white")}
            onMouseLeave={() => setBgCard(null)}
          >
            <div className="bg-black p-1 rounded col-md-1 mb-2 d-flex justify-content-center icon-mobile">
              <i className="fa-solid fa-terminal text-white"></i>
            </div>
            <p>
              My mission as a Software Engineer is to deliver elegant and
              efficient solutions that translate Good Design into Good Business
              and even better user experiences.
            </p>
          </div>
          <div
            className={"border col-md-5 p-5 about-m border-black " + bgCardTwo}
            onMouseEnter={() => setBgCardTwo("bg-white")}
            onMouseLeave={() => setBgCardTwo(null)}
          >
            <div className="bg-black p-1 rounded col-md-1 mb-2 d-flex justify-content-center icon-mobile">
              <i className="fa-solid fa-user text-white "></i>
            </div>
            <p>
              When I'm not at my desk, I'll be on the occasional road trip
              enjoying hiking & camping. Hiking is where my love for adventure and my
              connection with nature truly intertwine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
// 


export default AboutMe;
