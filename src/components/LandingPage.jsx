import React from "react";
import { Video } from "./Video";
import "../styles/LandingPage.css";
import { NavBar } from "./NavBar";

export const LandingPage = () => {
  const options = {
    height: "1920",
    width: "1080",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Kumasaka Media</h1>
      </div>
      <div>
        <NavBar />
      </div>
      <Video
        url="KqTdT0Qkeqc?si=z1S2XTSBrAZ2QvAO"
        title="Anthony Kumasaka Reel 2013"
        options={options}
      />
      <Video
        url="zP7czhIeA94?si=5DC5XsCpAvNkZLaQ"
        title='Ryan Leslie - "Joan of Arc" Live in Seattle'
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pIn-niRpJEQ?si=gt6CDpPsJlbDpB6Q"
        title="YouTube video player"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> 
    </div>
  );
};
