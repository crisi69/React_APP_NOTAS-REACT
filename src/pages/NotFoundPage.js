import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <section>
            <h1>Eror 404</h1>
            <p><Link to="/">Go to Home</Link></p> 
        </section>
    )
}