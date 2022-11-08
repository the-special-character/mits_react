import React, { memo } from "react";
import { TodoContext } from "./context/todoContext";
import TodoItem from "./todoItem";

const TodoList = () => {
  console.log("TodoList render");
  return (
    <div className="w-full flex-1">
      <TodoContext.Consumer>
        {({ todoList }) =>
          todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))
        }
      </TodoContext.Consumer>
    </div>
  );
};

export default memo(TodoList);
