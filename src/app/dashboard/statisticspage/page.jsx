"use client";

import styles from "./statistics.module.css";
import CreateGroup from "../../../../components/create-group/create_group";
import { useSession } from "next-auth/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFilter,
  faPlusSquare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default  function Statistics() {
  const session = useSession();
  console.log(session);

  const [create, setCreate] = useState(false);

  return (
    <main className={styles.container}>
      <div className={styles.usersStatistics}>Usuarios que más correos enviaron</div>
      <div className={styles.groupStatistics}>Grupos con mayor numero de correos enviados</div>
      <div className={styles.sessionStatistics}>Estadisticas del usuario (grupos creados, correos enviados y plantillas usadas)</div>
      <div className={styles.templateStatistics}>Plantillas más usadas</div>

      <div className={styles.membersCount}>
        <span className={styles.countTitle}>Contador total de miembros<br />en la organización</span>
        <span className={styles.count}>43</span> 
      </div>
    </main>
  );
}