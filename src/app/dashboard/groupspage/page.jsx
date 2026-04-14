import React from "react";
import styles from "./groups.module.css";
import GroupFull from "../groups/groupfull";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faPlusCircle, faSquareCheck, faUnlock, faCheck } from "@fortawesome/free-solid-svg-icons";

function GroupSystem() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Grupos</h2>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tr className={styles.tableHeader}>
            <td className={styles.data}><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>Grupos</td>
            <td className={styles.data}><FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon>Permisos</td> 
            <td className={styles.data}><FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>Crear grupo</td>
            <td className={styles.data}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Estado</td>
            <td className={styles.data}><FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>Acciones</td>
          </tr>
          <tr>
            <GroupFull />
          </tr>
        </table>
      </div>
    </div>
  );
}

export default GroupSystem;
