import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function writeToDo(e) {
    setInputValue(e.target.value);
  }
  function addTodo() {
    if (inputValue != "") {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue("");
    }
  }
  function delTodo(todoindex) {
    setTodos((prevtodos) =>
      prevtodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoindex;
      })
    );
  }
  console.log(todos);
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputValue={inputValue}
        writeToDo={writeToDo}
        addTodo={addTodo}
      />
      <ToDoContainer todos={todos}  delTodo={delTodo}/>
    </main>
  );
}
export default App;
