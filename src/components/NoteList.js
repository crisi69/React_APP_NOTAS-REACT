import { NoteUser } from "./NoteUser";
import { Link, useNavigate } from "react-router-dom";
import seeNote from "../assets/seeNote.png";
import editNote from "../assets/editNote.png";
import deleteNoteImg from "../assets/deleteNote.png";
import { deleteNoteService } from "../services/index";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NoteList = ({ notes, removeNote }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });
      removeNote(id);
      navigate("/");
    } catch (error) {}
  };

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

          <img
            src={deleteNoteImg}
            onClick={() => {
              if (window.confirm("Are you sure?")) deleteNote(note.id);
            }}
            alt="logOutPng"
            className="icoDeleteNote"
          ></img>

          <NoteUser note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Not notes</p>
  );
};
