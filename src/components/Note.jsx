import React from "react";

import DeleteIcon from "@mui/icons-material/Delete"; 

function Note(props) {
    const {title, content} = props;
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;