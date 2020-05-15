import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderdList = props.videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui list">{renderdList}</div>;
};

export default VideoList;
