import { getAllNotesService } from "../services";
import { useEffect, useState } from "react";

export const useAllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAllNotes = async () => {
      try {
        setLoading(true);
        const data = await getAllNotesService();

        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadAllNotes();
  }, []);

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return { notes, loading, error, removeNote };
};
