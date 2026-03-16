"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Options.module.css";

function GroupSystem() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Opciones del sistema</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.sesion}>
          <h4>Datos de sesión</h4>
          <div className={styles.dataContainer}>
            <span className={styles.data}>
              Nombre de usuario: {user.name} |
            </span>
            <span className={styles.data}>
              Correo electrónico: {user.email} |
            </span>
            <span className={styles.data}>Id de usuario: {user.id}</span>
          </div>
        </div>

        <div className={styles.options}>
          <h4>Opciones</h4>
          <div className={styles.optionsContainer}>
            <div className={styles.checkButtons}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  className={styles.checkboxBtns}
                />
                Recibir notificaciones
              </label>
              <label>
                <input
                  type="checkbox"
                  name=""
                  className={styles.checkboxBtns}
                />
                Generar historial
              </label>
              <label>
                <input
                  type="checkbox"
                  name=""
                  className={styles.checkboxBtns}
                />
                Recolectar datos
              </label>
            </div>

            <div className={styles.btns}>
              <button className="btn btn-outline-info">Cambiar idioma</button>
              <Link href="/ChangePage">
                <button className="btn btn-outline-success">
                  Cambiar contraseña
                </button>
              </Link>
              <button className="btn btn-outline-danger">Borrar cuenta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupSystem;
