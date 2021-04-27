import React, { useState } from "react";

function TodosAdd(props) {
  const [title, setTitle] = useState("");
  const [todoDec, setTodoDec] = useState("");

  let submit = function (e) {
    e.preventDefault();
    if (!title || !todoDec) {
      alert("please insert both title and description");
    } else {
      props.sumbitTodo(title, todoDec);
    }
  };

  return (
    <div className="container p-5">
      <form className="container p-5" onSubmit={submit}>
        <div className="form-group">
          <label>Todo</label>
          <input
            type="text"
            className="form-control"
            id="todo"
            aria-describedby="emailHelp"
            placeholder="Enter todo"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="description"
            value={todoDec}
            onChange={(e) => {
              setTodoDec(e.target.value);
            }}
          />
        </div>

        <button
          style={{ marginTop: "10px" }}
          type="submit"
          className="btn btn-success btn-sm"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodosAdd;
