import React from "react";
import youtube, { basePARAMS } from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  // Main App State
  state = {
    videoList: [],
    selectedVideo: null,
  };

  // TO Get Videos from Youtube API by Search Keyword
  onKeywordSubmit = async (keyword) => {
    const res = await youtube.get("/search", {
      params: {
        ...basePARAMS,
        q: keyword,
      },
    });
    this.setState({ videoList: res.data.items });
  };

  // TO Get Selected Video
  onVideoSelect = (selectedVideo) => {
    this.setState({
      selectedVideo,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar fetchKeyword={this.onKeywordSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                fetchVideoSelected={this.onVideoSelect}
                videos={this.state.videoList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
