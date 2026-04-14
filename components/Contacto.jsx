import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.mainContactContainer}>
      <div className={styles.contactContainer}>
        <h4 className={styles.header}>Contactos teléfonicos</h4>
        <ul className={styles.contactPhones}>
          <span>Contactos directos</span>
          <li className={styles.phone}>+52 81 3271 2714</li>
          <li className={styles.phone}>+52 81 2337 6977</li>
          <li className={styles.phone}>+52 81 2597 4976</li>
          <li className={styles.phone}>+52 667 860 1556</li>
        </ul>
        <ul className={styles.contactEmails}>
          <span>Contactos por correo</span>
          <li className={styles.email}>302520102@ute.edu.mx</li>
          <li className={styles.email}>302520115@ute.edu.mx</li>
          <li className={styles.email}>302410777@ute.edu.mx</li>
          <li className={styles.email}>302310229@ute.edu.mx</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
