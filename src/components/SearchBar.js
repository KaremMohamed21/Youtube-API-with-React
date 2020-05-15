import React from "react";

class SearchBar extends React.Component {
  state = {
    searchKey: "",
  };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={this.state.searchKey}
              onChange={(e) => this.setState({ searchKey: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
