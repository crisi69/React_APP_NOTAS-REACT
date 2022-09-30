import { useEffect, useState, useContext } from "react";
import { getUserNotesService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoading(true);
        const data = await getUserNotesService(token);
        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (token) loadNotes();
  }, [token]);

  const removeNote = (id) => {
    setNotes(notes.filter((note) => notes.id !== id));
  };
  return { notes, loading, error, removeNote };
};
