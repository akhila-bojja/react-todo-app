import React from "react";

function InputContainer({ inputValue, writeToDo, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a Task"
        value={inputValue}
        onChange={writeToDo}
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
}
export default InputContainer;
