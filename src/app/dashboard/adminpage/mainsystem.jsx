"use client";

import styles from "./mainsystem.module.css";
import Group from "../groups/group";
import Group_dos from "../groups/group_2";
import Group_tres from "../groups/group_3";
import CreateGroup from "../../../../components/create_group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFilter,
  faPlusSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MainSystem() {
  const [create, setCreate] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.groupForm}>
        <div
          className={`${styles.createGroup} ${create ? styles.showCreateGroup : ""}`}
        >
          <CreateGroup />
        </div>
      </div>

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

            <button
              className="btn btn-outline-warning"
              onClick={() => setCreate(!create)}
            >
              <FontAwesomeIcon
                icon={create ? faClose : faPlusSquare}
                className={styles.iconOptions}
              />
              <span>{ create ? "Cerrar" : "Crear grupo"}</span>
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
            <FontAwesomeIcon
              icon={faFileExport}
              className={styles.iconExport}
            />
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
          <Group_dos />
          <Group_tres />
        </div>
      </div>
    </div>
  );
}

export default MainSystem;
