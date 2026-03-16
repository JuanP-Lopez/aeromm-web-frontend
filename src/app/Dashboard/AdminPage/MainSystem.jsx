import styles from "./Mainsystem.module.css";
import Group from "../Groups/Group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFilter,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

function MainSystem() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div className={styles.mainTitles}>
            <h2>Administración</h2>
            <p>Gestiona todo desde aquí.</p>
          </div>

          <div className={styles.mainOptions}>
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faFilter} className={styles.iconOptions} />
              <span>Filtrar</span>
            </button>

            <button className="btn btn-outline-warning">
              <FontAwesomeIcon icon={faPlusSquare} className={styles.iconOptions} />
              <span>Crear grupo</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.systemMain}>
        <ul className={styles.mainBar}>
          <li className={styles.barOptions}>Grupos</li>
          <li className={styles.barOptions}>Permisos</li>
          <li className={styles.barOptions}>Actividad reciente</li>
        </ul>

        <div className={styles.search}>
          <h5>Gestiona tus grupos aquí.</h5>

          <input
            type="search"
            className={styles.searchbar}
            placeholder="Buscar un grupo"
          />

          <button className={"btn btn-outline-info"}>
            <FontAwesomeIcon icon={faFileExport} className={styles.iconExport} />
            Exportar
          </button>
        </div>

        <div>
          <ul className={styles.groupInfo}>
            <li className={styles.groupData}>Nombre del grupo</li>
            <li className={styles.groupData}>ID</li>
            <li className={styles.groupData}>Miembros</li>
            <li className={styles.groupData}>Estado</li>
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