import React from "react";

import "./register.css"

function Register() {
  return (
<div>
    <h2 class="header">Registro</h2>
    <form class="container">
        <label>Nombre de usuario</label>
        <input type="text" required placeholder="Introduce un nombre de usuario"></input>
        
        <label>Correo electrónico</label>
        <input type="email" required placeholder="Introduce tu correo electrónico"></input>
        <label>Contraseña</label>
        <input type="password" required placeholder="Introduce una contraseña"></input>
        <label>Confirmar contraseña</label>
        <input type="password" required placeholder="Confirma tu contraseña"></input>
        <div class="file-container">
            <label for="file" class="input-image">Subir foto de perfil</label>
            <input type="file" accept="image/*" name="file" id="file" onchange="previewImage(event)"></input>
        </div>
        <div class="preview-container">
            <img id="preview"></img>
        </div>
        <button type="submit">Registrar</button>
    </form>
</div>
  );
}

export default Register;