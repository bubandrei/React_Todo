import React from "react";
import style from './Todo.module.css'

const ToDo = ({ todo, toggle, remove }) => {
    return (
        <div className={style.itemTodo}>
            <div className={todo.crossOut ? style.itemCrossOut: style.itemSimple } onClick={() => toggle(todo.id)}>{todo.note}</div>
            <div className={style.itemRemove} onClick={() => remove(todo.id)}>x</div>
        </div>
    )
}
export default ToDo