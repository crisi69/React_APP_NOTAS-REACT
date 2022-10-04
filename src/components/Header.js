import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <header>
      <section className="header">
        <nav></nav>
        <div className="RotulHeader">
          <h1 className="headerh1">Travel Itinerary</h1>
          <h2 className="headerh2">create notes of destiny</h2>
        </div>
        <button className="getstarted" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="getstarted" onClick={() => navigate("/notes")}>
          List Notes
        </button>
        <button className="getstarted" onClick={() => navigate("/note")}>
          Create Note
        </button>
        <button className="getstarted" onClick={() => logout()}>
          Logout
        </button>
      </section>

      <hr></hr>
    </header>
  ) : (
    <header>
      <section className="header">
        <nav></nav>
        <div className="RotulHeader">
          <h1 className="headerh1">Travel Itinerary</h1>
          <h2 className="headerh2">create notes of destiny</h2>
        </div>
        <button className="getstarted" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="getstarted" onClick={() => navigate("/register")}>
          Register
        </button>
        <button className="getstarted" onClick={() => navigate("/login")}>
          Login
        </button>
      </section>

      <hr></hr>
    </header>
  );
};
