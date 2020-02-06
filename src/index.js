import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/Todo/TodoList";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import AppHeader from "./components/AppHeader/AppHeader";
import ItemStatusInfo from "./components/ItemStatusInfo/ItemStatusInfo";
import AddItems from "./components/AddItems/AddItems";
import "./index.css";
class App extends React.Component {
  maxId = 100;
  state = {
    todos: [
      this.createTodoItem("Learn JavaScript"),
      this.createTodoItem("Learn React JS"),
      this.createTodoItem("Looking for a job ")
    ],
    term: "",
    filter: "all" // active, done, all
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }
  toggleProperty(arr, id, propName) {
    const ind = arr.findIndex(el => el.id === id);

    const oldItem = arr[ind];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, ind), newItem, ...arr.slice(ind + 1)];
  }

  onToggleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, "done")
      };
    });
  };

  deleteId = id => {
    this.setState(({ todos }) => {
      const ind = todos.findIndex(el => el.id === id);
      const newArray = [...todos.slice(0, ind), ...todos.slice(ind + 1)];
      return {
        todos: newArray
      };
    });
  };

  addId = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todos }) => {
      const newArray = [...todos, newItem];
      return {
        todos: newArray
      };
    });
  };

  onSearch = (items, term) => {
    if (term.length === "") {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "done":
        return items.filter(item => item.done);
      case "active":
        return items.filter(item => !item.done);
      default:
        return items;
    }
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const doneCount = this.state.todos.filter(elem => elem.done).length;
    const todoCount = this.state.todos.length - doneCount;

    const { todos, term, filter } = this.state;
    const visibleItems = this.onFilter(this.onSearch(todos, term), filter);
    return (
      <div className="main">
        <AppHeader toDo={todoCount} done={doneCount} />
        <TodoList
          todos={visibleItems}
          onDelete={this.deleteId}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusInfo filter={filter} onFilterChange={this.onFilterChange} />
        <AddItems onEvent={this.addId} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
