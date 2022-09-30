import { useState, useContext } from "react"
import { sendNoteService } from "../services"
import { useNavigate} from "react-router-dom"
import { AuthContext} from "../context/AuthContext"

export const NewNote = () => {
    const navigate = useNavigate()
    const [error, setError] = useState ("")
    const [sending, setSending] = useState (false)
    const [title, setTitle] = useState ("")
    const [description, setDescription] = useState ("")
    const [category, setCategory] = useState ("")
    const { token } = useContext(AuthContext)
    
    const handleForm = async (e) => {
        e.preventDefault();
        try {
            await sendNoteService ({ token, title, description, category})
            setSending(true);
            navigate('/notes')
            
        } catch (error) {
            setError(error.message);
        } finally {
            setSending(false)
        }
    }; 
    return (
        
    <form onSubmit={handleForm}>

        <fieldset>
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            id="title" 
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required></input>   
        </fieldset>
        <fieldset>
            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            id="description" 
            name="description"
            onChange={(e) => setDescription(e.target.value)} 
            required></input>   
        </fieldset>
        <fieldset>
            <label htmlFor="category">Category</label>
            <input 
            type="text" 
            id="category" 
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            required></input>   
        </fieldset>
            
        <button>Send Note</button>
        {sending ? <p>Sending Note</p> : null}
        {error ? <p>{error}</p> : null}
    </form>
    )
    

    
        
            
    
    
}