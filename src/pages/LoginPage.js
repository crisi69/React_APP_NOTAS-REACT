import { useState } from "react"

import { loginUserService } from "../services"

export const LoginPage = () => {

    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [error, setError] = useState ("")
    

    const handleForm = async (e) => {
        e.preventDefault()
        setError("")

        try {
            const data = await loginUserService({ email, password });

            console.log(data);
            
             } catch (error) {
                setError(error.message)          
             }
    }
        

    return (
        <section>
            <h1>LoginPage</h1>
            <form onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail (e.target.value)}></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="password">Pasword</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword (e.target.value)}></input>
                </fieldset>
                <button>Login</button>
                {error ? <p>{error}</p> : null}

            </form>
        </section>
    )
}