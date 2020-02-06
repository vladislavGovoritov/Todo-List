import React from "react";

class AddItems extends React.Component {
  state = {
    label: ""
  };

  onChangeLabel = event => {
    this.setState({
      label: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onEvent(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form
        style={{ width: "400px", marginLeft: "15px" }}
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          className="form-control"
          type="text"
          onChange={this.onChangeLabel}
          value={this.state.label}
        />
        <button
          style={{ marginLeft: "10px", width: "50%" }}
          className="btn btn-outline-success"
        >
          Add item
        </button>
      </form>
    );
  }
}

export default AddItems;
