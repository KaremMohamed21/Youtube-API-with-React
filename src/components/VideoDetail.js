import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  // Check if there're videos rendered
  if (!selectedVideo) {
    return <div>Enter Search term and select Video</div>;
  }

  // Youtube video src
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="Video player" src={videoSrc}></iframe>
      </div>
      <h4 className="ui header">{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
