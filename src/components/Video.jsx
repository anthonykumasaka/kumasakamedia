import React from "react";
import YouTube from "react-youtube";
import "../styles/Video.css";

export const Video = (props) => {
  const { url, title, options } = props;
  const defaultOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="video-container">
      {/* <h3 className="video-title">{title || "Title"}</h3> */}
      <YouTube
        videoId={url}
        options={options || defaultOptions}
        onReady={onReady}
        id="video"
      />
    </div>
  );
};
