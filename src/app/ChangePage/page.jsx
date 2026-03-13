import React from "react";

import "./change.css"

function ChangeUser() {
  return (
    <div>
      <h2 class="header">Cambiar datos de usuario</h2>
      <form class="container">
        <label>Nombre de usuario</label>
        <input
          type="text"
          required
          placeholder="Introduce un nuevo nombre de usuario"
        ></input>
        <label>Nueva contraseña</label>
        <input
          type="password"
          required
          placeholder="Introduce una nueva contraseña"
        ></input>
        <label>Confirmar contraseña</label>
        <input
          type="password"
          required
          placeholder="Confirma tu nueva contraseña"
        ></input>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default ChangeUser;
