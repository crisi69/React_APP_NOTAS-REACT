import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { EditNote } from "../components/EditNote";

export const EditNotePage = () => {
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;
  return (
    <section>
      <EditNote />
    </section>
  );
};
