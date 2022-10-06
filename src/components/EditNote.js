import { useState, useContext } from "react";
import { editNoteService } from "../services";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const EditNote = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [image, setImage] = useState();
  const { token } = useContext(AuthContext);
  const { id } = useParams();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      const note = editNoteService({ data, token, id });
      console.log(note);
      setSending(true);
      e.target.reset();
      setImage(null);
      navigate("/");
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
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{ width: "100px" }}
            ></img>
          </figure>
        ) : null}
      </fieldset>

      <button>Send Note</button>
      {sending ? <p>Sending Note</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
