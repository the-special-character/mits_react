import React, { memo, forwardRef } from "react";

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log("TodoForm render");
  return (
    <form onSubmit={addTodo}>
      <input type="text" ref={ref} />
      <button type="submit" className="btn rounded-l-none">
        Add Todo
      </button>
    </form>
  );
});

export default memo(TodoForm);
