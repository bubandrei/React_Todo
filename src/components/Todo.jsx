import React from "react";

const ToDo = ({ todo, toggle, remove }) => {

    return (
        <div>
            <div onClick={() => toggle(todo.id)}>{todo.task}</div>
            <div onClick={()=> remove(todo.id)}>x</div>
        </div>
    )
}
export default ToDo