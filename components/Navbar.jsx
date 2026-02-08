import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faUsers, faUser, faListAlt, faLock, faDownload, faCogs } from "@fortawesome/free-solid-svg-icons";

// Configurar useState() en botones para permanencia de color :focus

function Navbar() {
  return (
    <nav>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <div id="admin-section" className="section">

        <div className="header">
          <img src="" alt="" />
          <h1>Logo</h1>
        </div>

        <h3>Administración</h3>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faUserMd} className="icon"/> <p>Sistema</p>
        </button>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faUsers} className="icon"/> <p>Grupos</p>
        </button>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faUser} className="icon"/> <p>Usuarios</p>
        </button>
      </div>

      <div id="register-section" className="section">
        <h3>Registro</h3>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faListAlt} className="icon"/> <p>Historial</p>
        </button>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faLock} className="icon"/> <p>Seguridad</p>
        </button>
      </div>

      <div id="quickactions-section" className="section">
        <h3>Acciones rápidas</h3>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faDownload} className="icon"/> <p>Exportar datos</p>
        </button>
        <button className="button-navbar">
          <FontAwesomeIcon icon={faCogs} className="icon"/> <p>Opciones</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
