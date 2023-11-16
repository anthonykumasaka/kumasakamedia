import React from "react";
import { Video } from "./Video";
import "../styles/LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Kumasaka Media</h1>
      </div>
      <Video
        url="KqTdT0Qkeqc?si=z1S2XTSBrAZ2QvAO"
        title="Anthony Kumasaka Reel 2013"
      />
      <Video
        url="zP7czhIeA94?si=5DC5XsCpAvNkZLaQ"
        title='Ryan Leslie - "Joan of Arc" Live in Seattle'
      />
    </div>
  );
};
