"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./login.module.css";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log("Respuesta del servidor: ", result);
      if (result.success == true) {
        localStorage.setItem("user", JSON.stringify(result.user));
        router.push("/Dashboard");
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
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.btnBack} ${leaving ? styles.btnBackOut : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
        </div>

          <h2 className={styles.header}>Iniciar sesión</h2>

          <form className={styles.container} onSubmit={handleSubmit}>
            <label className={styles.label}>Correo electrónico</label>

            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Introduce tu correo electrónico"
            />

            <label className={styles.label}>Contraseña</label>

            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Introduce tu contraseña"
            />

            <button className={styles.button} type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
  );
}

export default Login;
