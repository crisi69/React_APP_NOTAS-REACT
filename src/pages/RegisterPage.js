import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== pass2) {
      setError("password do not match");
      return;
    }
    try {
      await registerUserService({ username, email, password });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <h2>Register</h2>
        <fieldset>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </fieldset>
        <p>User</p>

        <fieldset>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            required
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
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </fieldset>
        <p>Password</p>

        <fieldset>
          <label htmlFor="pass2"></label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            required
            onChange={(e) => setPass2(e.target.value)}
          ></input>
        </fieldset>
        <p> Repeat Password</p>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
