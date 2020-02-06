import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = props => {
  const todo = props.todos.map(item => {
    const { id, ...anyItems } = item;
    return (
      <li style={{ width: "300px" }} className="list-group-item" key={id}>
        <TodoListItem
          {...anyItems}
          onToggleImportant={() => props.onToggleImportant(id)}
          onToggleDone={() => props.onToggleDone(id)}
          onDelete={() => props.onDelete(id)}
        />
      </li>
    );
  });
  return <ul className="list-group ml-4 pt-10 ">{todo}</ul>;
};

export default TodoList;
