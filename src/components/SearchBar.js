import React from "react";

class SearchBar extends React.Component {
  state = {
    keyword: "",
  };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.fetchKeyword(this.state.keyword);
          }}
        >
          <div className="field">
            <label>Video search</label>
            <input
              type="text"
              value={this.state.keyword}
              onChange={(e) => this.setState({ keyword: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
