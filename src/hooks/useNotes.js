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
  return { notes, loading, error };
};
