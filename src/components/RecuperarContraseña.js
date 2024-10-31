import {Link} from "react-router-dom"

function RecuperarContraseña() {
    return (
        <div className="background">
                <div className="login-form">
                    <h1>Recuperar contraseña</h1>
                    <input type="email" className="input-email-login" placeholder="Email"></input>
                    <button className="btn-login" onClick={(e) => e.preventDefault()}>Enviar email</button>
                </div>
            </div>
    )
}




export default RecuperarContraseña;