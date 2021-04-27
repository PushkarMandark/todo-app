import "./App.css";
// if we are exporting with export default Name we dont need {} for import we call it directly.
import { Navigation } from "./My component/Navigation";
import { Todos } from "./My component/Todos";
import { Footer } from "./My component/Footer";
import TodosAdd from "./My component/TodosAdd";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, discription: "this is todo discription", todo: "Home work" },
  ]);

  let sumbitTodo = function (title, desc) {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].id + 1;
    }
    const myTodo = {
      id: sno,
      discription: desc,
      todo: title,
    };
    setTodos([...todos, myTodo]);
  };

  let onDelete = (todo) => {
    // Deleting this way in react doesnot work as it will delete tha element in array but it will not update the dom to do this we need to use react useState
    // let index = data.indexOf(key);
    // data.splice(index, 1);
    // return todos;
    /* old method 
        let newTodo = [...todos];
    let index = newTodo.indexOf(todo);
    newTodo.splice(index, 1);
    console.log(newTodo);
    setTodos(newTodo);
    */
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  return (
    <div className="container">
      <Navigation title="Home" displaySearch={false} />
      <TodosAdd sumbitTodo={sumbitTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
