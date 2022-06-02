import React from "react";

const ToDo = ({ todo, toggle, remove }) => {
    return (
        <div>
            <div onClick={() => toggle(todo.id)}>{todo.note}</div>
            <div onClick={()=> remove(todo.id)}>x</div>
        </div>
    )
}
export default ToDo