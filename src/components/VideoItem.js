import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item">
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <a className="header">{props.video.snippet.title}</a>
      </div>
    </div>
  );
};

export default VideoItem;
