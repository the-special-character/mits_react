import React, { memo } from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todoList, filterType, toggleComplete, deleteTodo }) => {
  console.log("TodoList render");
  return (
    <div className="w-full flex-1">
      {todoList.map((todoItem) => {
        if (
          (filterType === "pending" && !todoItem.isDone) ||
          (filterType === "completed" && todoItem.isDone) ||
          filterType === "all"
        ) {
          return (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default memo(TodoList);
