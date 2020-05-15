import React from "react";
import youtube, { basePARAMS } from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  // Main App State
  state = {
    videoList: [],
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
    console.log(this.state.videoList);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar fetchKeyword={this.onKeywordSubmit} />
        {this.state.videoList.length} Videos
        <VideoList videos={this.state.videoList} />
      </div>
    );
  }
}

export default App;
