import React from "react";
import SearchBar from "./SearchBar";
import youtube, { basePARAMS } from "../api/youtube";

class App extends React.Component {
  onKeywordSubmit = (keyword) => {
    youtube.get("/search", {
      params: {
        ...basePARAMS,
        q: keyword,
      },
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar fetchKeyword={this.onKeywordSubmit} />
      </div>
    );
  }
}

export default App;
