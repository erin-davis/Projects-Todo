import React from "react";

const Todo = (props) =>{
  //toggle the full note to dim it out
  const toggleNote = e =>{
    let ele = document.getElementsByClassName("note");
    for(let i =0; i < ele.length; i++){
      ele[i].classList.toggle('completed')
    }
  }
  const toggleButton = e =>{
    
  }
  //clicking active should only show active items
  //clicking complete will only show completed items
  //clicking all will show all items in order
  return (
    <div className="todo-item">
    <div className="list-controls">
      <h3>Active items: {props.notes.length}</h3>
      <button>All</button>
      <button>Active</button>
      <button>Complete</button>
    </div>
      {props.notes.map(note => (
        <div className="note" key={note.id} onClick={toggleNote}>
          <h2>{note.title}</h2>
          <p>{note.noteBody}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
