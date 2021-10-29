import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    //Event
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id)); //each todo item has unique id, if not equal then filter out
    };
    const completeHandler = () => {
        setTodos(todos.map((item) =>{
            if(item.id === todo.id) { //if each todo.id is equal to each todo item iterated, then change the 'completed:false' = 'completed:true' 
                return {...item, completed: !item.completed}
            } return item
        }))
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li> {/*HTML +JS code in the backtick & App.css line 94- to crossed the completed item*/}
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
        </div>
  );  
};

export default Todo;

