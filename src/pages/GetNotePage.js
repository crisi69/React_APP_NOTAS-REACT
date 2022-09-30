import { useParams } from "react-router-dom";
import { useNote } from "../hooks/useNote";
import { Note } from "../components/Note";
import { ErrorMessage } from "../components/ErrorMessage";

export const GetNotePage = () => {
  const { id } = useParams();
  console.log(id);
  const { note, loading, error } = useNote(id);
  if (loading) return <p>Loading Notes..</p>;
  if (error) return <ErrorMessage message={error} />;
  return (
    <section>
      <h1>Note</h1>
      <Note note={note} />
    </section>
  );
};
