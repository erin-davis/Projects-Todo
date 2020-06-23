import React, {useState} from "react";

export default function TodoForm(props){

  const [note, setNote] = useState({
    title: "",
    noteBody: ""
  });

  const handleChanges = e =>{
    setNote({...note, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };

  const submitForm = e =>{
    e.preventDefault();
    props.addNewTodo(note);
    setNote({title: "", noteBody: ""});
  }

  //note: there should be a confirmation alert with the reset form since it'll reset the full form
  const resetForm = e =>{
    e.preventDefault()
  }

  return(
    <div className="todo-form">
      <form id="notes-form" className="notes-form" onSubmit={submitForm}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleChanges}
         />
        <label htmlFor="notes">Notes:</label>
        <textarea
          name="notes"
          id="notes"
          placeholder="Further details here..."
          onChange={handleChanges}
          value={note.noteBody}
          />
         <input
          type="checkbox"
          id="check-save"
          name="check-save"
          value="Save"
         />
         <label htmlFor="check-save">Save?</label>
         <button type="submit">Add Todo</button>
         <button type="reset">Reset Page</button>
      </form>
    </div>
  );
};
