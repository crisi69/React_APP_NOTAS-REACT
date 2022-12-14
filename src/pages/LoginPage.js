import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUserService } from "../services";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });

      login(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <h2>Login</h2>
        <fieldset>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>
        <p>Email</p>

        <fieldset>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </fieldset>
        <p>Password</p>
        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
