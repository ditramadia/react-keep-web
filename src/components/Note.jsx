function Note(props) {
    const {title, content} = props;
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;