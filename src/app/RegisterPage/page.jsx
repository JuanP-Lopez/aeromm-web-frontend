"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Register.module.css";

function Register() {
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
      <div className={styles.formContainer}>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.btnBack} ${leaving ? styles.btnBackOut : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
        </div>
        <h2 className={styles.header}>Registro</h2>

        <form className={styles.container}>
          <label className={styles.label}>Nombre de usuario</label>
          <input
            type="text"
            required
            placeholder="Introduce un nombre de usuario"
            className={styles.input}
          />

          <label className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            required
            placeholder="Introduce tu correo electrónico"
            className={styles.input}
          />

          <label className={styles.label}>Contraseña</label>
          <input
            type="password"
            required
            placeholder="Introduce una contraseña"
            className={styles.input}
          />

          <label className={styles.label}>Confirmar contraseña</label>
          <input
            type="password"
            required
            placeholder="Confirma tu contraseña"
            className={styles.input}
          />

          <div className={styles.fileContainer}>
            <label htmlFor="file" className={styles.inputImage}>
              Subir foto de perfil
            </label>

            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              className={styles.fileInput}
            />
          </div>

          <div className={styles.previewContainer}>
            <img id="preview" className={styles.preview} alt="preview" />
          </div>

          <button type="submit" className={styles.button}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
