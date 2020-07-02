import React from "react";

const Todo = (props) =>{
  return (
    <div className="todo-item">
      {props.notes.map(note => (
        <div className="note" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.noteBody}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
