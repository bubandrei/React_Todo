import React, { useState } from "react";

const ToDoForm = (props) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
    };

    const handlePress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <>
            <div>Hello ToDoForms</div>
            <form onSubmit={handleSubmit}>
                <input
                    value={userInput}
                    type='text'
                    onChange={handleChange}
                    onKeyDown={handlePress}
                ></input>
                <button>Save</button>
            </form>
        </>
    );
};
export default ToDoForm;