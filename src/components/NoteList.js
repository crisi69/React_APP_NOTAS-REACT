import { NoteUser } from "./NoteUser";
import { Link } from "react-router-dom";
import seeNote from "../assets/seeNote.png";
import editNote from "../assets/editNote.png";
import deleteNote from "../assets/deleteNote.png";

export const NoteList = ({ notes }) => {
  return notes.length ? (
    <ul className="ulActions">
      {notes.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <img src={seeNote} alt="seeNotePng" className="icoSeeNote"></img>
          </Link>
          <Link to={`/edit/${note.id}`}>
            <img src={editNote} alt="editNotePng" className="icoEditNote"></img>
          </Link>
          <Link to={`/erase/${note.id}`}>
            <img
              src={deleteNote}
              alt="deleteNotePng"
              className="icoDeleteNote"
            ></img>
          </Link>

          <NoteUser note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Not notes</p>
  );
};
