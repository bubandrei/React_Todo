import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');
    //current value
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };
    //
    const handlePress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={userInput}
                    type='text'
                    onChange={handleChange}
                    onKeyDown={handlePress}
                    placeholder='enter text'
                />
                <button>Save</button>
            </form>
        </>
    );
};
export default ToDoForm;