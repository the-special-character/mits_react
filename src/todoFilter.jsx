import React, { memo } from "react";

const TodoFilter = ({ changeFilterType }) => {
  console.log("TodoFilter render");
  return (
    <div className="flex w-full">
      <button
        type="button"
        className="btn rounded-none flex-1"
        onClick={() => changeFilterType("all")}
      >
        All
      </button>
      <button
        type="button"
        className="btn rounded-none flex-1"
        onClick={() => changeFilterType("pending")}
      >
        Pending
      </button>
      <button
        type="button"
        className="btn rounded-none flex-1"
        onClick={() => changeFilterType("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default memo(TodoFilter);
