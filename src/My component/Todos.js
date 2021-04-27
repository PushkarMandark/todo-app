import React from "react";
import { Todoitem } from "./Todoitem";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h1 className="text-center my-3">Todos Content</h1>
      {todos.length === 0
        ? "not todos to display"
        : todos.map((el) => {
            return <Todoitem todo={el} key={el.id} onDelete={onDelete} />;
          })}
    </div>
  );
};
