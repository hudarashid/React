import React, {useState, useEffect} from "react";
import './App.css';
//import component
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App () {
  //initial state of state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  

  //run ONCE when the app refreshing
  useEffect(() =>{
    getLocalTodos();
  }, []);
  //to make changes on the filterHandler function
  useEffect(() =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Function
  const filterHandler = () => {
    switch (status) {
      case 'completed': 
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

//safe to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //prevent data lost when refreshing
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));  
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
      <h1>Huda's ToDo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  )
}

export default App;