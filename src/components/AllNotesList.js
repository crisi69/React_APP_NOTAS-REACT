import { Note } from "../components/Note";

export const AllNotesList = ({ notes }) => {
  return notes.length ? (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Note note={note}></Note>
        </li>
      ))}
    </ul>
  ) : (
    <p>Not notes</p>
  );
};
