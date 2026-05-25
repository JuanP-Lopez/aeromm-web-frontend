import React from "react";
import styles from "./user-card.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function UserCard() {
    return (
        <div className={styles.margin}>
            <div className={styles.userCard}>
                <img src="/Profile.jpg" alt="" className={styles.background}/>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Nombre Usuario</span>
                    <div className={styles.userData}>
                        <FontAwesomeIcon icon={faUserGroup} className={styles.icon}/><span>Grupos: </span>
                        {/*<span className={`${styles.dataInfo} ${styles.status}`}>Activo</span>*/}
                    </div>
                    <span className={styles.description}>Correo: </span>
                </div>
            </div>
        </div>
    )
}

export default UserCard;