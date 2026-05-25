import React from "react";
import styles from "./group-card.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function GroupCard() {
    return (
        <div className={styles.margin}>
            <div className={styles.groupCard}>
                <img src="/fondo.jpg" alt="" className={styles.background}/>
                <div className={styles.groupInfo}>
                    <span className={styles.groupName}>Nombre Grupo</span>
                    <div className={styles.groupData}>
                        <FontAwesomeIcon icon={faUserGroup} className={styles.icon}/><span>Miembros: </span>
                        <span className={`${styles.dataInfo} ${styles.status}`}>Activo</span>
                    </div>
                    <span className={styles.description}>Descripcion. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id quisquam aliquam placeat veritatis similique.</span>
                </div>
            </div>
        </div>
    )
}

export default GroupCard;