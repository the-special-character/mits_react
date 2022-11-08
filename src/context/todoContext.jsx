import React, { createContext, createRef, PureComponent } from "react";

export const TodoContext = createContext();

export class TodoProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      todoList: [],
      filterType: "all",
    };
    this.todoTextRef = createRef();
  }

  componentDidMount() {
    this.loadTodo("all");
  }

  loadTodo = async (filterType) => {
    try {
      let url = "http://localhost:3004/todoList";
      if (filterType !== "all") {
        url += `?isDone=${filterType === "completed"}`;
      }
      const res = await fetch(url);
      const todoList = await res.json();
      this.setState({ todoList, filterType });
    } catch (error) {
      console.error(error.message);
    }
  };

  addTodo = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch("http://localhost:3004/todoList", {
        method: "POST",
        body: JSON.stringify({
          text: this.todoTextRef.current.value,
          isDone: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      this.setState(
        ({ todoList }) => {
          return {
            todoList: [...todoList, json],
            todoText: "",
          };
        },
        () => {
          this.todoTextRef.current.value = "";
        }
      );
    } catch (error) {
      console.error(error.message);
    }

    // async
  };

  toggleComplete = async (todoItem) => {
    try {
      const res = await fetch(`http://localhost:3004/todoList/${todoItem.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...todoItem, isDone: !todoItem.isDone }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      this.setState(({ todoList }) => {
        const index = todoList.findIndex((item) => item.id === todoItem.id);
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  deleteTodo = async (todoItem) => {
    try {
      await fetch(`http://localhost:3004/todoList/${todoItem.id}`, {
        method: "DELETE",
      });
      this.setState(({ todoList }) => {
        const index = todoList.findIndex((item) => item.id === todoItem.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  changeFilterType = (filterType) => {
    this.setState({ filterType });
  };

  render() {
    const { children } = this.props;
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this.addTodo,
          toggleComplete: this.toggleComplete,
          deleteTodo: this.deleteTodo,
          todoTextRef: this.todoTextRef,
          loadTodo: this.loadTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }
}
