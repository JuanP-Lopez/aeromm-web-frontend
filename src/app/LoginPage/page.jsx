import React from "react";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.page}>
      <h2 className={styles.header}>Iniciar sesión</h2>

      <form className={styles.container}>
        <label className={styles.label}>Correo electrónico</label>

        <input
          className={styles.input}
          type="email"
          required
          placeholder="Introduce tu correo electrónico"
        />

        <label className={styles.label}>Contraseña</label>

        <input
          className={styles.input}
          type="password"
          required
          placeholder="Introduce tu contraseña"
        />

        <button className={styles.button} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;