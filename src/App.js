import React, { useState } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import notesData from "./components/notes";

function App() {
  const [notes, setNotes] = useState(notesData);

  function addNote(newNote) {
    setNotes((prev) => {
      newNote.key = prev.length + 1;
      return [...prev, newNote];
    })
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((note) => note.key !== id);
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onSubmit={addNote}/>
      {
        notes.map(note => <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
