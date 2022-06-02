import React from "react";
import { useState } from "react";
import ToDo from "./components/Todo";
import ToDoForm from "./components/TodoForm";
import { nanoid } from "nanoid";
import style from './components/Todo.module.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newNote = {
        id: nanoid(),
        note: userInput,
        crossOut: false
      };
      setTodos([...todos, newNote]);
    }

  };
  const remove = (id) => {
    setTodos([...todos.filter(el => el.id !== id)])
  };
  const toggle = (id) => {
    setTodos([...todos.map((el) =>
      el.id === id ? { ...el, crossOut: !el.crossOut } : { ...el }
    )])

  };
  return (
    <div className={style.wrap}>
      <div>
        <h2>Task list: {todos.length}</h2>
      </div>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo}
            todo={todo}
            toggle={toggle}
            remove={remove}
          />
        )
      })}
    </div>
  )
}
export default App;
