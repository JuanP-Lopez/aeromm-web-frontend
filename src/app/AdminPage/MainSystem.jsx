import "./mainsystem.css";

import Group from "./Groups/Group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFilter,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

function MainSystem() {
  return (
    <div className="container">
      <div className="main">
        <div className="main-header">
          <div className="main-titles">
            <h2>Administración</h2>
            <p>Gestiona todo desde aquí.</p>
          </div>
          <div className="main-options">
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faFilter} className="icon-options" />
              <span>Filtrar</span>
            </button>
            <button className="btn btn-outline-info">
              <FontAwesomeIcon icon={faPlusSquare} className="icon-options" />
              <span>Crear grupo</span>
            </button>
          </div>
        </div>
      </div>
      <div className="system-main">
        <ul className="main-bar">
          <li className="bar-options">Grupos</li>
          <li className="bar-options">Permisos</li>
          <li className="bar-options">Actividad reciente</li>
        </ul>

        <div className="search">
          <h5>Gestiona tus grupos aquí.</h5>
          <input
            type="search"
            name=""
            id=""
            className="searchbar"
            placeholder="Buscar"
          />
          <button className="export">
            <FontAwesomeIcon icon={faFileExport} className="icon-export" />
            Exportar
          </button>
        </div>

        <div>
          <ul className="group-info">
            <li className="group-data">Nombre del grupo</li>
            <li className="group-data">ID</li>
            <li className="group-data">Miembros</li>
            <li className="group-data">Estado</li>
          </ul>
          <Group />
          <Group />
          <Group />
        </div>
      </div>
    </div>  
  );
}

export default MainSystem;
