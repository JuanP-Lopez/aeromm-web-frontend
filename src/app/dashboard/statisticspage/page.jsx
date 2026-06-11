"use client";

import styles from "./statistics.module.css";
import CreateGroup from "../../../../components/create-group/create_group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFilter,
  faPlusSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default  function Statistics() {

  const [create, setCreate] = useState(false);

  return (
    <main className={styles.container}>

      <div className={styles.usersStatistics}>Usuarios que más correos enviaron
        <img src="/graficas/usersStatistics.png" alt="" className={styles.img}/>
      </div>

      <div className={styles.groupStatistics}>Grupos con mayor numero de correos enviados
        <img src="/graficas/groupsStatistics.png" alt="" className={styles.img}/>
      </div>

      <div className={styles.sessionStatistics}>Estadisticas del usuario (grupos creados, correos enviados y plantillas usadas)
        <img src="/graficas/sessionStatistics.png" alt="" className={styles.img}/>
      </div>

      <div className={styles.templateStatistics}>Plantillas más usadas
        <img src="/graficas/templateStatistics.png" alt="" className={styles.img}/>
      </div>

      <div className={styles.membersCount}>
        <span className={styles.countTitle}>Contador total de miembros<br />en la organización</span>
        <span className={styles.count}>43</span> 
      </div>
    </main>
  );
}