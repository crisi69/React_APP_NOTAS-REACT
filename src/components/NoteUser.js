export const NoteUser = ({ note }) => {
  return (
    <article className="articleNoteUSer">
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
      <p>
        <strong>Day:</strong> {new Date(note.createdAt).toLocaleString()}
      </p>
    </article>
  );
};
