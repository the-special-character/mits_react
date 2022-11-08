import React, { Component, createRef } from "react";
import TodoFilter from "./todoFilter";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-semibold my-8">Todo App</h1>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </div>
  );
};

export default App;
