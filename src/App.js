import React, {useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm.js";
import Todo from "./components/Todo.js"

function App() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "This is a tester note",
      noteBody:
        "And here is a larger portion of the note. I really only want to use this note to make sure that every portion of this will work well!!"
    }
  ]);

  const addNewTodo = note =>{
    const newTodo = {
      id: Date.now(),
      title: note.title,
      noteBody: note.body
    };
    setNotes([...notes, newTodo]);
    console.log("from in app.js addNewTodo", newTodo);
  }

  return (
    <div className="App">
      <h1>This is a Todo List!</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <Todo notes={notes}/>
    </div>
  );
}

export default App;
