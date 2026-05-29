import React from "react";
import styles from "./group-card.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function GroupCard({groupName, membersCount, status, description}) {
    return (
        <div className={styles.margin}>
            <div className={styles.groupCard}>
                <img src="/fondo.jpg" alt="" className={styles.background}/>
                <div className={styles.groupInfo}>
                    <span className={styles.groupName}>{groupName}</span>
                    <div className={styles.groupData}>
                        <FontAwesomeIcon icon={faUserGroup} className={styles.icon}/><span>Miembros: {membersCount}</span>
                        <span className={`${styles.dataInfo} ${styles.status}`}>{status}</span>
                    </div>
                    <span className={styles.description}>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default GroupCard;