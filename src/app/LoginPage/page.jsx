import React from "react";

import "./login.css"

function Login() {
  return (
    <div>
      <h2 className="header">Iniciar sesión</h2>
      <form className="container">
        <label>Correo electrónico</label>
        <input
          type="email"
          required
          placeholder="Introduce tu correo electrónico"
        ></input>
        <label>Contraseña</label>
        <input type="password" required placeholder="Introduce tu contraseña"></input>
          <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Login;
