import "./globals.css";
import "./main.css";
import { faFilter, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

//Componentes
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Incluir filtrado de elementos, ver si cambiando de componente los botones se arregla movimiento

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <div className="main-header">
          <div className="main-titles">
            <h2>Administración</h2>
            <p>Gestiona todo desde aquí.</p>
          </div>
          <div className="main-options">
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faFilter} className="icon-options" />
              <p>Filtrar</p>
            </button>
            <button className="btn btn-outline-info">
              <FontAwesomeIcon icon={faPlusSquare} className="icon-options" />
              <p>Crear grupo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
