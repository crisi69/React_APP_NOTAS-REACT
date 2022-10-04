import { useState, useContext } from "react";
import { sendNoteService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NewNote = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      const note = sendNoteService({ data, token });
      console.log(note);
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
      <h2>New Note</h2>
      <fieldset>
        <label htmlFor="category"> </label>
        <select type="text" id="category" name="category" required>
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
          required
          placeholder="Description"
        ></textarea>
      </fieldset>
      <fieldset>
        <label htmlFor="image"></label>
        <input
          type="file"
          id="image"
          name="image"
          required
          placeholder="Image"
          accept="Image/*"
        ></input>
      </fieldset>

      <button>Send Note</button>
      {sending ? <p>Sending Note</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
