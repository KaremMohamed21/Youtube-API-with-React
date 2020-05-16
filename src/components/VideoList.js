import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderdList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        fetchVideoSelected={props.fetchVideoSelected}
        video={video}
      />
    );
  });

  return (
    <div className="ui relaxed divided list">
      {props.videos.length} Videos {renderdList}
    </div>
  );
};

export default VideoList;
