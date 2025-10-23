export default function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Entrar</button>
      </form>
    </div>
  )
}
