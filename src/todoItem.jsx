import React, { memo } from "react";
import { TodoContext } from "./context/todoContext";

const TodoItem = ({ todoItem }) => {
  console.log("todo item render");
  return (
    <div className="flex m-4 items-center">
      <TodoContext.Consumer>
        {({ toggleComplete }) => (
          <input
            type="checkbox"
            checked={todoItem.isDone}
            onChange={() => toggleComplete(todoItem)}
          />
        )}
      </TodoContext.Consumer>
      <p
        className="flex-1 px-4"
        style={{
          textDecoration: todoItem.isDone ? "line-through" : "none",
        }}
      >
        {todoItem.text}
      </p>
      <TodoContext.Consumer>
        {({ deleteTodo }) => (
          <button
            type="button"
            className="btn"
            onClick={() => deleteTodo(todoItem)}
          >
            Delete
          </button>
        )}
      </TodoContext.Consumer>
    </div>
  );
};

export default memo(TodoItem);
