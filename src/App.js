import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";

function App() {
  return (
    <div className="App">
      <Header />
      {
        notes.map(note => <Note
          id={note.key} 
          title={note.title}
          content={note.content}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
