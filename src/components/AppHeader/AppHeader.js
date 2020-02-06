import React from "react";

const AppHeader = (props) => {
  const {toDo, done} = props
  return (
    <h1 style={{textAlign:'center'}}>
      <strong>Todo List</strong>
        <small> {toDo} more to do,{done} done</small>
    </h1>
  );
};

export default AppHeader;
