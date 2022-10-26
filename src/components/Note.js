export const Note = ({ note }) => {
  return (
    <section className="articleNoteSearch">
      <hr></hr>
      <p>
        <strong>Site:</strong> {note.title}
      </p>
      <p>
        <strong>Category:</strong> {note.category}
      </p>
      <p>
        <strong>Place:</strong> {note.place}
      </p>
      <p>
        <strong>Description:</strong> {note.description}
      </p>

      {note.image ? (
        <img
          className="imageArticle"
          src={`${process.env.REACT_APP_BACKEND}/${note.image}`}
          alt={note.text}
        ></img>
      ) : null}
      <p>
        <strong>Day:</strong> {new Date(note.createdAt).toLocaleString()}
      </p>
      <hr></hr>
    </section>
  );
};
