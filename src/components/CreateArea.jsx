import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onSubmit(note);
    setIsOpen(false);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        
        {
            isOpen ? 
                <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"/> 
                : null
        }
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isOpen ? 3 : 1}
          onFocus={() => setIsOpen(true)}
        />
        <Zoom in={isOpen}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
