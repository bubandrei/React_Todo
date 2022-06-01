import React from "react";
import { useState } from "react";

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
          <Todo />
        )
      })}
    </div>
  )
}
export default App;
