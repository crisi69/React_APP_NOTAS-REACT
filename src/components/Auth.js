import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import loginPng from '../assets/login.png'
import registerPng from '../assets/register.png'
import homePng from '../assets/home.png'
import createNote from '../assets/createNote.png'
import listNotes from '../assets/listNotes.png'


/* <li>Login as {user.username} <button onClick={() => logout()} >Logout</button></li> */
export const Auth = () => {
    const { user, logout} = useContext(AuthContext)


    return user ? (
        <ul className="ulhomeListCreate">
            <li className="liconlogin">
                <Link to="/"><img src={homePng} alt='homePng' className="icoHome"></img></Link>
                <Link to="/Notes"><img src={listNotes} alt='listNotesPng' className="icoNotes"></img></Link>
                <Link to="/createNote"><img src={createNote} alt='createtNotePng' className="icoCreateNote"></img></Link>
                <button onClick={() => logout()} className='buttonlogout'>Logout</button>
                
            </li>
            

               
           
           
        </ul>
       
        ) : (
        <ul className="ulLoginRegisterHome">
            <li className="lisinlogin">
            <Link to="/"><img src={homePng} alt='homePng' className="icoHome"></img></Link>
            <Link to="/login"><img src={loginPng} alt='loginPng' className="icoLogin"></img></Link>
            <Link to="/register"><img src={registerPng} alt='registerPng' className="icoRegister"></img></Link>
            </li>
        
        </ul>
            
        
    );
};