import React from "react";
import styles from "./change.module.css";

function ChangeUser() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Cambiar datos de usuario</h2>

      <form className={styles.container}>
        <label className={styles.label}>Nombre de usuario</label>
        <input
          type="text"
          required
          placeholder="Introduce un nuevo nombre de usuario"
          className={styles.input}
        />

        <label className={styles.label}>Nueva contraseña</label>
        <input
          type="password"
          required
          placeholder="Introduce una nueva contraseña"
          className={styles.input}
        />

        <label className={styles.label}>Confirmar contraseña</label>
        <input
          type="password"
          required
          placeholder="Confirma tu nueva contraseña"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default ChangeUser;