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
        <label htmlFor="place"> </label>
        <select type="text" id="place" name="place">
          <option value=""></option>
          <option value="Álava">Álava</option>
          <option value="Albacete">Albacete</option>
          <option value="Alicante">Alicante</option>
          <option value="Almería">Almería</option>
          <option value="Asturias">Asturias</option>
          <option value="Ávila">Ávila</option>
          <option value="Badajoz">Badajoz</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Burgos">Burgos</option>
          <option value="Cáceres">Cáceres</option>
          <option value="Cádiz">Cádiz</option>
          <option value="Cantabria">Cantabria</option>
          <option value="Castellón">Castellón</option>
          <option value="Ciudad Real">Ciudad</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Cuenca">Cuenca</option>
          <option value="Gerona">Gerona</option>
          <option value="Granada">Granada</option>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Guipúzcoa">Guipúzcoa</option>
          <option value="Huelva">Huelva</option>
          <option value="Huesca">Huesca</option>
          <option value="Islas Baleares">Islas Baleares</option>
          <option value="Jaén">Jaén</option>
          <option value="La Coruña">La Coruña</option>
          <option value="La Rioja">La Rioja</option>
          <option value="Las Palmas">Las Palmas</option>
          <option value="León">León</option>
          <option value="Lérida">Lérida</option>
          <option value="Lugo">Lugo</option>
          <option value="Madrid">Madrid</option>
          <option value="Málaga">Málaga</option>
          <option value="Murcia">Murcia</option>
          <option value="Navarra">Navarra</option>
          <option value="Orense">Orense</option>
          <option value="Palencia">Palencia</option>
          <option value="Pontevedra">Pontevedra</option>
          <option value="Salamanca">Salamanca</option>
          <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
          <option value="Segovia">Segovia</option>
          <option value="La Rioja">La Rioja</option>
          <option value="Sevilla">Sevilla</option>
          <option value="Soria">Soria</option>
          <option value="Tarragona">Tarragona</option>
          <option value="Teruel">Teruel</option>
          <option value="Toledo">Toledo</option>
          <option value="Valencia">Valencia</option>
          <option value="Valladolid">Valladolid</option>
          <option value="Vizcaya">Vizcaya</option>
          <option value="Zamora">Zamora</option>
          <option value="Zaragoza">Zaragoza</option>
        </select>
        <p>Place</p>
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
