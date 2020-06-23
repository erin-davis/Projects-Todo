import React from "react";

const Todo = (props) =>{
  return (
    <div className="todo-item">
      {props.notes.map(todo =>(
        <div className="todo" key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.noteBody}</p>
        </div>
      ))}
    </div>
  );
}

export default Todo;
