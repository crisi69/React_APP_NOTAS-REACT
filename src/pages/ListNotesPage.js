import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNotes } from "../hooks/useNotes";
import { NoteList } from "../components/NoteList";

export const ListNotesPage = () => {
  const { notes, loading, error } = useNotes();
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;

  if (loading) return <p>Loading Notes</p>;
  if (error) return <p>{error}</p>;

  console.log(notes);
  return (
    <section>
      <h1>Latest Notes</h1>
      <NoteList notes={notes} />
    </section>
  );
};
