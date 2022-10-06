import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NewNote } from "../components/NewNote";

export const NewNotePage = () => {
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;
  return (
    <section>
      <NewNote />
    </section>
  );
};
