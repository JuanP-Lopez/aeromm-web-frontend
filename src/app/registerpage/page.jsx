"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./register.module.css";

function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { username, email, password, confirmPassword };
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log("Respuesta del servidor: ", result);
      if (result.success == true) {
        router.push("/loginpage");
      }
    } catch (error) {
      console.log("Error al enviar: ", error);
    }
    setEmail("");
    setPassword("");
    setErr({});
  };

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

        <form className={styles.container} onSubmit={handleSubmit}>
          <label className={styles.label}>Nombre de usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Introduce un nombre de usuario"
            className={styles.input}
          />

          <label className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Introduce tu correo electrónico"
            className={styles.input}
          />

          <label className={styles.label}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Introduce una contraseña"
            className={styles.input}
          />

          <label className={styles.label}>Confirmar contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
