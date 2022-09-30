export const Note = ({ note }) => {
  return (
    <article>
      <p>
        <strong>Site:</strong> {note.title}
      </p>
      <p>
        <strong>Category:</strong> {note.category}
      </p>
      <p>
        <strong>Description:</strong> {note.description}
      </p>
      <p>
        <strong>Photo:</strong> {note.photo}
      </p>
      <p>
        <strong>Day:</strong> {new Date(note.createdAt).toLocaleString()}
      </p>
    </article>
  );
};
