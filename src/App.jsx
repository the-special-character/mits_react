import React, { Component, createRef } from "react";
import TodoFilter from "./todoFilter";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todoList: [],
      filterType: "all",
    };
    this.todoTextRef = createRef();
  }

  addTodo = (event) => {
    event.preventDefault();

    // async
    this.setState(
      ({ todoList }) => {
        return {
          todoList: [
            ...todoList,
            {
              id: new Date().valueOf(),
              text: this.todoTextRef.current.value,
              isDone: false,
            },
          ],
          todoText: "",
        };
      },
      () => {
        this.todoTextRef.current.value = "";
      }
    );
  };

  toggleComplete = (todoItem) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === todoItem.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoItem, isDone: !todoItem.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (todoItem) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === todoItem.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  changeFilterType = (filterType) => {
    this.setState({ filterType });
  };

  render() {
    const { todoText, todoList, filterType } = this.state;
    console.log("todo render");

    return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl font-semibold my-8">Todo App</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoTextRef} />
        <TodoList
          todoList={todoList}
          filterType={filterType}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter changeFilterType={this.changeFilterType} />
      </div>
    );
  }
}
