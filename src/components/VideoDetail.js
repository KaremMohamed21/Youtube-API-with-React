import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Enter Search term and select Video</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={videoSrc}></iframe>
      </div>
      <h4 className="ui header">{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
