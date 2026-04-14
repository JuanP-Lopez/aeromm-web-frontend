"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./change.module.css";

function ChangeUser() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const handleClick = () => {
    setLeaving(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btnBack} ${leaving ? styles.btnBackOut : ""}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
      </div>
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
