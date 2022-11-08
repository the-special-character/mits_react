import React, { memo } from "react";
import { TodoContext } from "./context/todoContext";

const TodoFilter = () => {
  return (
    <TodoContext.Consumer>
      {({ loadTodo }) => (
        <div className="flex w-full">
          <button
            type="button"
            className="btn rounded-none flex-1"
            onClick={() => loadTodo("all")}
          >
            All
          </button>
          <button
            type="button"
            className="btn rounded-none flex-1"
            onClick={() => loadTodo("pending")}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn rounded-none flex-1"
            onClick={() => loadTodo("completed")}
          >
            Completed
          </button>
        </div>
      )}
    </TodoContext.Consumer>
  );
};

export default memo(TodoFilter);
