import React, {useState} from "react";

const  TodoForm = (props) =>{

  const [note, setNote] = useState({
    title: "",
    noteBody: ""
  });

  const handleChanges = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTodo(note);
    setNote({ title: "", body: "" });
  };

  //note: there should be a confirmation alert with the reset form since it'll reset the full form
  const resetForm = e =>{
    e.preventDefault();
    setNote({title: "", body: ""})
  }

  return(
    <div className="todo-form">
      <form onSubmit={submitForm}>
        <label htmlFor="title">Title</label>
        <input
         id="title"
         type="text"
         placeholder="Title"
         onChange={handleChanges}
         name="title"
         value={note.title}
       />
       <label htmlFor="body">Body</label>
       <textarea
         id="body"
         name="body"
         onChange={handleChanges}
         value={note.body}
         placeholder="Further details here..."
       />
        {/*  <label htmlFor="check-save">Save?</label>
         <input
          type="checkbox"
          id="check-save"
          name="check-save"
          value="Save"
         />*/}
         <button type="submit">Add Todo</button>
         <button type="reset" onClick={resetForm}>Reset Page</button>
      </form>
    </div>
  );
};

export default TodoForm;
