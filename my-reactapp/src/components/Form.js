import React from "react";


const Form = ({ inputText, setInputText, todos,  setTodos, setStatus }) => {
    //write a js code and function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault(); //this is to prevent page refreshing everytime button submit is click
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000} //id is to generate random identity to the todo's task
        ]);
        setInputText(""); //to reset the input after submit button pressed;
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitToDoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;