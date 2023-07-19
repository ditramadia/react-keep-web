import React from "react";

function Note(props) {
    const {title, content} = props;

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;