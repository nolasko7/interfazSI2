import "./index.css"

export default function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form className="login-form">
        <input
          type="text"
          placeholder="Usuario"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />
        <button className="login-button">Entrar</button>
      </form>
    </div>
  )
}

