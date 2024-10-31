import {Link} from "react-router-dom"

function Login() {
    return (
        <>
            <div className="background">
                <form className="login-form">
                    <h1>Inicia Sesión</h1>
                    <input type="email" className="input-email-login" placeholder="Email"></input>
                    <input type="password" className="input-password-login" placeholder="Contraseña"></input>
                    <button className="btn-login" onClick={(e) => e.preventDefault()}>Inicia sesión</button>
                    <Link to="/contraseña">¿Olvidaste la contraseña?</Link>
                    <p>¿Todavia no te has registrado? <Link to="/registro">Registrate ahora</Link></p>
                </form>
            </div>
        </>
    )
}




export default Login