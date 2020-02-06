import React from "react";
class SearchPanel extends React.Component {
  state = {
    term: ""
  };
  onSearchChange = event => {
    const term = event.target.value;
    this.setState({
      term: term
    });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        style={{ padding: "10px ", margin: "10px 10px" }}
        placeholder="Search"
        onChange={this.onSearchChange}
        value={this.state.term}
      />
    );
  }
}
export default SearchPanel;
