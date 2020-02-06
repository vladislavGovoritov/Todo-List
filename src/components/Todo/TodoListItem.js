import React from "react";
import "../Todo/TodoListItem.css";

export default class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <button
          style={{ marginLeft: "20px" }}
          className="btn btn-outline-success btn-sm"
          onClick={onToggleImportant}
          type="button"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o " />
        </button>
      </span>
    );
  }
}
