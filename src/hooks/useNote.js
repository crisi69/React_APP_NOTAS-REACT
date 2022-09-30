import { useEffect, useState } from "react";
import { getUserNoteService } from "../services";

export const useNote = (id) => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoading(true);
        const data = await getUserNoteService(id);
        setNote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNote();
  }, [id]);

  return { note, loading, error };
};
