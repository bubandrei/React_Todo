import React from "react";
import { useState } from "react";
import ToDo from "./components/Todo";
import ToDoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTask = (id) => {

  };
  const removeTask = (id) => {

  };
  const toggle = (id) => {

  };
  return (
    <div>
      <div>
        <h2>Task list: {todos.length}</h2>
      </div>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            toggle={toggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  )
}
export default App;
