import React from "react";
import "../css/style.css";

const VideoItem = (props) => {
  return (
    <div
      className="item"
      onClick={() => {
        props.fetchVideoSelected(props.video);
      }}
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.title}
      />
      <div className="content">
        <h4 className="header">{props.video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
