import React from "react";
import ToDo from "./ToDo.jsx";
function ToDoContainer({ todos ,delTodo}) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <ToDo key={index} todo={todo} index={index} delTodo={delTodo}/>
      ))}
    </div>
  );
}
export default ToDoContainer;
