import { useState, useContext } from "react";
import { editNoteService } from "../services";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const EditNote = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { token } = useContext(AuthContext);
  const { id } = useParams();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await editNoteService({ token, title, description, category, id });
      setSending(true);
      navigate("/notes");
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h2>Edit Note</h2>
      <fieldset>
        <label htmlFor="category"> </label>
        <select
          type="text"
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="Hoteles">Hoteles</option>
          <option value="Restaurantes">Restaurantes</option>
          <option value="Rutas">Rutas</option>
          <option value="Campings">Campings</option>
        </select>
        <p>Category</p>
      </fieldset>
      <fieldset>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="description"></label>
        <textarea
          className="description"
          type="text"
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Description"
        ></textarea>
      </fieldset>

      <button>Send Note</button>
      {sending ? <p>Sending Note</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
