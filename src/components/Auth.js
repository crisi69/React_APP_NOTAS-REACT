import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import loginPng from "../assets/login.png";
import registerPng from "../assets/register.png";
import homePng from "../assets/home.png";
import createNote from "../assets/createNote.png";
import listNotes from "../assets/listNotes.png";
import logOut from "../assets/logOut.png";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <ul className="ulhomeListCreate">
      <li className="liconlogin">
        <Link to="/">
          <img
            src={homePng}
            alt="homePng"
            className="icoHome"
            placeholder="Home"
          ></img>
        </Link>
        <Link to="/notes">
          <img
            src={listNotes}
            alt="listNotesPng"
            className="icoNotes"
            placeholder="List Notes"
          ></img>
        </Link>
        <Link to="/note">
          <img
            src={createNote}
            alt="createtNotePng"
            className="icoCreateNote"
            placeholder="Create Note"
          ></img>
        </Link>
        <img
          src={logOut}
          onClick={() => logout()}
          alt="logOutPng"
          className="icoLogOut"
        ></img>
      </li>
    </ul>
  ) : (
    <ul className="ulLoginRegisterHome">
      <li className="lisinlogin">
        <Link to="/">
          <img
            src={homePng}
            alt="homePng"
            className="icoHome"
            placeholder="Home"
          ></img>
        </Link>
        <Link to="/login">
          <img
            src={loginPng}
            alt="loginPng"
            className="icoLogin"
            placeholder="Login"
          ></img>
        </Link>
        <Link to="/register">
          <img
            src={registerPng}
            alt="registerPng"
            className="icoRegister"
            placeholder="Register"
          ></img>
        </Link>
      </li>
    </ul>
  );
};
