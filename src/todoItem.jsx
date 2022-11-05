import React, { memo } from "react";

const TodoItem = ({ todoItem, toggleComplete, deleteTodo }) => {
  console.log("todo item render");
  return (
    <div className="flex m-4 items-center">
      <input
        type="checkbox"
        checked={todoItem.isDone}
        onChange={() => toggleComplete(todoItem)}
      />
      <p
        className="flex-1 px-4"
        style={{
          textDecoration: todoItem.isDone ? "line-through" : "none",
        }}
      >
        {todoItem.text}
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => deleteTodo(todoItem)}
      >
        Delete
      </button>
    </div>
  );
};

export default memo(TodoItem);
