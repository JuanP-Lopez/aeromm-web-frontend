import styles from "./email-badge.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function EmailBagde({ sender, addressee, date }) {
    return (
        <div className={styles.badgeContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
            <span className={styles.sender}>{sender}</span>
            <span> ha enviado un correo a </span>
            <span className={styles.addressee}>{addressee}</span>
            <span className={styles.date}>{date}</span>
        </div>
    );
}