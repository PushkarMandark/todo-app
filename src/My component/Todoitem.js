import React from "react";

export const Todoitem = ({ todo, onDelete }) => {
  return (
    <div>
      <p>{todo.todo}</p>
      <p>{todo.discription}</p>
      <button
        className="btn btn-sm btn-danger"
        type="button"
        value={todo.id}
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};
